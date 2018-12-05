import axios from "axios"


const action = {
	
	findList(data){
		///search/searchGoods?KW=%E9%9D%A2%E8%86%9C&offset=0
		return axios(`/search/searchGoods?KW=${data}&offset=0`).then(res=>{
		
			console.log(res.data.goods_infos)
			return {
				type:"find",
				payload:res.data.goods_infos
			}
		})
	}
}

export default action;