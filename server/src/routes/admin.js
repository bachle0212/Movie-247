const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
// Trang Admin gồm quản lí phim, quản lí user, quản lí quốc gia, thể loại,

router.get('/', adminController.index);


module.exports = router;