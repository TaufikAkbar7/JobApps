const express = require('express');
const router = express.Router();
const { getAllUser, createUser, updateUser, deleteUser, getUser } = require('../controllers/userControllers');

router.get('/', getAllUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;