const initialState = {
  viewExamDetails: {
    loading: false,
    examData: null,
    error: false,
    message: null,
  },
};

const viewExamReducers = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_EXAM_PENDING":
      return {
        ...state,
        viewExamDetails: {
          loading: true,
          examData: null,
          error: false,
          message: null,
        },
      };
    case "VIEW_EXAM_SUCCESS":
      return {
        ...state,
        viewExamDetails: {
          loading: false,
          examData: action.examData,
          error: false,
          message: null,
        },
      };
    case "VIEW_EXAM_FAILURE":
      return {
        ...state,
        viewExamDetails: {
          loading: false,
          examData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default viewExamReducers;
