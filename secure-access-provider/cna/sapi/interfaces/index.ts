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
    issues?: Issue[];
};

export type SadiSmSrvHeaderType = {
    SM_SERVERSESSIONID: string;
    SM_TIMETOEXPIRE: Date;
    SM_UNIVERSALID: string;
    SM_TRANSACTIONID: string;
    irsAssuranceLevel: string[];
};

export type SadiPiiSrvBodyType = {
    GIVENNAME?: string;
    SURNAME?: string;
    MIDDLENAME?: string;
    TIN?: string;
    DATEOFBIRTH?: Date;
    EMAILADDRESS?: string;
    LANDLINENUMBER?: string;
    MOBILENUMBER?: string;
    MAILINGADDRESS?: string;
    STREETADDRESSLINE1?: string;
    STREETADDRESSLINE2?: string;
    CITY?: string;
    STATE?: string;
    ZIP?: string;
    COUNTRY?: string;
    CSPNAME?: string;
    GEOLOCATION?: string;
    RISKSCORE?: number;
    CSPCREATEDDATE?: Date;
    CSPLASTMODIFIEDDATE?: Date;
    IRSCREATEDATE?: Date;
};

export type Issue = {
    id: number;
    status: string;
    owner: string;
    effort?: number;
    created: Date;
    due?: Date;
    title: string;
};
