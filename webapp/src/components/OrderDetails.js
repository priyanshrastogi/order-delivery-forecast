import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/cart_styles.css';
import './css/cart_responsive.css';

class Orders extends Component {

    render() {
        return (
            <div className="cart_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="cart_title">My Orders</div>
                                <div className="cart_items">
                                    <ul className="cart_list">
                                        <li className="cart_item clearfix">
                                            <div className="cart_item_image"><img src="https://images-na.ssl-images-amazon.com/images/I/41QNd87-PJL.jpg" alt=""/></div>
                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">Name</div>
                                                    <div className="cart_item_text">Dell Inspiron 15 A45DS5</div>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">Ordered On</div>
                                                    <div className="cart_item_text">26 Aug 2018</div>
                                                </div>
                                                <div className="cart_item_total cart_info_col">
                                                    <div className="cart_item_title">Price</div>
                                                    <div className="cart_item_text">25000</div>
                                                </div>
                                                <div className="cart_item_color cart_info_col">
											        <div className="cart_item_title">Shipping Status</div>
											        <div className="cart_item_text">Delivery in 2 days</div>
										        </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart_items">
                                    <ul className="cart_list">
                                        <li className="cart_item clearfix">
                                            <div className="cart_item_image"><img src="https://images-na.ssl-images-amazon.com/images/I/41QNd87-PJL.jpg" alt=""/></div>
                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">Name</div>
                                                    <div className="cart_item_text">DELL Alienware AAW17R4-7002SLV-PUS</div>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">Ordered On</div>
                                                    <div className="cart_item_text">26 Aug 2018</div>
                                                </div>
                                                <div className="cart_item_total cart_info_col">
                                                    <div className="cart_item_title">Price</div>
                                                    <div className="cart_item_text">250000</div>
                                                </div>
                                                <div className="cart_item_color cart_info_col">
											        <div className="cart_item_title">Shipping Status</div>
											        <div className="cart_item_text">Delivery in 2 days</div>
										        </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {order: state.orders[ownProps.match.params]};
}

export default connect(mapStateToProps, null)(Orders);