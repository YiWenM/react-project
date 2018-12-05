import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Common from './components/common'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
    	<div className="container">
	      		
		      	<Common></Common>
		      		{this.props.children}
		      	<Footer/>
			
	    </div>
    );
  }
}

export default App;
