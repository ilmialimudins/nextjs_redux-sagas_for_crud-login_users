import ActionTypes from '../Constant/ActionType';

const initialState = {
  // status: LOGOUT,
  // user: null,
  // error: null,
  // credentials: null
  users: [],
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state };
    case ActionTypes.LOGIN_SUCCESSFUL:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return { ...state, users: action.payload };
  }
}

export default AuthReducer;
