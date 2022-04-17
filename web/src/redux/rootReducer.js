import { combineReducers } from "redux";
import { accountRegisterReducer } from "../containers/Dashboard/reducers/accountRegister";
import { complainReducer } from "../containers/Dashboard/reducers/complainReducer";
import { loginReducer } from "../containers/user/reducers/loginReducer";
import { signUpReducer } from "../containers/user/reducers/signUpReducer";

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer,
    complainReducer,
    accountRegisterReducer
})


export default rootReducer;