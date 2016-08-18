var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/stp');

var User = mongoose.Schema({
    username: {type: String, required: true},
    rollnum: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

var userModel = module.exports = mongoose.model('Users', User);
module.exports.createUser = function (newUser) {
        try {
            newUser.save(function (err) {
                if (err) throw err;
                console.log('Person has been saved!');
            })
        } catch (exc) {
            console.log('unable to save person: [exception] ', exc);
        }

    }
