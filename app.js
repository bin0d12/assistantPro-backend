const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const custRoutes = require('./route/custListRouter');
const port = 3000;
mongoose.connect('mongodb://localhost:27017/euroAssistance')
const db = mongoose.connection
db.once('open', () => {
    console.log('connection successfully');
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/custData', custRoutes);

app.listen(port, () => {
    console.log(`server started${port}`);
})