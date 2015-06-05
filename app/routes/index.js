var express = require('express'),
  logger = require('winston'),
  router = express.Router();

//Include route modules

router = require('./user')(router);

module.exports = router;