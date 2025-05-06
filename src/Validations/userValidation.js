const Joi = require("joi");

const registerUserValidation = Joi.object({
    name: Joi.string()
      .min(2)
      .max(100)
      .required(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .trim()
      .lowercase(),
  
    mobileNumber: Joi.string()
      .pattern(/^[0-9]{10}$/) 
      .required(),
  });

const resendOtpValidation = Joi.object({
    mobileNumber: Joi.string()
      .pattern(/^[0-9]{10}$/) 
      .required(),
  })

const verifyMobileValidation = Joi.object({
    mobileNumber: Joi.string()
    .pattern(/^[0-9]{10}$/) 
    .required(),

    otp: Joi.string()
    .required()
  })

const updateProfileValidation = Joi.object({
    id: Joi.string()
    .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
    .optional()
    .allow(null)
    .allow(""),

    name: Joi.string()
      .min(2)
      .max(100)
      .optional(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .trim()
      .lowercase()
      .optional(),
  
    mobileNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .optional(),
  });

const deleteUserValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
    .optional()
    .allow(null)
    .allow(""),
  })

const idValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
  })

const addWeddingValidation = Joi.object({
    groomsName: Joi.string()
      .min(2)
      .max(100)
      .required(),
    
    bridesName: Joi.string()
      .min(2)
      .max(100)
      .required(),
  
    marriageDate: Joi.string()
      .pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "DD/MM/YYYY")
      .required(),
  });
  
  const updateWeddingValidation = Joi.object({
    id: Joi.string()
      .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
      .required(),
    groomsName: Joi.string()
      .min(2)
      .max(100),
    
    bridesName: Joi.string()
      .min(2)
      .max(100),
  
    marriageDate: Joi.string()
      .pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "DD/MM/YYYY"),
  });

const deleteWeddingValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
  })

const getWeddingValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    userId: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
  })

const addShagunValidation = Joi.object({
    wedding: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
    name: Joi.string().min(2).max(50).required(),
    shagunAmount: Joi.number().min(1).required(),
    city: Joi.string().required(),
    mobileNumber: Joi.string().pattern(/^\d{10}$/, "Mobile Number").required(),
    gift: Joi.string(),
  });

  const editShagunValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    wedding: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    name: Joi.string().min(2).max(50),
    shagunAmount: Joi.number().min(1),
    city: Joi.string(),
    mobileNumber: Joi.string().pattern(/^\d{10}$/, "Mobile Number"),
    gift: Joi.string(),
  });

  const addBudgetValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
    budget: Joi.number().required()
  });

  const deleteBudgetValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
  });

  const addExpenseValidation = Joi.object({
    wedding: Joi.string()
      .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
      .required(),
    expenseFor: Joi.string()
      .min(2)
      .max(100)
      .required(),
    totalAmount: Joi.number()
      .min(0)
      .required(),
    paidDepositAmount: Joi.number()
      .min(0)
      .required(),
    pendingAmount: Joi.number()
      .min(0)
      .required()
  });

const editExpenseValidation = Joi.object({
    expenseId: Joi.string()
      .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
      .required(),
    expenseFor: Joi.string()
      .min(2)
      .max(100),
    totalAmount: Joi.number()
      .min(0),
    paidDepositAmount: Joi.number()
      .min(0),
    pendingAmount: Joi.number()
      .min(0)
  });
  
  const deleteExpenseValidation = Joi.object({
    expenseId: Joi.string()
      .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
      .required(),
  });

  const addGuestValidation = Joi.object({
    wedding: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
    guest_name: Joi.string().min(2).max(50).required(),
    total_family_members: Joi.number().min(1).required(),
    city: Joi.string().required()
  });

  const editGuestValidation = Joi.object({
    guestId: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
    guest_name: Joi.string().min(2).max(50),
    total_family_members: Joi.number().min(1),
    city: Joi.string(),
  });

  const deleteGuestValidation = Joi.object({
    guestId: Joi.string()
      .pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId")
      .required(),
  });

  const getShagunValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    weddingId: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
    name: Joi.string().trim().min(1),
    minAmount: Joi.number().min(0),
    maxAmount: Joi.number().min(0),
  }).prefs({ convert: true });
  
  

  const getGuestValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    weddingId: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
  });

  const getExpenseValidation = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId"),
    weddingId: Joi.string().pattern(/^[a-fA-F0-9]{24}$/, "Mongoose ObjectId").required(),
  });

module.exports = {
    registerUserValidation,
    resendOtpValidation,
    verifyMobileValidation,
    updateProfileValidation,
    idValidation,
    deleteUserValidation,
    addWeddingValidation,
    updateWeddingValidation,
    deleteWeddingValidation,
    getWeddingValidation,
    addShagunValidation,
    editShagunValidation,
    addBudgetValidation,
    deleteBudgetValidation,
    addExpenseValidation,
    editExpenseValidation,
    deleteExpenseValidation,
    addGuestValidation,
    editGuestValidation,
    deleteGuestValidation,
    getShagunValidation,
    getGuestValidation,
    getExpenseValidation
}