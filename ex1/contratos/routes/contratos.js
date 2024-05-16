var express = require('express');
var router = express.Router();

var Contrato = require('../controllers/contratos');

router.get('/', function(req, res, next) {
    const entidade = req.query.entidade
    const tipo = req.query.tipo

    // /contratos?entidade=eee
    if (entidade) {
      Contrato.getByEntidade(entidade).then(dados => {
        res.json(dados)
      })
    } 

    // /contratos?tipo=aaa
    else if (tipo) {
        Contrato.getByTipo(tipo).then(dados => {
            res.json(dados)
        })
    }

    // /contratos
    else {
        Contrato.list()
            .then(dados => res.json(dados))
            .catch(erro => res.status(500).json(erro))
    }
});

// contratos/entidades
router.get('/entidades', function(req, res, next) {
    Contrato.listEntidades()
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

// contratos/tipos
router.get('/tipos', function(req, res, next) {
    Contrato.listTipos()
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

// contratos/:_id
router.get('/:_id', function(req, res, next) {
    Contrato.getById(req.params._id)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

// post contratos
router.post('/', function(req, res, next) {
    Contrato.insert(req.body)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

// put contratos/:_id
router.put('/:_id', function(req, res, next) {
    Contrato.update(req.params._id, req.body)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

// delete contratos/:_id
router.delete('/:_id', function(req, res, next) {
    Contrato.remove(req.params._id)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro))
});

module.exports = router;