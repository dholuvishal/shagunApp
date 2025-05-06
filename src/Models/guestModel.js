const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
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
    guest_name: { 
        type: String, 
        required: true, 
      },
    total_family_members: { 
        type: Number, 
        required: true, 
      },
    city: {
        type: String, 
        required: true, 
      },
},
{
    timestamps: true,
})

const GuestInfo = mongoose.model("Guest",GuestSchema);

module.exports = GuestInfo