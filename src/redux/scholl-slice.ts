import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    isAuthenticated: boolean
}

const initialState: InitialStateType= {
    isAuthenticated: true,
}

const authenticatedSlice = createSlice({
    name: 'authenticated',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
    }
})

export const {setAuthenticated} = authenticatedSlice.actions;

const authenticatedReducer = authenticatedSlice.reducer;
export default authenticatedReducer;
