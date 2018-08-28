import React, { Component } from 'react';
import './css/product_styles.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="" style={{left: 0, right:0, margin: 'auto'}}>
                    <form action="#" class="newsletter_form d-flex flex-column" style={{marginTop: 50, marginBottom: 100}}>
                        <div class="newsletter_title text-center" style={{marginBottom: 50}}>Login</div>
                        <input type="email" class="newsletter_input" required="required" placeholder="Enter your email address"/><br/>
                        <input type="password" class="newsletter_input" required="required" placeholder="Enter your password"/><br/>
                        <button class="button cart_button" >Login</button>    
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;