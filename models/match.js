const mongoose = require("mongoose");

// model skeleton for matches
const matchSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    // videoUrl:{
    //     type:String,
    //     required:true
    // },
    description:{
        type:String
    },
    comments:{
        type:Array,
        default:[]
    },
    created:{
        type:Date,
        default:Date.now
    }

});

module.exports =  mongoose.model("Match",matchSchema);