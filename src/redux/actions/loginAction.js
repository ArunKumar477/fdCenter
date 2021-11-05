//=>step 2

import { SET_LOGIN_USER,SET_USER_ROLE } from "../actionTypes";


export const set_login = (id) =>{
    //console.log('login- action',id)

    return {
        type:SET_LOGIN_USER,
        payload:id
    }
}

export const set_user_role = (role_id) =>{
    //console.log('role_id- action',role_id)
    return {
        type:SET_USER_ROLE,
        payload:role_id
    }
}
