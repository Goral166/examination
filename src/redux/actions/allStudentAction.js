import {
  ALL_STUDENT_PENDING,
  ALL_STUDENT_SUCCESS,
  ALL_STUDENT_FAILURE,
} from "../constants";
import axios from "axios";
import { config } from "../../common";

export const allStudentDetails = () => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: ALL_STUDENT_PENDING });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: ALL_STUDENT_SUCCESS, studentData: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: ALL_STUDENT_FAILURE, message: error.message });
      });
  };
};
