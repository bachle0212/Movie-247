const res = require("express/lib/response");
const Genre = require('../models/Genre');
const Country = require('../models/Country');
const Caster = require("../models/Caster");
const Director = require('../models/Director');
class adminController{
    // [GET] Trang chủ admin
    index(req, res, next) {
        res.send('Đây là trang chủ admin');
    }
    // [POST]Create new genres
    async createGenres(req,res,next){
      const matchURL = await Genre.findOne({name_URL:req.body.name_URL});
      if(matchURL) return res.status(300).json({success:false, message:'Already exists URL'});

      //save
      const genre = new Genre(req.body);
      console.log(genre);
      genre.save()
        .then(() => res.status(200).json({success:true, message:'Genre created',genre}))
        .catch(error => res.status(300).json({success:false,message:'Error'}))
    }
    // [DELETE] Delete Genres
    deleteGenres(req,res,next){
      Genre.deleteOne({_id:req.params.id})
        .then(() =>res.status(203).json({success:true,message:'Genre deleted'}))
        .catch(error => res.status(300).json({success:false, message:'Genre not found'}))
    }

    //[POST] Create new Country
    async createCountry(req,res,next){
      const matchURL = await Country.findOne({name_URL:req.body.name_URL});
      if(matchURL) return res.status(300).json({success:false, message:'Already exists URL'});
      //save
      const country = new Country(req.body);
      console.log (Country);
      country.save()
        .then(() => res.status(200).json({success:true, message: 'Country created',country}))
        .catch(error => res.status(300).json({success:false,message:'Error'}))
    }

    //[DELETE] delete Country
    deleteCountry(req,res,next){
      Country.deleteOne({_id:req.params.id})
        .then(() =>res.status(203).json({success:true,message:'Country deleted'}))
        .catch(error => res.status(300).json({success:false, message:'Country not found'}))
    }

    //[POST] Create new caster
    async createCaster(req,res,next){
      const caster = await Caster.findOne({name: caster.name});
      if(caster) return res.status(300).json({success:false, message:'Already exists caster name'});
      //save

      caster = new Caster(req.body);
      caster.save()
        .then(() => res.status(200).json({success:true, message:'Caster Creadted'}, mongooseToObject(caster)))
        .catch(error => res.status(300).json({success:false,message:'Error'}))

    }
    //[EDIT] Edit caster
    editCaster(req,res,next){
      Caster.findById(req.params.id)
        .then(caster => res.status(200).json(mongooseToObject(caster)))
        .catch(error => res.status(300).json({success:false, message:error.message}))
    }
    updateCaster(req,res,next){
      Caster.updateOne({_id:req.params.id},req.body)
        .then(res.status(200).json({success: true, message:"Updated"}))
        .catch(error => res.status(300).json({success:false, message:"Interval server error"}));
    }
    //[DELETE] remove caster
    deleteCaster(req,res,next){
      Caster.deleteOne({_id:req.params.id})
        .then(() =>res.status(203).json({success:true,message:'Caster deleted'}))
        .catch(error => res.status(300).json({success:false, message:'Caster not found'}))
    }  
    //[POST] Create new director
    async createDirector(req,res,next){
      const director = await Director.findOne({name: caster.name});
      if(director) return res.status(300).json({success:false, message:'Already exists caster name'});
      //save

      director = new Director(req.body);
      director.save()
        .then(() => res.status(200).json({success:true, message:'director Creadted'}, director))
        .catch(error => res.status(300).json({success:false,message:'Error'}))

    }
    //[EDIT] Edit director
    editDirector(req,res,next){
      Director.findById(req.params.id)
        .then(director => res.status(200).json(mongooseToObject(director)))
        .catch(error => res.status(300).json({success:false, message:error.message}))
    }
    //[PUT] Update director
    updateDirector(req,res,next){
      Director.updateOne({_id:req.params.id},req.body)
        .then(res.status(200).json({success: true, message:"Updated"}))
        .catch(error => res.status(300).json({success:false, message:"Interval server error"}));
    }
    //[DELETE] remove director
    deleteDirector(req,res,next){
      Director.deleteOne({_id:req.params.id})
        .then(() =>res.status(203).json({success:true,message:'director deleted'}))
        .catch(error => res.status(300).json({success:false, message:'Caster not found'}))
    }
    //[PUT] update user role
    updateUser(req,res,next){
      console.log(req.body);
    }
    //[DELETE] remove user
    deleteUser(req,res,next){
      console.log(req.body);
    }
}


module.exports = new adminController();