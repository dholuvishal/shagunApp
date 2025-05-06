const mongoose = require("mongoose");
const { USER_ROLE } = require("../Constants/userConstants.js");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    mobileNumber: { 
        type: String, 
        required: true, 
    },
    role: { 
        type: String, 
        enum: Object.values(USER_ROLE), 
        default: USER_ROLE.USER
    },
    profilePic: {
        type: String,
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
})

const UserInfo = mongoose.model("User",userSchema);

module.exports = UserInfo