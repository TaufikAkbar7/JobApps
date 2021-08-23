const express = require('express');
const router = express.Router();
const user = require('../routes/userRoutes');

router.use('/user', user);

module.exports = router;