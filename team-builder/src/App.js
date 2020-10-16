import React, { useState } from "react";
import logo from './logo.svg';
import "./App.css";
import Form from "./Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
  //   frontEndSoftwareEngineer: false,
  //   backEndSoftwareEngineer: false,
  //   fullStackSoftwareEngineer: false,
  //   machineLearningEngineer: false,
  //   dataScientist: false,
  //   uxDesigner:,
  
};
function App() {
  // const [members, setMembers] = useState();
  const [formValues, setFormValues] = useState(initialFormValues);

  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({
  //     ...formValues,
  //     [inputName]: inputValue,
  //   });
  // };

  const submitForm = () => {
    let newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.username || !newMember.email || !newMember.role) return;
    console.log(formValues)
  };

  return (
    <div className="App">
      <h1>Working</h1>
      <Form values={formValues} submit={submitForm} setFormValues = {setFormValues} />
    </div>
  );
}

export default App;

