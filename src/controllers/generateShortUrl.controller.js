import { nanoid } from 'nanoid';
import {Url} from '../models/url.model.js';

const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    if(!body.url) return res.status(400).json({ message: 'URL is required' });
    const shortId = nanoid(8);

    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({id: shortId});
};

const analytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId });
    return res.json ({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
};

export { handleGenerateShortUrl, analytics };