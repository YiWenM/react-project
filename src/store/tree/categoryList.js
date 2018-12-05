const reduer = (pervState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'categoryList':
		return [...payload];
		case 'getListlanjia':
		return [...pervState,...payload]
		default:
		return pervState;
	}
}
export default reduer;