const reduer = (pervState={},action={})=>{
	let {type,payload} = action;
	console.log(action)
	switch(type){
		case 'pcIndex':
		return payload;
		default:
		return pervState;
	}
}
export default reduer;