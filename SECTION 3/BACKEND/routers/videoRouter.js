const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from video Router');
} )

router.get('/getall', (req, res) => {
    res.send('response from video Router  1');
} )

router.get('/div', (req, res) => {
    res.send('response from video Router 2');
} )


// exporting
module.exports = router;

