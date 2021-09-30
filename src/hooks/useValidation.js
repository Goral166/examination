import react, { useState, useEffect } from "react";

const useValidation = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleNext = (e) => {
    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    e.persist();

    setValues((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
    console.log("values", values);
  };

  return {
    handleChange,
    handleNext,
    values,
    errors,
  };
};

export default useValidation;
