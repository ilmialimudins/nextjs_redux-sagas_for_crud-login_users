import { takeEvery, all, takeLatest } from '@redux-saga/core/effects';
import ActionTypes from '../Constant/ActionType';
import {
  handleAddUser,
  handleUser,
  handleDelUser,
  handleUpdateUser,
} from './userSaga';
import { sagaLogin } from './authSaga';
function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_USERS, handleUser),
    takeEvery(ActionTypes.ADD_USERS, handleAddUser),
    takeEvery(ActionTypes.UPDATE_USERS, handleUpdateUser),
    takeEvery(ActionTypes.DEL_USERS, handleDelUser),
    takeLatest(ActionTypes.LOGIN, sagaLogin),
  ]);
}

export default watchAll;
