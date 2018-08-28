import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div className="super_container">
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/product/:id' component={Product}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
