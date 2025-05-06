const mongoose = require("mongoose");

const shagunSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    wedding: {
        type: mongoose.Schema.ObjectId,
        ref: "Wedding",
        required: true,
      },
    name: { 
        type: String, 
        required: true, 
    },
    shagunAmount: { 
        type: Number, 
        required: true, 
    },
    city: {
        type: String, 
        required: true, 
    },
    mobileNumber: {
        type: String,
        require: true
    },
    gift: {
        type: String,
    }
},
{
    timestamps: true,
})

const ShagunInfo = mongoose.model("Shagun",shagunSchema);

module.exports = ShagunInfo