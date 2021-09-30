import { Login, Signup } from "../presentation";
import { Route } from "react-router-dom";

const Common = () => {
  return (
    <>
      <Route path="/" component={Login} exact={true} />
      <Route path="/signup" component={Signup}  />
    </>
  );
};

export default Common;
