type SchollValueType = {
    value: string;
    label: string;
}

const schollValues: SchollValueType[] = [
    {
        value: '123',
        label: '123',
    },
    {
        value: '256',
        label: '256',
    },
    {
        value: '404',
        label: '404',
    },
    {
        value: '505',
        label: '505',
    },
    {
        value: 'KingLyceum',
        label: 'Царскоселький лицей',
    },
    {
        value: 'KingSchool',
        label: 'Царскосельская школа',
    },
    {
        value: 'KingGym',
        label: 'Царскосельская гимназия',
    },
    {
        value: 'CadetCorps',
        label: 'Кадетский корпус',
    }
];

const classValues = [
    {
        value: 'a',
        label: 'A',
    },
    {
        value: 'b',
        label: 'Б',
    },
    {
        value: 'c',
        label: 'В',
    },
    {
        value: 'g',
        label: 'Г',
    },
    {
        value: 'd',
        label: 'Д',
    },
];

export {schollValues, classValues};
