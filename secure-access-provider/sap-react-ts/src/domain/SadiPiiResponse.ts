import SadiPiiResponseModel from './model/SadiPiiResponseModel';

export default class SadiPiiResponse {
    private className: string = 'SadiPiiResponse';
    private data: SadiPiiResponseModel;

    constructor() {
        this.data = {};
    }

    /**
     * 
     * @param {string} irsUuid 
     * @param {string} givenName 
     * @param {string} surName 
     * @param {string} middleName 
     * @param {string} tin 
     * @param {Date} dateOfBirth 
     * @param {string} emailAddress 
     * @param {string} landlineNumber 
     * @param {string} mobileNumber 
     * @param {string} mailingAddress 
     * @param {string} streetAddressLine1 
     * @param {string} streetAddressLine2 
     * @param {string} city 
     * @param {string} state `
     * @param {string} zip 
     * @param {string} country 
     * @param {string} cspName 
     * @param {string} cspUuid 
     * @param {string} geoLocation 
     * @param {string} riskScore 
     * @param {Date} cspCreatedDate 
     * @param {Date} cspLastModifiedDate 
     * @param {Date} irsCreatedDate 
     * @returns {SadiPiiResponse} an object representation of the response from SADI's PII service.
     */
    buildSadiPiiResponse(irsUuid ?: string, givenName ?: string, surName ?: string, middleName ?: string,
        tin ?: string, dateOfBirth ?: Date, emailAddress ?: string, landlineNumber ?: string, mobileNumber ?: string,
        mailingAddress ?: string, streetAddressLine1 ?: string, streetAddressLine2 ?: string, city ?: string, state ?: string,
        zip ?: string, country ?: string, cspName ?: string, cspUuid ?: string, geoLocation ?: string, riskScore ?: string,
        cspCreatedDate ?: Date, cspLastModifiedDate ?: Date, irsCreatedDate ?: Date): SadiPiiResponse {
            this.setData(this.buildSadiPiiResponseModel(irsUuid, givenName, surName, middleName, tin, dateOfBirth, emailAddress,
                landlineNumber, mobileNumber, mailingAddress, streetAddressLine1, streetAddressLine2, city, state, zip, country,
                cspName, cspUuid, geoLocation, riskScore, cspCreatedDate, cspLastModifiedDate, irsCreatedDate));
            return this;
    }

    /**
     * 
     * @param {string} irsUuid 
     * @param {string} givenName 
     * @param {string} surName 
     * @param {string} middleName 
     * @param {string} tin 
     * @param {Date} dateOfBirth 
     * @param {string} emailAddress 
     * @param {string} landlineNumber 
     * @param {string} mobileNumber 
     * @param {string} mailingAddress 
     * @param {string} streetAddressLine1 
     * @param {string} streetAddressLine2 
     * @param {string} city 
     * @param {string} state 
     * @param {string} zip 
     * @param {string} country 
     * @param {string} cspName 
     * @param {string} cspUuid 
     * @param {string} geoLocation 
     * @param {string} riskScore 
     * @param {Date} cspCreatedDate 
     * @param {Date} cspLastModifiedDate 
     * @param {Date} irsCreatedDate 
     * @returns {SadiPiiResponseModel} a model representation of the response from SADI's PII service.
     */
    buildSadiPiiResponseModel(irsUuid ?: string, givenName ?: string, surName ?: string, middleName ?: string,
        tin ?: string, dateOfBirth ?: Date, emailAddress ?: string, landlineNumber ?: string, mobileNumber ?: string,
        mailingAddress ?: string, streetAddressLine1 ?: string, streetAddressLine2 ?: string, city ?: string, state ?: string,
        zip ?: string, country ?: string, cspName ?: string, cspUuid ?: string, geoLocation ?: string, riskScore ?: string,
        cspCreatedDate ?: Date, cspLastModifiedDate ?: Date, irsCreatedDate ?: Date): SadiPiiResponseModel {
            return {
                irsUuid: (irsUuid) ? irsUuid : '',
                givenName: (givenName) ? givenName : '',
                surName: (surName) ? surName : '',
                middleName: (middleName) ? middleName : '',
                tin: (tin) ? tin : '',
                dateOfBirth: (dateOfBirth) ? dateOfBirth : new Date(),
                emailAddress: (emailAddress) ? emailAddress : '',
                landlineNumber: (landlineNumber) ? landlineNumber : '',
                mobileNumber: (mobileNumber) ? mobileNumber : '',
                mailingAddress: (mailingAddress) ? mailingAddress : '',
                streetAddressLine1: (streetAddressLine1) ? streetAddressLine1 : '',
                streetAddressLine2: (streetAddressLine2) ? streetAddressLine2 : '',
                city: (city) ? city : '',
                state: (state) ? state : '',
                zip: (zip) ? zip : '',
                country: (country) ? country : '',
                cspName: (cspName) ? cspName : '',
                cspUuid: (cspUuid) ? cspUuid : '',
                geoLocation: (geoLocation) ? geoLocation : '',
                riskScore: (riskScore) ? riskScore : '',
                cspCreatedDate: (cspCreatedDate) ? cspCreatedDate : new Date(),
                cspLastModifiedDate: (cspLastModifiedDate) ? cspLastModifiedDate : undefined,
                irsCreatedDate: (irsCreatedDate) ? irsCreatedDate : new Date()
            };
    }

    /**
     * Gets the data associated with a response from the SADI PII service.
     * @returns {SadiPiiResponseModel} a model representation of the response from the SADI PII service.
     */
     getData(): SadiPiiResponseModel {
        return this.data;
    }

    /**
     * Sets the data associated with a response from the SADI PII service.
     * @param {SadiPiiResponseModel} data - the data contained in the response from the SADI PII service.
     */
    setData(data: SadiPiiResponseModel): void {
        this.data = data;
    }

    /**
     * Returns a representation of the object in the format of a trace log message.
     * @returns {string} traceLogMsg
     */
     traceLog(): string {
        return `TRACE | - ${this.className} - | ${JSON.stringify(this)}`;
    }
}