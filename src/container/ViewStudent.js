import react from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";

const ViewStudent = () => {
  const { loading, singleStudentData } = useSelector((state) => ({
    loading: state.viewStudentReducers.getSingleStudentData.loading,
    singleStudentData:
      state.viewStudentReducers.getSingleStudentData.singleStudentData,
  }));

  return (
    <div className="container">
      <div className="text-center mt-5">View Student</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {singleStudentData !== null &&
            singleStudentData.map((list) => (
              <>
                <div>Id:{list._id} </div>
                <div>Name:{list.name} </div>
                <div>Email:{list.email} </div>
                <Table bordered className="mt-3">
                  <thead>
                    <th>Subject Name</th>
                    <th>Score</th>
                    <th>Rank</th>
                    <th>Result Status</th>
                  </thead>

                  <tbody>
                    {list.Result.map((item, index) => (
                      <tr key={index}>
                        <td>{item.subjectName}</td>
                        <td>{item.score}</td>
                        <td>{item.rank}</td>
                        <td>{item.resultStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default ViewStudent;
