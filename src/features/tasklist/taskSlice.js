import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: 1,
    },
    reducers: {
         addTask: (state) => [...state, task]
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer