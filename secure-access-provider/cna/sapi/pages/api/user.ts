import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../interfaces/index';

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    res.status(200).json({
        /* TODO - replace with object of type User */
        id: 1,
        name: 'Walid Jenkins',
        email: 'wkmaaj@pdbcorp.org'
    });
}