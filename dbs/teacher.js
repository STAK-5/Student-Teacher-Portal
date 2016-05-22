module.exports = function(mongoose){
    var Sch = mongoose.Schema({
        fullname: String, 
        email: String, 
        contact: String,
        subjects: [],
        departments: [],
        phd: Boolean,
        pwd: String, 
        tasks: []
});
   var model = mongoose.model('teacherSch', Sch);
   
   return model;
}
