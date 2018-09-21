import React, { Component } from 'react';

export default class TextInput extends Component {
    render () {
        const {label, touched, error, type} = this.props;
        return (
            <div>
            <label>{label}</label>
            <div>
              <input {...input} placeholder={label} type={type} />
              {touched && error && <span>{error}</span>}
            </div>
          </div>
        )
    }
}