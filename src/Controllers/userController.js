const User = require("../Models/userModel.js");
const Otp = require("../Models/otpModel.js");
const TempMobile = require("../Models/tempMobileModel.js");
const Wedding = require("../Models/weddingModel.js"); 
const Shagun = require("../Models/shagunModel.js");
const Expense = require("../Models/expenseModel.js");
const Guest = require("../Models/guestModel.js");
const { successResponse, errorResponse } = require("../Utils/responseMsg.js");
const { generateOTP } = require("../Utils/common.js");
const sendOTP = require("../Configs/sendOtp.js");
const sendMessage = require("../Configs/sendMsg.js");
const { OTP_TYPE } = require("../Constants/userConstants.js");
const moment = require("moment");
const { createToken } = require("../Utils/jwt.js");
const path = require("path");
const fs = require("fs");
const {deleteFile} = require("../Utils/common.js");
const { USER_ROLE } = require("../Constants/userConstants.js");

const demo = async (req, res, next) => {
    try{
        
        res
        .status(200)
        .json(
          successResponse(
            null,
            200,
            "Welcome to Shagun App!"
          )
        );
  

    }catch(error){
      console.error(`Error in userController:demo: ${error}`);
      next(error);
    }
}

const registration = async (req, res, next) => {
    try {
      const {
        name,
        email,
        mobileNumber
      }=req.body;

      const existsUser = await User.findOne({mobileNumber});

      if (existsUser) {
        if (existsUser.isDeleted) {
            existsUser.isDeleted = false;
            existsUser.name = name;
            existsUser.email = email;

            await existsUser.save();

            return res.status(200).json(
                successResponse(
                    existsUser,
                    200,
                    "Your account was reactivated successfully."
                )
            );
        }

        return res.status(409).json(
            errorResponse(409, "This mobile number is already in use. Please try registering with a different mobile number.")
        );
    }

      const user = await new User({
        name,
        email,
        mobileNumber
      })

      await user.save();

      res
      .status(201)
      .json(
        successResponse(
          user,
          201,
          "Registration successful. Welcome to Sagun App!"
        )
      );

    } catch (error) {
        if (error.code === 11000) {
            if (error.keyValue.email) {
              return res.status(409).json(
                errorResponse(409, "This email is already in use. Please try registering with a different email.")
              );
            }
        }

        console.error(`Error in userController:registration: ${error}`);
        next(error);
    }
  };

const resendOtp = async (req, res, next) => {
    try {
      const mobileNumber = req.query.mobileNumber;
  
      // const findUser = await User.findOne({ mobileNumber });
  
      // if (!findUser) {
      //   return res
      //     .status(404)
      //     .json(errorResponse(404, `User with ${mobileNumber} not found.`));
      // }
  
      const existingOtp = await Otp.findOne({
        $and: [{ type: OTP_TYPE.MOBILE }, { mobileNumber }],
      });
  
      if (!existingOtp) {
        const otp = generateOTP();
  
        const userOtp = new Otp({
          mobileNumber,
          otp: otp,
          type: OTP_TYPE.MOBILE,
        });
  
        await sendOTP(mobileNumber, otp);
  
        await userOtp.save();
  
        return res
          .status(201)
          .json(
            successResponse(
              null,
              201,
              "OTP sent successfully. Please check your mobile number for the verification code."
            )
          );
      }
  
      const otp = await generateOTP();
      existingOtp.otp = otp;
      await sendOTP(mobileNumber, otp)
      await existingOtp.save();
  
      res
        .status(201)
        .json(
          successResponse(
            null,
            201,
            "OTP sent successfully. Please check your mobile number for the verification code."
          )
        );
    } catch (error) {
      console.error(`Error in userController:resendOtp: ${error}`);
      next(error);
    }
  };

const verifyMobile = async (req, res, next) => {
    try {
      const { mobileNumber, otp } = req.body;

      const findUser = await User.findOne({ mobileNumber });
  
      if (!findUser) {
        return res
          .status(404)
          .json(errorResponse(404, `User with ${mobileNumber} not found.`));
      }
  
      if (findUser.isVerify == true) {
        const token = createToken(findUser);
        return res.json(successResponse({findUser,token}, 200, "Login successful! Welcome back!"));
      }

        await Otp.findOneAndDelete({ mobileNumber });

        const token = createToken(findUser);

        res.json(successResponse({findUser,token}, 200, "Login successful! Welcome back!"));

  
      // const existingOtp = await Otp.findOne({
      //   $and: [{ type: OTP_TYPE.MOBILE }, { mobileNumber }],
      // });
      // if (!existingOtp) {
      //   return res
      //     .status(400)
      //     .json(
      //       errorResponse(
      //         400,
      //         `Otp not found with this mobile number : ${mobileNumber}, Please request a new one.`
      //       )
      //     );
      // }
  
      // // Check if OTP has expired
      // const otpUpdatedAt = moment(existingOtp.updatedAt);
      // const expiryTime = otpUpdatedAt.add(process.env.OTP_EXPIRY_TIME, "minutes");
  
      // if (moment().isAfter(expiryTime)) {
      //   return res
      //     .status(410)
      //     .json(errorResponse(410, "OTP has expired. Please request a new one."));
      // }
  
      // if (existingOtp.otp == otp) {
        
      //   findUser.isVerify = true;

      //   await findUser.save();

      //   await Otp.findOneAndDelete({ mobileNumber });

      //    const token = createToken(findUser);

      //   res.json(successResponse({findUser,token}, 200, "Login successful! Welcome back!"));
      // } else {
      //   return res
      //     .status(400)
      //     .json(
      //       errorResponse(
      //         400,
      //         "Invalid OTP. Please check your email for the correct verification code."
      //       )
      //     );
      // }
    } catch (error) {
      console.error(`Error in userController:verifyMobile: ${error}`);
      next(error);
    }
  };

const logout = async (req, res, next) => {
    try {
     const userId = req.user._id;

        const user = await User.findById(userId);

        if (!user) {
            return res
              .status(404)
              .json(errorResponse(404, `User not found.`));
          }

        user.isVerify = false;

        await user.save();

        res
        .status(200)
        .json(
          successResponse(
            null,
            200,
            "User logout successfully."
          )
        );

    } catch (error) {
      console.error(`Error in userController:logout: ${error}`);
      next(error);
    }
  };
  
const verifyNewMobile = async (req, res, next) => {
    try {
      const { mobileNumber, otp } = req.body;
  
      const existingOtp = await Otp.findOne({
        $and: [{ type: OTP_TYPE.MOBILE }, { mobileNumber }],
      });
      if (!existingOtp) {
        return res
          .status(400)
          .json(
            errorResponse(
              400,
              `Otp not found with this mobile number : ${mobileNumber}, Please request a new one.`
            )
          );
      }
  
      // Check if OTP has expired
      const otpUpdatedAt = moment(existingOtp.updatedAt);
      const expiryTime = otpUpdatedAt.add(process.env.OTP_EXPIRY_TIME, "minutes");
  
      if (moment().isAfter(expiryTime)) {
        return res
          .status(410)
          .json(errorResponse(410, "OTP has expired. Please request a new one."));
      }
  
      if (existingOtp.otp == otp) {
        
        const tempMobile = await new TempMobile({
          mobileNumber,
          isVerify: true
        })
  
        await tempMobile.save();

        await Otp.findOneAndDelete({ mobileNumber });

        res.json(successResponse(null, 200, "Mobile number verify successfully."));
      } else {
        return res
          .status(400)
          .json(
            errorResponse(
              400,
              "Invalid OTP. Please check your email for the correct verification code."
            )
          );
      }
    } catch (error) {
      console.error(`Error in userController:verifyNewMobile: ${error}`);
      next(error);
    }
  };

const editProfile = async (req, res, next) => {
    try {
      const { id, name, email, mobileNumber } = req.body;
      const fileName = req.filename; 
      let userId = req.user._id;  

      if (req.user.role === 'admin' && id) {
        userId = id;
      }


      if(mobileNumber){
        const existingMobile = await User.findOne({ mobileNumber });

        if(existingMobile){
          return res.status(409).json(
            errorResponse(409, "This mobile number is already in use. Please try other mobile number.")
          );
        }

      }

      const existingUser = await User.findOne({ _id: userId, isVerify: true });

      if (!existingUser) {
        return res
          .status(404)
          .json(errorResponse(404, `User not found or not verified.`));
      }

      const updatedData = {};

      if (name) updatedData.name = name;
      if (email) updatedData.email = email;
      if (mobileNumber) {

        const newMobile = await TempMobile.findOne({mobileNumber});

        if(!newMobile){
          return res
          .status(403)
          .json(errorResponse(403, `Mobile number update requires verification.`));
        }

        updatedData.mobileNumber = newMobile.mobileNumber;
        updatedData.isVerify = newMobile.isVerify;
      }

      if (fileName) {
        if (existingUser.profilePic) {
          const oldProfilePicFileName = existingUser.profilePic.replace(
            `${process.env.APP_BASE_URL}/get/${existingUser.mobileNumber}/`,
            ""
          );

          const deleteProfilePicturePath = path.join(
            __dirname,
            `../Uploads/${existingUser.mobileNumber}/${oldProfilePicFileName}`
          );

          if (fs.existsSync(deleteProfilePicturePath)) {
            await deleteFile(deleteProfilePicturePath); 
          }
        }

        const imageLink = `${process.env.APP_BASE_URL}/get/${mobileNumber ?? existingUser.mobileNumber}/${fileName}`;
        updatedData.profilePic = imageLink; 
      }

      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,  
        runValidators: true, 
      });

      await TempMobile.findOneAndDelete({ mobileNumber });

      res
        .status(200)
        .json(
          successResponse(
            updatedUser,
            200,
            "User profile updated successfully."
          )
        );
    } catch (error) {
      console.error(`Error in userController:editProfile: ${error}`);
      next(error);
    }
};

const deleteUser = async (req, res, next) => {
  try {
    const {id} = req.query;
    let userId = req.user._id; 

    if (req.user.role === 'admin' && id) {
      userId = id;
    }

    const existingUser = await User.findOne({ _id: userId, isDeleted: false });

    if (!existingUser) {
      return res.status(404).json(errorResponse(404, `User not found or already deleted.`));
    }

    existingUser.isDeleted = true;
    await existingUser.save();

    res
        .status(200)
        .json(
          successResponse(
            null,
            200,
            "Account deleted successfully."
          )
        );
  } catch (error) {
    console.error(`Error in userController:deleteUser: ${error}`);
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id, page = 1, limit = 10 } = req.query;
    const userId = req.user._id;
    const userRole = req.user.role;

    let users;

    if (userRole !== 'admin') {
      const user = await User.findOne({ _id: userId, isDeleted: false});

      if (!user) {
        return res.status(404).json(errorResponse(404, `User not found.`));
      }

      return res.status(200).json(successResponse(user, 200, "User profile retrieved successfully."));
    }

    if (id) {
      const user = await User.findOne({ _id: id });

      if (!user) {
        return res.status(404).json(errorResponse(404, `User not found.`));
      }

      return res.status(200).json(successResponse(user, 200, "User retrieved successfully."));
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    users = await User.find({role:"user"})
      .skip(skip)
      .limit(parseInt(limit));

    const totalUsers = await User.countDocuments({role:"user"});
    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).json(
      successResponse(
        {
          users,
          pagination: {
            currentPage: parseInt(page),
            totalPages,
            totalUsers,
          },
        },
        200,
        "Users retrieved successfully."
      )
    );

  } catch (error) {
    console.error(`Error in userController:getUser: ${error}`);
    next(error);
  }
};

const addWedding = async (req, res, next) => {
  try {
    const { groomsName, bridesName, marriageDate } = req.body;
    const userId = req.user._id; 

    const [day, month, year] = marriageDate.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);

    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json(errorResponse(400, `Invalid date format. Use DD/MM/YYYY.`));
    }

    const newWedding = new Wedding({
      user: userId,
      groomsName,
      bridesName,
      marriageDate: formattedDate
    });

    await newWedding.save();

    res.status(201).json(
      successResponse(
        newWedding,
        201,
        "Wedding event created successfully!"
      )
    );

  } catch (error) {
    console.error(`Error in weddingController:addWedding: ${error}`);
    next(error);
  }
};

const updateWedding = async (req, res, next) => {
  try {
    const { id, groomsName, bridesName, marriageDate } = req.body;
    const userId = req.user._id; 

    const existingWedding = await Wedding.findOne({ _id: id, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding event not found or unauthorized.`));
    }

    let formattedDate;
    if (marriageDate) {
      const [day, month, year] = marriageDate.split("/");
      formattedDate = new Date(`${year}-${month}-${day}`);

      if (isNaN(formattedDate.getTime())) {
        return res.status(400).json(errorResponse(400, `Invalid date format. Use DD/MM/YYYY.`));
      }
    }

    existingWedding.groomsName = groomsName || existingWedding.groomsName;
    existingWedding.bridesName = bridesName || existingWedding.bridesName;
    if (marriageDate) existingWedding.marriageDate = formattedDate;

    await existingWedding.save();

    res.status(200).json(
      successResponse(
        existingWedding,
        200,
        "Wedding event updated successfully!"
      )
    );

  } catch (error) {
    console.error(`Error in weddingController:updateWedding: ${error}`);
    next(error);
  }
};

const deleteWedding = async (req, res, next) => {
  try {
    const { id } = req.query; 
    const userId = req.user._id; 

    const existingWedding = await Wedding.findOne({ _id: id, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding event not found or unauthorized.`));
    }

    existingWedding.isDeleted = true;
    await existingWedding.save();

    res.status(200).json(
      successResponse(
        existingWedding,
        200,
        "Wedding event deleted successfully!"
      )
    );


  } catch (error) {
    console.error(`Error in weddingController:deleteWedding: ${error}`);
    next(error);
  }
};

const getWeddings = async (req, res, next) => {
  try {
    const { id, userId } = req.query;
    const loggedInUserId = req.user._id;
    const isAdmin = req.user.role === USER_ROLE.ADMIN;

    let filter = { isDeleted: false };

    if (id) {
      filter._id = id;
    } else {
      if (isAdmin && userId) {
        filter.user = userId;
      } else {
        filter.user = loggedInUserId;
      }
    }

    const weddings = await Wedding.find(filter).populate("user", "name email");

    if (!weddings.length) {
      return res.status(404).json(errorResponse(404, `No wedding event(s) found.`));
    }

    res.status(200).json(
      successResponse(weddings, 200, "Wedding event(s) retrieved successfully!")
    );

  } catch (error) {
    console.error(`Error in weddingController:getWeddings: ${error}`);
    next(error);
  }
};

const addShagun = async (req, res, next) => {
  try {
    const { wedding, name, shagunAmount, city, mobileNumber, gift } = req.body;
    const userId = req.user._id;

    const existingWedding = await Wedding.findOne({ _id: wedding, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding not found or unauthorized.`));
    }

    const newShagun = await Shagun.create({
      user: userId,
      wedding,
      name,
      shagunAmount,
      city,
      mobileNumber,
      gift,
    });

    const messageBody = `🎉 Thank you, ${name}! 🎉\n\nYour Shagun of ₹${shagunAmount} has been received for the wedding. Your generosity is truly appreciated! 🙏\n\n- ${existingWedding.groomsName} & ${existingWedding.bridesName}`;

    await sendMessage(mobileNumber, messageBody);

    res.status(201).json(
      successResponse(
        newShagun,
        201,
        "Shagun entry added successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:addShagun: ${error}`);
    next(error);
  }
};

const editShagun = async (req, res, next) => {
  try {
    const { id, wedding, name, shagunAmount, city, mobileNumber, gift } = req.body;
    const userId = req.user._id;

    let existingShagun = await Shagun.findOne({ _id: id, user: userId });

    if (!existingShagun) {
      return res.status(404).json(errorResponse(404, "Shagun entry not found or unauthorized."));
    }

    let existingWedding;
    
    if (wedding) {
      existingWedding = await Wedding.findOne({ _id: wedding, user: userId });

      if (!existingWedding) {
        return res.status(404).json(errorResponse(404, "Wedding not found or unauthorized."));
      }

      existingShagun.wedding = wedding;
    } else {
      existingWedding = await Wedding.findById(existingShagun.wedding); // Fetch existing wedding details
    }

    existingShagun.name = name || existingShagun.name;
    existingShagun.shagunAmount = shagunAmount || existingShagun.shagunAmount;
    existingShagun.city = city || existingShagun.city;
    existingShagun.mobileNumber = mobileNumber || existingShagun.mobileNumber;
    existingShagun.gift = gift || existingShagun.gift;

    await existingShagun.save();

    const messageBody = `🎉 Update Alert, ${existingShagun.name}! 🎉\n\nYour Shagun details have been updated. New Amount: ₹${existingShagun.shagunAmount}. Thank you for your generosity! 🙏\n\n- ${existingWedding.groomsName} & ${existingWedding.bridesName}`;

    await sendMessage(existingShagun.mobileNumber, messageBody);

    res.status(200).json(
      successResponse(
        existingShagun,
        200,
        "Shagun and wedding details updated successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:editShagun: ${error}`);
    next(error);
  }
};

const addBudget = async (req, res, next) => {
  try {
    const { id, budget } = req.body;
    const userId = req.user._id;

    const existingWedding = await Wedding.findOne({ _id: id, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding not found or unauthorized.`));
    }

    existingWedding.totalBudget = budget;

    await existingWedding.save();

    
    res.status(200).json(
      successResponse(
        existingWedding,
        200,
        "budget added successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:addBudget: ${error}`);
    next(error);
  }
};

const deleteBudget = async (req, res, next) => {
  try {
    const { id } = req.query;
    const userId = req.user._id;

    const existingWedding = await Wedding.findOne({ _id: id, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding not found or unauthorized.`));
    }

    existingWedding.totalBudget = undefined; 

    await existingWedding.save();

    res.status(200).json(
      successResponse(
        existingWedding,
        200,
        "Budget deleted successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:deleteBudget: ${error}`);
    next(error);
  }
};

const addExpense = async (req, res, next) => {
  try {
    const { wedding, expenseFor, totalAmount, paidDepositAmount, pendingAmount  } = req.body;
    const userId = req.user._id;

    const existingWedding = await Wedding.findOne({ _id: wedding, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding not found or unauthorized.`));
    }

    const newExpense = await Expense.create({
      user: userId,
      wedding,
      expenseFor,
      totalAmount,
      paidDepositAmount,
      pendingAmount,
    });
    
    res.status(201).json(
      successResponse(
        newExpense,
        201,
        "Expense added successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:addExpense: ${error}`);
    next(error);
  }
};

const editExpense = async (req, res, next) => {
  try {
    const { expenseId, expenseFor, totalAmount, paidDepositAmount, pendingAmount } = req.body;
    const userId = req.user._id;

    const existingExpense = await Expense.findOne({ _id: expenseId, user: userId });

    if (!existingExpense) {
      return res.status(404).json(errorResponse(404, "Expense not found or unauthorized."));
    }


    existingExpense.expenseFor = expenseFor;
    existingExpense.totalAmount = totalAmount;
    existingExpense.paidDepositAmount = paidDepositAmount;
    existingExpense.pendingAmount = pendingAmount;

    await existingExpense.save();

    res.status(200).json(
      successResponse(existingExpense, 200, "Expense updated successfully!")
    );
  } catch (error) {
    console.error(`Error in shagunController:editExpense: ${error}`);
    next(error);
  }
};

const getExpense = async (req, res, next) => {
  try {
    const { id, weddingId } = req.query;
    const userId = req.user._id;

    const filter = {
      user: userId,
      wedding: weddingId,
    };

    if (id) {
      filter._id = id;

      const expense = await Expense.findOne(filter).populate("user", "name email");
      if (!expense) {
        return res.status(404).json(errorResponse(404, "Expense not found."));
      }

      return res.status(200).json(
        successResponse(
          expense,
          200,
          "Expense retrieved successfully."
        )
      );
    } else {
      const expenses = await Expense.find(filter).populate("user", "name email");
      if (!expenses.length) {
        return res.status(404).json(errorResponse(404, "No expenses found."));
      }

      const totalAmount = expenses.reduce((sum, e) => sum + e.totalAmount, 0);
      const totalPaid = expenses.reduce((sum, e) => sum + e.paidDepositAmount, 0);
      const totalPending = expenses.reduce((sum, e) => sum + e.pendingAmount, 0);

      return res.status(200).json(
        successResponse(
          {
            expenses,
            totalAmount,
            totalPaid,
            totalPending,
          },
          200,
          "Expenses retrieved successfully."
        )
      );
    }
  } catch (error) {
    console.error(`Error in getExpense: ${error}`);
    next(error);
  }
};

const deleteExpense = async (req, res, next) => {
  try {
    const { expenseId } = req.query; 
    const userId = req.user._id;

    const existingExpense = await Expense.findOne({ _id: expenseId, user: userId });

    if (!existingExpense) {
      return res.status(404).json(errorResponse(404, "Expense not found or unauthorized."));
    }

    await Expense.deleteOne({ _id: expenseId });

    res.status(200).json(
      successResponse(null, 200, "Expense deleted successfully!")
    );
  } catch (error) {
    console.error(`Error in shagunController:deleteExpense: ${error}`);
    next(error);
  }
};

const addGuest = async (req, res, next) => {
  try {
    const { wedding, guest_name, total_family_members, city  } = req.body;
    const userId = req.user._id;

    const existingWedding = await Wedding.findOne({ _id: wedding, user: userId });

    if (!existingWedding) {
      return res.status(404).json(errorResponse(404, `Wedding not found or unauthorized.`));
    }

    const newGuest = await Guest.create({
      user: userId,
      wedding,
      guest_name,
      total_family_members,
      city,
    });
    
    res.status(201).json(
      successResponse(
        newGuest,
        201,
        "Guest added successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:addGuest: ${error}`);
    next(error);
  }
};

const editGuest = async (req, res, next) => {
  try {
    const {guestId, guest_name, total_family_members, city } = req.body;
    const userId = req.user._id;

    const guest = await Guest.findOne({ _id: guestId, user: userId });

    if (!guest) {
      return res.status(404).json(errorResponse(404, "Guest not found or unauthorized."));
    }

    if (guest_name !== undefined) guest.guest_name = guest_name;
    if (total_family_members !== undefined) guest.total_family_members = total_family_members;
    if (city !== undefined) guest.city = city;

    await guest.save();

    res.status(200).json(
      successResponse(
        guest,
        200,
        "Guest updated successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in guestController:editGuest: ${error}`);
    next(error);
  }
};

const deleteGuest = async (req, res, next) => {
  try {
    const { guestId } = req.query;
    const userId = req.user._id;

    const guest = await Guest.findOne({ _id: guestId, user: userId });

    if (!guest) {
      return res.status(404).json(errorResponse(404, "Guest not found or unauthorized."));
    }

    await guest.deleteOne();

    res.status(200).json(
      successResponse(
        null,
        200,
        "Guest deleted successfully!"
      )
    );
  } catch (error) {
    console.error(`Error in guestController:deleteGuest: ${error}`);
    next(error);
  }
};

const getShagun = async (req, res, next) => {
  try {
    const { id, weddingId, name, minAmount, maxAmount } = req.query;
    const loggedInUserId = req.user._id;

    const filter = {
      wedding: weddingId,
      user: loggedInUserId,
    };

    if (id) {
      filter._id = id;

      const shagun = await Shagun.findOne(filter).populate("user", "name email");

      if (!shagun) {
        return res.status(404).json(errorResponse(404, "Shagun entry not found."));
      }

      return res.status(200).json(
        successResponse(
          shagun,
          200,
          "Shagun entry retrieved successfully."
        )
      );
    }

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (minAmount || maxAmount) {
      filter.shagunAmount = {};
      if (minAmount) {
        filter.shagunAmount.$gte = Number(minAmount);
      }
      if (maxAmount) {
        filter.shagunAmount.$lte = Number(maxAmount);
      }
    }

    const shagunList = await Shagun.find(filter).populate("user", "name email");

    if (!shagunList.length) {
      return res.status(404).json(errorResponse(404, "No shagun entries found."));
    }

    const totalShagunAmount = shagunList.reduce((sum, entry) => sum + entry.shagunAmount, 0);
    const totalCount = shagunList.length;

    return res.status(200).json(
      successResponse(
        {
          shagunList,
          totalShagunAmount,
          totalCount,
        },
        200,
        "Shagun entries retrieved successfully."
      )
    );
  } catch (error) {
    console.error(`Error in shagunController:getShagun: ${error}`);
    next(error);
  }
};

const getGuests = async (req, res, next) => {
  try {
    const { id, weddingId } = req.query;
    const userId = req.user._id;

    const filter = {
      wedding: weddingId,
      user: userId,
    };

    if (id) {
      filter._id = id;

      const guest = await Guest.findOne(filter).populate("user", "name email");

      if (!guest) {
        return res.status(404).json(errorResponse(404, "Guest not found."));
      }

      return res.status(200).json(
        successResponse(
          guest,
          200,
          "Guest retrieved successfully."
        )
      );
    } else {
      const guests = await Guest.find(filter).populate("user", "name email");

      if (!guests.length) {
        return res.status(404).json(errorResponse(404, "No guests found."));
      }

      const totalInvitations = guests.length;
      const totalGuests = guests.reduce((sum, g) => sum + g.total_family_members, 0);

      return res.status(200).json(
        successResponse(
          {
            guests,
            totalInvitations,
            totalGuests,
          },
          200,
          "Guests retrieved successfully."
        )
      );
    }
  } catch (error) {
    console.error(`Error in guestController:getGuests: ${error}`);
    next(error);
  }
};


module.exports = {
    demo,
    registration,
    resendOtp,
    verifyMobile,
    logout,
    verifyNewMobile,
    editProfile,
    deleteUser,
    getUser,
    addWedding,
    updateWedding,
    deleteWedding,
    getWeddings,
    addShagun,
    editShagun,
    addBudget,
    deleteBudget,
    addExpense,
    editExpense,
    getExpense,
    deleteExpense,
    addGuest,
    editGuest,
    deleteGuest,
    getShagun,
    getGuests
}
