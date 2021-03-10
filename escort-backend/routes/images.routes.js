const express = require('express');
const images = require('../componets/images');
const router = express.Router();

router.get('/', (req, res) => {
    images.test(req, res);
});

router.post('/upload', (req, res) => {
    images.upload(req, res);
});

router.post('/kasper', (req, res) => {
    res.send('Your name is: ' + req.body.name)
});

module.exports = router;