var express = require('express'); 
var router = express.Router();
var studentModel = require('../src/student/studentModel');

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;