var express = require('express');
var router = express.Router();

var Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contrato.list()
            .then(dados => res.render('index', {title: 'Contratos', lista: dados}))
            .catch(erro => res.status(500).json(erro))
});

router.get('/:_id', function(req, res, next) {
  Contrato.getById(req.params._id)
            .then(dados => res.render('contratoPage', {title: dados.idcontrato, contrato: dados}))
            .catch(erro => res.status(500).json(erro))
});

module.exports = router;
