const moreListReducer = (prevState=[],action={})=>{

	let {type,payload} = action;

	switch(type){
		case "moreList":
			return payload;
		default :
			return prevState
	}
}

export default moreListReducer;