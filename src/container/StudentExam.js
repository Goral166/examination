import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { studentExam } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const StudentExam = () => {
  const dispatch = useDispatch();

  const { loading, studentExamData } = useSelector((state) => ({
    loading: state.studentExamReducers.studentExamDetails.loading,
    studentExamData:
      state.studentExamReducers.studentExamDetails.studentExamData,
  }));

  useEffect(() => {
    dispatch(studentExam());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Student For Exam</h2>
      </div>
      <div className="mt-5">
        <Table bordered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <tbody>
              {studentExamData !== null &&
                studentExamData.map((list, index) => (
                  <tr key={index}>
                    <td>{list._id}</td>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.status}</td>
                  </tr>
                ))}
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
};

export default StudentExam;
