const express = require('express');
const router = express.Router();
const user = require('../routes/userRoutes');
const tag = require('../routes/tagRoutes');

router.use('/user', user);
router.use('/tag', tag);

module.exports = router;