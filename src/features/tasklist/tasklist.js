import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './taskSlice'
import './TaskList.css'

function Tasklist() {
    const task = useSelector((state) => state.task)
    const dispatch = useDispatch()

    return (
        <div>
            <textarea name="taskTextarea" id="" cols="30" rows="10"></textarea>
            <button onClick={() => dispatch(addTask())}>+</button>
            <div className='taskList'>

            </div>
        </div>
    )
}

export default Tasklist;