var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.get('/', (req, res, next) => {
  res.render('gym/index')
})
module.exports = router