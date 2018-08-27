from flask import Flask, jsonify, abort, request
from pymongo import MongoClient
from bson import ObjectId
from bson.json_util import dumps
import pprint

client = MongoClient("mongodb://admin:password123@ds133152.mlab.com:33152/delivery-forecast")
db = client['delivery-forecast']
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
        return abort(401)
    return dumps(user)

# Add items to the inventory
@app.route("/item/add", methods=["POST"])
def add_item():
    pass

@app.route("/order", methods=['POST'])
def order_items():
    """This function executes when user clicks on the order items button. It takes data from url and updates the database."""
    db['orders'].insert_one({'item': ObjectId(request.json['item']), 'user': ObjectId(request.json['user'])})
    # Use Machine Learning Model here

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
