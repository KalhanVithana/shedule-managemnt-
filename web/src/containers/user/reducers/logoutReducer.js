import { LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_INPROGRASS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants";

const initialState = {
  logout_inProgress: false,
  logout_data: null,
   logout_error: null,
   auth:false
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        logout_data: null,
      };
    case LOGOUT_INPROGRASS:
      return {
        ...state,
        logout_inProgress: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        auth:true,
        logout_data: action.payload,
      };

      case LOGIN_ERROR:
        return {
          ...state,
          logout_error: action.payload,
        };
    default:
      return state;
  }
};
