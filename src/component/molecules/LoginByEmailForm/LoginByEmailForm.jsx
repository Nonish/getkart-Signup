import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./style.css"

function LoginByEmailForm() {

    return (
        <div className="email-form">
            <h2>Login By Email Address</h2>
            <div className="email-input">
                <Input placeholder='Email' type='email' />
                <Input placeholder='Password' type='password' />
            </div>
            <div className="email-buttonField">
                <a href="https://getkart.in/customer/account/forgotpassword/">
                    Forgot Your Password?
                </a>
                <Button>Sign in</Button>
            </div>
        </div>
    )
}

export default LoginByEmailForm;