import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {signIn} from '../../Controllers/Redux/authSlice'
import './login.css'

export default ()=>{
    const dispatch = useDispatch(); //how redux commmunicates with the controllers
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

    function logIn(e){
        /*Return the user info from controller. If
        the return val is null, alert unsucessfull
        login. else, set state*/
        dispatch(signIn(formInput));


        //
        //update local storage to true then convert LoggedIn and admin to bool
        // localStorage.setItem('LoggedIn','true');
        // localStorage.setItem('admin','true');
        // state.LoggedIn = (localStorage.getItem('LoggedIn','true')=='true');
        // state.admin = (localStorage.getItem('admin','true')=='true');
    }

    return(
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={logIn}>Login</button>
                <Link to="/register">Register</Link>
            </form>
            <footer className="footer">
                <div>Bug Tracker v1.1</div>
            </footer>
        </div>   
    )
}