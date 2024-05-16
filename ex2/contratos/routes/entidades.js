var express = require('express');
var router = express.Router();

var Contrato = require('../controllers/contratos');

router.get('/:nipc', async function(req, res, next) {
    try {
      const somatorio = await Contrato.getSomatorioContratos(req.params.nipc);
      const dados = await Contrato.getByNIPC(req.params.nipc);
      res.render('entidadePage', {
        title: 'Contratos da entidade ' + req.params.nipc,
        somaContratos: somatorio,
        lista: dados
      });
    } catch (error) {
      res.status(500).jsonp(error);
    }
  });
  

module.exports = router;