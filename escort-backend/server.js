const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())

//Routes import
const images = require('./routes/images.routes');
const escort = require('./routes/escort.routes');

app.get('/', (req, res) => {
    res.send("Hello there");
})

//To be moved into componets/images.js
app.use('/images/all', express.static('./images'))

app.use('/images', images);

app.use('/escort', escort);

app.listen(port, () => {
    console.log('port: 3001');
});
