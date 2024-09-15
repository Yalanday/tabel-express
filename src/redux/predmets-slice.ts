import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    predmets: string | null
}

const initialState: InitialStateType= {
    predmets:  null,
}

const predmetsSlice = createSlice({
    name: 'predmets',
    initialState,
    reducers: {
        setPredmets: (state, action) => {
            state.predmets = action.payload
        },
    }
})

export const {setPredmets} = predmetsSlice.actions;

const predmetsSliceReducer = predmetsSlice.reducer;
export default predmetsSliceReducer;
