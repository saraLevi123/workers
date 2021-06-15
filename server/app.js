const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const cors = require('cors')
const  router  = require('./routes/api');

const connectionParams = {
    newUrlParser: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();
app.use(bodyParser.json());
app.use('/', router);
app.use(cors());

app.listen(3400, ()=>{
    console.log("listening on port 3400");
})