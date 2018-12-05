import axios from "axios"


const action = {
	
	getDetailList(){
		return axios(`/pc/goods/getGoodsDetail?goods_id=${this.match.params.id}`).then(res=>{
			return {
				type:"detailList",
				payload: res.data.goodsInfo
			}
		})
	}
}

export default action;