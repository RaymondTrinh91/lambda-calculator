import React, {useState, useEffect} from "react";
import "./App.css";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import {Operators} from "./components/ButtonComponents/OperatorButtons/Operators";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  let [displayNum, setDisplay] = useState([0]);

  useEffect(() => {
    if(displayNum.length > 10){
      setDisplay(displayNum = [0])
  }
}, [displayNum]);
console.log(displayNum);
 
  
  const addNumber = (num) => {
    if (displayNum[0] === 0){
      return setDisplay(displayNum[0] = num);
    }
  setDisplay([...displayNum, num])
  console.log(displayNum);  
  };

  const addOperator = (op) => {
      if(displayNum[displayNum.length - 1] === "+" ||
        displayNum[displayNum.length - 1] === "-" ||
        displayNum[displayNum.length - 1] === "/" ||
        displayNum[displayNum.length - 1] === "*"){
        displayNum[displayNum.length - 1] = op
      setDisplay([...displayNum]);
 } else {
     setDisplay([...displayNum, op])
  } 
}
const toggleNeg = () => {
  if(displayNum[displayNum.length - 1] === "-"){
    displayNum[displayNum.length - 1] = "+";
    setDisplay([...displayNum]);
  }else if (displayNum[displayNum.length - 1] === "+"){
      displayNum[displayNum.length - 1] = "-";
      setDisplay([...displayNum]);
  }else {
    setDisplay([...displayNum, "-"]);
  }
}
const percentSign = () => {
  if (displayNum[0] === 0){
    return displayNum;
  }else {
    setDisplay([...displayNum, "%"]);
  }
}
const clear = () => {
  setDisplay(displayNum = [0]);
}
const equals = () => {
  displayNum = displayNum.join('');
  setDisplay(eval(displayNum));
  console.log(displayNum);
}
  return (
    <div className = "container">
      <Logo />
      <div className = "App">
        <Display displayProps = {displayNum}/>
        <div className = "calcBtn">
        <div classname = "leftBtn">
        <Specials clear = {clear} neg = {toggleNeg} percent={percentSign}/>
        <Numbers addNum = {addNumber}/>
        </div>
        <div className= "rightBtn">
        <Operators addOpe = {addOperator}/>
        
        <button className = "buttons" onClick = {equals}>=</button>
        </div>
        </div>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
