const registerReducer = (prevState=[],action={})=>{

	let {type,payload} = action;
   
	switch(type){
		case "register":
			return payload;
		default :
			return prevState
	}
}

export default registerReducer;