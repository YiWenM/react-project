const reduer = (pervState=0,action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'bar3':
		return payload;
		default:
		return pervState;
	}
}
export default reduer;