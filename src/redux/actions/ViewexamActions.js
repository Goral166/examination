import {
  VIEW_EXAM_PENDING,
  VIEW_EXAM_SUCCESS,
  VIEW_EXAM_FAILURE,
  DELETE_EXAM_PENDING,
  DELETE_EXAM_SUCCESS,
  DELETE_EXAM_FAILURE,
} from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const viewExam = () => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: VIEW_EXAM_PENDING });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers/viewExam`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: VIEW_EXAM_SUCCESS, examData: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: VIEW_EXAM_FAILURE, message: error.message });
      });
  };
};

export const deleteExam = (id) => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: DELETE_EXAM_PENDING });

    axios
      .delete(`${config.apiUrl}/dashboard/Teachers/deleteExam?id=${id}`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: DELETE_EXAM_SUCCESS });
        dispatch(viewExam());
      })
      .catch((error) => {
        dispatch({ type: DELETE_EXAM_FAILURE, message: error.message });
      });
  };
};
