var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('master', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('master', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form');
});
router.post('/form-process', function(req, res, next) {
  res.render('ans');
});
module.exports = router;
