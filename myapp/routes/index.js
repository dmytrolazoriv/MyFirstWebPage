var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*GET about page */
router.get('/', function(req, res, next) {
  res.render('about');
});

/*GET articles page */
router.get('/', function(req, res, next) {
  res.render('articles');
});

/*Get news page */
router.get('/', function(req, res, next){
  res.render('news')
});


module.exports = router;
