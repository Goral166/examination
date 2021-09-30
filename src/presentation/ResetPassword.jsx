import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { resetPassword } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(resetPassword(data, history));
    reset({ Password: "", ConfirmPassword: "" });
    console.log(data);
  };

  return (
    <div className="container text-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">Reset Password</div>
        <input
          {...register("oldPassword", {
            required: "This is required.",
          })}
          type="password"
          placeholder="Old Password"
        />
        <ErrorMessage
          errors={errors}
          name="oldPassword"
          render={({ message }) => <div className="text-danger">{message}</div>}
        />
        <br></br>
        <br></br>
        <input
          {...register("Password", {
            required: "This is required.",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          type="password"
          placeholder="New Password"
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

export default ResetPassword;
