const mongoose = require("mongoose");

const tempMobileSchema = new mongoose.Schema({
    mobileNumber: { 
        type: String, 
        required: true, 
    },
    isVerify: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true,
})

const TempMobileInfo = mongoose.model("TempMobile",tempMobileSchema);

module.exports = TempMobileInfo