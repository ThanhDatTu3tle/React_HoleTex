import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import getPosts from './routers/posts.router.js';

const app = express();
const port = process.env.port || 5000;

const URI = 'mongodb+srv://tu3tledat:dat27032001@tu3tle.yiwx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extend: true, limit: '30mb' }));
app.use(cors());

// localhost:5000
app.get('/', (req, res) => {
    res.send(`INDEX PAGE!!!`);
});

// localhost:5000/posts
app.use('/posts', getPosts);

// MONGODB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.log('err', err);
    });

 