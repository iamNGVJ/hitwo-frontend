const router = require('express').Router();

router.get('/login', (req, res) => {
    console.log('/login reached');
    res.render('/views/unprotected/login.ejs');
});

module.exports = router;