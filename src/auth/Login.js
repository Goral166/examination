import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { login } from "../redux/actions";
import { Link } from "react-router-dom";

// const isValidEmail = (email) =>
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );

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
  //   console.log(errors);

  // const handleEmailValidation = (email) => {
  //   const isValid = isValidEmail(email);
  //   const validityChanged =
  //     (errors.email && isValid) || (!errors.email && !isValid);
  //   if (validityChanged) {
  //     console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
  //   }
  //   return isValid;
  // };

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
          <input type="submit" className="input-box" />
        </form>
        Don't have account?<Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
