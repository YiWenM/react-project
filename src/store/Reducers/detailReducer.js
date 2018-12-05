const detailReducer = (prevState={},action={})=>{

	let {type,payload} = action;
   
	switch(type){
		case "detailList":
			return payload;
		default :
			return prevState
	}
}

export default detailReducer;