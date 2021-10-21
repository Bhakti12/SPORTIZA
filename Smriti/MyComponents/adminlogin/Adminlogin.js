import React, {useState} from 'react'
import './Adminlogin.css';
import axios from "axios"
import Navbar from '../Navbar';

import { useHistory } from "react-router-dom"


//import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

const AdminLogin = ({ setLoginUser}) => {
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    

    const adminlogin = () => {
        if(email === 'sportiza@gmail.com' && password === '1234')
        {
            alert("Login Successful")
            history.push("/adminpage")
        }
        else
        {
            alert("Invalid Credentials")
        }
    }

    return (
        <>
        <Navbar />
        <div className="login">
            <h1>Admin Login</h1>
            <input type="text" name="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" name="password"  placeholder="Enter your Password" value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
            <div className="button" onClick={adminlogin}>Login</div>
        </div>
        </>
    )
}
export default AdminLogin