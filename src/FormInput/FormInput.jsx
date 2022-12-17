import React from "react";
import "./FormInput.css";
import { useState } from "react";

const FormInput = (props) => {
  //_______________ПЕРВЫЙ СПОСОБ______________________________
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [thirdInput, setThirdInput] = useState("");
    const fillNameInput = (e) => {
      setFirstInput(e.target.value)
    };
    const fillLastNameInput = (e) => {
       setSecondInput(e.target.value);
    };
    const fillEmailInput = (e) => {
      setThirdInput(e.target.value);
    };
    const submitInputForm =(e)=>{
          e.preventDefault()
          const inputData = {
              firstInput: firstInput,
              secondInput: secondInput,
              thirdInput: thirdInput
          }
  console.log(inputData);

  setFirstInput("");
  setSecondInput("");
  setThirdInput("");
  }
  


  
  return (
    <form onSubmit={submitInputForm}>
      <div>
        <div>
          <label>Your first name</label>
          <input
            type="text"
            value={firstInput}
            onChange={fillNameInput}
          />
        </div>
        <div>
          <label>Your last name</label>
          <input
            type="text"
            value={secondInput}
            onChange={fillLastNameInput}
          />
        </div>
        <div>
          <label>Your email</label>
          <input
            type="email"
            value={thirdInput}
            onChange={fillEmailInput}
          />
        </div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default FormInput;
