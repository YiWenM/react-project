import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Common from './components/common'
import Footer from './components/footer'
import { BackTop } from 'antd';
class App extends Component {
  render() {
    return (
    	<div className="container">
	      
		    <Common></Common>
			    <div>
			        <BackTop />
			        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
			    </div>,
			    {this.props.children}
		    <Footer/>
	     

	    </div>
    )
  }
}

export default App;
