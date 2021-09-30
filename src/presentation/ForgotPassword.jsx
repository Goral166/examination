import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { forgotPassword } from "../redux/actions";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(forgotPassword(data));
    reset({ email: "" });
    console.log(data);
  };

  return (
    <div className="container">
      <div className="text-center mt-5 ">
        <h2 className="mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: "This is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
          <br></br>
          <input type="submit" className="mt-3" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
