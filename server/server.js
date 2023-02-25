const express = require('express');
const { router } = require('./routes/auth');
import {readFileSync} from 'fs';
const app = express();

// app.use('/api',router);
readFileSync('./routes').map((r) => app.use('/api',require('./routes/${r}')));

app.listen(8000,() => console.log(`Connecting to techies`));