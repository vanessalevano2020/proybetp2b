let express = require('express');
let router = express.Router();
const dataInventor = require('./../data/Inventor');
const config = require('./config.js');
const verifyToken = require('./../src/middleware/verifyToken');

//GET listado de inventores
router.get('/', verifyToken, async function (req, res, next) {
  res.json(await dataInventor.getAllInventors());
});

// GET de un inventor
// /inventors/56
router.get('/:id', verifyToken, async (req, res) => {
  res.json(await dataInventor.getInventor(req.params.id));
});

// POST alta de un inventor
router.post('/', verifyToken, async (req, res) => {
  const inventor = req.body;
  await dataInventor.pushInventor(inventor);
  const inventorPersistido = await dataInventor.getInventor(inventor._id);
  res.json(inventorPersistido);
});

// PUT modificacion de un inventor
router.put('/:id', verifyToken, async (req, res) => {
  const inventor = req.body;
  inventor._id = req.params.id;
  await dataInventor.updateInventor(inventor);

  res.json(await dataInventor.getInventor(req.params.id));
});

router.delete('/:id', verifyToken, async (req, res) => {
  await dataInventor.deleteInventor(req.params.id);
  res.send('Inventor eliminado');
});

module.exports = router;
