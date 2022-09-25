const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
// Trang Admin gồm quản lí phim, quản lí user, quản lí quốc gia, thể loại,

router.get('/', adminController.index);
router.post('/create-genre',adminController.createGenres);
router.post('/create-country',adminController.createCountry);
router.delete('/delete-genre/:id',adminController.deleteGenres);
router.delete('/delete-country/:id',adminController.deleteCountry);
router.post('/create-caster',adminController.createCaster);
router.get('/edit-caster/:id',adminController.editCaster);
router.put('/update-caster/:id',adminController.updateCaster);
router.delete('/delete-caster/:id',adminController.deleteCaster);
router.post('/create-director',adminController.createDirector);
router.get('/edit-director/:id',adminController.editDirector);
router.put('/update-director/:id',adminController.updateDirector);
router.delete('/delete-director/:id',adminController.deleteDirector);
module.exports = router;