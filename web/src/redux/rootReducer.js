import { combineReducers } from "redux";
import { loginReducer } from "../containers/user/reducers/loginReducer";
import { signUpReducer } from "../containers/user/reducers/signUpReducer";

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer
})


export default rootReducer;