import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './login.css'

export default ()=>{
    const [formInput,setFormInput] = useState({
        /*set initial credentials to "" if you didn't already log in*/
        name : "",
        password : ""
    })

    function inputChanged(e){
        /*change the state of the credentials to the name or password you typed*/
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value
        });
    }

    function register(e){
        /*call controller that adds new user to database*/ 

    }

    return(
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={register}><Link to="/">Register</Link></button>
            </form>
            <footer className="footer">
                <div>Bug Tracker v1.1</div>
            </footer>
        </div>   
    )
}