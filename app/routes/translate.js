var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('translate/input');
  });

/* TRANSLATE from english to solresol. */
router.get('/en-srs/:word', function(req, res, next) {
    //console.log(req)
  res.render('translate/en-srs', { word: req.params.word });
});

/* TRANSLATE from solresol to english. */
router.get('/srs-en/:word', function(req, res, next) {
  res.render('translate/srs-en', { word: req.params.word });
});

module.exports = router;