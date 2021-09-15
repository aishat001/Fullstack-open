/* eslint-disable @typescript-eslint/no-unsafe-return */
import diagnoseData from '../../data/diagnoses';
import {diagnoseEntry} from '../types/types';



const getEntries = (): Array<diagnoseEntry> => {
    return diagnoseData;
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry
};