import {
  ALL_STUDENT_PENDING,
  ALL_STUDENT_SUCCESS,
  ALL_STUDENT_FAILURE,
} from "../constants";
const initialState = {
  allStudentDetails: {
    loading: false,
    studentData: null,
    error: false,
    message: null,
  },
};

const allStudentReducers = (state = initialState, action) => {
  switch (action.type) {
    case ALL_STUDENT_PENDING:
      return {
        ...state,
        allStudentDetails: {
          loading: true,
          studentData: null,
          error: false,
          message: null,
        },
      };
    case ALL_STUDENT_SUCCESS:
      return {
        ...state,
        allStudentDetails: {
          loading: false,
          studentData: action.studentData,
          error: false,
          message: null,
        },
      };
    case ALL_STUDENT_FAILURE:
      return {
        ...state,
        allStudentDetails: {
          loading: false,
          studentData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default allStudentReducers;
