const express = require('express');
const { getAllTag, getTag, createTag, updateTag, deleteTag } = require('../controllers/tagControllers');
const router = express.Router();

router.get('/', getAllTag);
router.get('/:id', getTag);
router.post('/', createTag);
router.put('/:id', updateTag);
router.delete('/delete/:id', deleteTag);

module.exports = router;