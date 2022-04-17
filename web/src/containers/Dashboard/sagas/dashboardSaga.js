import NotificationHelper from "../../../middleware/notification";
import { ACCOUNT_REGISTER_REQUEST, COMPLAINT_REQUEST } from "../constants";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  doComplainError,
  doComplainInprograss,
  doComplainSuccess,
} from "../action/complainAction";
import apiHandler from "../../user/sagas/request/api";
import {
  doRegisterAccountError,
  doRegisterAccountInprograss,
  doRegisterAccountSuccess,
} from "../action/accountRegisterAction";
export function* doComplain(data) {
  try {
    yield put(doComplainInprograss());
    let resData = yield call(apiHandler.UserComplain, data);

    yield put(doComplainSuccess(resData.data));
    NotificationHelper.getInstance().success("complain successfull");
  } catch (e) {
    console.log(e.response.data);
    yield put(doComplainError(e.response.data.msg));
  }
}

export function* doAccountRegister(data) {
  try {
    yield put(doRegisterAccountInprograss());
    let resData = yield call(apiHandler.registerAccount, data);

    yield put(doRegisterAccountSuccess(resData.data));
    NotificationHelper.getInstance().success(" registerd successfull");
  } catch (e) {
    console.log(e.response.data);
    yield put(doRegisterAccountError(e.response.data.msg));
  }
}

export function* DashboardSagas() {
  yield* [
    takeEvery(COMPLAINT_REQUEST, doComplain),
    takeEvery(ACCOUNT_REGISTER_REQUEST, doAccountRegister),
  ];
}
