import React from 'react'
import './Login.css';

import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

export default function Login1() {
    return (
        <Form className="login-form">
            <h1>Login Page</h1><hr/>
            <FormGroup>
                <Label className="label">Email:</Label>
                <Input type="email" placeholder="Email"></Input><br/>
            </FormGroup>
            <FormGroup>
                <Label className="label">Password:</Label>
                <Input type="password" placeholder="Password"></Input><br/>
            </FormGroup>
            <center>
            <Button className="btn-lg btn-block btn-dark">
                Login
            </Button></center>
            <div className="text-center">
                <a href="Signup.js">Sign Up</a>
            </div>
        </Form>
    )
}
