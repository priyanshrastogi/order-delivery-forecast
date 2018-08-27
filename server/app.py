from flask import Flask, jsonify, abort, request
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
        return abort(400)
    if bcrypt.checkpw(request.json['password'].encode('utf-8'), user['password'].encode('utf-8')):
        print(str(user['_id']))
        token = jwt.encode({'uid': str(user['_id']), 'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30)},'qwr48fv4df25gbt45vqer5544vre44d4v5e55vqer')
        return jsonify({'_id': str(user['_id']), 'name': user['name'], 'email': user['email'], 'token':token.decode('utf-8')})
    return abort(400)

# Add items to the inventory
@app.route("/item/add", methods=["POST"])
def add_item():
    data = request.json
    item = db['items'].insert_one({'name': data['name'], 'description': data['description'], 'image': data['image'], 'seller': ObjectId(data['seller'])})
    return jsonify({'success': True, 'itemId': str(item.inserted_id)})

#Add sellers to the inventory
@app.route("/sellers/add", methods=["POST"])
def add_seller():
    data = request.json
    seller = db['sellers'].insert_one({'name': data['name'], 'address': data['address'], 'pincode': data['pincode'], 'contact': data['contact']})
    return jsonify({'success': True, 'sellerId': str(seller.inserted_id)})

#Add delivery services
@app.route("/shippingservice/add", methods=["POST"])
def add_service():
    data = request.json
    service = db['shipping_service'].insert_one({'pincode': data['pincode'], 'service_name': data['service_name'], 'pin_class': data['pin_class'], 'courier_class': data['courier_class']})
    return jsonify({'success': True, 'serviceId': str(service.inserted_id)})

# Check if delivery is available at given pincode
@app.route("/services/delivery/availability/<pincode>", methods=["GET"])
def is_delivery_available():
    service = db['shipping_services'].find_one({'pincoode': request.args['pincode']})
    if service == None:
        return jsonify({'status': False})
    return jsonify({'status': True})

# Place an order for the user
@app.route("/order", methods=['POST'])
def order_items():
    """This function executes when user clicks on the order items button. It takes data from url and updates the database."""
    data = request.json
    try:
        token = request.headers['Authorization']
    except KeyError:
        abort(401)
    print(token)
    payload = jwt.decode(token, 'qwr48fv4df25gbt45vqer5544vre44d4v5e55vqer')
    uid = payload['uid']
    print(uid) # uid is user id. Will be used to place the order
    service = db['shipping_services'].find_one({'pincode': data['pincode']})
    # Use Machine Learning Model here
    # expected_delivery_days = model.predict()
    # db['orders'].insert_one({'item': ObjectId(data['item']), 'user': ObjectId(uid), 'seller': ObjectId(data['seller']),'delivery_address': data['addr'], 'shipping_service': service['service'], 'expected_delivery_days'})

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

# Retrieve specific order details
@app.route("/orders/<order_id>")
def view_order(order_id):
    pass

if(__name__ == '__main__'):
    app.run(debug=True)
