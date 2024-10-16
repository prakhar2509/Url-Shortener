import express from 'express';
import urlRouter from './routes/url.route.js';

const app = express();

app.use(express.json());
app.use('/url', urlRouter);

export { app };