import react, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { allStudentDetails, viewStudent } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Layout } from "../shared";

const AllStudent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, studentData } = useSelector((state) => ({
    loading: state.allStudentReducers.allStudentDetails.loading,
    studentData: state.allStudentReducers.allStudentDetails.studentData,
  }));

  useEffect(() => {
    dispatch(allStudentDetails());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <b>All Student Data</b>
        </div>
        <Table bordered className="mt-5">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <tbody>
              {studentData !== null &&
                studentData.map((list, index) => (
                  <tr key={index}>
                    <td>{list._id}</td>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.status}</td>
                    <td>
                      <Link to="/viewstudent">
                        <Button onClick={() => dispatch(viewStudent(list._id))}>
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </Table>
      </div>
    </>
  );
};

export default AllStudent;
