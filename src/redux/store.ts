import {configureStore} from "@reduxjs/toolkit";
import authenticatedReducer from "./authenticated-slice";
import schollSliceReducer from "./scholl-slice";
import studentSliceReducer from "./student-slice";

const store = configureStore({
    reducer: {
        authenticated: authenticatedReducer,
        scholl: schollSliceReducer,
        student: studentSliceReducer,
    },
})

export default store;
