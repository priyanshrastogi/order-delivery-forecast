import React from 'react';
import './css/main_styles.css';
import './css/responsive.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <div className="banner">
                <div className="banner_background" style={{backgroundImage: "url(images/banner_background.jpg)"}}></div>
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="banner_product_image"><img src="images/Capture.png" alt=""/></div>
                        <div className="col-lg-5 offset-lg-4 fill_height">
                            <div className="banner_content">						
                                <div className="banner_price"><span></span></div><br/><br/><br/><br/><br/><br/><br/><br/>
                                <div className="banner_product_name">The New Alienware</div>
                                <h1 className="banner_text">Built for the Ultimate Champions</h1>
                                <div className="button banner_button"><Link to="product/5b851a9429f0f33ff0de91df">Shop Now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="characteristics">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 char_col">   
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_1.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Fast Delivery</div>
                                    <div className="char_subtitle">Across India</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 char_col">    
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_2.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">Easy Returns</div>
                                    <div className="char_subtitle">1-Month Money Back</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 char_col">
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_3.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">TJ Cash</div>
                                    <div className="char_subtitle">Save More!Earn More!</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 char_col">  
                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_4.png" alt=""/></div>
                                <div className="char_content">
                                    <div className="char_title">More Discounts</div>
                                    <div className="char_subtitle">Across Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popular_categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="popular_categories_content">
                                <div className="popular_categories_title">Popular Categories</div>
                                <div className="popular_categories_slider_nav">
                                    <div className="popular_categories_prev popular_categories_nav"><i className="fas fa-angle-left ml-auto"></i></div>
                                    <div className="popular_categories_next popular_categories_nav"><i className="fas fa-angle-right ml-auto"></i></div>
                                </div>
                                <div className="popular_categories_link"><a href="#">full catalog</a></div>
                            </div>
                        </div>


                        <div className="col-lg-9">
                            <div className="popular_categories_slider_container">
                                <div className="owl-carousel owl-theme popular_categories_slider">

                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_1.png" alt=""/></div>
                                            <div className="popular_category_text">Smartphones & Tablets</div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                            <div className="popular_category_text">Computers & Laptops</div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                            <div className="popular_category_text">Gadgets</div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                            <div className="popular_category_text">Video Games & Consoles</div>
                                        </div>
                                    </div>

                                    <div className="owl-item">
                                        <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                            <div className="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                            <div className="popular_category_text">Accessories</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner_2">
                <div className="banner_2_background" style={{backgroundImage: "url(images/banner_2_background.jpg)"}}></div>
                <div className="banner_2_container">
                    <div className="banner_2_dots"></div>

                    <div className="owl-carousel owl-theme banner_2_slider">

                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">Presenting</div>
                                                <div className="banner_2_title">The New XPS 15</div>
                                                <div className="banner_2_text">Dell's smallest 39.6cm (15.6) performance laptop with a stunning InfinityEdge display. Now featuring 8th Gen Intel® Core™ processors with up to 6 cores and 12 threads.</div>
                                                <div className="product_price">Starting At 1,27,290.00</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/Capture3.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>			
                            </div>
                        </div>

                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">Explore the power within.</div>
                                                <div className="banner_2_title">New Dell G7 15 </div>
                                                <div className="banner_2_text">38.1 cm (15) gaming laptop designed for a powerful in-game experience featuring NVIDIA® GeForce® GTX 1060 graphics and the latest 8th Gen Intel® Quad-and-Hex Core™ CPUs.</div>
                                                <div className="product_price">Starting At 1,06,690.00</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/Capture2.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>			
                            </div>
                        </div>

                        <div className="owl-item">
                            <div className="banner_2_item">
                                <div className="container fill_height">
                                    <div className="row fill_height">
                                        <div className="col-lg-4 col-md-6 fill_height">
                                            <div className="banner_2_content">
                                                <div className="banner_2_category">2-in-1. Multi-talented.</div>
                                                <div className="banner_2_title">New Inspiron 11</div>
                                                <div className="banner_2_text">This versatile 11.6" 2-in-1 offers four usage modes and an abundance of possibilities. Featuring the speed, simplicity and security of Chrome.</div>
                                                <div className="product_price">Starting At 48,690.00</div>
                                                <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div className="button banner_2_button"><a href="#">Explore</a></div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-lg-8 col-md-6 fill_height">
                                            <div className="banner_2_image_container">
                                                <div className="banner_2_image"><img src="images/Capture4.png" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>			
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <script src="js/custom.js"></script>
        </div>
    )
} 