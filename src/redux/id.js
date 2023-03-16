import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const Id = {
    value: 1
}

export const idSlice = createSlice({
    name: "id",
    initialState: Id,
    reducers: {
        // Increment
        incrementId(state = Id, action){
            state.value = ++state.value
        }
    }
});

export const {incrementId} = idSlice.actions
export default idSlice.reducer