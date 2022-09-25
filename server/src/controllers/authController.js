const User = require('../models/User');
const argon2 = require('argon2');
const { signAccessToken } = require('../middlewares/auth');

class AuthController{
    //[POST] User registation
    async userReg(req,res,next){
            const {username,password,email} = req.body; 
            //validation
            console.log(req.body);
            const userExists = await User.findOne({username: username});
            if(userExists) return res.status(300).json({success:false, message:'Username already exists'});
            const emailExists = await User.findOne({email: email});
            if(emailExists) return res.status(300).json({success:false, message:'Email already exists'});
            //save user
        try{
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({
                username:username,
                password:hashedPassword,
                email: email,
            })
            await newUser.save();  

            const accessToken = await signAccessToken({
                userID: newUser._id,
                role: newUser.role,
              });
            
            return res.status(201).json({success:true, accessToken,user, message:'User created'})

        }catch(error){
            return res.status(500).json({success:false, message: error.message});
        }
    }
    //[POST] User login /signin
    userLogin(req,res,next){
        const {username, password} = req.body;
        if(!username) return res.status(300).json({success:false, message:'Missing username or password'});
        try{
            User.findOne({username:username}).exec(
                async (error,user) =>{
                    if(error) return res.status(400).json({sucess:false, message:'Username or password incorrect'});
                    if(user) {
                        const validPassword = await argon2.verify(user.password, password);
                        if(validPassword){
                            const token = await signAccessToken({
                                userId: user._id,
                                role: user.role
                            })
                            return res.status(200).json({success:true,message:"User logged", token:token,user});
                        }
                        else{
                            return res.status(400).json({sucess:false, message:'Username or password incorrect'});
                        }
                    }
                }
            )
        }catch(error){
            res.json(500).json({success:false, message: error.message});
        }

    }

}
module.exports = new AuthController();