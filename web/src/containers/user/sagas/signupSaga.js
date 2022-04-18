import { Navigate, useNavigate } from "react-router-dom";
import { call, put, takeEvery } from "redux-saga/effects";
import NotificationHelper from "../../../middleware/notification";
import { doLoginError, doLoginInprograss, doLoginSuccess } from "../action/loginAction";
import { doSignUpError, doSignUpInprograss, doSignUpSuccess } from "../action/signupAction";
import { LOGIN_REQUEST, SIGNUP_INPROGRASS, SIGNUP_REQUEST } from "../constants";
import apiHandler, { getAPIkey } from "./request/api";

export function* doRegister(data) {
  try {
    yield put(doSignUpInprograss());
    let resData = yield call(apiHandler.registerUser, data);
     yield put(doSignUpSuccess(resData.data))
    NotificationHelper.getInstance().success("signUp success");
  } catch (e) {
    console.log(e);
    yield put(doSignUpError(e));
  }
}

export function* dologin(data) {
  try {
    const { payload } = data;
    yield put(doLoginInprograss());
    let resData = yield call(apiHandler.loginUser, data);
    getAPIkey(resData.data.token);
    yield put(doLoginSuccess(resData.data))
    window.location='/B'
    NotificationHelper.getInstance().success("login success");
  } catch (e) {
    console.log(e);
    yield put(doLoginError(e));
  }
}

export function* registerSagas() {
  yield* [
    takeEvery(SIGNUP_REQUEST, doRegister),
    takeEvery(LOGIN_REQUEST, dologin),
  ];
}
