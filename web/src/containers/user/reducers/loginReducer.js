import { LOGIN_ERROR, LOGIN_INPROGRASS, LOGIN_REQUEST, LOGIN_SUCCESS_USER } from "../constants";

const initialState = {
  login_inProgress: false,
  login_data: null,
   login_error: null,
   auth:false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        login_data: null,
      };
    case LOGIN_INPROGRASS:
      return {
        ...state,
        login_inProgress: true,
      };
    case LOGIN_SUCCESS_USER:
      return {
        ...state,
        auth:true,
        login_data: action.payload,
      };

      case LOGIN_ERROR:
        return {
          ...state,
          login_error: action.payload,
        };
    default:
      return state;
  }
};
