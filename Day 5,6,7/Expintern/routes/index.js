var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.get('/myform', function(req, res, next) {
  res.render('form');
});
router.get('/training/nodejs/php/laravel', function(req, res, next) {
  res.send('Sure we will provide training in laravel');
});
router.get('/training/nodejs/nodejs/Express', function(req, res, next) {
  res.send('Sure we will provide training in express');
});
router.get('/master', function(req, res, next) {
  res.render('master');
});
router.post('/form-process', function(req, res, next) {
  
  var a=parseInt(req.body.txt1);
  var b=parseInt(req.body.txt2);
  var c=a+b;
  var msg=" ";
  var mycolor="";
  if(c>100){
    msg = "pass";
    mycolor = "green";
  }
  else{
    msg = "fail";
    mycolor = "red";
  }
  console.log(req.body);
  console.log("A value is: "+a+" B value is: "+b);
  res.render('ans',{mya:a,myb:b,myc:c,mymsg:msg,mycolor:mycolor});
});



module.exports = router;
