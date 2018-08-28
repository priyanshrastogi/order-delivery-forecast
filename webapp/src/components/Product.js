import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/product_styles.css';
import './css/product_responsive.css';

class Product extends Component {
    render() {
        return (
            <div className="single_product">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 order-lg-2 order-1">
                            <div className="image_selected"><img src="images/single_4.jpg" alt=""/></div>
                        </div>

                        <div className="col-lg-5 order-3">
                            <div className="product_description">
                                <div className="product_category">Laptop</div>
                                <div className="product_name">{this.props.match.params.id}</div>
                                <div className="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                <div className="product_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus turpis.</p></div>
                                <div className="order_info d-flex flex-row">
                                    <form action="">
                                        <div className="clearfix" style={{zIndex: 1000}}>

                                            <div className="product_quantity clearfix">
                                                <span>Quantity: </span>
                                                <input id="quantity_input" type="text" pattern="[0-9]*" value="1"/>
                                                <div className="quantity_buttons">
                                                    <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up"></i></div>
                                                    <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down"></i></div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="product_price">$2000</div>
                                        <div className="button_container">
                                            <button type="button" className="button cart_button" onClick={() => alert('Hey')}>Buy Now</button>
                                            <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Product);