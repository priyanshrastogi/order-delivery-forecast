from flask import Flask
from flask import render_template
from flask import request
import pymongo
from pymongo import MongoClient

client = MongoClient()
db = client.myHackDB            #change DB name appropriately
order_collection = db.get_collection("order_db")        #use appropriate collection name
app = Flask(__name__)

@app.route("/")
def home():
    return 'Hello, Flask!'

@app.route("/order", methods=['GET', 'POST'])       #decide which method one to use
def order_items():
    """This function executes when user clicks on the order items button. It takes data from url and updates the database."""
    if request.method == "GET":
        name = request.args.get("name")
        order_id = request.args.get("id")
        add = request.args.get("address")
        post = {
            "Order_id" : order_id, "Product_Name" : name, "Delivery_Address" : add
        }
    #more fields can be added when structure is finalised
    data = request.get_json()
    if request.method == "POST":     #assuming json data is received in POST
        name = data["name"]
        order_id = data["id"]
        add = data["address"]
        post = {
            "Order_id" : order_id, "Product_Name" : name, "Delivery_Address" : add
        }
    post_id = order_collection.insert_one(post).inserted_id
    return """Item      successfully ordered!       #returning simple text for now
            Name:{}
            Order_id: {} 
            Address: {} 
            System_generated_orderid: {}""".format(name, order_id, add, post_id)        
@app.route("/view-order/<order_id>")
def view_order(order_id):
    return """Data returned:{}      #dB queried and text returned
    Order_id recieved: {}""".format(order_collection.find_one({"Order_id": order_id}), order_id)
if(__name__ == '__main__'):
    app.run(debug=True)