const res = require("express/lib/response");
const Movie = require('../models/Movie')
const { mutipleMongooseToObject } = require('../util/mongoose');
const Genres = require('../models/Genre')
const Country = require('../models/Country')
const Slide = require('../models/Slide')

class SiteController {
  //Trang chủ chuyển nội dung phim, thể loại, quốc gia.
  //[GET] Movie.
  index(req, res, next) {
    res.status(300).json({success: true.valueOf, message:'đây là trang chủ'})
  }
  //[GET] Genres.
  getGenres(req,res,next){
    Genres.find({})
            .then(genres =>{
                res.status(300).json({success: true, genres:mutipleMongooseToObject(genres)});
            })
            .catch(next);
  }
  //[GET] Country
  getCountry(req,res,next){
    Country.find({})
            .then(country =>{
                res.status(300).json({success: true, country:mutipleMongooseToObject(country)});
            })
            .catch(next);
  }
  //[GET] slide
  getSlide(req,res,next){
    Slide.find({})
        .then(slide =>{
          res.status(300).json({success: true, silde:mutipleMongooseToObject(slide)});
        })
        .catch(next)
  }
}

module.exports = new SiteController();
