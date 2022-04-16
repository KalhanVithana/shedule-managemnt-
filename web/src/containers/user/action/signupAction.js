import {
  SIGNUP_ERROR,
  SIGNUP_INPROGRASS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants";

const signUp = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

const doSignUpInprograss = () => ({
  type: SIGNUP_INPROGRASS,
});

const doSignUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

const doSignUpError = (payload) => ({
  type: SIGNUP_ERROR,
  payload,
});

export { signUp, doSignUpInprograss, doSignUpSuccess, doSignUpError };
