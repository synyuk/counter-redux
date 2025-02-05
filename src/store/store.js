import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../components/counter/counterReducer";
import taskReducer from "../components/tasklist/taskReducer";

export default configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    },
})