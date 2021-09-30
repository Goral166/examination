import {
  VIEW_EXAM_PENDING,
  VIEW_EXAM_SUCCESS,
  VIEW_EXAM_FAILURE,
  DELETE_EXAM_PENDING,
  DELETE_EXAM_SUCCESS,
  DELETE_EXAM_FAILURE,
} from "../constants";
const initialState = {
  viewExamDetails: {
    loading: false,
    examData: null,
    error: false,
    message: null,
  },
  deleteExam: { loading: false, error: false, message: null },
};

const viewExamReducers = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_EXAM_PENDING:
      return {
        ...state,
        viewExamDetails: {
          loading: true,
          examData: null,
          error: false,
          message: null,
        },
      };
    case VIEW_EXAM_SUCCESS:
      return {
        ...state,
        viewExamDetails: {
          loading: false,
          examData: action.examData,
          error: false,
          message: null,
        },
      };
    case VIEW_EXAM_FAILURE:
      return {
        ...state,
        viewExamDetails: {
          loading: false,
          examData: null,
          error: true,
          message: action.message,
        },
      };
    case DELETE_EXAM_PENDING:
      return {
        ...state,
        deleteExam: { loading: true, error: false, message: null },
      };
    case DELETE_EXAM_SUCCESS:
      return {
        ...state,
        deleteExam: { loading: false, error: false, message: null },
      };
    case DELETE_EXAM_FAILURE:
      return {
        ...state,
        deleteExam: { loading: false, error: true, message: action.message },
      };

    default:
      return { ...state };
  }
};

export default viewExamReducers;
