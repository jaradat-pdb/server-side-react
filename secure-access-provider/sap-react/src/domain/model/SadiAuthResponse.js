export class SadiAuthResponse {
    smsession = '';
    expires = '';
    isExpired = true;
    irsUUID = '';
    transactionId = '';
    /* TODO - figure out how to represent the assuranceLevel header attribute (pg 16 of SADI_AIP) */
}