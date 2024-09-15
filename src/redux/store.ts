import {configureStore} from "@reduxjs/toolkit";
import authenticatedReducer from "./authenticated-slice";
import schollSliceReducer from "./scholl-slice";
import studentSliceReducer from "./student-slice";
import authStatusReducer from "./authStatus-slice";
import predmetsSliceReducer from "./predmets-slice";

const store = configureStore({
    reducer: {
        authenticated: authenticatedReducer,
        scholl: schollSliceReducer,
        student: studentSliceReducer,
        authStatus: authStatusReducer,
        predmets: predmetsSliceReducer,
    },
})

export default store;
