var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/demo', function(req, res, next) {
  res.send('Demo');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
