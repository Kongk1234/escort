const express = require('express');
const escort = require('../componets/escort');
const router = express.Router();

router.get('/', (req, res) => {
    escort.test(req, res);
});

router.post('/create', (req, res) => {
    escort.create(req, res);
});

router.get('/getall', (req, res) =>{
    escort.getall(req, res);
});

router.get('/getone', (req, res) =>{
    escort.getone(req, res);
});

module.exports = router;