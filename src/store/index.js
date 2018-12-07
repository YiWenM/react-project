

import thunkMid from 'redux-thunk'
import promiseMid from 'redux-promise'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import moreListReducer from "./Reducers/moreListReducer"
import detailReducer from "./Reducers/detailReducer"
import findReducer from "./Reducers/findReducer"
import searchReducer from "./Reducers/searchReducer"
import registerReducer from './Reducers/registerReducer'
import  goodsClass from './tree/goodsClass.js'
import  Bar from './tree/bar.js'
import  indexBar from './tree/indexbar.js'
import  Id from './tree/bar3.js';
import CategroyList from './tree/categoryList.js'
import isShow from './tree/isShow.js'
import headLoop from './tree/homeHeadLoop.js'
import footLoop from './tree/homefootloop.js'
import toutiao from './tree/toutiao.js'






const reducer=combineReducers({
	moreListReducer,
	detailReducer,
	findReducer,
	searchReducer,
    registerReducer,
    goodsClass,
    Bar,
    indexBar,
    Id,
    CategroyList,
    isShow,
    headLoop,
    footLoop,
    toutiao
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMid,promiseMid)
  ));

export default store;