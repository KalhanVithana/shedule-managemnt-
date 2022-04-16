import { put, takeEvery, takeLatest, call, all, fork } from "redux-saga/effects"
import { registerSagas } from "../containers/user/sagas/signupSaga"

export default function* rootSagas (){

    return yield all([
        fork(registerSagas)
    ])
}