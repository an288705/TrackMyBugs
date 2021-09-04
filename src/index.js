import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';

//reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'

/*To stay logged in after refreshing, you must configure local storage to save state. If you
recently started the app, set the default items to false. Otherwise let the controllers
manage the items. Local storage ONLY saves items as strings, so you must convert to bool.*/
let start = localStorage.getItem('LoggedIn');
if(start===undefined || start === null)
{
  localStorage.setItem('LoggedIn','false');
  localStorage.setItem('admin','false');
}

//Redux configuration
const reducer = combineReducers({
  auth : authReducer,
  bugs : bugReducer,
  user : userReducer
});

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
