const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController.js");
const {
  reqBodyValidator,
  reqQueryValidator,
  reqParamsValidator,
} = require("../Middlewares/validator.js");
const userValidation = require("../Validations/userValidation.js");
const auth = require("../Middlewares/auth.js");
const { verifyToken, verifyUserRole } = require("../Middlewares/auth.js");
const upload = require("../Configs/multerConfig");
const { USER_ROLE } = require("../Constants/userConstants.js");

router.get(
    "/home",
    userController.demo
);

router.post(
    "/register",
    reqBodyValidator(userValidation.registerUserValidation),
    userController.registration
);

router.post(
    "/resend-otp",
    reqQueryValidator(userValidation.resendOtpValidation),
    userController.resendOtp
  );

router.post(
    "/verify-mobile",
    reqBodyValidator(userValidation.verifyMobileValidation),
    userController.verifyMobile
  );

router.post(
    "/logout",
    verifyToken,
    userController.logout
  );

router.post(
    "/verify-new-mobile",
    verifyToken,
    auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
    reqBodyValidator(userValidation.verifyMobileValidation),
    userController.verifyNewMobile
  );

router.patch(
    "/update-profile",
    verifyToken,
    auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
    upload.single('profilePic'),
    reqBodyValidator(userValidation.updateProfileValidation),
    userController.editProfile
);

router.delete(
  "/delete-user",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.deleteUserValidation),
  userController.deleteUser
);

router.get(
  "/get-user",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.idValidation),
  userController.getUser
);

router.post(
  "/add-wedding",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.addWeddingValidation),
  userController.addWedding
);

router.patch(
  "/edit-wedding",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.updateWeddingValidation),
  userController.updateWedding
);

router.delete(
  "/delete-wedding",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqQueryValidator(userValidation.deleteWeddingValidation),
  userController.deleteWedding
);

router.get(
  "/get-wedding",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.getWeddingValidation),
  userController.getWeddings
);

router.post(
  "/add-shagun",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.addShagunValidation),
  userController.addShagun
);

router.patch(
  "/edit-shagun",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.editShagunValidation),
  userController.editShagun
);

router.patch(
  "/add-budget",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.addBudgetValidation),
  userController.addBudget
);

router.delete(
  "/delete-budget",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqQueryValidator(userValidation.deleteBudgetValidation),
  userController.deleteBudget
);

router.post(
  "/add-expense",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.addExpenseValidation),
  userController.addExpense
);

router.patch(
  "/edit-expense",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.editExpenseValidation),
  userController.editExpense
);

router.get(
  "/get-expense",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.getExpenseValidation),
  userController.getExpense
);

router.delete(
  "/delete-expense",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqQueryValidator(userValidation.deleteExpenseValidation),
  userController.deleteExpense
);

router.post(
  "/add_guest",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.addGuestValidation),
  userController.addGuest
);

router.patch(
  "/edit_guest",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqBodyValidator(userValidation.editGuestValidation),
  userController.editGuest
);

router.delete(
  "/delete-guest",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.USER]),
  reqQueryValidator(userValidation.deleteGuestValidation),
  userController.deleteGuest
);

router.get(
  "/get-shagun",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.getShagunValidation),
  userController.getShagun
);

router.get(
  "/get-guest",
  verifyToken,
  auth.verifyUserRole([USER_ROLE.ADMIN, USER_ROLE.USER]),
  reqQueryValidator(userValidation.getGuestValidation),
  userController.getGuests
);


module.exports = router;
