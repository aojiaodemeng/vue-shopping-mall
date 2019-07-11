var express = require('express');
var router = express.Router();

/* GET goods */
router.get('/', function (req, res, next) {
    res.send('welcome to goods');
});

module.exports = router;