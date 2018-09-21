import React from 'react';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux'
import submit from '../Utils/submit';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

let LoginForm = props => {
  const { handleSubmit, formFields } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
    </form>
  );
};

export default LoginForm = reduxForm({
  form: 'loginForm', // unique identifier
  onSubmit: submit,
})(LoginForm);


