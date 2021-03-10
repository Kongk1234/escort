const express = require('express');
const images = require('../componets/images');
const router = express.Router();

router.get('/', (req, res) => {
    images.test(req, res);
});

router.post('/upload', (req, res, next) => {
    images.upload(req, res, next);
});

module.exports = router;