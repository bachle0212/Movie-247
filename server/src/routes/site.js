const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/genres',siteController.getGenres);
router.get('/country',siteController.getCountry);
router.get('/slide',siteController.getSlide);


module.exports = router;
