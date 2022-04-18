import { NOTIFICATION_INPROGRASS, NOTIFICATION_REGISTER_ERROR, NOTIFICATION_REGISTER_REQUEST, NOTIFICATION_REGISTER_SUCCESS } from "../constants";
  
  const notification = (payload) => ({
    type: NOTIFICATION_REGISTER_REQUEST,
    payload,
  });
  
  const donotificationInprograss = () => ({
    type: NOTIFICATION_INPROGRASS,
  });
  
  const donotificationSuccess = (payload) => ({
    type: NOTIFICATION_REGISTER_SUCCESS,
    payload,
  });
  
  const donotificationError = (payload) => ({
    type: NOTIFICATION_REGISTER_ERROR,
    payload,
  });
  
  export { notification, donotificationInprograss, donotificationSuccess, donotificationError };
  