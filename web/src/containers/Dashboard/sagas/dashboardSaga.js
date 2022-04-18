import NotificationHelper from "../../../middleware/notification";
import { ACCOUNT_REGISTER_REQUEST, COMPLAINT_REQUEST, NOTIFICATION_REGISTER_REQUEST } from "../constants";
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
import { donotificationError, donotificationInprograss, donotificationSuccess } from "../action/notificationAction";
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


export function* doNotificationRequest(data) {
  try {
  
    yield put(donotificationInprograss());
    let resData = yield call(apiHandler.ReplyNotification, data);

    yield put(donotificationSuccess(resData.data));
    NotificationHelper.getInstance().success(" registerd successfull");
  } catch (e) {
    console.log(e.response.data);
    yield put(donotificationError(e.response.data.msg));
  }
}

export function* DashboardSagas() {
  yield* [
    takeEvery(COMPLAINT_REQUEST, doComplain),
    takeEvery(ACCOUNT_REGISTER_REQUEST, doAccountRegister),
    takeEvery(NOTIFICATION_REGISTER_REQUEST, doNotificationRequest),
  ];
}
