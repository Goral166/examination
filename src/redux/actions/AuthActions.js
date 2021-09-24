import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const login = (data, history) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_FETCH_PENDING" });

    axios
      .post(`${config.apiUrl}/users/Login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.data.token);
        dispatch({
          type: "LOGIN_FETCH_SUCCESS",
        });
        if (res.data.statusCode == 200) {
          localStorage.setItem("jwt", res.data.data.token);
          console.log(res.data.data.token);
          toast.success(res.data.message);
          history.push("/createExam");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FETCH_FAILURE", message: error.message });
        toast.error(error);
      });
  };
};

export const registration = (data, history) => {
  return (dispatch) => {
    dispatch({ type: "REGISTRATION_PENDING" });
    axios
      .post(`${config.apiUrl}/users/SignUp`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "REGISTRATION_SUCCESS",
        });

        if (res.data.statusCode == 200) {
          toast.success(res.data.message);
          history.push("/login");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: "REGISTRATION_FAILURE", message: error.message });
      });
  };
};
