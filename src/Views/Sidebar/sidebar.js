import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from '../../Controllers/Redux/authSlice'
import './sidebar.css'

export default ()=>{
    const dispatch = useDispatch();
    const {auth} = useSelector(state=>state);

    function logOut(){
        //<Link className='nav-link' to="/"></Link>
        dispatch(signOut());
    }
    //note: you require admin to create a bug.
    return(
        <div className="sidebar">
            <Link className='nav-link' to="/">
                <div className='brand'>Bug Tracker</div>
            </Link>
            <ul>
                <li>
                    <Link to="/" className='nav-link'>DashBoard</Link>
                </li>
                <li>
                    <Link to="/viewbugs" className='nav-link'>View Bugs</Link>
                </li>
                {auth.admin && <li> 
                    <Link to="/create" className='nav-link'>Create Bugs</Link>
                </li>}
            </ul>
            <button className="nav-link logout" onClick={logOut}>Log Out</button>
        </div>
    )
}
