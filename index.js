/*jshint esversion: 8 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

const trends = require('./routes/trends');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/trends', trends);

const port = '8845';
/*const db_password = '';
const db_user = '';
const db_host = 'localhost';*/

app.listen(port, () => console.log(`listening on port ${port}`));

async function connectDb() {
    try {
        const dbresult = await mongoose.connect(`mongodb://localhost/higherlower`, { useNewUrlParser: true, useFindAndModify: false, 'useCreateIndex': true });
        console.log("Connected to database");
    }
    catch (err) {
        console.log("Could not connect to database");
    }
}

connectDb();