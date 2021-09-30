import axios from "axios";
import { config } from "../../common";
import {
  EXAM_DETAILS_PENDING,
  EXAM_DETAILS_SUCCESS,
  EXAM_DETAILS_FAILURE,
} from "../constants";

export const examDetails = (id) => {
  const getToken = localStorage.getItem("jwt");
  return (dispatch) => {
    dispatch({ type: EXAM_DETAILS_PENDING });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers/examDetail?id=${id}`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: EXAM_DETAILS_SUCCESS,
          singleData: res.data.data.questions,
        });
      })
      .catch((error) => {
        dispatch({ type: EXAM_DETAILS_FAILURE, message: error.message });
      });
  };
};
