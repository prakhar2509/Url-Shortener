
import mongoose from 'mongoose';
import { app } from './app.js';

mongoose.connect(`mongodb://127.0.0.1:27017/url-shortener`)
.then(() => {
    app.listen(8001, () => {
        console.log('Listening on port 8001');
    });
})
.catch((err) => {
  console.log(err);
});


