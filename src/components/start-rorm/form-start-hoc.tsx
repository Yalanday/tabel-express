import React from "react";
import FormRegistration from "../form-registration/form-registration";
import {useAppSelector} from "../../hooks/redux-hooks";
import FormSelectSchool from "../form-select-school/form-select-school";
import FormStudent from "../form-student/form-student";

type Props = {
    autnStatusToggle: (authState: boolean) => void
}

const FormStartHoc: React.FC<Props>= ({autnStatusToggle}) => {
    const {isAuthenticated} = useAppSelector(state => state.authenticated);
    const {scholl} = useAppSelector(state => state.scholl);
    const {student} = useAppSelector(state => state.student);

    return (<>
        {isAuthenticated === false && <FormRegistration isAuthenticated={isAuthenticated}/>}
        {scholl === false && <FormSelectSchool scholl={scholl}/>}
        {student === false && <FormStudent autnStatusToggle={autnStatusToggle}/>}
    </>);
}

export default FormStartHoc;
