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

    //[POST] upload video to mega
    async uploadVideo(req,res,next){
        console.log(req.files.file);
        // upload to mega
        const path = req.files.file.path;
        console.log('call');
        const embedCode = await mega.checkVideoExistsAndUpload(path,req.files.file.name);
        if(!embedCode){
            res.status(400).json({success:false,message:'Already exists movie name'});
        }
        else{
            res.status(200).json({success:true,embedCode});
        }
    }
    //[POST] upload image to mega
    async uploadImage(req,res,next){
        console.log(req.files.file);
        // upload to mega
        const path = req.files.file.path;
        console.log('call');
        const embedCode = await mega.checkImageExistsAndUpload(path,req.files.file.name);
        if(!embedCode){
            res.status(400).json({success:false,message:'Already exists image name'});
        }
        else{
            res.status(200).json({success:true,embedCode});
        }
    }

    //[POST] create Movie
    createMovie(req,res,next){
        console.log(req.body);
    }

    //[PUT] Edit Movie
    editMovie(req,res,next){
        console.log(req.body);
    }
    
    //[PATCH,DELETE] Delete Movie
    deleteMovie(req,res,next){
        console.log(req.body);
    }

    //[POST] create new episode of movie
    createNewEpisode(req,res,nex){
        console.log(req.body);
    }
    //[PUT] Edit Episode
    editEpisode(req,res,next){
        console.log(req.body);
    }
    //[DELETE] delete episode
    deleteEpisode(req,res,next){
        console.log(body);
    }


    
}

module.exports = new MovieController();