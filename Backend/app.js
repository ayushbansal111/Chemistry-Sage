const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(PORT, ()=>{
    console.log(`App is listening on: http://localhost:${PORT}`);
});