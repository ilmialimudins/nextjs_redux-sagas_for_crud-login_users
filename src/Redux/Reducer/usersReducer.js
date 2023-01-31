import ActionTypes from '../Constant/ActionType';

const initialState = {
  users: [],
};
function usersReducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return { ...state };
    case ActionTypes.ADD_USERS:
      return { ...state };
    case ActionTypes.UPDATE_USERS:
      return { ...state };
    case ActionTypes.DEL_USERS:
      return { ...state };
    case ActionTypes.GET_USERS_SUCCEED:
      return { ...state, users: action.payload };
    case ActionTypes.ADD_USERS_SUCCEED:
      return { ...state, users: [...state.users, action.payload] };
    case ActionTypes.UPDATE_USERS_SUCCEED:
      return applyUpdateUser(state, action);
    case ActionTypes.DEL_USERS_SUCCEED:
      return {
        ...state,
        users: state.users.filter((users) => users.id !== action.payload.id),
      };
    case ActionTypes.GET_USERS_FAILED:
      return { ...state, users: action.payload };
    case ActionTypes.ADD_USERS_FAILED:
      return { ...state, users: [...state.users, action.payload] };
    case ActionTypes.UPDATE_USERS_FAILED:
      return applyUpdateUser(state, action);
    case ActionTypes.DEL_USERS_FAILED:
      return {
        ...state,
        users: state.users.filter((users) => users.id !== action.payload.id),
      };

    default:
      return { ...state, users: action.payload };
  }
}

const applyUpdateUser = async (state, action) => {
  return state.users.map((users) => {
    if (users.userId === action.payload.userId) {
      return {
        ...state,
        ...action.payload,
      };
    } else {
      return state;
    }
  });
};

export default usersReducers;
