import { LOGIN_ERROR, LOGIN_INPROGRASS, LOGIN_REQUEST, LOGIN_SUCCESS_USER } from "../constants";
  
  const login = (payload) => ({
    type: LOGIN_REQUEST,
    payload,
  });
  
  const doLoginInprograss = () => ({
    type: LOGIN_INPROGRASS,
  });
  
  const doLoginSuccess = (payload) => ({
    type: LOGIN_SUCCESS_USER,
    payload,
  });
  
  const doLoginError = (payload) => ({
    type: LOGIN_ERROR,
    payload,
  });
  

  
  export { login, doLoginInprograss, doLoginSuccess, doLoginError };
  