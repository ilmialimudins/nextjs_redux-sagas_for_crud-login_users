import { configureStore } from '@reduxjs/toolkit';
import usersReducers from '../Reducer/usersReducer';
import { combineReducers } from 'redux';
import rootSaga from '../Saga';
import createSagaMiddleware from '@redux-saga/core';
import AuthReducer from '../Reducer/authReducer';

const saga = createSagaMiddleware();

const reducer = combineReducers({
  usersReducers: usersReducers,
});

const reducerAuth = combineReducers({
  AuthReducer: AuthReducer,
});

const store = configureStore({
  reducer,
  reducerAuth,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});

saga.run(rootSaga);

export default store;
