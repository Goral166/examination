import {
  LOGIN_FETCH_PENDING,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_FAILURE,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  NEW_PASSWORD_PENDING,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAILURE,
  RESET_PASSWORD_PENDING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants";

const initialState = {
  login: { loading: false, data: null, error: false, message: null },
  registration: { loading: false, error: false, message: null },
  forgotPassword: { loading: false, data: null, error: false, message: null },
  newPassword: { loading: false, data: null, error: false, message: null },
  resetPassword: { loading: false, data: null, error: false, message: null },
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCH_PENDING:
      return {
        ...state,
        login: {
          loading: true,
          data: null,
        },
      };
    case LOGIN_FETCH_SUCCESS:
      return {
        ...state,
        login: {
          loading: false,
          data: action.data,
        },
      };
    case LOGIN_FETCH_FAILURE:
      return {
        ...state,
        login: {
          loading: false,
          data: null,
          error: true,
          message: action.message,
        },
      };

    case REGISTRATION_PENDING:
      return {
        ...state,
        registration: { loading: true, error: false, message: null },
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registration: {
          loading: false,
          error: false,
          message: action.message,
        },
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        registration: { loading: false, error: true, message: action.message },
      };

    case FORGOT_PASSWORD_PENDING:
      return {
        ...state,
        forgotPassword: {
          loading: true,
          data: null,
        },
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          data: action.data,
        },
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          data: null,
          error: true,
          message: action.message,
        },
      };

    case NEW_PASSWORD_PENDING:
      return {
        ...state,
        newPassword: {
          loading: true,
          data: null,
        },
      };
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        newPassword: {
          loading: false,
          data: action.data,
        },
      };
    case NEW_PASSWORD_FAILURE:
      return {
        ...state,
        newPassword: {
          loading: false,
          data: null,
          error: true,
          message: action.message,
        },
      };

    case RESET_PASSWORD_PENDING:
      return {
        ...state,
        resetPassword: {
          loading: true,
          data: null,
        },
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          loading: false,
          data: action.data,
        },
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: {
          loading: false,
          data: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default authReducers;
