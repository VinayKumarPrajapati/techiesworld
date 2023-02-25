const express = require('express');
const { router } = require('./routes/auth');
const {readFileSync} = require('fs');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

app.use(morgan('dev'))
// app.use('/api',router);
readFileSync('./routes').map((r) => app.use('/api',require('./routes/${r}')));

const port = process.env.PORT || 800;

app.listen(port,() => console.log(`Connecting to techies at ${port}`));