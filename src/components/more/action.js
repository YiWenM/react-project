import axios from "axios"


const action = {
	//https://www.huajuanmall.com/pc/hongren/hongrenList?limit=10&offset=0
	getMoreList(){
		//https://www.huajuanmall.com/pc/hongren/hongrenList?limit=10&offset=0
		return axios("/pc/hongren/hongrenList?limit=10&offset=0").then(res=>{
		
            
			return {
				type:"moreList",
				payload:res.data.data.hongren_list
			}
		})
	}
}

export default action;