var bcrypt = require('bcryptjs');
var q = require('q');

module.exports = function (Schema) {
    return {
        registerStudent: function (details) {
            console.log('register invoked.');
            var promise = q.defer();
            var std = Schema({
                fullname: details.name,
                email: details.email,
                rollnum: details.rollnum,
                pwd: (function ($pwd) {
                    return bcrypt.hashSync($pwd, bcrypt.genSaltSync(10));
                } (details.password))
            });

            Schema.findOne({ $or: [{ rollnum: std.rollnum }, { email: std.email }] }, function (err, result) {
                if (err) throw err;

                if (result) {
                    promise.reject({ msg: 'Email or Rollnumber already exists' });
                } else {

                    std.save(function (err) {
                        if (err) {
                            promise.reject({ msg: 'Email or Rollnumber already exists' });
                        } else {
                            console.log('Student has been saved.');
                            promise.resolve({ msg: 'Student has been saved' });
                        }
                    })
                }
            })
            return promise.promise;
        },

        login: function (details) {
            var toSearch = '';
            // console.log(details);
            if(details.email) toSearch = {email: details.email}
            else toSearch = {rollnum: details.rollnum}              
            var promise = q.defer();
            
            Schema.findOne(toSearch, function (err, result) {
                if (err) throw err;

                if (result) {
                    console.log(result);
                    bcrypt.compare(details.pwd, result.pwd, function (err, match) {
                        if (err)
                            throw err;
                        match ?
                            promise.resolve(result.email || { msg: 'Access Granted! Logging in...' })
                            :
                            promise.reject({ msg: 'Access Denied! No Match Found.' });
                    
                });
                } else {
                    promise.reject({ msg: 'No Such Account Exists' });
                }
            })
            return promise.promise;
        },
        
        registerTeacher: function(details){
            var promise  = q.defer();
            
            var teacher  = new Schema({
                fullname : details.fullname,
                email: details.email,
                contact: details.contact,
                subjects: details.subjects,
                departments : details.department,
                phd: details.phd,
                pwd: (function ($pwd) {
                    return bcrypt.hashSync($pwd, bcrypt.genSaltSync(10));
            } (details.pwd)),
                tasks: details.tasks || []
            })
            
            teacher.save(function(err){
                if(err) {
                    promise.reject({msg: 'unable to save data'});
                    throw err;
                }
                console.log('person has been saved,');
                promise.resolve({msg: 'person has been saved,'});
            })
            return promise.promise;
        }
    }
}   