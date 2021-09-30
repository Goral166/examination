import {
  EXAM_PAPER_PENDING,
  EXAM_PAPER_SUCCESS,
  EXAM_PAPER_FAILURE,
} from "../constants";

const initialState = {
  exampaperData: { loading: false, error: false, message: null },
};

const exampaperReducers = (state = initialState, action) => {
  switch (action.type) {
    case EXAM_PAPER_PENDING:
      return {
        ...state,
        exampaperData: { loading: true, error: false, message: null },
      };
    case EXAM_PAPER_SUCCESS:
      return {
        ...state,
        exampaperData: {
          loading: false,
          error: false,
          message: action.message,
        },
      };
    case EXAM_PAPER_FAILURE:
      return {
        ...state,
        exampaperData: {
          loading: false,
          error: true,
          message: action.message,
        },
      };
    default:
      return { ...state };
  }
};

export default exampaperReducers;
