/* eslint-disable @typescript-eslint/no-unsafe-return */
import patientData from '../../data/patients';
import {patientEntry, NonSensitivePatientEntry} from '../types/types';


const getEntries = (): Array<patientEntry> => {
    return patientData;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
};