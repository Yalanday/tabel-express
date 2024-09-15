import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    scholl: boolean | null
}

const initialState: InitialStateType= {
    scholl:  true,
}

const schollSlice = createSlice({
    name: 'scholl',
    initialState,
    reducers: {
        setScholl: (state, action) => {
            state.scholl = action.payload
        },
    }
})

export const {setScholl} = schollSlice.actions;

const schollSliceReducer = schollSlice.reducer;
export default schollSliceReducer;
