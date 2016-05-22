module.exports = function (mongoose) {
  var express = require('express');
  var router = express.Router();
  var stdModel = require('./../dbs/std.js')(mongoose);
  var teaModel = require('./../dbs/teacher.js')(mongoose);
  var fileModel = require('./../dbs/files.js')(mongoose);
  var multer = require('multer');
  var upload = multer({ dest: ' uploads/' });
  
  var activeEmail = '';
  
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('login', { title: 'Express' });
  });

  router.post('/api/register', function (req, res) {

    var myModel = req.body.subjects ? teaModel : stdModel;
    var mongom = require('./../dbs/mongom.js')(myModel);
    var register = myModel == stdModel ? mongom.registerStudent : mongom.registerTeacher;

    register(req.body)
      .then(function (success) {
        console.log(success)
        res.status(200).send();
      }, function (err) {
        // error handler  
        console.log(err)
        res.status(500).send(err);
      })
  })

  router.post('/api/login', function (req, res) {
    console.log('/api/login: ', req.body);
    var myModel = req.body.email ? teaModel : stdModel;
    var mongom = require('./../dbs/mongom.js')(myModel);
    
    mongom.login(req.body)
      .then(function (result) {
        activeEmail = result;
        console.log('active emial : ', activeEmail)
        res.status(200).send(result);
      }, function (err) {
        res.status(404).send(err);
      });
  })

  router.post('/api/teacher-add', function (req, res) {
    if (req.body != undefined) {
      console.log(req.body);
      res.status(200).send();
    }
  });

  router.post('/api/files',upload.single('avatar'), function (req, res) {

    console.log('body: ', req.body);
    console.log('file: ', req.file);
    var fileData = new fileModel({
      title: req.body.title,
      department: req.body.department,
      semester: req.body.semester,
      subject: req.body.subject,
      year: req.body.year,
      impnote: req.body.impnote,
      originalname: req.file.originalname,
      mime: req.file.mimetype,
      filename: req.file.filename,
      size: req.file.size
    })
    fileData.save(function (err) {
      if (err) throw err;

      console.log('file has been saved');
      res.status(200).send({ status: 'success', message: 'file has been saved' });
    })
  });
  router.get('/api/files',function(req, res){
    fileModel.find({}, function(err, result){
      if(err) throw err;
      res.status(200).send(result);
    })
  });
  
router.post('/api/add_tasks', function(req, res){
    console.log('activeEmail: ',activeEmail);
    teaModel.findOne({email: activeEmail}, {"pwd": false}, function(err, result){
      if(err) throw err;
      if(result){
        teaModel.update({email: activeEmail}, {$push: {tasks: req.body.task}}, function(err, updated){
          if(err) throw err;
          if(updated.ok == 1)
            res.status(200).send();
        })
      }
    })    
  })
  
  router.get('/api/tasks', function(req, res){
    teaModel.findOne({email: activeEmail}, function(err, result){
      if(err) throw err;
      
      if(result){
        res.status(200).send(result.tasks);
      }
    })
  })

  router.post('/api/remove_task', function(req, res){
    console.log(req.body);
    teaModel.findOne({email: activeEmail}, function(err, result){
      if(err) throw err;
      if(result) {
        teaModel.update({},{ $pull: {tasks: {$in: [req.body.task]}} }, function(err, result){
          if(err) throw err;
          if(result)
            res.status(200).send(); 
        });
      }
    })
  })
  
  return router;
}
