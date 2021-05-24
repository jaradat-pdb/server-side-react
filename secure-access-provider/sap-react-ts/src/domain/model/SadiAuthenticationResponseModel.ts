export default interface SadiAuthenticationResponseModel {
    smServerSessionId ?: string;
    smTimeToExpire ?: Date;
    smUniversalId ?: string;
    smTransactionId ?: string;
    irsAssuranceLevel ?: Array<string>;
}