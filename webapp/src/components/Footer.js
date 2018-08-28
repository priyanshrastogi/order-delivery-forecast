import React from 'react';

export default () => {
    return (
        <div>

            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo"><a href="#">TechJuice</a></div>
                                </div>
                                <div className="footer_title">Got Question? Call Us 24/7</div>
                                <div className="footer_phone">+91 9412055046</div>
                                <div className="footer_contact_text">
                                    <p>Paschim Vihar</p>
                                    <p>New Delhi</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">2 in 2-in-1s</a></li>
                                    <li><a href="#">Desktops</a></li>
                                    <li><a href="#">PC & Tablet accessories</a></li>
                                    <li><a href="#">Replacement parts and Upgrades</a></li>
                                </ul>
                                
                            </div>
                        </div>

                        

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Customer Care</div>
                                <ul className="footer_list">
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Product</a></li>
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="#">Returns / Exchange</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Product Support</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>


            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col"> 
                            <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <div className="copyright_content">Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </div>
                                <div className="logos ml-sm-auto">
                                    <ul className="logos_list">
                                        <li><a href="#"><img src="images/logos_1.png" alt=""/></a></li>
                                        <li><a href="#"><img src="images/logos_2.png" alt=""/></a></li>
                                        <li><a href="#"><img src="images/logos_3.png" alt=""/></a></li>
                                        <li><a href="#"><img src="images/logos_4.png" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}