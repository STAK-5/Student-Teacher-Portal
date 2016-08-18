var express = require('express');
var router = express.Router();
var UserModel = require('../models/user.dbmodel.js');
var bcrypt = require('bcryptjs');
router.post('/registration', function(req, res, next){

    console.log('___ REQUEST BODY PARAMS ___');
    var user = {
        username: req.body.username,
        rollnum: req.body.rollno,
        email: req.body.email,
        password: req.body.password
    }
    // console.log(user)
    // UserModel.createUser(user);
    var hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
    user.password = hash;
    var _User = new UserModel(user);
    _User.save(function(err){
        if(err)
            console.log(err);

        console.log('___ PERSON HAS BEEN SAVED ___');
        res.status(200).send({msg: 'Person has been saved'});
    })
})

router.post('/login', function(req, res, next){
    console.log('request made with args: ', req.body);
    UserModel.findOne({rollnum:req.body.id}, function(err, users){
        if(err)
            console.log(err);
        if(users){

            bcrypt.compare(req.body.password, users.password,  function(err, compared){
                if(err)
                    res.status(500).json({"msg":"Invalid Password"});
                
                if(compared)
                    res.status(200).json({"msg":"Password Matched", args: users});
            })
        } else {
            res.status(501).json({"msg":"Invalid Username or Password"});
        }
    })
})
module.exports = router;
