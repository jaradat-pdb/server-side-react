import { NextApiRequest, NextApiResponse } from 'next';
import { StubSadiPiiSrvBody } from '../../../constants/index';
import { SadiPiiSrvBodyType } from '../../../interfaces/index';
import { setResHeader } from '../../../services/pii/index';
import { getProperty, setProperty } from '../../../utils/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    setResHeader(res);
    let resBody: SadiPiiSrvBodyType;
    let queryParams: [string, string | string[]][] = Object.entries(req.query);
    if (queryParams.length === 0) {
        resBody = StubSadiPiiSrvBody;
    }
    else {
        resBody = {};
        queryParams.forEach(queryParamArray => {
            if (typeof(queryParamArray[1]) === 'string') {
                setProperty(
                    resBody,
                    queryParamArray[1] as keyof typeof StubSadiPiiSrvBody,
                    getProperty(
                        StubSadiPiiSrvBody,
                        queryParamArray[1] as keyof typeof StubSadiPiiSrvBody
                    )
                );
            }
            else {
                queryParamArray[1].forEach(queryParamElement => {
                    setProperty(
                        resBody,
                        queryParamElement as keyof typeof StubSadiPiiSrvBody,
                        getProperty(
                            StubSadiPiiSrvBody,
                            queryParamElement as keyof typeof StubSadiPiiSrvBody
                        )
                    );
                });
            }
        });
    }
    res.status(200).json(resBody);
}
