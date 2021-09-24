import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const viewExam = () => {
  const getToken = localStorage.getItem("jwt");

  return (dispatch) => {
    dispatch({ type: "VIEW_EXAM_PENDING" });

    axios
      .get(`${config.apiUrl}/dashboard/Teachers/viewExam`, {
        headers: {
          "access-token": `${getToken}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: "VIEW_EXAM_SUCCESS", examData: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: "VIEW_EXAM_FAILURE", message: error.message });
      });
  };
};
