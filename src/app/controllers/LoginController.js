const Course = require('../models/Course')
const {mongooseToObject} =require('../../util/mongoose')
const path = require('path');
const collection1 = require('../models/UserData')

class LoginController{
    signup(req,res){
        res.render('login/signup')
    }
    UpdateSignup(req,res,next){
        const data ={
            username:req.body.username,
            password:req.body.password
        }
        const userData = new collection1(req.body);
        userData.save()
            .then(()=> res.redirect('/login'))
            .catch(next)
    }
    login(req,res){
        res.render('login/login')
    }
    async Checklogin(req,res){
        try{
            const check = await collection1.findOne({username:req.body.username})
            if(check.password === req.body.password){
               res.redirect('/')
            }
            else{
                res.send('wrong password')
            }
        }
        catch{
            res.send('wrong details')
        }
    }

    

}
module.exports=new LoginController;

