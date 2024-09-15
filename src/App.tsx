import React from 'react';
import FormStartHoc from "./components/start-rorm/form-start-hoc";
import {useAppSelector, useAppDispatch} from "./hooks/redux-hooks";
import {setAuthStatus} from "./redux/authStatus-slice";
import Main from "./components/main/main";

function App() {
    const {authStatus} = useAppSelector((state) => state.authStatus);
    const dispatch = useAppDispatch();
    const autnStatusToggle = (authState: boolean) => dispatch(setAuthStatus(authState));


    console.log(authStatus);
// TODO не забыь потом поствить верные определения authStatus для рендера
    return (
        <div className="App">
            {!authStatus && <FormStartHoc autnStatusToggle={autnStatusToggle}/>}
            {/*{authStatus && <FormStartHoc autnStatusToggle={autnStatusToggle}/>}*/}
            {authStatus && <Main/>}
            {/*{!authStatus && <Main/>}*/}
        </div>
    );
}

export default App;
