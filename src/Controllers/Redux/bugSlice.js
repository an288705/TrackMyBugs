import {createSlice} from '@reduxjs/toolkit'
import {retrieveBugs} from '../bugController'
import bugModel from '../../Models/bugModel'

const slice = createSlice({
    name : 'bug',
    initialState : [],
    reducers : {
        getBugs : (state)=>retrieveBugs(),
        createBugs : (state,action)=>{
            /*use a POST http request to create a bug from the state payload passed in*/
            const {name, details, steps, version, priority, assigned,creator,time} = action.payload;
            const data = new bugModel({
                _id : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1 , //use rng for the id
                name : name,
                details : details,
                steps : steps,
                version : version,
                priority : 1,
                assigned : 'me',
                creator : 'me',
                time : time
            });

            /*create a x-www-form-urlencoded body for the POST request*/
            var formBody = [];

            for (var key in data) 
            {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(data[key]);
                formBody.push(encodedKey + "=" + encodedValue);
            }

            formBody = formBody.join("&");

            /*now pass in options to fetch to create a POST request*/
            const curl = 'https://trackmybugs-server.herokuapp.com/auth/bug';
            const options = {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                  },
                body : formBody
            };

            fetch(curl,options);
        },
        updateBugs : (state,action)=>{
            /*destructure the bug passed in from views*/
            const {_id, name, details, steps, version, priority, assigned,creator,time} = action.payload;
            const data = new bugModel({
                _id : _id, 
                name : name,
                details : details,
                steps : steps,
                version : version,
                priority : 1,
                assigned : 'me',
                creator : 'me',
                time : time
            });

            /*create a x-www-form-urlencoded body for the POST request*/
            var formBody = [];

            for (var key in data) 
            {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(data[key]);
                formBody.push(encodedKey + "=" + encodedValue);
            }

            formBody = formBody.join("&");

            /*now pass in options to fetch to create a PUT request*/
            const curl = 'https://trackmybugs-server.herokuapp.com/auth/bug';
            const options = {
                method : 'PUT',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                body : formBody
            };

            fetch(curl,options);
        },
        markComplete : (state,action)=>{
            /*destructure _id of bug passed in from views*/
            const {_id} = action.payload;

            /*create a x-www-form-urlencoded body for the DELETE request*/
            var formBody = [];
            formBody.push("_id=" + encodeURIComponent(_id));
            formBody = formBody.join("&");

            /*now pass in options to fetch to create a DELETE request*/
            const curl = 'https://trackmybugs-server.herokuapp.com/auth/bug';
            const options = {
                method : 'DELETE',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                body : formBody
            };

            fetch(curl,options);
        }
    }
})

export default slice.reducer;
export const {getBugs,createBugs,updateBugs,markComplete} = slice.actions;