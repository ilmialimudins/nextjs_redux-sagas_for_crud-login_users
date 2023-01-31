import ActionTypes from '../Constant/ActionType';

export const douserRequest = () => {
  return {
    type: ActionTypes.GET_USERS,
  };
};

export const doUserCreate = (payload) => {
  return {
    type: ActionTypes.ADD_USERS,
    payload,
  };
};

export const doAddUserSuccess = (payload) => {
  return {
    type: ActionTypes.ADD_USERS_SUCCEED,
    payload,
  };
};

export const doAddUserFailed = (payload) => {
  return {
    type: ActionTypes.ADD_USERS_FAILED,
    payload,
  };
};

export const doUserReqSuccess = (payload) => {
  return {
    type: ActionTypes.GET_USERS_SUCCEED,
    payload,
  };
};

export const doUserReqFailed = (payload) => {
  return {
    type: ActionTypes.GET_USERS_FAILED,
    payload,
  };
};

export const doUserUpdate = (payload) => {
  return {
    type: ActionTypes.UPDATE_USERS,
    payload,
  };
};

export const doUserUpdateSuccess = (payload) => {
  return {
    type: ActionTypes.UPDATE_USERS_SUCCEED,
    payload,
  };
};

export const doUserUpdateFailed = (payload) => {
  return {
    type: ActionTypes.UPDATE_USERS_FAILED,
    payload,
  };
};

export const doDeleteUser = (payload) => {
  return {
    type: ActionTypes.DEL_USERS,
    payload,
  };
};

export const doDeleteUserSuccess = (payload) => {
  return {
    type: ActionTypes.DEL_USERS_SUCCEED,
    payload,
  };
};

export const doDeleteUserFailed = (payload) => {
  return {
    type: ActionTypes.DEL_USERS_FAILED,
    payload,
  };
};
