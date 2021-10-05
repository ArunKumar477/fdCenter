import axios from "axios";



 export function LoginSatatus(data){
     return (dispatch) => {
         return dispatch({
             type : 'LoggedInUserId',
             data : data
         })
     }
 }