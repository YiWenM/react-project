
import thunkMid from 'redux-thunk'
import promiseMid from 'redux-promise'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import moreListReducer from "./Reducers/moreListReducer"
import detailReducer from "./Reducers/detailReducer"
import findReducer from "./Reducers/findReducer"
import searchReducer from "./Reducers/searchReducer"

const reducer=combineReducers({
	moreListReducer,
	detailReducer,
	findReducer,
	searchReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMid,promiseMid)
  ));

export default store;