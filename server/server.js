require('rootpath')();
const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');


const bodyParser = require('body-parser');
const errorHandler = require('./_middleware/error-handler');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(fileUpload());
app.use(cors());

app.use('/users', require('./users/users.controller'));



app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
app.listen(port, () => console.log('Server listening on port ' + port));


