const reduer = (prevState={},action={})=>{
     let {type,payload} = action;
     switch(type){
     	case 'footLoop':
     	return payload;
     	default :
     	return prevState;
     }
}
export default reduer