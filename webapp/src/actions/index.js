import axios from 'axios';

export const LOGIN_USER = 'login_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_ITEMS = 'fetch_items';
export const ORDER_ITEM = 'order_item';
export const FETCH_ORDERS = 'fetch_orders';

export const loginUser = (email, password, callback) => dispatch => {
    axios.post('http://localhost:5000/user/login', {
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('_id', response.data._id);
        localStorage.setItem('email', response.data.email);
        dispatch({type: LOGIN_USER});
        callback();
    })
}

export const registerUser = (name, email, password, callback) => dispatch => {
    axios.post('http://localhost:5000/user/register', {
        name,
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', name);
        localStorage.setItem('_id', response.data._id);
        localStorage.setItem('email', email);
        dispatch({type: LOGIN_USER});
        callback();
    })
}

export const logoutUser = () => dispatch => {
    localStorage.clear();
    dispatch({type: LOGOUT_USER});
}

export const fetchItems = () => dispatch => {
    axios.get('http://localhost:5000/items')
    .then(response => {
        for(let i=0; i<response.data.length; i++) {
            response.data[i]._id = response.data[i]._id['$oid']
        }
        console.log(response.data);
        dispatch({type: FETCH_ITEMS, payload: response.data});
    })
}

export const orderItem = (address, pincode, item, seller) => dispatch => {
    axios.post('http://localhost:5000/order', {
        address,
        pincode,
        item,
        seller
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(response => {

    })
}