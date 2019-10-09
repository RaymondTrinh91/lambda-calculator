import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

export const Operators = (props) => {
  const [operatorBtn] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className = "objContain">
      {operatorBtn.map((oper, index) => (
        <OperatorButton key={index} button={oper.char} value={oper.value} addOpe={props.addOpe}/>
      ))}
      
    </div>
  );
};

// export default Operators;  setDisplay([...displayNum, opera])
