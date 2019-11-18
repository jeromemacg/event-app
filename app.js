const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const auth = require('./api/auth');
const users = require('./api/users');
const comments = require('./api/comments');
const events = require('./api/events');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/users', users);
app.use('/comments', comments);
app.use('/events.js', events);


app.listen(PORT, function () {
    console.log("Runnign on port:" + PORT)
});
