import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {createBugs,updateBugs} from '../../../Controllers/Redux/bugSlice'
import BugModel from '../../../Models/bugModel';
import './bugForm.css'


export default (props)=>{
    const dispatch = useDispatch(); //how redux commmunicates with the controllers
    const [bugObject,setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name] : e.target.value
        });
    }

    function createOrEdit(e){
        /*pass in the current state of bug input and let the controller handle the back-end.
        determine if the component is supposed to edit or create based on the props title*/
        if(props.title=='Create Bug')
        {
            dispatch(createBugs(bugObject));
            alert("bug created");
        }
        else if(props.title=="Edit Bug")
        {
            dispatch(updateBugs(bugObject));
            alert("bug edited");
        }
    }

    return(
        <div className='bug-create'>
            {props.title == 'Edit Bug' && <button onClick={props.clicked} className='close-btn'>x</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name='name' placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description on the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
                <label>Priority:</label>
                <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned:</label>
                <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                    <option>Andres Advincula</option>
                </select>
                <label>Creator:</label>
                <select name='creator' onChange={inputChanged} value={bugObject.creator}>
                    <option>Andres Advincula</option>
                </select>
                <label>Time:</label>
                <textarea name='time' placeholder='Time when bug was found' required onChange={inputChanged} value={bugObject.time}></textarea>
                <label>Application Version:</label>
                <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                <button type='submit' onClick={createOrEdit}>{props.title}</button>
            </form>
        </div>
    )
}