var express = require('express');
var router = express.Router();

var standupController = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupController.list(req, res);
});

router.get('/newnote', function(req, res) {
	return standupController.getNote(req, res);
});

router.post('/newnote', function(req, res) {
	return standupController.create(req, res);
});

module.exports = router;
