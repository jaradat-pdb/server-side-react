import mongoose from 'mongoose';

const { Schema } = mongoose;
const emailSchema = new Schema(
    {
        email: String
    }
);

export default mongoose.model('EmailModel', emailSchema);