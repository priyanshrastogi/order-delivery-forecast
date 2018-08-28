import React, { Component } from 'react';
import './css/product_styles.css';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends Component {
    
    state = {
        email: null,
        password: null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state.email, this.state.password, () => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div style={{left: 0, right:0, margin: 'auto'}}>
                    <form onSubmit={this.handleSubmit} class="newsletter_form d-flex flex-column" style={{marginTop: 50, marginBottom: 100}}>
                        <div class="newsletter_title text-center" style={{marginBottom: 50}}>Login</div>
                        <input type="email" class="newsletter_input" required="required" placeholder="Enter your email address" onChange={(e) => this.setState({email: e.target.value})}/><br/>
                        <input type="password" class="newsletter_input" required="required" placeholder="Enter your password" onChange={(e) => this.setState({password: e.target.value})}/><br/>
                        <button type="submit" class="button cart_button" >Login</button>    
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { loginUser })(Login);