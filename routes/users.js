var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Ejemplo de usuarios');
});

module.exports = router;
