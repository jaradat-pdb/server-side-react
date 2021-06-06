import { ReactNode } from 'react';
/*
    TODO:
    - make a type for every login (i.e. email, github, google...)
    - add optional parameter for every login type to User type
*/
export type User = {
    id: number;
    name: string;
    email: string;
    addr?: Address;
};

export type Address = {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
};

export type AuthContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
};

export type Props = {
    children: ReactNode;
};

export type SmHeaderType = {
    SM_SERVERSESSIONID: string;
    SM_TIMETOEXPIRE: Date;
    SM_UNIVERSALID: string;
    SM_TRANSACTIONID: string;
    irsAssuranceLevel: string[];
};
