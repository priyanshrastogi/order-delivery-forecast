from flask import Flask, jsonify, abort, request
from pymongo import MongoClient
from bson import ObjectId
from bson.json_util import dumps
import pprint
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

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

# Register the user, todo: hash the password and save
@app.route("/user/register", methods=["POST"])
def register():
    if not request.json:
        abort(400)
    pprint.pprint(db['users'].insert_one({'email': request.json['email'], 'password': request.json['password'], 'name': request.json['name']}))
    return jsonify({'success': True})

# Hash the password and compare. return jwt 
@app.route("/user/login", methods=["POST"])
def login():
    if not request.json:
        abort(400)
    user = db['users'].find_one({'email': request.json['email'], 'password': request.json['password']})
    if user == None:
        return abort(400)
    return dumps(user)

# Add items to the inventory
@app.route("/item/add", methods=["POST"])
def add_item():
    data = request.json
    item = db['items'].insert_one({'name': data['name'], 'description': data['description'], 'image': data['image'], 'seller': ObjectId(data['seller'])})
    return dumps(item)

@app.route("/sellers/add", methods=["POST"])
def add_seller():
    data = request.json
    seller = db['sellers'].insert_one({'name': data['name'], 'address': data['address'], 'pincode': data['pincode'], 'contact': data['contact']})
    return dumps({'success': True, 'sellerId': seller.inserted_id})

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
    service = db['shipping_services'].find_one({'pincode': data['pincode']})
    # Use Machine Learning Model here
    # expected_delivery_days = model.predict()
    # db['orders'].insert_one({'item': ObjectId(data['item']), 'user': ObjectId(data['user']), 'seller': ObjectId(data['seller']),'delivery_address': data['addr'], 'shipping_service': service['service']})

# Retrieve user's orders
@app.route("/orders", methods=["GET"])
def get_orders():
    pass

# Retrieve specific order details
@app.route("/orders/<order_id>")
def view_order(order_id):
    pass

if(__name__ == '__main__'):
    app.run(debug=True)
