var express = require('express');
var router = express.Router();
var matchModel = require('../models/matches')
var checkSessionAuth = require('../middlewares/checkSessionAuth')


/* GET home page. */
router.get('/matches', async function (req, res, next) {

    var match = await matchModel.find()
    console.log(match)
    res.render("match/lists", {
        varTitle: "Matches to be played",
        varmatches: match
    });


});

//ROUTE FOR A FORM PAGE THAT ADDS A PRODUCT 
router.get('/add-match', checkSessionAuth, async function (req, res, next) {

    res.render("match/add-match");

});

router.post('/match/add-match', async function (req, res, next) {
    let match = new matchModel(req.body);
    await match.save();
    res.redirect('/matches');

});

module.exports = router;