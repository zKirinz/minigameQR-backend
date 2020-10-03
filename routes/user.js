const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

// router.post('/register', user_controller.register);
router.post('/register', user_controller.register);

router.get('/start', user_controller.start);
// router.get('/register', (req,res, next) => res.send("ok"));
router.post('/end', user_controller.end);

// router.get('/reset', user_controller.resetToken);

module.exports = router;
