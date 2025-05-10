var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola somos una empresa dedicada a la venta de indumentaria, contáctanos para más información');
});

module.exports = router;