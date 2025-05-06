const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
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
    expenseFor: { 
        type: String, 
        required: true, 
    },
    totalAmount: { 
        type: Number, 
        required: true, 
    },
    paidDepositAmount: { 
        type: Number, 
        required: true, 
    },
    pendingAmount: { 
        type: Number, 
        required: true, 
    },
},
{
    timestamps: true,
})

const ExpenseInfo = mongoose.model("Expense",expenseSchema);

module.exports = ExpenseInfo