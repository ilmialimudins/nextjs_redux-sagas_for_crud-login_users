import { call, put } from '@redux-saga/core/effects';
import ApiUsers from '../Service/ApiUsers';
import {
  douserRequest,
  doUserUpdate,
  doDeleteUser,
  doUserCreate,
  doUserReqSuccess,
  doAddUserSuccess,
  doUserUpdateSuccess,
  doDeleteUserSuccess,
  doUserReqFailed,
  doAddUserFailed,
  doUserUpdateFailed,
  doDeleteUserFailed,
} from '../Action/reducerAction';

interface Action {
  type: string;
  payload: any;
}

function* handleUser(): any {
  try {
    const result = yield call(ApiUsers.getAll);
    yield put(doUserReqSuccess(result.data));
  } catch (error) {
    yield put(doUserReqFailed());
  }
}

function* handleAddUser(action: Action): any {
  try {
    const result = yield call(ApiUsers.create, action.payload);
    yield put(doAddUserSuccess(result.data));
  } catch (error) {
    yield put(doAddUserFailed());
  }
}

function* handleUpdateUser(action: Action): Generator<any, void, any> {
  try {
    const result = yield call(ApiUsers.update, action.payload);
    yield put(doUserUpdateSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put(doUserUpdateFailed(error));
  }
}
function* handleDelUser(action: Action) {
  try {
    yield call(ApiUsers.remove, action.payload);
    yield put(doDeleteUserSuccess(action.payload));
  } catch (error) {
    yield put(doDeleteUserFailed(error));
  }
}

export { handleUser, handleAddUser, handleUpdateUser, handleDelUser };
