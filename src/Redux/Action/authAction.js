import ActionTypes from "../Constant/ActionType";

export const login = (payload) =>{ 
    return {
        type: ActionTypes.LOGIN,
        payload
    }
};
export const loginSuccessful = (payload) => {
  return{
    type: ActionTypes.LOGIN_SUCCESSFUL,
    payload
  }
};
export const logout = data => ({ type: ActionTypes.LOGOUT });
export const loginFailed = error => ({ type: ActionTypes.LOGIN_FAILED, payload: error });
export const tryAgain = () => ({ type: ActionTypes.TRY_AGAIN });