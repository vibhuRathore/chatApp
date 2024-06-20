import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    Password :{
        type : String,
        required : true,
        minlength : 9
    },
    Gender : {
        type : String,
        required : true,
        enum : ["Male" , "Female"]
    }
});

const User = mongoose.model("User",userSchema);

export default User;

