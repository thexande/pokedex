var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send("woot")
  res.render('trainers/index', {passedInData: "abc"});
});

module.exports = router;
