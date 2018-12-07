const reduer = (pervState={},action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'cart':
		return payload
		default:
		return pervState;
	}
}
export default reduer;