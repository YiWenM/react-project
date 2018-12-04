 import axios from 'axios';
 const action = {
 	getNav(){
 	  return (dispatch)=>{axios.get('/pc/pcIndex/class').then(res=>{
 	  	 console.log(res.data)
 	  	  dispatch({
           type:'pcIndex',
           payload:res.data.goodsClass
 	  	})
 	  })
 	 }
   }	
 }
 export default action