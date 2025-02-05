import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTask} from './taskReducer'

function Task(props){
    const dispatch = useDispatch();
    const deleteTaskHandler = () => {
        dispatch(removeTask(props.taskName));
    }

    return(
        <div className="task"><input type="checkbox"/>
            <p>{props.taskName}</p>
            <div className="delete" onClick={deleteTaskHandler} ></div>
        </div>
    )
}

export default Task;