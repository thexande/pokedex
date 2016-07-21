var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send("woot")
  res.render('pokemon/index', {passedInData: "abc"});
});

module.exports = router;
