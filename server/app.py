from flask import Flask, jsonify, abort, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from bson.json_util import dumps
import pprint
import bcrypt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import jwt
import datetime

# Connect to the database
client = MongoClient("mongodb://admin:password123@ds133152.mlab.com:33152/delivery-forecast")
db = client['delivery-forecast']

# Load the training data and train the Linear Regression Model
df = pd.read_csv('data.csv')
model = LinearRegression()
model.fit(df[['dispatching_time','distance','courier_service','origin_city','target_city','festive_season']],df['delivery_time'])

app = Flask(__name__)

CORS(app, resources={r"*": {"origins": "*"}})

@app.route("/", methods=["GET"])
def home():
    return 'Order Delivery Information Forecast REST API.'

# Register the user
@app.route("/user/register", methods=["POST"])
def register():
    if not request.json:
        abort(400)
    if db['users'].find_one({'email': request.json['email']}) == None:
        hashed = bcrypt.hashpw(request.json['password'].encode('utf-8'), bcrypt.gensalt())
        user = db['users'].insert_one({'email': request.json['email'], 'password': hashed.decode('utf-8'), 'name': request.json['name']})
        return jsonify({'success': True, 'userId': str(user.inserted_id)})
    return jsonify({'success': False, 'status': 'User Already Exists'})

# Hash the password and compare. return jwt 
@app.route("/user/login", methods=["POST"])
def login():
    if not request.json:
        abort(400)
    user = db['users'].find_one({'email': request.json['email']})
    if user == None:
        return abort(401)
    if bcrypt.checkpw(request.json['password'].encode('utf-8'), user['password'].encode('utf-8')):
        print(str(user['_id']))
        token = jwt.encode({'uid': str(user['_id']), 'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30)},'qwr48fv4df25gbt45vqer5544vre44d4v5e55vqer')
        return jsonify({'_id': str(user['_id']), 'name': user['name'], 'email': user['email'], 'token':token.decode('utf-8')})
    return abort(401)

# Get inventory
@app.route("/items", methods=["GET"])
def get_items():
    items = db['items'].find({})
    return dumps(items)

# Add items to the inventory
@app.route("/items/add", methods=["POST"])
def add_item():
    data = request.json
    item = db['items'].insert_one({'name': data['name'], 'description': data['description'], 'image': data['image'], 'price': data['price'], 'seller': ObjectId(data['seller'])})
    return jsonify({'success': True, 'itemId': str(item.inserted_id)})

#Add sellers to the inventory
@app.route("/sellers/add", methods=["POST"])
def add_seller():
    data = request.json
    seller = db['sellers'].insert_one({'name': data['name'], 'address': data['address'], 'pincode': data['pincode'], 'contact': data['contact'], 'pin_class': data['pin_class'], 'avg_dispatch_time': data['avg_dispatch_time']})
    return jsonify({'success': True, 'sellerId': str(seller.inserted_id)})

#Add delivery services
@app.route("/shippingservice/add", methods=["POST"])
def add_service():
    data = request.json
    service = db['shipping_service'].insert_one({'pincode': data['pincode'], 'service_name': data['service_name'], 'pin_class': data['pin_class'], 'courier_class': data['courier_class']})
    return jsonify({'success': True, 'serviceId': str(service.inserted_id)})

# Check if delivery is available at given pincode
@app.route("/services/delivery/availability/<pincode>", methods=["GET"])
def is_delivery_available(pincode):
    service = db['shipping_service'].find_one({'pincode': pincode})
    if service == None:
        return jsonify({'status': False})
    return jsonify({'status': True})

# Place an order for the user
@app.route("/order", methods=['POST'])
def order_items():
    """This function executes when user clicks on the order items button. It takes data from url and updates the database."""
    data = request.json             #address,pincode,item,seller
    try:
        token = request.headers['Authorization']
    except KeyError:
        abort(401)
    # print(token)
    payload = jwt.decode(token, 'qwr48fv4df25gbt45vqer5544vre44d4v5e55vqer')
    uid = payload['uid']
    # print(uid) # uid is user id. Will be used to place the order
    service = db['shipping_service'].find_one({'pincode': data['pincode']})
    des_lat = service['location']['lat']
    des_long = service['location']['long']
    seller = db['sellers'].find_one({"_id" : ObjectId(data['seller'])})
    ori_lat = seller['location']['lat']
    ori_long = seller['location']['long']
    # return jsonify({"destination_lat" : des_lat, "destination_long" : des_long, "origin_lat" : ori_lat, "origin_long" : ori_long})
    url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix"

    querystring = {"origins":str(ori_lat)+","+str(ori_long),"destinations":str(des_lat)+","+str(des_long),"travelMode":"driving","key":"AojSjyxA_jmV8mIuZQOngoKJ5bgyutu94ZbdiGybIzqjnmwEei3894kQwZ25DgHd"}

    headers = {
    'Cache-Control': "no-cache",
    'Postman-Token': "ff26ec80-ecb0-483d-9ac3-1f65c7fc775b"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    ans = json.loads(response.text)
    distance = ans['resourceSets'][0]['resources'][0]['results'][0]['travelDistance']
    # print(distance)
    # return jsonify(ans)
    # Use Machine Learning Model here (2, 1390, 1, 3, 2, 0)
    expected_delivery_days = model.predict([[seller['avg_dispatch_time'], distance, service['courier_class'], seller['pin_class'], service['pin_class'], 0]])
    x = int(np.round(expected_delivery_days))
    # return jsonify({'expected_delivery_days':x})
    db['orders'].insert_one({'item': ObjectId(data['item']), 'user': ObjectId(uid), 'seller_id': ObjectId(data['seller']), 'seller_name': seller['name'],'delivery_address': data['address'], 'shipping_service': service['service_name'], 'expected_delivery_days':x}).inserted_id
    obj = db['orders'].aggregate([
    {
     '$lookup':
        {
         'from': 'items',
         'localField': 'item',
         'foreignField': '_id',
         'as': 'ord'
        }},
    {
     '$match':
        {
         'user': ObjectId(uid)
        }}
    ])
    return dumps(list(obj))

# Retrieve user's orders
@app.route("/orders", methods=["GET"])
def get_orders():
    try:
        token = request.headers['Authorization']
    except KeyError:
        abort(401)
    payload = jwt.decode(token, 'qwr48fv4df25gbt45vqer5544vre44d4v5e55vqer')
    uid = payload['uid']
    #todo: find orders by made by the user and join $item field. Hint: use mongodb aggregation pipeline, and $lookup stage.
    obj = db['orders'].aggregate([
    {
     '$lookup':
        {
         'from': 'items',
         'localField': 'item',
         'foreignField': '_id',
         'as': 'ord'
        }},
    {
     '$match':
        {
         'user': ObjectId(uid)
        }}
    ])
    return dumps(list(obj))
    

# Retrieve specific order details
@app.route("/orders/<order_id>")
def view_order(order_id):
    pass

if(__name__ == '__main__'):
    app.run(debug=True)
