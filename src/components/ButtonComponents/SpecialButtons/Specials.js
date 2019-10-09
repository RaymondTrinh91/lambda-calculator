import React from "react";
// import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  // const [specialBtn, setSpecial] = useState(specials); 
  return (
    <div className= "specialContain">
      <SpecialButton function={props.clear} text="C" />
      <SpecialButton function={props.neg} text="+/-" />
      <SpecialButton function={props.percent} text="%" />
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials;