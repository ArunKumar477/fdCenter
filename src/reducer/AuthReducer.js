const initialState = {
    isUser : false,
    authToken : "",
    
    checkLogin : {
        userId : ""
        //roleId : ""
    }

}
const AuthReducer = (state = initialState,action) => {
    switch (action.type){
        case 'isLoggedIn': {
            console.log('isLoggedIn',!state.isUser);
            return { ...state,isUser:!state.isUser }
        }
        case 'LoggedInUserId' :{
            console.log("actiondate", action.data);
            //console.log("checkLogin",checkLogin);
            state.checkLogin = {
                userId : action.data,
               // roleId : action.data
            }
            return {...state,checkLogin:state.checkLogin}
        }
        default:
    }
    return state;

}

export default AuthReducer