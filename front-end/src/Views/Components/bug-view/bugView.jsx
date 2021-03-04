import React,{useState} from 'react'
import ViewSection from './component/bugViewSection'
import BugModel from '../../../Models/bugModel'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../../Controllers/Redux/bugSlice'
import EditPanel from '../bug-edit-delete/editPanel'
import EditBug from '../bug-create-edit/bugForm'
import './bugView.css'

export default (props)=>{
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);
    const [displayEdit,setDisplayEdit] = useState(false);
    
    function newPage(){
        setDisplayEdit(!displayEdit);
    }

    function deleteClicked(e){   
        if(window.confirm('Are you sure you wish to delete this bug?'))
        {
            /*pass in the current bug and let the controller handle the back-end*/
            dispatch(markComplete(bug));
            alert("bug deleted");
            window.location.reload(true);
        }
    }

    return(
        <>
        {
            /*when edit screen is not displayed, show the bug details component. 
            EditPanel is the buttons, not the actual edit component*/
            !displayEdit && <div className='bug-view'>
                <EditPanel editClicked={newPage} deleteClicked={deleteClicked}/>
                <button onClick={props.clicked} className='close-btn'>x</button>
                <h1>{bug.name}</h1>
                <ViewSection title='Details' info={bug.details}/>
                <ViewSection title='Steps' info={bug.steps}/>
                <ViewSection title='Priority' info={bug.priority}/>
                <ViewSection title='Creator' info={bug.creator}/>
                <ViewSection title='App Version' info={bug.version}/>
                <ViewSection title='Time Created' info={bug.time}/>
            </div>
        }
        {
            /*when the edit screen is displayed, show the EditBug component. pass in newPage 
            as the prop for the 'close-btn' button to return to the state before you clicked edit*/
            displayEdit && <EditBug clicked={newPage} title="Edit Bug" bug={bug}/>
        }
        </>
    )
}