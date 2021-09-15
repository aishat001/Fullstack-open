export type gender = 'male' | 'female';

export interface patientEntry {
    id: string
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}

export interface diagnoseEntry {
    code: string;
    name: string;
    latin?: string | undefined;
} 

export type NonSensitivePatientEntry = Omit<patientEntry, 'ssn'>;