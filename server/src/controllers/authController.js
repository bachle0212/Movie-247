const User = require('../models/User');
const argon2 = require('argon2')

class AuthController{
    //[POST] User registation
    async userReg(req,res,next){
            const user = new User(req.body); 
            //validation
            const userExists = User.findOne({username: user.username});
            if(userExists) return res.status(300).json({success:false, message:'Username already exists'});
            const emailExists = User.findOne({email: user.email});
            if(emailExists) return res.status(300).json({success:false, message:'Email already exists'});
            //save user
        try{
            const hashedPassword = await argon2.hash(user.password);
            user.password = hashedPassword;
            await user.save();  

            const accessToken = await signAccessToken({
                userID: user._id,
                role: user.role,
              });
            
            return res.status(201).json({success:true, accessToken,user, message:'User created'})

        }catch(error){
            res.json(500).json({success:false, message: error.message});
        }
    }

    userLogin(req,res,next){
        const {username, password } = req.body;


    }

}