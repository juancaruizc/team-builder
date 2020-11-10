import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const submitForm = () => {
    let newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.username || !newMember.email || !newMember.role) return;
    console.log(formValues);
  };

  return (
    <div className='App'>
      <h1>Working</h1>
      <Form
        values={formValues}
        submit={submitForm}
        setFormValues={setFormValues}
      />
    </div>
  );
}

export default App;
