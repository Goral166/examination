import {
  VIEW_STUDENT_PENDING,
  VIEW_STUDENT_SUCCESS,
  VIEW_STUDENT_FAILURE,
} from "../constants";
import axios from "axios";
import { config } from "../../common";

export const viewStudent = (id) => {
  const getToken = localStorage.getItem("jwt");
  return (dispatch) => {
    dispatch({ type: VIEW_STUDENT_PENDING });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers/viewStudentDetail?id=${id}`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: VIEW_STUDENT_SUCCESS,
          singleStudentData: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({ type: VIEW_STUDENT_FAILURE, message: error.message });
      });
  };
};
