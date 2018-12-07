const reduer = (prevState={},action={})=>{
     let {type,payload} = action;
     console.log(payload)
     switch(type){
     	case 'toutiao':
     	return payload;
     	default :
     	return prevState;
     }
}
export default reduer