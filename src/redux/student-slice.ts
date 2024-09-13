import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    student: boolean | null
}

const initialState: InitialStateType= {
    student:  null,
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudent: (state, action) => {
            state.student = action.payload
        },
    }
})

export const {setStudent} = studentSlice.actions;

const studentSliceReducer = studentSlice.reducer;
export default studentSliceReducer;
