//Import All Dependencies
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
const cors = require('cors');

app.use(cookieParser());
app.use(express.json());
app.use(cors({
}));

//Routes
app.use('/user', require('./routes/User'));
app.use('/api', require('./routes/ResearchTopicRoute'));

//Database connection
connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on PORT ${port}`));

