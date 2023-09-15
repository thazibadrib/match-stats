const mongoose = require("mongoose");

//model skeleton for user 
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    isSignedIn:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("User",userSchema);