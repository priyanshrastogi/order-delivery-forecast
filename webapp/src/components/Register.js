import React, { Component } from 'react';
import './css/product_styles.css';
import { connect } from 'react-redux';
import { registerUser } from '../actions';

class Register extends Component {

    state = {
        name: null,
        email: null,
        password: null
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registerUser(this.state.name, this.state.email, this.state.password, () => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="" style={{left: 0, right:0, margin: 'auto'}}>
                    <form onSubmit={this.handleSubmit} class="newsletter_form d-flex flex-column" style={{marginTop: 50, marginBottom: 100}}>
                        <div class="newsletter_title text-center" style={{marginBottom: 50}}>Register</div>
                        <input type="text" class="newsletter_input" required="required" placeholder="Enter your name" onChange={(e) => this.setState({name: e.target.value})}/><br/>
                        <input type="email" class="newsletter_input" required="required" placeholder="Enter your email address" onChange={(e) => this.setState({email: e.target.value})}/><br/>
                        <input type="password" class="newsletter_input" required="required" placeholder="Set a password" onChange={(e) => this.setState({password: e.target.value})}/><br/>
                        <button type="submit" class="button cart_button" >Register</button>    
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { registerUser })(Register);