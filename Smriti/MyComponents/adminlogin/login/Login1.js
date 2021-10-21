import React, {useState} from 'react'
import './Login.css';
import axios from "axios"
import Navbar from '../Navbar';
import { useHistory } from "react-router-dom"


//import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

const Login = ({ setLoginUser}) => {
    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/Login1", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/homepage")
        })
    }

    return (
        <>
        <Navbar />
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  placeholder="Enter your Password" onChange={ handleChange }></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/Register")}>Register</div>
        </div>
        </>
    )
}
export default Login