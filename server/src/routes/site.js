const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController');
const authController = require('../controllers/authController');



router.get('/', siteController.index);
router.get('/genres',siteController.getGenres);
router.get('/country',siteController.getCountry);
router.get('/slide',siteController.getSlide);
router.post('/login',authController.userLogin);
router.post('/register',authController.userReg);



module.exports = router;
