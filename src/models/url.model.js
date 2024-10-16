import mongoose, {Schema} from 'mongoose';

const urlSchema = new Schema({
    shortId: {
        type: String,
        unique: true,
        required: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        timestamp :{
            type: Number
        }
    }]
},{timestamps: true});

export const Url = mongoose.model('Url', urlSchema);