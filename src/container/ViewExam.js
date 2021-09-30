import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { viewExam, examDetails, deleteExam } from "../redux/actions";
import { Link } from "react-router-dom";
import { Layout } from "../shared";

const ViewExam = () => {
  const dispatch = useDispatch();

  const { loading, examData } = useSelector((state) => ({
    loading: state.viewExamReducers.viewExamDetails.loading,
    examData: state.viewExamReducers.viewExamDetails.examData,
  }));

  useEffect(() => {
    dispatch(viewExam());
  }, [dispatch]);

  return (
    <>
      <div className="container text-center mt-5">
        <div>View Exam Details</div>
        <div className="mt-5">
          <Table bordered>
            <thead>
              <tr>
                <th>Id</th>
                <th>Subject Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <tbody>
                {examData !== null &&
                  examData.map((list, index) => (
                    <tr key={index}>
                      <td>{list._id}</td>
                      <td>{list.subjectName}</td>
                      <td>{list.email}</td>
                      <td>
                        <Link to="/examdetails">
                          <Button
                            onClick={() => {
                              dispatch(examDetails(list._id));
                              console.log("list", list._id);
                            }}
                          >
                            View
                          </Button>
                        </Link>
                        <Button
                          className="ml-6"
                          onClick={() => {
                            dispatch(deleteExam(list._id));
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            )}
          </Table>
        </div>
      </div>
    </>
  );
};

export default ViewExam;
