import axios from 'axios';
const action = {
	headLoop(){
		return axios.get('/pc/pcIndex/recHot').then(res=>{
			return{
				type:'headLoop',
				payload:res.data.ad
			}
		})
	},
	footLoop(){
		return axios.get('/pc/rec/single?cls_id=0&offset=0').then(res=>{
			return{
				type:'footLoop',
				payload:res.data.recList
			}
		})
	},
	toutiao(){
		return axios.get('/pc/pcIndex/toutiao').then(res=>{
			console.log(res.data)
			return{
				type:'toutiao',
				payload:res.data.toutiao
			}
		})
	},

}
export default action;