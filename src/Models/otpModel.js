const mongoose = require("mongoose");
const { OTP_TYPE } = require("../Constants/userConstants.js");

const otpSchema = new mongoose.Schema(
  {
    mobileNumber: { 
      type: String, 
      required: true, 
    },
    otp: { 
        type: String, 
        required: true, 
        minlength: 6 
    },
    type: {
        type: String,
        required: true,
        enum: Object.values(OTP_TYPE),
        default: OTP_TYPE.MOBILE,
    },
  },
  { 
    timestamps: true 
});

otpSchema.index({ userId: 1 });
const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
