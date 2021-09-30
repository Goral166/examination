export default function validate(formdata) {
  let errors = {};
  if (!formdata.subjectName) {
    errors.subjectName = "Subjectname is required";
  }
  if (!formdata.question) {
    errors.question = "Question is required";
  }
  if (!formdata.answer) {
    errors.answer = "Answer is required";
  }
  if (!formdata.optionA) {
    errors.optionA = "optionA is required";
  }
  if (!formdata.optionB) {
    errors.optionB = "optionB is required";
  }
  if (!formdata.optionC) {
    errors.optionC = "optionC is required";
  }
  if (!formdata.optionD) {
    errors.optionD = "optionD is required";
  }
  return errors;
}
