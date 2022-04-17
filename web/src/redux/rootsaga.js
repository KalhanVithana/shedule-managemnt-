import { put, takeEvery, takeLatest, call, all, fork } from "redux-saga/effects"
import { DashboardSagas } from "../containers/Dashboard/sagas/dashboardSaga"
import { registerSagas } from "../containers/user/sagas/signupSaga"

export default function* rootSagas (){

    return yield all([
        fork(registerSagas),
        fork(DashboardSagas)
    ])
}