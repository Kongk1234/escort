const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use('/images', express.static('images'))

app.listen(port, () => {
    console.log('port: 3001');
});