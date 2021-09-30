import {
  login,
  registration,
  forgotPassword,
  newPassword,
  resetPassword,
} from "./authActions";
import { createExampaper } from "./exampaperActions";
import { viewExam, deleteExam } from "./viewexamActions";
import { examDetails } from "./examdetailsAction";
import { allStudentDetails } from "./allStudentAction";
import { viewStudent } from "./viewStudent";
import { studentExam } from "./studentExamAction";

export {
  login,
  registration,
  createExampaper,
  viewExam,
  examDetails,
  deleteExam,
  allStudentDetails,
  viewStudent,
  studentExam,
  forgotPassword,
  newPassword,
  resetPassword,
};
