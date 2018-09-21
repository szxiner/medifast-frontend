import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const LoginFormButton = ({ dispatch }) => (
  <button
    type="button"
    onClick={() => dispatch(submit('loginForm'))}
  >
    Submit
  </button>
);

export default connect()(LoginFormButton);
