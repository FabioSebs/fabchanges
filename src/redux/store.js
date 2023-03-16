import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task"
import idReducer from "./id"

// Creating Store which takes in Reducer
const store = configureStore({
    reducer: {
      tasks: taskReducer,
      id: idReducer
    },
  })
  
  export default store