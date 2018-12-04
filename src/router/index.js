import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Home from '../components/home'
import Cart from '../components/cart'
import Category from '../components/category'
import Charge from '../components/chargeTutoria'
import Detail from '../components/detail'
import Search from '../components/search'
import Video from '../components/video'
import Hongren from '../components/hongren'
import List from '../components/hongren/list'
import store from '../store'
import{ Provider} from 'react-redux'
const router = (<Provider store={store}>
<Router>
      <App>
        <Switch>
           <Route path='/home' component={Home}/> 
           <Route path='/cart' component={Cart}/> 
           <Route path='/search/:id' component={Search}/> 
           <Route path='/video/:id' component={Video}/> 
           <Route path='/category/:id' component={Category}/> 
           <Route path='/goods/detail/:id' component={Detail}/> 
           <Route path='/hongren' render={()=><Hongren>
              <Route path= '/hongren/list' component = {List}/>
            </Hongren>
           }/> 
            <Route path= '/hongren/:id' component = {Hongren}/>
           <Redirect from ='/' to='/home'/>
        </Switch>
      </App>
     </Router> 
   </Provider>
   )   
export default router   