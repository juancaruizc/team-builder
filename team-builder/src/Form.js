import React from 'react';

const Form = (props) => {
  const { values, update, submit, setFormValues } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>
          Name
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name}
            placeholder='First and Last Name'
            maxLength='30'
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            placeholder='Enter an email'
            maxLength='50'
          />
        </label>
        <label>
          role
          <select name='role' value={values.role} onChange={onChange}>
            <option value=''>select role</option>
            <option value='frontEndSoftwareEngineer'>
              Front-End Software Engineer
            </option>
            <option value='backEndSoftwareEngineer'>
              Back-End Software Engineer
            </option>
            <option value='fullStackSoftwareEngineer'>
              Full Stack Software Engineer
            </option>
            <option value='machineLearningEngineer'>
              Machine Learning Engineer
            </option>
            <option value='dataScientist'>Data Scientist</option>
            <option value='uxDesigner'>UX Designer</option>
          </select>
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
