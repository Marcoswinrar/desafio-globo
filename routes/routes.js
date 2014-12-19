module.exports = function (app) {

    var model = require('../model/suggestions.json');
    var utils = require('../utils/accent_fold.js');

    // Index
    app.get('/', function(req, res){
        res.render('index.ejs');
    });

    // Suggests
    app.get('/busca/suggests?:q', function(req, res){
        var text = utils.accent_fold(req.query.q);

        console.log(text);

        result = model.suggestions.filter(function(entry) {
            return utils.accent_fold(entry) && utils.accent_fold(entry).indexOf(text) !== -1
        });

        res.header("Access-Control-Allow-Origin", "*");
        res.json(result);
    });

    // Feature
    app.get('/busca/featureContent?:q', function(req, res){
        var text = utils.accent_fold(req.query.q);

        result =   model.hightlights.filter(function(obj) {
            return obj.queries.map(function(item){
                return utils.accent_fold(item).indexOf(text) !== -1;
            }).some(function(x) {
                return x;
            });
         });

        res.header("Access-Control-Allow-Origin", "*");
        res.json(result);
    });
}