import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    authStatus: boolean
}

const initialState: InitialStateType= {
    authStatus: false,
}

const authStatusSlice = createSlice({
    name: 'authStatus',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload
        },
    }
})
export const {setAuthStatus} = authStatusSlice.actions;

const authStatusReducer = authStatusSlice.reducer;
export default authStatusReducer;
