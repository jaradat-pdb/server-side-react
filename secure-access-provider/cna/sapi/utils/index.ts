import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4 } from 'uuid';

/**
 * Generates a SM_SERVERSESSIONID as a RFC version 1 UUID compliant string.
 * @returns {string}
 */
export function generateSmServerSessionId(): string {
    return uuidv1();
}

/**
 * Generates a SM_UNIVERSALID as a RFC version 4 UUID compliant string.
 * @returns {string}
 */
export function generateSmUniversalId(): string {
    return uuidv4();
}

/**
 * Generates a SM_TRANSACTIONID as a RFC version 3 UUID compliant string.
 * @param {string} name 
 * @param {string} namespace 
 * @returns {string}
 */
export function generateSmTransactionId(name: string, namespace: string): string {
    return uuidv3(name, namespace);
}
