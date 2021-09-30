import react, { useEffect } from "react";
import { Table } from "reactstrap";

import { useSelector } from "react-redux";

const ExamDetails = () => {
  const { loading, singleData } = useSelector((state) => ({
    loading: state.examDetailsReducers.getSingleData.loading,
    singleData: state.examDetailsReducers.getSingleData.singleData,
  }));

  return (
    <div className="container text-center mt-5">
      <div>Exam Details</div>
      <div className="mt-5">
        <Table bordered>
          <thead>
            <tr>
              <th>Question</th>
              <th>OptionA</th>
              <th>OptionB</th>
              <th>OptionC</th>
              <th>OptionD</th>
              <th>Answer</th>
            </tr>
          </thead>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <tbody>
              {singleData !== null &&
                singleData.map((list, index) => (
                  <tr key={index}>
                    <td>{list.question}</td>
                    <td>{list.options[0]}</td>
                    <td>{list.options[1]}</td>
                    <td>{list.options[2]}</td>
                    <td>{list.options[3]}</td>
                    <td>{list.answer}</td>
                  </tr>
                ))}
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
};

export default ExamDetails;
