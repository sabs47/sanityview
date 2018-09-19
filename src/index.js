import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Dashome from '../src/Component/Dashboard';
import Images from '../src/Component/Images';
import Containers from '../src/Component/Containers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redurcers/Allpis';
import  {fetchAllPosts} from '../src/Component/actions/Containersaction'
const store = createStore(rootReducer,applyMiddleware(thunk))
store.dispatch(fetchAllPosts());

ReactDOM.render
(    <Provider store={store}>
  <Router>
  <div>
    <Route exact path="/" component={App} />
  
    
  </div>
</Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
