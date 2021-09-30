import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useLocation, useHistory } from "react-router-dom";
import { newPassword } from "../redux/actions";
import { useDispatch } from "react-redux";

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const urlToken = location.search;
  console.log("token", urlToken);

  const onSubmit = (data) => {
    dispatch(newPassword(data, urlToken, history));
    reset({ Password: "", ConfirmPassword: "" });
    console.log(data);
  };
  return (
    <div className="container mt-5 text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Password", {
            required: "This is required.",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
        />
        <ErrorMessage
          errors={errors}
          name="Password"
          render={({ message }) => <div className="text-danger">{message}</div>}
        />
        <br></br>
        <br></br>
        <input
          {...register("ConfirmPassword", {
            required: "This is required.",
          })}
          type="password"
          placeholder="Confirm Password"
        />
        <ErrorMessage
          errors={errors}
          name="ConfirmPassword"
          render={({ message }) => <div className="text-danger">{message}</div>}
        />
        <br></br>
        <input type="submit" className="mt-3" />
      </form>
    </div>
  );
};

export default NewPassword;
