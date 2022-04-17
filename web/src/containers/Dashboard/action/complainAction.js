import { COMPLAINT_ERROR, COMPLAINT_INPROGRASS, COMPLAINT_REQUEST, COMPLAINT_SUCCESS } from "../constants";
  
  const complain = (payload) => ({
    type: COMPLAINT_REQUEST,
    payload,
  });
  
  const doComplainInprograss = () => ({
    type: COMPLAINT_INPROGRASS,
  });
  
  const doComplainSuccess = (payload) => ({
    type: COMPLAINT_SUCCESS,
    payload,
  });
  
  const doComplainError = (payload) => ({
    type: COMPLAINT_ERROR,
    payload,
  });
  
  export { complain, doComplainInprograss, doComplainSuccess, doComplainError };
  