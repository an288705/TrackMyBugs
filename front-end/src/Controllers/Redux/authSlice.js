import {createSlice} from '@reduxjs/toolkit'
import {authenticator} from '../accountController'

const slice = createSlice({
    name : 'auth',
    initialState : {
        /*convert string to bool using equality*/
        admin : (localStorage.getItem('admin')=='true'),
        LoggedIn : (localStorage.getItem('LoggedIn')=='true') 
    },
    reducers : {
        signIn : (state,action)=>{
            /*save the name and password from the state payload passed in. Pass in
            state, name, password into authenticator*/
            const {name,password} = action.payload;
            authenticator(state,name,password);
        },
        signOut : (state)=>{
            //update local storage to false then convert LoggedIn and admin to bool
            localStorage.setItem('LoggedIn','false');
            localStorage.setItem('admin','false');
            state.LoggedIn = (localStorage.getItem('LoggedIn','true')=='true');
            state.admin = (localStorage.getItem('admin','true')=='true');
        },
        createUser : (state,action)=>{

        }
    }
})

export default slice.reducer;
export const {signIn,signOut,createUser} = slice.actions;