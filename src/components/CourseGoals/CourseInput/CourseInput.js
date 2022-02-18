import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }else
    {
      props.onAddGoal(enteredValue);
      setEnteredValue("");

    }
    
      
    
    
    document.getElementById("a1").value='';
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Todo List</label>
        <input type="text" onChange={goalInputChangeHandler} id="a1" />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CourseInput;
