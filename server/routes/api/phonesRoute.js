const router = require('express').Router();
const phones = require('../../db/phone.json');

router.get('/phones', (req, res) => {
  res.json(phones);
});

module.exports = router;
