const reduer = (pervState=0,action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'bar2':
		return payload;
		default:
		return pervState;
	}
}
export default reduer;