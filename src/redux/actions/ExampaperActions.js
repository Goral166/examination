import axios from "axios";
import { config } from "../../common";
import { toast } from "react-toastify";

export const createExampaper = (data, history) => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: "EXAM_PAPER_PENDING" });

    axios
      .post(`${config.apiUrl}/dashboard/Teachers/Exam`, data, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "EXAM_PAPER_SUCCESS",
        });
        toast.success(res.data.message);
      })
      .catch((error) => {
        dispatch({
          type: "EXAM_PAPER_FAILURE",
          message: error.message,
        });
      });
  };
};
