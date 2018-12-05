import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Home from '../components/home'
import Cart from '../components/cart'
import Category from '../components/category'
import Charge from '../components/chargeTutoria'
import Common from '../components/common'
import Detail from '../components/detail'
import Find from '../components/find'
import Video from '../components/video'
import Login from '../components/login'
import More from '../components/more'
import store from '../store'
import{ Provider} from 'react-redux'

const router = (<Provider store={store}>
<Router>
      <App>
        <Switch>
           <Route path='/home' component={Home}/> 
           <Route path='/cart' component={Cart}/> 
           <Route path='/login' component={Login}/> 
           <Route path='/find' component={Find}/> 
           <Route path='/view/:id' component={Find}/> 
           <Route path='/category/:id' component={Category}/> 
           <Route path='/goods/detail/:id' component={Detail}/> 
           <Route path='/more' component={More}/> 
           <Redirect from ='/' to='/home'/>
        </Switch>
      </App>
     </Router> 
   </Provider>
   )   
export default router   