import { NextApiResponse } from 'next';
import { SadiSmSrvHeaderType } from '../../interfaces/index';
import * as utils from '../../utils/index';

export function generateSmHeader(): SadiSmSrvHeaderType {
    let smServerSessionId = utils.generateSmServerSessionId();
    let smTimeToExpire = new Date();
    smTimeToExpire.setHours(smTimeToExpire.getHours() + 1);
    let smUniversalId = utils.generateSmUniversalId();
    return {
        SM_SERVERSESSIONID: smServerSessionId,
        SM_TIMETOEXPIRE: smTimeToExpire,
        SM_UNIVERSALID: smServerSessionId,
        SM_TRANSACTIONID: utils.generateSmTransactionId(smServerSessionId, smUniversalId),
        irsAssuranceLevel: ['HIGH']
    };
}

export function setResHeader(res: NextApiResponse): void {
    const smHeader: SadiSmSrvHeaderType = generateSmHeader();
    res.setHeader('SM_SERVERSESSIONID', smHeader.SM_SERVERSESSIONID);
    res.setHeader('SM_TIMETOEXPIRE', smHeader.SM_TIMETOEXPIRE.toISOString());
    res.setHeader('SM_UNIVERSALID', smHeader.SM_UNIVERSALID);
    res.setHeader('SM_TRANSACTIONID', smHeader.SM_TRANSACTIONID);
    res.setHeader('irsAssuranceLevel', smHeader.irsAssuranceLevel);
}
