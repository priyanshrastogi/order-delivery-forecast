import React, { Component } from 'react';
import './css/shop_styles.css';
import './css/shop_responsive.css';

class Shop extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg"></div>
                    <div className="home_overlay"></div>
                    <div className="home_content d-flex flex-column align-items-center justify-content-center">
                        <h2 className="home_title">All Products</h2>
                    </div>
                </div>

                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="shop_sidebar">
                                    <div className="sidebar_section">
                                        <div className="sidebar_title">Categories</div>
                                        <ul className="sidebar_categories">
                                            <li><a href="#">Desktops and All-in-ones</a></li>
                                            <li><a href="#">Laptops</a></li>
                                            <li><a href="#">PC & Tablet accessories</a></li>
                                            <li><a href="#">Monitors</a></li>
                                            <li><a href="#">Electronics and Accessories</a></li>
                                            <li><a href="#">Replacement Parts and Upgrades</a></li> 
                                        </ul>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="col-lg-9">

                                <div className="shop_content">
                                    <div className="shop_bar clearfix">
                                        <div className="shop_product_count"><span>6</span> products found</div>
                                        
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div class="product_border"></div>
								            <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""/></div>
								            <div class="product_content text-center">
									            <div class="product_price">$225</div>
									            <div class="product_name"><div><a href="#" tabindex="0">Philips BT6900A</a></div></div>
								            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;