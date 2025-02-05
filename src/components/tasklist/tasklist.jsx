import React from 'react'
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addTask} from './taskReducer'
import './taskList.css'
import Task from "./task";

function Tasklist() {
    const task = useSelector((state) => state.task)
    const dispatch = useDispatch()
    const [input, setText] = useState('');

    const addTaskHandler = () => {
        if (input !== "") {
            dispatch(addTask(input));
            setText("");
        }
    }

    return (
            <div className="container">
                <div className="input-panel">
                    <input onChange={(e) => {setText(e.target.value);}} type="text" id="task-name-input" value={input} />
                    <button onClick={addTaskHandler} id="add-task-btn">Додати завдання</button>
                </div>
                <div className="task-list">
                    {/*{task.length}*/}
                    {task.length === 0 && <p id="start-message">Немає нових завдань</p>}
                    {task.map( (task, index) => <Task taskName={task} key={index} />)}
                </div>
            </div>

    )
}

export default Tasklist;