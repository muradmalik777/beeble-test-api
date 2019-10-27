const express = require('express');
const router = express.Router();

require('../controllers/ItemController')(router);

module.exports = router;