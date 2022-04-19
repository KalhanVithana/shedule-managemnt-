import { Navigate, useNavigate } from "react-router-dom";
import { call, put, takeEvery } from "redux-saga/effects";
import NotificationHelper from "../../../middleware/notification";
import { doLoginError, doLoginInprograss, doLoginSuccess } from "../action/loginAction";
import { doLogoutError, doLogoutSuccess } from "../action/logoutAction";
import { doSignUpError, doSignUpInprograss, doSignUpSuccess } from "../action/signupAction";
import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_INPROGRASS, SIGNUP_REQUEST } from "../constants";
import apiHandler, { getAPIkey } from "./request/api";

export function* doRegister(data) {
  try {
    yield put(doSignUpInprograss());
    let resData = yield call(apiHandler.registerUser, data);
     yield put(doSignUpSuccess(resData.data))
    NotificationHelper.getInstance().success("signUp success");
  } catch (e) {
    NotificationHelper.getInstance().error(e.response.data.msg);
    yield put(doSignUpError(e));
  }
}

export function* dologin(data) {
  try {
    const { payload } = data;
    yield put(doLoginInprograss());
    let resData = yield call(apiHandler.loginUser, data);
    getAPIkey(resData.data.token);
    
    console.log(resData.data)
    yield put(doLoginSuccess(resData.data))
    NotificationHelper.getInstance().success("login success");
    window.location='/dashmenu'
  } catch (e) {
   
    NotificationHelper.getInstance().error(e.response.data.msg);
    yield put(doLoginError(e));
  }
}

export function* dologout(data) {
  try {
    
    yield put(doLoginInprograss());
    
    
    yield put( doLogoutSuccess('logout'))
    window.location='/'
    NotificationHelper.getInstance().success("logout success");
  } catch (e) {
    console.log(e);
    NotificationHelper.getInstance().error("login error");
    yield put(doLogoutError(e));
  }
}

export function* registerSagas() {
  yield* [
    takeEvery(SIGNUP_REQUEST, doRegister),
    takeEvery(LOGIN_REQUEST, dologin),
    takeEvery(LOGOUT_REQUEST, dologout),
  ];
}
