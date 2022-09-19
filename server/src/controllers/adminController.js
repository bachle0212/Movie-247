const res = require("express/lib/response");


class adminController{
    // [GET] Trang chủ admin
    index(req, res, next) {
        res.send('Đây là trang chủ admin');
    }
    // [POST]Create new genres
    createGenres(req,res,next){
      console.log(req.body);
    }
    // [DELETE] Delete Genres
    deleteGenres(req,res,next){
      console.log(req.body)
    }

    //[POST] Create new Country
    createCountry(req,res,next){
      console.log(req.body)
    }
    //[DELETE] delete Country
    deleteCountry(req,res,next){
      console.log(req.body);
    }

    //[POST] Create new caster
    createCaster(req,res,next){
      console.log(req.body);
    }
    //[EDIT] Edit caster
    editCaster(req,res,next){
      console.log(req.body);
    }
    //[DELETE] remove caster
    deleteCaster(req,res,next){
      console.log(req.body);
    }  
    //[POST] Create new director
    createDirector(req,res,next){
      console.log(req.body);
    }
    //[EDIT] Edit director
    editDirector(req,res,next){
      console.log(req.body);
    }
    //[DELETE] remove director
    deleteDirector(req,res,next){
      console.log(req.body);
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