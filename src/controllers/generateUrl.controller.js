import {Url} from '../models/url.model.js';

const generateShortUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({ shortId }, { $push : {
        visitHistory : {
            timestamp : Date.now(),
        }
    }})
    res.redirect(entry.redirectUrl);
}

export { generateShortUrl };