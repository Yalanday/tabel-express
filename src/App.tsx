import React from 'react';
import FormRegistration from "./components/form-registration/form-registration";
import {useAppSelector} from "./hooks/redux-hooks";
import FormSelectSchool from "./components/form-select-school/form-select-school";
import FormStudent from "./components/form-student/form-student";

function App() {

    const {isAuthenticated} = useAppSelector(state => state.authenticated);
    const {scholl} = useAppSelector(state => state.scholl);
    const {student} = useAppSelector(state => state.student);


    return (
        <div className="App">
            {isAuthenticated === false && <FormRegistration isAuthenticated={isAuthenticated}/>}
            {scholl === false && <FormSelectSchool scholl={scholl}/>}
            {student === false &&<FormStudent/>}
        </div>
    );
}

export default App;
