import userModel from '../Models/userModel'

const curl = 'http://localhost:3500/auth/';
var account = {};

fetch(curl)
.then(data=>{return data.json()})
.then(json=>{
    //create a dic of users : password
    for(const x of json)
    {
        account[x.name] = new userModel({
            _id : x._id,
            name : x.name,
            password : x.password,
            role : x.role
        });
    }
})

export function authenticator(state,name,password){
    /*If the name is in account dic, and password is correct, log the person in. 
    else, alert either username not found or password is incorrect*/
    if(account.hasOwnProperty(name))
    {
        if(account[name].password == password)
        {
            //update local storage to true then convert LoggedIn and admin to bool
            localStorage.setItem('LoggedIn','true');
            localStorage.setItem('admin','true');
            state.LoggedIn = (localStorage.getItem('LoggedIn','true')=='true');
            state.admin = (localStorage.getItem('admin','true')=='true');
        }
        else
        {
            alert("password incorrect");
        }
    }
    else
    {
        alert("username not found. create an account");
    }
}