var express = require('express');
var router = express.Router();

/*Get news page */
router.get('/', function(req, res, next){
  res.render('journals')
});

module.exports = router;