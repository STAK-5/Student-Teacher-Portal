module.exports = function(mongoose){
    var fSchema = mongoose.Schema({
        title: String, 
        department: String,
        semester: String, 
        subject:  String, 
        Year: String,
        impnote: String,
        originalname: String, 
        mime: String,
        filename: String, 
        size: Number
    });
    
    var fileModel = mongoose.model('fschema', fSchema);
    return fileModel;
}