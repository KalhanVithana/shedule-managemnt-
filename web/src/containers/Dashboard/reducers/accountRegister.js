import { ACCOUNT_REGISTER_ERROR, ACCOUNT_REGISTER_INPROGRASS, ACCOUNT_REGISTER_REQUEST, ACCOUNT_REGISTER_SUCCESS } from "../constants";
  
  const initialState = {
    account_Register_inProgress: false,
    account_Register_data: null,
    account_Register_error: null,
  };
  
  export const accountRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACCOUNT_REGISTER_REQUEST:
        return {
          ...state,
          account_Register_data: null,
        };
      case ACCOUNT_REGISTER_INPROGRASS:
        return {
          ...state,
          account_Register_inProgress: true,
        };
      case ACCOUNT_REGISTER_SUCCESS:
        return {
          ...state,
          auth: true,
          account_Register_data: action.payload,
        };
  
      case ACCOUNT_REGISTER_ERROR:
        return {
          ...state,
          account_Register_error: action.payload,
        };
      default:
        return state;
    }
  };
  