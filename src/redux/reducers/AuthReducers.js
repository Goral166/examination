const initialState = {
  login: { loading: false, data: null, error: false, message: null },
  registration: { loading: false, error: false, message: null },
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FETCH_PENDING":
      return {
        ...state,
        login: {
          loading: true,
          data: null,
        },
      };
    case "LOGIN_FETCH_SUCCESS":
      return {
        ...state,
        login: {
          loading: false,
          data: action.data,
        },
      };
    case "LOGIN_FETCH_FAILURE":
      return {
        ...state,
        login: {
          loading: false,
          data: null,
          error: true,
          message: action.message,
        },
      };

    case "REGISTRATION_PENDING":
      return {
        ...state,
        registration: { loading: true, error: false, message: null },
      };
    case "REGISTRATION_SUCCESS":
      return {
        ...state,
        registration: {
          loading: false,
          error: false,
          message: action.message,
        },
      };
    case "REGISTRATION_FAILURE":
      return {
        ...state,
        registration: { loading: false, error: true, message: action.message },
      };
    default:
      return { ...state };
  }
};

export default authReducers;
