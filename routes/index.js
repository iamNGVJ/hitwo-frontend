const router = require('express').Router();

router.get('/login', require('./views_unprotected'));

module.exports = router;