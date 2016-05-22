module.exports = function(mongoose){
    var stdSchema = mongoose.Schema({
        fullname: String,
        email: String, 
        rollnum: String, 
        pwd: String
});
    stdSchema.methods.savef = function(details){
        console.log('Schema Working');
        return details;
 
   }

    var stdModel = mongoose.model('stdSchema', stdSchema);
    
    return stdModel;
}