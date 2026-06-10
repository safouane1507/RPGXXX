const express = require('express');
const { getByKey, upsert } = require('../controllers/content.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { isAdmin } = require('../middleware/role.middleware');

const router = express.Router();

router.get('/:key',  getByKey);
router.put('/:key',  authenticate, isAdmin, upsert);

module.exports = router;
