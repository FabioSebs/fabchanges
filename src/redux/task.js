import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const Task = {
    value: []
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState: Task,
    reducers: {
        // Add Tasks
        addTask(state = Task, action){
            state.value = [...state.value, action.payload]
        },
        // Add ID
        updateTask(state = Task, action){
            state.value = state.value.map((task, id)=> id === action.payload.id ? {...task, text: action.payload.text}: task)
        },
        // Remove Task
        removeTask(state = Task, action){
            state.value = state.value.filter(task => task.id !== action.payload.id)
        }
    }
});

export const {addTask, updateTask, removeTask} = taskSlice.actions
export default taskSlice.reducer