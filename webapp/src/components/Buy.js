import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/cart_styles.css';
import './css/cart_responsive.css';
import { fetchItems, orderItem } from '../actions';

class Buy extends Component {
    
    state = {
        name: null,
        address: null,
        pincode: null
    }

    componentDidMount() {
        if(!this.props.item) {
            this.props.fetchItems();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const addr = `${this.state.name}, ${this.state.address} - ${this.state.pincode}`
        this.props.orderItem(addr, this.state.pincode, this.props.item._id, this.props.item.seller['$oid']);
    }

    render() {
        const { item } = this.props;
        return (
            <div class="cart_section">
                <div class="container">
                    {this.props.item ?
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="cart_container">
                                <div class="cart_title">Shopping Cart</div>
                                <div class="cart_items">
                                    <ul class="cart_list">
                                        <li class="cart_item clearfix">
                                            <div class="cart_item_image"><img src={item.image} alt=""/></div>
                                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div class="cart_item_name cart_info_col">
                                                    <div class="cart_item_title">Name</div>
                                                    <div class="cart_item_text">{item.name}</div>
                                                </div>
                                                <div class="cart_item_price cart_info_col">
                                                    <div class="cart_item_title">Price</div>
                                                    <div class="cart_item_text">{item.price}</div>
                                                </div>
                                                <div class="cart_item_total cart_info_col">
                                                    <div class="cart_item_title">Total</div>
                                                    <div class="cart_item_text">{item.price}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            
                                <div class="order_total">
                                    <div class="order_total_content text-md-right">
                                        <div class="order_total_title">Order Total:</div>
                                        <div class="order_total_amount">{item.price}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{left: 0, right:0, margin: 'auto'}}>
                            <form onSubmit={this.handleSubmit} class="newsletter_form d-flex flex-column" style={{marginTop: 50, marginBottom: 100}}>
                                <div class="newsletter_title text-center" style={{marginBottom: 50}}>Enter Delivery Address</div>
                                <input type="text" class="newsletter_input" required="required" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}/><br/>
                                <input type="text" class="newsletter_input" required="required" placeholder="Delivery Address" onChange={(e) => this.setState({address: e.target.value})}/><br/>
                                <input type="text" class="newsletter_input" required="required" placeholder="Pincode" onChange={(e) => this.setState({pincode: e.target.value})}/><br/>
                                <div class="cart_buttons">
                                    <button type="submit" class="button cart_button_checkout">Place Order and Pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div>Fetching the product for you</div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {item: state.items[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchItems, orderItem })(Buy);