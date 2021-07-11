var express = require('express');
var router = express.Router();
const Translator = require('../src/services/translator.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('translate/input');
});

/* TRANSLATE from english to solresol. */
router.get('/en-srs', async(req, res, next) => {
    try {
        const translatedWord = await Translator.translateToSolReSol(req.query.word)
        res.render('translate/en-srs', {
            word: req.query.word,
            translatedWord: translatedWord
        });
    } catch (error) {
        console.log(error)
        res.render('error', { error: error });
    }
});
// router.get('/en-srs/:word', function(req, res, next) {
//     res.render('translate/en-srs', { 
//         word: await Translator.translateToSolReSol(req.params.word)
//     });
// });


/* TRANSLATE from solresol to english. */
router.get('/srs-en', async function(req, res, next) {
    try {
        const translatedWord = await Translator.translateToEnglish(req.query.word)
        res.render('translate/srs-en', {
            word: req.query.word,
            translatedWord: translatedWord
        });
    } catch (error) {
        console.log(error)
        res.render('error', { error: error });
    }
});
// router.get('/srs-en/:word', async function(req, res, next) {
//     res.render('translate/srs-en', {
//         word: req.params.word,
//      });
// });

module.exports = router;
