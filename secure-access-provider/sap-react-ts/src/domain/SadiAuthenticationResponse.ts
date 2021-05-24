import SadiAuthenticationResponseModel from './model/SadiAuthenticationResponseModel';

export default class SadiAuthenticationResponse {
    private className: string = 'SadiAuthenticationResponse';
    private data: SadiAuthenticationResponseModel;

    constructor() {
        this.data = {};
    }

    /**
     * 
     * @param {string} smServerSessionId - the SM server session ID (such as a SAML or SiteMinder token).
     * @param {Date} smTimeToExpire - the SM time for the token to expire.
     * @param {string} smUniversalId - the SM universal ID.
     * @param {string} smTransactionId - the SM transaction ID.
     * @param {Array<String>} irsAssuranceLevel - identity and authentication assurance levels (IAL & AAL).
     * @returns {SadiAuthenticationResponse} an object representation of the response from SADI's authentication service.
     */
    buildSadiAuthenticationResponse(smServerSessionId: string, smTimeToExpire: Date,
        smUniversalId: string, smTransactionId: string, irsAssuranceLevel: Array<string>): SadiAuthenticationResponse {
            this.setData(this.buildSadiAuthenticationResponseModel(smServerSessionId, smTimeToExpire,
                smUniversalId, smTransactionId, irsAssuranceLevel));
            return this;
        }

    /**
     * 
     * @param {string} smServerSessionId - the SM server session ID (such as a SAML or SiteMinder token).
     * @param {Date} smTimeToExpire - the SM time for the token to expire.
     * @param {string} smUniversalId - the SM universal ID.
     * @param {string} smTransactionId - the SM transaction ID.
     * @param {Array<String>} irsAssuranceLevel - identity and authentication assurance levels (IAL & AAL).
     * @returns {SadiAuthenticationResponseModel} a model representation of the response from SADI's authentication service.
     */
    buildSadiAuthenticationResponseModel(smServerSessionId: string, smTimeToExpire: Date,
        smUniversalId: string, smTransactionId: string, irsAssuranceLevel: Array<string>): SadiAuthenticationResponseModel {
            return {
                smServerSessionId: smServerSessionId,
                smTimeToExpire: smTimeToExpire,
                smUniversalId: smUniversalId,
                smTransactionId: smTransactionId,
                irsAssuranceLevel: irsAssuranceLevel
            };
    }

    /**
     * Gets the data associated with a response from the SADI Authentication service.
     * @returns {SadiAuthenticationResponseModel} a model representation of the response from the SADI Authentication service.
     */
    getData(): SadiAuthenticationResponseModel {
        return this.data;
    }

    /**
     * Sets the data contained in the response from the SADI Authentication service.
     * @param {SadiAuthenticationResponseModel} data - the data contained in the response from the SADI Authentication service.
     */
    setData(data: SadiAuthenticationResponseModel): void {
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