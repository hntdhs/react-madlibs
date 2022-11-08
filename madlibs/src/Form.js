// this was a first attempt, not used in the end, not deleting for now

import React from "react";
// import InputField from "./Inputs";

function InputField(placeholder) {
    return <input name={placeholder} placeholder={placeholder} />
}


function ShowForm() {
    const story = "There was a {color} {noun1} who loved a {adjective} {noun2}."
    return (
      <div>
          <h1>MADLIBS</h1>
          <form>
              <InputField placeholder="color" />
              <InputField placeholder="noun1" />
              <InputField placeholder="adjective" />
              <InputField placeholder="noun2" />
          </form>
      </div>  
    );
}

export default InputField;
export default ShowForm;


// getZtory would pass in 
// form component, story component which would take the 4 variables as prop and return a div which would substitute in the variables
// there's a form component and a story comp, depending on whether the form has been filled out correctly and button has been clicked one or the other will be what is showing on screen
// story comp use curly braces and it will stick in the user input
// key props would be more for iterating over a list
// form field are tied to a atate variable that holds the information that the user is typing in - handle change. 