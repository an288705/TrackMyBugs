import React from 'react'
import Priority from '../../../Controllers/priorityController'
import './card.css'

export default (props)=>{
    const {level,color} = Priority(props.priority)
    
    return(
        <div className='dashboard-card' onClick={props.clicked}style={{color:color}}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}