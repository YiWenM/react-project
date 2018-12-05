 import axios from 'axios';
 const action = {
 	getNav(){
 	  return (dispatch)=>{axios.get('/pc/pcIndex/class').then(res=>{
 	  	  dispatch({
           type:'pcIndex',
           payload:res.data.goodsClass
 	  	})
 	  })
 	 }
   },
   getList(data,id){
    return axios.get('/pc/pcIndex/class').then(res=>{
      console.log(res.data.goodsClass[data])
        return {
          type:'bar',
          payload:{list:res.data.goodsClass[data],id:id,index:data}
        }
    })
   } , 
   getList2(data,id){
        return {
        	type:'bar2',
        	payload:{index:data}
        }
   },
   getList3(data,mainid){
        return {
          type:'bar3',
          payload:{index:data,mainid:mainid}
        }
   }  	
 }
 export default action