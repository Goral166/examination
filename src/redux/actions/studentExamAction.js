import {
  STUDENT_EXAM_PENDING,
  STUDENT_EXAM_SUCCESS,
  STUDENT_EXAM_FAILURE,
} from "../constants";
import axios from "axios";
import { config } from "../../common";

export const studentExam = () => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: STUDENT_EXAM_PENDING });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers/StudentForExam`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: STUDENT_EXAM_SUCCESS,
          studentExamData: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({ type: STUDENT_EXAM_FAILURE, message: error.message });
      });
  };
};
