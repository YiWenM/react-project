import axios from 'axios';
const action = {
	getList(data,num){
       console.log(num)
		return axios.get(`/pc/goods/gcGoods?gc_id=${data}&limit=15&offset=0`).then(res=>{
			if (res.data) {
				return{
					type:'categoryList',
					payload:res.data.goods_info
				}
				
			}
		})
	},
	getList2(data,id){
	    return axios.get('/pc/pcIndex/class').then(res=>{
	      return{
	          type:'bar',
	          payload:{list:res.data.goodsClass[data],id:id,index:data}
	        }
	    })
	   } ,
	   getListlanjia(data,num){
	   	return axios.get(`/pc/goods/gcGoods?gc_id=${data}&limit=15&offset=${num}`).then(res=>{
	   		if (res.data) {
	   			return{
	   				type:'getListlanjia',
	   				payload:res.data.goods_info
	   			}
	   			
	   		}
	   	})

	   }
}
export default action;