import React from "react";
import { useForm } from "react-hook-form";
import { useHistory,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { registration } from "../redux/actions";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(registration(data, history));
  };
  //   console.log(errors);

  return (
    <div className="container">
      <div className="login-wrapper">
        <h2 className="text-center mb-2">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: "This is required.",
            })}
            type="text"
            placeholder="Enter Name"
            className="input-box"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
          <input
            {...register("email", {
              required: "This is required.",
            })}
            type="email"
            placeholder="Enter Email"
            className="input-box"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
          <input
            {...register("password", {
              required: "This is required.",
            })}
            type="password"
            placeholder="Enter Password"
            className="input-box"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
          <input
            {...register("role", {
              required: "This is required.",
            })}
            type="text"
            placeholder="Enter role"
            className="input-box"
          />
          <ErrorMessage
            errors={errors}
            name="role"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
          <input type="submit" className="input-box" />
          <div>already have an account? <Link to="/">Login</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
