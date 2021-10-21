import React, {useState} from "react"
import "./Register.css"
import axios from "axios"
import Navbar from '../Navbar';
import { useHistory } from "react-router-dom"


const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        phone:"",
        age:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Register = () => {
        const { name, email, password, reEnterPassword, phone, age } = user
        if( name && email && password && phone && age ){
            if(password === reEnterPassword){
                axios.post("http://localhost:9002/Register", user)
                .then( res => {
                    alert(res.data.message)
                    history.push("/Login1")
                })
            }
            else
            {
                alert("Password and confirm password not matching")
            }
        } 
        else {
            alert("Please provide all details")
        }
        
    }

    return (
        <>
        <Navbar />
        <div className="register">
            
            <h1>Registeration Form</h1>
            <input type="text" name="name" placeholder="Your Name" onChange={ handleChange }></input>
            <input type="email" name="email" placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" onChange={ handleChange }></input>
            <input type="tel" name="phone"  placeholder="Phone Number" onChange={ handleChange }></input>
            <input type="number" name="age"  placeholder="Your Age" onChange={ handleChange }></input>
            <div className="button" onClick={Register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/Login1")}>Login</div>
        </div>
        </>
    )
}
export default Register