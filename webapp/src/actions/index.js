import axios from 'axios';

export const LOGIN_USER = 'login_user';
export const LOGOUT_USER = 'logout_user';
export const AUTH_ERROR = 'auth_error';
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
    .catch(error => {
        if(error.request)
            dispatch({type: AUTH_ERROR, payload: 'Invalid Email and Password Combination'});
        else if(error.response.status === 401)
            dispatch({type: AUTH_ERROR, payload: 'Invalid Email and Password Combination'});
        else if(error.response.status === 500)
            dispatch({type: AUTH_ERROR, payload: 'Internal Server Error'});
    });
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
        if(response.data.success) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', name);
            localStorage.setItem('_id', response.data._id);
            localStorage.setItem('email', email);
            dispatch({type: LOGIN_USER});
            callback();
        }
        else {
            dispatch({type: AUTH_ERROR, payload: 'User with this email already exists'});
        }
    })
    .catch(error => {
        if(error.request)
            dispatch({type: AUTH_ERROR, payload: 'You are not connected to the Internet'});
        else if(error.response.status === 500)
            dispatch({type: AUTH_ERROR, payload: 'Internal Server Error'});
    });
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
    .catch(error => {

    })
}

export const orderItem = (address, pincode, item, seller, callback) => dispatch => {
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
        for(let i=0; i<response.data.length; i++) {
            response.data[i]._id = response.data[i]._id['$oid']
        }
        dispatch({type: FETCH_ORDERS, payload: response.data});
        callback(response.data[0]._id);
    })
}

export const fetchOrders = () => dispatch => {
    axios.get('http://localhost:5000/orders', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(response => {
        for(let i=0; i<response.data.length; i++) {
            response.data[i]._id = response.data[i]._id['$oid']
        }
        response.data.sort((a,b) => {
            console.log(b.expected_delivery_by.$date);
            return new Date(a.expected_delivery_by.$date) - new Date(b.expected_delivery_by.$date);
          });
          
        console.log(response.data);
        dispatch({type: FETCH_ORDERS, payload: response.data});
    })
    .catch(error => {

    })
}