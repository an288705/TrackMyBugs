import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../Components/bug-card/bugCard'
import BugView from '../Components/bug-view/bugView'

export default()=>{
    const [DISPLAY_BUG,SET_DISPLAY_BUG] = useState({
        name : "",
        isDisplayed : false
    });
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    /*render the bugs once or refresh*/
    useEffect(()=>{
        dispatch(getBugs());
    },[bugs.length < 1]); 

    function BugClicked(name){
        SET_DISPLAY_BUG({
            isDisplayed : !DISPLAY_BUG.isDisplayed,
            name : name
        });
    }

    return(
        <div className='page-container'>
            {
                /*When DISPLAY_BUG is not displayed, show all the bugs*/
                !DISPLAY_BUG.isDisplayed && bugs.map((bug,key)=>(
                    <BugCard key={key} bug={bug} clicked={BugClicked}/>
                ))
            }
            {
                /*When DISPLAY_BUG is being displayed, show BugView (bug details) component. pass in 
                BugClicked as the prop for the 'close-btn' button to return to the state before you 
                clicked the bug card*/
                DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug)=> bug.name == DISPLAY_BUG.name)[0]} />
            }
        </div>
    )
}