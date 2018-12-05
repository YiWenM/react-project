const searchReducer = (prevState=[],action={})=>{

	let {type,payload} = action;
   
	switch(type){
		case "find":
			return payload;
		default :
			return prevState
	}
}

export default searchReducer;