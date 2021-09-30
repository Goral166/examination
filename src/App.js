import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Signup, NewPassword, ResetPassword } from "./presentation";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

import { Teacher, Student, Common } from "./routing";
import { useSelector } from "react-redux";

const App = () => {
  const role = localStorage.getItem("role");
  const getToken = localStorage.getItem("jwt");

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/newPassword" component={NewPassword} />
            <Route path="/resetPassword" component={ResetPassword} />

            {role == "teacher" ? <Teacher /> : <Student />}
          </Switch>
        </Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
        />
      </Provider>
    </div>
  );
};

export default App;
