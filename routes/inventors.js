let express = require('express');
let router = express.Router();

/* GET listado de inventores */
router.get('/', function(req, res, next) {
  res.send('Listado de inventores');
});

// GET de un inventor
// /inventors/56
router.get('/:id', (req,res)=>{
    res.send('Obtiene un inventor');
});

// POST alta de un inventor
router.post('/', (req,res)=> {
    res.send('Alta de inventor');
});

// PUT modificacion de un inventor
router.put('/:id', (req,res)=>{
    res.send(`Modificación del inventor ${req.params.id}`);
});

router.delete('/:id', (req,res)=> {
    res.send(`Eliminacion del inventor ${req.params.id}`);
});

module.exports = router;