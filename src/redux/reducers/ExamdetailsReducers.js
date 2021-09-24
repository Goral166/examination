const initialState = {
  getSingleData: {
    loading: false,
    singleData: null,
    error: false,
    message: null,
  },
};

const examDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "EXAM_DETAILS_PENDING":
      return {
        ...state,
        getSingleData: {
          loading: true,
          singleData: null,
          error: false,
          message: null,
        },
      };
    case "EXAM_DETAILS_SUCCESS":
      return {
        ...state,
        getSingleData: {
          loading: false,
          singleData: action.singleData,
          error: false,
          message: null,
        },
      };
    case "EXAM_DETAILS_FAILURE":
      return {
        ...state,
        getSingleData: {
          loading: false,
          singleData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default examDetailsReducers;
