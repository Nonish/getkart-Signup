import React from "react";
import Select from "../../atoms/Select";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./style.css"

function LoginByMobileForm() {

    return (
        <div className="mobile-form">
            <h2>Login By Mobile Number</h2>
            <Select />
            <Input placeholder='Mobile' type='number' />
            <div className="mobile-buttonField">
                <Button>Send OTP</Button>
            </div>
        </div>
    )
}

export default LoginByMobileForm;