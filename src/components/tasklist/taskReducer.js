import { createSlice } from '@reduxjs/toolkit'

export const taskReducer = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        //addTask: (state, action) => [...state, action.payload] ,
        addTask: (state, action) => {
            state.push(action.payload);
        },
        removeTask: (state, action) => {
            return state.filter(state => state !== action.payload);
        }
    }
})

export const { addTask, removeTask } = taskReducer.actions

export default taskReducer.reducer