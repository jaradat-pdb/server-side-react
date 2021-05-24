export default interface SadiPiiResponseModel {
    irsUuid ?: string;
    givenName ?: string;
    surName ?: string;
    middleName ?: string;
    tin ?: string;
    dateOfBirth ?: Date;
    emailAddress ?: string;
    landlineNumber ?: string;
    mobileNumber ?: string;
    mailingAddress ?: string;
    streetAddressLine1 ?: string;
    streetAddressLine2 ?: string;
    city ?: string;
    state ?: string;
    zip ?: string;
    country ?: string;
    cspName ?: string;
    cspUuid ?: string;
    geoLocation ?: string;
    riskScore ?: string;
    cspCreatedDate ?: Date;
    cspLastModifiedDate ?: Date;
    irsCreatedDate ?: Date;
}