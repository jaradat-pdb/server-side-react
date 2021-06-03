import connectDB from '../../middleware/mongodb';
import UserModel from '../../model/UserModel';
import bcrypt from 'bcryptjs';

const handler = async(req, res) => {
    if (req.method === 'POST') {
        /* TODO - stuff */
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
}

export default connectDB(handler);