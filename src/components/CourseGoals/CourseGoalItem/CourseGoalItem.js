import React,{useState} from 'react';

import './CourseGoalItem.css';
const CourseGoalItem = props => {
  

  const deleteHandler = () => {
    
    props.onDelete(props.id);
  };
const[checked,setChecked]=useState([]);
const handleCheck=(event)=>{
  var updatedList=[...checked];
  if(event.target.checked)
  {
    updatedList=[...checked,event.target.value];
  }else{
    updatedList.splice(checked.indexOf(event.target.value),1);
  }
  setChecked(updatedList);
};
var isChecked=(id)=>
    checked.includes(id)?"checked-item":"not-checked-item";
  return (
    <div className="goal-item">
      
    <input value={props.id} type="checkbox" onChange={handleCheck}/>
      <span className={isChecked(props.id)}>{props.children}</span>
      <button onClick={deleteHandler}>x</button>
      
      </div>
  );
};

export default CourseGoalItem;
