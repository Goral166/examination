import { Route } from "react-router-dom";

import {
  CreateExam,
  ViewExam,
  ExamDetails,
  AllStudent,
  ViewStudent,
  StudentExam,
} from "../container";
import { ForgotPassword } from "../presentation";
import { Navigation } from "../shared";

const Teacher = () => {
  return (
    <>
      <Navigation />
      <Route path="/createExam" component={CreateExam} />
      <Route path="/viewexam" component={ViewExam} />
      <Route path="/examdetails" component={ExamDetails} />
      <Route path="/allstudents" component={AllStudent} />
      <Route path="/viewstudent" component={ViewStudent} />
      <Route path="/studentexam" component={StudentExam} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </>
  );
};

export default Teacher;
