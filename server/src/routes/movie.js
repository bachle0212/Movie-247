const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();


router.get('/',movieController.index);
// router.post('/create',movieController.store);
// router.post('/upload',movieController.upload);

module.exports = router;