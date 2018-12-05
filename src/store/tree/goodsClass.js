const reduer = (pervState={},action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'pcIndex':
		return payload;
		default:
		return pervState;
	}
}
export default reduer;