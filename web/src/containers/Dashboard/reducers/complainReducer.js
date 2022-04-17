import {
  COMPLAINT_ERROR,
  COMPLAINT_INPROGRASS,
  COMPLAINT_REQUEST,
  COMPLAINT_SUCCESS,
} from "../constants";

const initialState = {
  complain_inProgress: false,
  complain_data: null,
  complain_error: null,
};

export const complainReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLAINT_REQUEST:
      return {
        ...state,
        complain_data: null,
      };
    case COMPLAINT_INPROGRASS:
      return {
        ...state,
        complain_inProgress: true,
      };
    case COMPLAINT_SUCCESS:
      return {
        ...state,
        auth: true,
        complain_data: action.payload,
      };

    case COMPLAINT_ERROR:
      return {
        ...state,
        complain_error: action.payload,
      };
    default:
      return state;
  }
};
