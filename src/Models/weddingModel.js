const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    groomsName: { 
        type: String, 
        required: true, 
    },
    bridesName: { 
        type: String, 
        required: true, 
    },
    marriageDate: {
        type: Date, 
        required: true, 
    },
    totalBudget: {
        type: Number,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true,
})

const WeddingInfo = mongoose.model("Wedding",weddingSchema);

module.exports = WeddingInfo