import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { login } from "../redux/actions";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(login(data, history));
  };

  return (
    <div className="container">
      <div className="login-wrapper">
        <h2 className="text-center mb-2">Login</h2>
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
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="input-box"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <div className="text-danger">{message}</div>
            )}
          />
            <Link to="forgotpassword">Forgot Password?</Link>
          <input type="submit" className="input-box" />
        
        </form>
        Don't have account yet?<Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
