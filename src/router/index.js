import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Home from '../components/home'
import Cart from '../components/cart'
import Category from '../components/category'
import Charge from '../components/chargeTutoria'
import Common from '../components/common'
import Detail from '../components/detail'
import Search from '../components/search'
import Video from '../components/video'
import store from '../store'
import{ Provider} from 'react-redux'
const router = (<Provider store={store}>
<Router>
      <App>
        <Switch>
           <Route path='/home' component={Home}/> 
           <Route path='/cart' component={Cart}/> 
           <Route path='/category/:id' component={Category}/> 
           <Route path='/goods/detail/:id' component={Detail}/> 
           <Redirect from ='/' to='/home'/>
        </Switch>
      </App>
     </Router> 
   </Provider>
   )   
export default router   