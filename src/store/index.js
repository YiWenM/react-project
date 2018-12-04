import  goodsClass from './tree/goodsClass.js'
import thunkMid from 'redux-thunk'
import promiseMid from 'redux-promise'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
const reducer=combineReducers({
    goodsClass

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMid,promiseMid)
  ));

export default store;