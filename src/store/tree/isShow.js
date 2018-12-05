	const reduer = (pervState=false,action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'isShow':
		return payload;
		default:
		return pervState;
	}
}
export default reduer;