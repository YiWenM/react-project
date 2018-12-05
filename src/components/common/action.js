import axios from "axios"


const action = {
	
	getValue(data){
		return {
			type : "val",
			payload : data
		}
	}
}

export default action;