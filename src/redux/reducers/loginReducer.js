//step 3
import { SET_LOGIN_USER,SET_USER_ROLE } from "../actionTypes";

const initialState = {
  user_id: '',
  role_id: '',
};


function loginpageReducer(state = initialState, action) {

  const { type, payload} = action;

  //console.log("login Reducer", payload)

  switch (type) {

    case SET_LOGIN_USER:

      return { ...state, user_id: payload }
    
      case SET_USER_ROLE:

      return { ...state, role_id: payload }

    default:

      return state;

  }

};



export default loginpageReducer;