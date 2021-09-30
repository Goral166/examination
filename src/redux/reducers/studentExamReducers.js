import {
  STUDENT_EXAM_PENDING,
  STUDENT_EXAM_SUCCESS,
  STUDENT_EXAM_FAILURE,
} from "../constants";
const initialState = {
  studentExamDetails: {
    loading: false,
    studentExamData: null,
    error: false,
    message: null,
  },
};

const studentExamReducers = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_EXAM_PENDING:
      return {
        ...state,
        studentExamDetails: {
          loading: true,
          studentExamData: null,
          error: false,
          message: null,
        },
      };
    case STUDENT_EXAM_SUCCESS:
      return {
        ...state,
        studentExamDetails: {
          loading: false,
          studentExamData: action.studentExamData,
          error: false,
          message: null,
        },
      };
    case STUDENT_EXAM_FAILURE:
      return {
        ...state,
        studentExamDetails: {
          loading: false,
          studentExamData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default studentExamReducers;
