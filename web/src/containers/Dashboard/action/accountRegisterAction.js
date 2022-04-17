import { ACCOUNT_REGISTER_ERROR, ACCOUNT_REGISTER_INPROGRASS, ACCOUNT_REGISTER_REQUEST, ACCOUNT_REGISTER_SUCCESS } from "../constants";
  
  const registerAccount = (payload) => ({
    type:ACCOUNT_REGISTER_REQUEST ,
    payload,
  });
  
  const doRegisterAccountInprograss = () => ({
    type: ACCOUNT_REGISTER_INPROGRASS,
  });
  
  const doRegisterAccountSuccess = (payload) => ({
    type: ACCOUNT_REGISTER_SUCCESS,
    payload,
  });
  
  const doRegisterAccountError = (payload) => ({
    type: ACCOUNT_REGISTER_ERROR,
    payload,
  });
  
  export { registerAccount, doRegisterAccountInprograss, doRegisterAccountSuccess, doRegisterAccountError };
  