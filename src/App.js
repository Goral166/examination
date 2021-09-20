import "./App.css";
import { Login, Signup } from "./auth";
import { CreateExam } from "./container";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} exact={true} />
            <Route path="/" component={Login} exact={true} />
            <Route path="/createexam" component={CreateExam} exact={true} />
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
