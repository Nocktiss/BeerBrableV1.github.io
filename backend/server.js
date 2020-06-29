import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Cors from 'cors';

const app = express();
const API_PORT = process.env.API_PORT || 4242;

require('./config/passport');

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/User/loginUser')(app);
require('./routes/User/registerUser')(app);
require('./routes/User/updatePassword')(app);
require('./routes/User/findUsers')(app);
require('./routes/User/deleteUser')(app);
require('./routes/User/updateUser')(app);
require('./routes/Product/addProduct')(app);
require('./routes/Product/getProduct')(app);
require('./routes/Product/patchProduct')(app);
require('./routes/Product/deleteProduct')(app);

app.listen(API_PORT, () =>
    console.log(`Listening on port ${API_PORT}`));

module.exports = app;