import React, { Component } from 'react';
import { Provider } from "react-redux";

import LoginForm from './LoginForm';
import Button from '../Utils/Button'
import store from "../store";

const formFields = [{name: "username", type: "text", label: "Username"}, 
                    {name: "password", type: "password", label: "Password"}];

export default class Login extends Component {

    render () {
        return (
            <div>
                <Provider store={store}>
                    <div>
                    <LoginForm/>
                    <Button/>
                    </div>
                </Provider>
            </div>
        )
    }
}