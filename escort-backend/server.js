const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json())

//Routes import
const images = require('./routes/images.routes');

app.get('/', (req, res) => {
    res.send("Hello there");
})

//To be moved into componets/images.js
app.use('/images/all', express.static('./images'))

app.use('/images', images);

app.listen(port, () => {
    console.log('port: 3001');
});
