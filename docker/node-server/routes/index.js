var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Silver Pulse' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Silver Pulse' });
});

module.exports = router;
