var mongoose=require("mongoose");

// Genre Schema

var genreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Genre=module.exports=mongoose.model('Genres',genreSchema);

// get Genres 

module.exports.getGenres=function(callBack,limit){  
Genre.find(callBack).limit(limit);
}   