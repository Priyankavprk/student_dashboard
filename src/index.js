import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Home from './views/home';
import About from './views/about';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = compose(applyMiddleware(thunk))(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
   <Router>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
   </Router>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
