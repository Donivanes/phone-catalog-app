const router = require('express').Router();

router.use('/api', require('./api/phonesRoute'));

module.exports = router;
