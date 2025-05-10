var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola contactanos a nuestro correo y envianos tus dudas');
});

module.exports = router;