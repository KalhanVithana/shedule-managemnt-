import { LOGIN_INPROGRASS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants";
  
  const logoutRequest = (payload) => ({
    type: LOGOUT_REQUEST,
    payload,
  });
  
  const doLogoutInprograss = () => ({
    type: LOGIN_INPROGRASS,
  });
  
  const doLogoutSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload,
  });
  
  const doLogoutError = (payload) => ({
    type: LOGOUT_ERROR,
    payload,
  });
  

  
  export { logoutRequest, doLogoutInprograss, doLogoutSuccess, doLogoutError };
  