const reduer = (prevState={},action={})=>{
     let {type,payload} = action;
     switch(type){
     	case 'headLoop':
     	return payload;
     	default :
     	return prevState;
     }
}
export default reduer