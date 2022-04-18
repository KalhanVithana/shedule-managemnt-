import { NOTIFICATION_INPROGRASS, NOTIFICATION_REGISTER_ERROR, NOTIFICATION_REGISTER_SUCCESS } from "../constants";
  
  const initialState = {
    notification_inProgress: false,
    notification_data: null,
    notification_error: null,
  };
  
  export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTIFICATION_INPROGRASS:
        return {
          ...state,
          notification_data: null,
        };
      case NOTIFICATION_INPROGRASS:
        return {
          ...state,
          notification_inProgress: true,
        };
      case NOTIFICATION_REGISTER_SUCCESS:
        return {
          ...state,
          auth: true,
          notification_data: action.payload,
        };
  
      case NOTIFICATION_REGISTER_ERROR:
        return {
          ...state,
          notification_error: action.payload,
        };
      default:
        return state;
    }
  };
  