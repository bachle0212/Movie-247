const Movie = require('../models/Movie');
const { mutipleMongooseToObject, mongooseToObject } = require('../util/mongoose')
const mega = require('../config/mega');
const fs = require('fs');
const { AsyncLocalStorage } = require('async_hooks');
class MovieController{
    //[GET] Lấy danh sách phim
    index(req,res,next){
        Movie.find({})
            .then(movie =>{
                res.status(300).json({success: true, movie:mutipleMongooseToObject(movie)});
            })
            .catch(next);
    }
    async upload(req,res,next){
        console.log(req.files.file);
        // upload to mega
        const path = req.files.file.path;
        console.log('call');
        const embedCode = await mega.checkVideoExistsAndUpload(path,'test34a.mp4');
        if(!embedCode){
            res.status(400).json({success:false,message:'Already exists movie name'});
        }
        else{
            res.status(200).json({success:true,embedCode});
        }
    }
    store(req,res,next){
        console.log(req.body);
    }

}

module.exports = new MovieController();