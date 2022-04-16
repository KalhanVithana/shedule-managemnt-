import {
    SIGNUP_ERROR,
  SIGNUP_INPROGRASS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants";

const initialState = {
  signup_inProgress: false,
  signup_data: null,
  signup_error: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signup_data: null,
      };
    case SIGNUP_INPROGRASS:
      return {
        ...state,
        signup_inProgress: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup_data: action.payload,
      };

      case SIGNUP_ERROR:
        return {
          ...state,
          signup_error: action.payload,
        };
    default:
      return state;
  }
};
