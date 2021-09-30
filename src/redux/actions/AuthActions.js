import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "../../common";
import {
  LOGIN_FETCH_PENDING,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_FAILURE,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  NEW_PASSWORD_PENDING,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAILURE,
  RESET_PASSWORD_PENDING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants";

export const login = (data, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_FETCH_PENDING });

    axios
      .post(`${config.apiUrl}/users/Login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.data.token);

        dispatch({
          type: LOGIN_FETCH_SUCCESS,
        });

        if (res.data.statusCode == 200) {
          localStorage.setItem("jwt", res.data.data.token);
          localStorage.setItem("role", res.data.data.role);
          console.log(res.data.data.token);
          toast.success(res.data.message);
          history.push("/createExam");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FETCH_FAILURE, message: error.message });
        toast.error(error);
      });
  };
};

export const registration = (data, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTRATION_PENDING });
    axios
      .post(`${config.apiUrl}/users/SignUp`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: REGISTRATION_SUCCESS,
        });

        if (res.data.statusCode == 200) {
          toast.success(res.data.message);
          history.push("/login");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: REGISTRATION_FAILURE, message: error.message });
      });
  };
};

export const forgotPassword = (data) => {
  return (dispatch) => {
    dispatch({ type: FORGOT_PASSWORD_PENDING });
    axios
      .post(`${config.apiUrl}/users/ForgotPassword`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
        });

        if (res.data.statusCode == 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: FORGOT_PASSWORD_FAILURE, message: error.message });
      });
  };
};

export const newPassword = (data, urlToken, history) => {
  return (dispatch) => {
    dispatch({ type: NEW_PASSWORD_PENDING });
    axios
      .post(`${config.apiUrl}/users/ForgotPassword/Verify${urlToken}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: NEW_PASSWORD_SUCCESS,
        });

        if (res.data.statusCode == 200) {
          toast.success(res.data.message);
          history.push("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: NEW_PASSWORD_FAILURE, message: error.message });
      });
  };
};

export const resetPassword = (data, history) => {
  const getToken = localStorage.getItem("jwt");
  return (dispatch) => {
    dispatch({ type: RESET_PASSWORD_PENDING });
    axios
      .post(`${config.apiUrl}/users/ResetPassword`, data, {
        headers: {
          "Content-Type": "application/json",
          "access-token": `${getToken}`,
        },
      })
      .then((res) => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
        });

        if (res.data.statusCode == 200) {
          toast.success(res.data.message);
          history.push("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        dispatch({ type: RESET_PASSWORD_FAILURE, message: error.message });
      });
  };
};
