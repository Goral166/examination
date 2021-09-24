// import react, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { FormGroup } from "reactstrap";
// import { Button } from "reactstrap";
// import { createExampaper } from "../redux/actions";
// import { useDispatch } from "react-redux";

// const CreateExam = () => {
//   const [current, setCurrent] = useState(1);
//   const [formData, updateFormData] = useState({
//     subjectName: "",
//     question: "",
//     answer: "",
//     optionA: "",
//     optionB: "",
//     optionC: "",
//     optionD: "",
//   });
//   const [quetionId, setQuetionId] = useState("");
//   const [allQueData, setAllQueData] = useState([]);
//   const indexLength = allQueData.length;

//   const dispatch = useDispatch();

//   const { subjectName, question, optionA, optionB, optionC, optionD, answer } =
//     formData;

//   const handleChange = (e) => {
//     updateFormData((prevValue) => {
//       return { ...prevValue, [e.target.name]: e.target.value };
//     });
//   };

//   const handleAdd = (event) => {
//     event.preventDefault();

//     const queData = {
//       id: indexLength + 1,
//       question,
//       answer,
//       options: [optionA, optionB, optionC, optionD],
//     };
//     console.log("que", queData);

//     if (quetionId) {
//       const addData = {
//         id: quetionId,
//         question,
//         answer,
//         options: [optionA, optionB, optionC, optionD],
//       };

//       const index = quetionId - 1;

//       let allQuestion = allQueData;
//       allQuestion[index] = addData;

//       const addQueData = { subjectName, questions: allQuestion };
//       localStorage.setItem("ExamQuestion", JSON.stringify(addQueData));

//       setAllQueData(allQuestion);

//       setQuetionId("");
//     } else if (indexLength < 15) {
//       setAllQueData([...allQueData, queData]);
//       setCurrent(allQueData.length + 2);
//     }
//     clear();
//   };

//   useEffect(() => {
//     if (allQueData.length) {
//       const addQueData = { subjectName, questions: allQueData };
//       localStorage.setItem("ExamQuestion", JSON.stringify(addQueData));
//     }
//   }, [allQueData]);

//   useEffect(() => {
//     const paper = JSON.parse(localStorage.getItem("ExamQuestion"));
//     if (paper) {
//       setAllQueData(paper.questions);
//       setCurrent(paper.questions.length);
//       const index = paper.questions.length - 1;

//       updateFormData({
//         ...formData,
//         subjectName: paper.subjectName,
//         question: paper.questions[index].question,
//         optionA: paper.questions[index].options[0],
//         optionB: paper.questions[index].options[1],
//         optionC: paper.questions[index].options[2],
//         optionD: paper.questions[index].options[3],
//         answer: paper.questions[index].answer,
//       });
//     }
//   }, []);

//   const handleNext = (e) => {
//     e.preventDefault();
//     const addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));

//     if (current < indexLength) {
//       const nextData = addQueData.questions[current];
//       setQuetionId(nextData.id);

//       setCurrent(current + 1);
//       updateFormData({
//         ...formData,
//         question: nextData.question,
//         optionA: nextData.options[0],
//         optionB: nextData.options[1],
//         optionC: nextData.options[2],
//         optionD: nextData.options[3],
//         answer: nextData.answer,
//       });
//       console.log("fdata", formData);
//     } else {
//       setCurrent(current + 1);
//       updateFormData({
//         ...formData,
//         question: "",
//         optionA: "",
//         optionB: "",
//         optionC: "",
//         optionD: "",
//         answer: "",
//       });
//     }
//   };

//   const handlePrev = (e) => {
//     e.preventDefault();
//     const addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));
//     if (current >= 2) {
//       const previousData = addQueData.questions[current - 2];
//       setQuetionId(previousData.id);

//       setCurrent(current - 1);
//       updateFormData({
//         ...formData,
//         question: previousData.question,
//         optionA: previousData.options[0],
//         optionB: previousData.options[1],
//         optionC: previousData.options[2],
//         optionD: previousData.options[3],
//         answer: previousData.answer,
//       });
//     }
//   };

//   const clear = (e) => {
//     updateFormData({
//       subjectName: subjectName,
//       question: "",
//       answer: "",
//       optionA: "",
//       optionB: "",
//       optionC: "",
//       optionD: "",
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     let addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));
//     const finalQuestionsList = addQueData.questions.map((val) => {
//       return {
//         question: val.question,
//         answer: val.answer,
//         options: val.options,
//       };
//     });

//     const finalQueData = {
//       subjectName,
//       questions: finalQuestionsList,
//       notes: ["10mins exam", "start time 10am"],
//     };

//     dispatch(createExampaper(finalQueData));
//     localStorage.removeItem("ExamQuestion");
//   };

//   return (
//     <div className="container">
//       <div className="mt-5 ">
//         <div className="text-center">
//           <h1>Create Exam Paper</h1>
//         </div>
//         <div className="mt-5 text-center">
//           <h2>Question {current}</h2>
//         </div>
//         <div className="exam-form">
//           <form id="myForm" onSubmit={onSubmit}>
//             <FormGroup>
//               <label>Subject:</label>
//               <select name="subjectName" onChange={handleChange}>
//                 <option value="">Select</option>
//                 <option value="Science">Science</option>
//                 <option value="English">English</option>
//                 <option value="Maths">Maths</option>
//                 <option value="Gujrati">Gujrati</option>
//                 <option value="ReactJs">ReactJs</option>
//                 <option value="python">Python</option>
//               </select>
//             </FormGroup>
//             <FormGroup className="my-3">
//               <label>Question:</label>
//               <textarea
//                 type="textarea"
//                 name="question"
//                 placeholder="Question"
//                 onChange={handleChange}
//                 rows="3"
//                 value={question}
//               />
//             </FormGroup>
//             <FormGroup className="my-3">
//               <div className="row">
//                 <div className="col-sm-2">
//                   <label>Options: </label>
//                 </div>
//                 <div className="col-sm-10 ">
//                   <input
//                     type="radio"
//                     name="answer"
//                     className="mr-1"
//                     // checked={optionA === answer}
//                     onChange={handleChange}
//                     value={optionA}
//                   />

//                   <input
//                     type="text"
//                     name="optionA"
//                     onChange={handleChange}
//                     className="mr-5"
//                     value={optionA}
//                   />
//                 </div>
//                 <div className="col-sm-2"></div>
//                 <div className="col-sm-10 ">
//                   <input
//                     type="radio"
//                     name="answer"
//                     // checked={optionB === answer}
//                     className="mr-1"
//                     value={optionB}
//                     onChange={handleChange}
//                   />
//                   <input
//                     type="text"
//                     name="optionB"
//                     onChange={handleChange}
//                     className="mr-5"
//                     value={optionB}
//                   />
//                 </div>
//                 <br></br>
//                 <div className="col-sm-2"></div>
//                 <div className="col-sm-10 ">
//                   <input
//                     type="radio"
//                     name="answer"
//                     // checked={optionC === answer}
//                     className="mr-1"
//                     onChange={handleChange}
//                     value={optionC}
//                   />
//                   <input
//                     type="text"
//                     name="optionC"
//                     onChange={handleChange}
//                     className="mt-2"
//                     value={optionC}
//                   />
//                 </div>
//                 <div className="col-sm-2"></div>
//                 <div className="col-sm-10 ">
//                   <input
//                     type="radio"
//                     name="answer"
//                     // checked={optionD === answer}
//                     className="mr-1"
//                     onChange={handleChange}
//                     value={optionD}
//                   />
//                   <input
//                     type="text"
//                     name="optionD"
//                     onChange={handleChange}
//                     className=" mt-2"
//                     value={optionD}
//                   />
//                 </div>
//               </div>
//             </FormGroup>
//             <FormGroup className="my-3">
//               <label>Answer: </label>
//               <label>{answer}</label>
//             </FormGroup>

//             <div className="text-center">
//               <Button onClick={handleAdd} disabled={indexLength == 15}>
//                 Add
//               </Button>
//             </div>

//             <Button
//               className="exam-paper-btn"
//               onClick={handlePrev}
//               disabled={current <= 1}
//             >
//               Prev
//             </Button>
//             <Button
//               className="exam-paper-btn"
//               onClick={handleNext}
//               disabled={current >= indexLength}
//             >
//               Next
//             </Button>

//             <Button className="exam-paper-btn" onClick={clear}>
//               Clear
//             </Button>
//             <Button className="exam-paper-btn" disabled={indexLength < 15}>
//               {current <= 1 ? "Submit" : "Update"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

import react, { useState, useEffect } from "react";
import { FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { createExampaper } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useValidation } from "../reusableFunction";
import { validate } from "../reusableFunction";

const CreateExam = () => {
  // const { values, errors, handleChange, handleNext } = useValidation(
  //   next,
  //   validate
  // );

  // function next() {
  //   console.log("No errors, submit callback called!");
  // }
  const [current, setCurrent] = useState(1);
  const [action, setAction] = useState("");
  const [formData, updateFormData] = useState({
    subjectName: "",
    questions: [
      {
        question: "",
        answer: "",
        options: ["", "", "", ""],
      },
    ],
    // question: "",
    // answer: "",
    // optionA: "",
    // optionB: "",
    // optionC: "",
    // optionD: "",
    activeIndex: 0,
  });
  const [quetionId, setQuetionId] = useState("");
  const [allQueData, setAllQueData] = useState([]);
  const indexLength = allQueData.length;

  const dispatch = useDispatch();

  const { subjectName, question, optionA, optionB, optionC, optionD, answer } =
    formData;

  const handleChange = (param) => (e) => {
    console.log("param", param);
    console.log("event", e);
    console.log("hello");
    const clonedState = [...formData];
    const { name, value } = e.target;
    if (param) {
      clonedState[name] = value;
    } else {
      if (name === "options") {
        clonedState.questions[clonedState.activeIndex][name][param] = value;
      } else {
        clonedState.questions[clonedState.activeIndex][name] = value;
      }
    }
    updateFormData(clonedState);
    console.log("formdata", formData);
    // updateFormData((prevValue) => {
    //   return { ...prevValue, [e.target.name]: e.target.value };
    // });

    // const clonedData = [...formData];

    // clonedData[i][e.target.name] = e.target.value;

    // updateFormData(clonedData);
    // // updateFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log("form", formData);

    // const name = e.target.name;
    // const value = e.target.value;

    // console.log(name)
    // updateFormData((prevState) => ({
    //   formData: {
    //     ...prevState.formData,
    //     [name]: e.target.value,

    //     questions: {
    //       ...prevState.questions,
    //     },
    //   },
    // }));
    // console.log("fff", formData);

    // updateFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    //   questions: [{ [e.target.name]: e.target.value }],
    // });

    // console.log("fff", formData);
  };

  useEffect(() => {
    if (allQueData.length) {
      const addQueData = { subjectName, questions: allQueData };
      localStorage.setItem("ExamQuestion", JSON.stringify(addQueData));
    }
  }, [allQueData]);

  useEffect(() => {
    const paper = JSON.parse(localStorage.getItem("ExamQuestion"));
    if (paper) {
      setAllQueData(paper.questions);
      setCurrent(paper.questions.length);
      const index = paper.questions.length - 1;

      updateFormData({
        ...formData,
        subjectName: paper.subjectName,
        question: paper.questions[index].question,
        optionA: paper.questions[index].options[0],
        optionB: paper.questions[index].options[1],
        optionC: paper.questions[index].options[2],
        optionD: paper.questions[index].options[3],
        answer: paper.questions[index].answer,
      });
    }
  }, []);

  const handleNext = (e) => {
    if (e) e.preventDefault();
    // setErrors(validate(formData));
    // setIsSubmitting(true);
    setAction("next");

    const queData = {
      id: indexLength + 1,
      question,
      answer,
      options: [optionA, optionB, optionC, optionD],
    };
    console.log("que", queData);

    if (quetionId) {
      console.log("id", quetionId);
      const addData = {
        id: quetionId,
        question,
        answer,
        options: [optionA, optionB, optionC, optionD],
      };
      const index = quetionId - 1;
      let allQuestion = allQueData;
      allQuestion[index] = addData;
      const addQueData = { subjectName, questions: allQuestion };

      localStorage.setItem("ExamQuestion", JSON.stringify(addQueData));

      setAllQueData(allQuestion);
      setQuetionId("");
    } else if (indexLength < 15) {
      setAllQueData([...allQueData, queData]);
      setCurrent(allQueData.length + 2);
    }

    const addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));
    if (current < indexLength) {
      const nextData = addQueData.questions[current];
      setQuetionId(nextData.id);
      console.log("next", nextData);
      setCurrent(current + 1);
      updateFormData({
        ...formData,
        question: nextData.question,
        optionA: nextData.options[0],
        optionB: nextData.options[1],
        optionC: nextData.options[2],
        optionD: nextData.options[3],
        answer: nextData.answer,
      });
      console.log("fdata", formData);
    } else {
      if (
        question !== "" &&
        optionA !== "" &&
        optionB !== "" &&
        optionC !== "" &&
        optionD !== "" &&
        answer !== ""
      ) {
        setCurrent(current + 1);
        updateFormData({
          ...formData,
          question: "",
          optionA: "",
          optionB: "",
          optionC: "",
          optionD: "",
          answer: "",
        });
      }
    }
    // clear();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    const addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));
    if (current >= 2) {
      const previousData = addQueData.questions[current - 2];
      setQuetionId(previousData.id);
      console.log("id", previousData.id);
      setCurrent(current - 1);
      setAction("previous");
      updateFormData({
        ...formData,
        question: previousData.question,
        optionA: previousData.options[0],
        optionB: previousData.options[1],
        optionC: previousData.options[2],
        optionD: previousData.options[3],
        answer: previousData.answer,
      });
    }
  };

  const handleUpdate = (e) => {
    const queData = {
      id: quetionId,
      question,
      answer,
      options: [optionA, optionB, optionC, optionD],
    };
    console.log("que", queData);

    if (quetionId) {
      console.log("id", quetionId);
      const addData = {
        id: quetionId,
        question,
        answer,
        options: [optionA, optionB, optionC, optionD],
      };
      const index = quetionId - 1;
      let allQuestion = allQueData;
      allQuestion[index] = addData;
      const addQueData = { subjectName, questions: allQuestion };

      localStorage.setItem("ExamQuestion", JSON.stringify(addQueData));
      setAllQueData(allQuestion);
      setQuetionId("");
    } else if (indexLength < 15) {
      setAllQueData([...allQueData, queData]);
      setCurrent(allQueData.length + 2);
    }
  };

  const clear = (e) => {
    updateFormData({
      subjectName: subjectName,
      question: "",
      answer: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let addQueData = JSON.parse(localStorage.getItem("ExamQuestion"));
    const finalQuestionsList = addQueData.questions.map((val) => {
      return {
        question: val.question,
        answer: val.answer,
        options: val.options,
      };
    });

    const finalQueData = {
      subjectName,
      questions: finalQuestionsList,
      notes: ["10mins exam", "start time 10am"],
    };

    dispatch(createExampaper(finalQueData));
    localStorage.removeItem("ExamQuestion");
  };

  return (
    <div className="container">
      <div className="mt-5 ">
        <div className="text-center">
          <h1>Create Exam Paper</h1>
        </div>
        <div className="mt-5 text-center">
          <h2>Question {current}</h2>
        </div>
        <div className="exam-form">
          <form id="myForm" onSubmit={onSubmit}>
            <FormGroup>
              <label>Subject:</label>
              <select
                name="subjectName"
                onChange={handleChange()}
                disabled={formData.subjectName}
              >
                <option value="">Select</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                <option value="Gujrati">Gujrati</option>
                <option value="ReactJs">ReactJs</option>
                <option value="python">Python</option>
              </select>
              {/* {errors.subjectName && (
                <p className="text-danger">{errors.subjectName}</p>
              )} */}
            </FormGroup>
            <FormGroup className="my-3">
              <label>Question:</label>
              <textarea
                type="textarea"
                name="question"
                placeholder="Question"
                onChange={handleChange()}
                rows="3"
                value={question}
              />
              {/* {errors.question && (
                <p className="text-danger">{errors.question}</p>
              )} */}
            </FormGroup>
            <FormGroup className="my-3">
              <div className="row">
                <div className="col-sm-2">
                  <label>Options: </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="radio"
                    name="answer"
                    className="mr-1"
                    checked={optionA === answer}
                    onChange={handleChange()}
                    value={optionA}
                  />

                  <input
                    type="text"
                    name="optionA"
                    onChange={handleChange()}
                    className="mr-5"
                    value={optionA}
                  />
                  {/* {errors.optionA && (
                    <p className="text-danger">{errors.optionA}</p>
                  )} */}
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-10 ">
                  <input
                    type="radio"
                    name="answer"
                    checked={optionB === answer}
                    className="mr-1"
                    value={optionB}
                    onChange={handleChange()}
                  />

                  <input
                    type="text"
                    name="optionB"
                    onChange={handleChange()}
                    className="mr-5"
                    value={optionB}
                  />
                  {/* {errors.optionB && (
                    <p className="text-danger">{errors.optionB}</p>
                  )} */}
                </div>
                <br></br>
                <div className="col-sm-2"></div>
                <div className="col-sm-10 ">
                  <input
                    type="radio"
                    name="answer"
                    checked={optionC === answer}
                    className="mr-1"
                    onChange={handleChange()}
                    value={optionC}
                  />
                  <input
                    type="text"
                    name="optionC"
                    onChange={handleChange()}
                    className="mt-2"
                    value={optionC}
                  />
                  {/* {errors.optionC && (
                    <p className="text-danger">{errors.optionC}</p>
                  )} */}
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-10 ">
                  <input
                    type="radio"
                    name="answer"
                    checked={optionD === answer}
                    className="mr-1"
                    onChange={handleChange()}
                    value={optionD}
                  />
                  <input
                    type="text"
                    name="optionD"
                    onChange={handleChange()}
                    className="mt-2"
                    value={optionD}
                  />
                  {/* {errors.optionD && (
                    <p className="text-danger">{errors.optionD}</p>
                  )} */}
                </div>
              </div>
            </FormGroup>
            <FormGroup className="my-3">
              <label>Answer: </label>
              <label>{answer}</label>
            </FormGroup>

            <Button
              className="exam-paper-btn"
              onClick={handlePrev}
              disabled={current <= 1}
            >
              Prev
            </Button>
            <Button
              className="exam-paper-btn"
              onClick={handleNext}
              disabled={indexLength == 15}
              // disabled={current >= indexLength}
            >
              Next
            </Button>

            <Button className="exam-paper-btn" onClick={clear}>
              Clear
            </Button>

            {action == "previous" ? (
              <Button
                className="exam-paper-btn"
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Do you really want to update?"
                  );
                  if (confirmBox === true) {
                    handleUpdate();
                  }
                }}
              >
                Update
              </Button>
            ) : (
              <Button className="exam-paper-btn" disabled={indexLength < 15}>
                Submit
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateExam;
