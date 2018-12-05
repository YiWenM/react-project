import thunkMid from 'redux-thunk'
import promiseMid from 'redux-promise'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import  goodsClass from './tree/goodsClass.js'
import  Bar from './tree/bar.js'
import  indexBar from './tree/indexbar.js'
import  Id from './tree/bar3.js'



const reducer=combineReducers({
    goodsClass,
    Bar,
    indexBar,
    Id

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMid,promiseMid)
  ));

export default store;