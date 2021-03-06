//Import All Dependencies
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const io = require('socket.io')
const dotenv = require("dotenv");
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//import routes
const StuGroupRoute = require("./routes/StuGroupRoute");
const markingRouter = require("./routes/markings");
const EvaluationRoute = require("./routes/EvaluationRoute");


//Routes
app.use('/user', require('./routes/User'));
app.use('/api', require('./routes/ResearchTopicRoute'));
app.use('/doc', require('./routes/docEvaluationR'));
app.use("/group", StuGroupRoute);
app.use('/api/upload', require('./routes/fileUpload'));
app.use("/marking", markingRouter);
app.use("/marking", markingRouter);
app.use('/api/template', require('./routes/TemplatesR'));
app.use("/evaluation", EvaluationRoute);
app.use('/api/conversations', require('./routes/MessengerRoutes/ConversationRoute'));
app.use('/api/Messages', require('./routes/MessengerRoutes/MessageRoute'));

//Database connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on PORT ${port}`));
mongoose.connect(
    process.env.MONGODB, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongo DB Connected Successfully");
}).catch((err) => console.log("DB Connection Failed", err));


