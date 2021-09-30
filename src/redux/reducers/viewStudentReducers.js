import {
  VIEW_STUDENT_PENDING,
  VIEW_STUDENT_SUCCESS,
  VIEW_STUDENT_FAILURE,
} from "../constants";

const initialState = {
  getSingleStudentData: {
    loading: false,
    singleStudentData: null,
    error: false,
    message: null,
  },
};

const viewStudentReducers = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_STUDENT_PENDING:
      return {
        ...state,
        getSingleStudentData: {
          loading: true,
          singleStudentData: null,
          error: false,
          message: null,
        },
      };
    case VIEW_STUDENT_SUCCESS:
      return {
        ...state,
        getSingleStudentData: {
          loading: false,
          singleStudentData: action.singleStudentData,
          error: false,
          message: null,
        },
      };
    case VIEW_STUDENT_FAILURE:
      return {
        ...state,
        getSingleStudentData: {
          loading: false,
          singleStudentData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default viewStudentReducers;
