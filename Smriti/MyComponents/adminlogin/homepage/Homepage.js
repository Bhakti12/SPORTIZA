import React from "react"
import "./Homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Welcome</h1><br/><br/>
            <h2>Tournaments for you</h2>
            <br/><br/><br/><br/><br/><br/>
            &nbsp;&nbsp;&nbsp;<div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage