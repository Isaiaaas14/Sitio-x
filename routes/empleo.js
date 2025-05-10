var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola envianos tu CV a nuestro correo y te contactaremos');
});

module.exports = router;