/**
 * @swagger
 * /api/user/home:
 *   get:
 *     summary: Welcome message for the Chat App
 *     description: Returns a success response with a welcome message.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Successfully returns the welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Welcome to Shagun App!"
 *                 data:
 *                   type: object
 *                   example: null
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Can't find /home on the server."
 *                 data:
 *                   type: object
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error. Please try again later."
 *                 data:
 *                   type: object
 *                   example: null
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: User Registration
 *     description: Registers a new user with name, email, and mobile number.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - mobileNumber
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               mobileNumber:
 *                 type: string
 *                 pattern: "^[0-9]{10}$"
 *                 example: "9876543210"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Registration successful. Welcome to Sagun App!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67e3cd52d2c5c33893c8b842"
 *                     name:
 *                       type: string
 *                       example: "user"
 *                     email:
 *                       type: string
 *                       example: "user@gmail.com"
 *                     mobileNumber:
 *                       type: string
 *                       example: "6355715164"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     isVerify:
 *                       type: boolean
 *                       example: true
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-26T09:48:02.839Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-26T10:06:45.708Z"
 *                     __v:
 *                       type: integer
 *                       example: 0
 *       409:
 *         description: Email or mobile number already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 409
 *                 message:
 *                   type: string
 *                   example: "This email is already in use. Please try registering with a different email."
 *                 data:
 *                   type: object
 *                   example: null
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Validation failed. Please check the input fields."
 *                 data:
 *                   type: object
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error. Please try again later."
 *                 data:
 *                   type: object
 *                   example: null
 */

/**
 * @swagger
 * /api/user/resend-otp:
 *   post:
 *     summary: Resend OTP
 *     description: Resends an OTP to the user's registered mobile number.
 *     tags:
 *       - User
 *     parameters:
 *       - in: query
 *         name: mobileNumber
 *         required: true
 *         schema:
 *           type: string
 *           pattern: "^[0-9]{10}$"
 *         example: "6355715164"
 *         description: User's registered mobile number.
 *     responses:
 *       201:
 *         description: OTP sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "OTP sent successfully. Please check your mobile number for the verification code."
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User with 6355715164 not found."
 *                 data:
 *                   type: object
 *                   example: null
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Validation failed. Please check the input fields."
 *                 data:
 *                   type: object
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error. Please try again later."
 *                 data:
 *                   type: object
 *                   example: null
 */

/**
 * @swagger
 * /api/user/verify-mobile:
 *   post:
 *     summary: Verify Mobile Number with OTP
 *     description: Verifies the mobile number using OTP. If successful, the user is marked as verified, and a token is generated for authentication.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobileNumber:
 *                 type: string
 *                 pattern: "^[0-9]{10}$"
 *                 example: "6355715164"
 *                 description: User's registered mobile number.
 *               otp:
 *                 type: string
 *                 example: "123456"
 *                 description: The OTP sent to the user's mobile number.
 *     responses:
 *       200:
 *         description: Login successful and token generated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Login successful! Welcome back!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     findUser:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "67e3cd52d2c5c33893c8b842"
 *                         name:
 *                           type: string
 *                           example: "user"
 *                         email:
 *                           type: string
 *                           example: "user@gmail.com"
 *                         mobileNumber:
 *                           type: string
 *                           example: "6355715164"
 *                         role:
 *                           type: string
 *                           example: "user"
 *                         isVerify:
 *                           type: boolean
 *                           example: true
 *                         isDeleted:
 *                           type: boolean
 *                           example: false
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-03-26T09:48:02.839Z"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-03-26T10:06:45.708Z"
 *                         __v:
 *                           type: integer
 *                           example: 0
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Invalid OTP or OTP not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid OTP. Please check your email for the correct verification code."
 *                 data:
 *                   type: object
 *                   example: null
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User with 6355715164 not found."
 *                 data:
 *                   type: object
 *                   example: null
 *       410:
 *         description: OTP has expired.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 410
 *                 message:
 *                   type: string
 *                   example: "OTP has expired. Please request a new one."
 *                 data:
 *                   type: object
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error. Please try again later."
 *                 data:
 *                   type: object
 *                   example: null
 */

/**
 * @swagger
 * /api/user/logout:
 *   post:
 *     summary: User Logout
 *     description: Logs out the authenticated user by setting `isVerify` to false.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "User logout successfully."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized - Token missing or invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized. Token is invalid or missing."
 *                 data:
 *                   type: object
 *                   example: null
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User not found."
 *                 data:
 *                   type: object
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error. Please try again later."
 *                 data:
 *                   type: object
 *                   example: null
 */

/**
 * @swagger
 * /api/user/verify-new-mobile:
 *   post:
 *     summary: Verify a new mobile number using OTP
 *     description: This endpoint verifies a new mobile number by validating the OTP. If the OTP is correct and not expired, the mobile number is marked as verified.
 *     tags:
 *       - User 
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobileNumber
 *               - otp
 *             properties:
 *               mobileNumber:
 *                 type: string
 *                 description: The 10-digit mobile number to verify.
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 description: The OTP sent to the mobile number.
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Mobile number verified successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Mobile number verify successfully."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Invalid OTP or OTP not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid OTP. Please check your email for the correct verification code."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       410:
 *         description: OTP has expired.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 410
 *                 message:
 *                   type: string
 *                   example: "OTP has expired. Please request a new one."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/update-profile:
 *   patch:
 *     summary: Update user profile
 *     description: This endpoint allows a user to update their profile details including name, email, mobile number, and profile picture. Mobile number changes require verification.
 *     tags:
 *       - User 
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The User ID (Optional – only required for admin users when updating other users' profiles).
 *                 example: "60d0fe4f5311236168a109ca"
 *               name:
 *                 type: string
 *                 description: Updated name of the user.
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Updated email address of the user.
 *                 example: "john.doe@example.com"
 *               mobileNumber:
 *                 type: string
 *                 description: Updated 10-digit mobile number (Verification required).
 *                 example: "9876543210"
 *               profilePic:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture file upload.
 *     responses:
 *       200:
 *         description: User profile updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "User profile updated successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67e53d90ce27e89aef511790"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       example: "johndoe@gmail.com"
 *                     mobileNumber:
 *                       type: string
 *                       example: "6355715161"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     isVerify:
 *                       type: boolean
 *                       example: true
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-27T11:59:12.387Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-28T06:01:05.750Z"
 *                     __v:
 *                       type: number
 *                       example: 0
 *                     profilePic:
 *                       type: string
 *                       example: "http://localhost:3001/get/6355715161/1743137286090.jpg"
 *       400:
 *         description: Invalid request data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request data."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       403:
 *         description: Mobile number update requires verification.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: "Mobile number update requires verification."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found or not verified.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User not found or not verified."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       409:
 *         description: Mobile number already in use.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 409
 *                 message:
 *                   type: string
 *                   example: "This mobile number is already in use. Please try another mobile number."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/delete-user:
 *   delete:
 *     summary: Delete a user account
 *     description: |
 *       Deletes a user account by marking it as deleted (isDeleted: true).
 *       - Admins can delete any user by passing the `id` as a query parameter.
 *       - Regular users can only delete their own accounts.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: false
 *         description: "User ID to delete (only required for admins). Regular users do not need to provide this."
 *         example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: User account deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Account deleted successfully."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Bad request (invalid user ID format).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid user ID format."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
*       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found or already deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User not found or already deleted."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/get-user:
 *   get:
 *     summary: Retrieve user(s) information
 *     description: |
 *       - Admins can retrieve a list of users with pagination or fetch a specific user by `id`.
 *       - Regular users can only retrieve their own profile.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: false
 *         description: "User ID to retrieve (Admins only). If not provided, returns paginated user list."
 *         example: "60d0fe4f5311236168a109ca"
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: "Page number for pagination (Admins only). Default is 1."
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         required: false
 *         description: "Number of users per page (Admins only). Default is 10."
 *     responses:
 *       200:
 *         description: User(s) retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Users retrieved successfully."
 *                 data:
 *                   oneOf:
 *                     - type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "60d0fe4f5311236168a109ca"
 *                         name:
 *                           type: string
 *                           example: "John Doe"
 *                         email:
 *                           type: string
 *                           example: "johndoe@example.com"
 *                         mobileNumber:
 *                           type: string
 *                           example: "9876543210"
 *                         role:
 *                           type: string
 *                           example: "user"
 *                         isVerify:
 *                           type: boolean
 *                           example: true
 *                         isDeleted:
 *                           type: boolean
 *                           example: false
 *                         profilePic:
 *                           type: string
 *                           example: "https://yourapp.com/get/9876543210/profilePic.jpg"
 *                     - type: object
 *                       properties:
 *                         users:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: "60d0fe4f5311236168a109ca"
 *                               name:
 *                                 type: string
 *                                 example: "John Doe"
 *                               email:
 *                                 type: string
 *                                 example: "johndoe@example.com"
 *                               mobileNumber:
 *                                 type: string
 *                                 example: "9876543210"
 *                               role:
 *                                 type: string
 *                                 example: "user"
 *                               isVerify:
 *                                 type: boolean
 *                                 example: true
 *                               isDeleted:
 *                                 type: boolean
 *                                 example: false
 *                               profilePic:
 *                                 type: string
 *                                 example: "https://yourapp.com/get/9876543210/profilePic.jpg"
 *                         pagination:
 *                           type: object
 *                           properties:
 *                             currentPage:
 *                               type: integer
 *                               example: 1
 *                             totalPages:
 *                               type: integer
 *                               example: 5
 *                             totalUsers:
 *                               type: integer
 *                               example: 50
*       400:
 *         description: Bad request (invalid user ID format).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid user ID format."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "User not found."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/add-wedding:
 *   post:
 *     summary: Create a new wedding event
 *     description: Allows a user to create a wedding event by providing groom's name, bride's name, and marriage date.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - groomsName
 *               - bridesName
 *               - marriageDate
 *             properties:
 *               groomsName:
 *                 type: string
 *                 example: "Mirror"
 *               bridesName:
 *                 type: string
 *                 example: "Moon"
 *               marriageDate:
 *                 type: string
 *                 format: date
 *                 description: "Date in DD/MM/YYYY format"
 *                 example: "15/04/2025"
 *     responses:
 *       201:
 *         description: Wedding event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Wedding event created successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d0fe4f5311236168a109ca"
 *                     user:
 *                       type: string
 *                       example: "60c72b2f9b1d8c6d88c26b01"
 *                     groomsName:
 *                       type: string
 *                       example: "Mirror"
 *                     bridesName:
 *                       type: string
 *                       example: "Moon"
 *                     marriageDate:
 *                       type: string
 *                       example: "2025-04-15T00:00:00.000Z"
 *                     createdAt:
 *                       type: string
 *                       example: "2025-03-20T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2025-03-20T12:00:00.000Z"
 *       400:
 *         description: Invalid request or missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid date format. Use DD/MM/YYYY."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/edit-wedding:
 *   patch:
 *     summary: Update a wedding event
 *     description: Allows an authenticated user to update wedding details such as groom's name, bride's name, or marriage date.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The unique ID of the wedding event.
 *                 example: "67e6664a8fe6bb8f3bab4234"
 *               groomsName:
 *                 type: string
 *                 description: Updated name of the groom.
 *                 example: "John Doe"
 *               bridesName:
 *                 type: string
 *                 description: Updated name of the bride.
 *                 example: "Jane Smith"
 *               marriageDate:
 *                 type: string
 *                 format: date
 *                 description: Updated marriage date in DD/MM/YYYY format.
 *                 example: "15/04/2025"
 *     responses:
 *       200:
 *         description: Wedding event updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Wedding event updated successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67e6664a8fe6bb8f3bab4234"
 *                     user:
 *                       type: string
 *                       example: "67e53d90ce27e89aef511790"
 *                     groomsName:
 *                       type: string
 *                       example: "John Doe"
 *                     bridesName:
 *                       type: string
 *                       example: "Jane Smith"
 *                     marriageDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-15T00:00:00.000Z"
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-28T09:05:14.278Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-28T09:22:22.426Z"
 *       400:
 *         description: Bad request due to invalid input or date format.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid date format. Use DD/MM/YYYY."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/get-wedding:
 *   get:
 *     summary: Retrieve wedding events
 *     description: |
 *       - Users can fetch their **own** weddings (all or a specific one).  
 *       - Admins can fetch **any user's** weddings (all or a specific one).
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: The ID of the wedding event to retrieve (optional).
 *         example: "67e6664a8fe6bb8f3bab4234"
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: The ID of the user whose weddings should be retrieved (Admins only).
 *         example: "67e53d90ce27e89aef511790"
 *     responses:
 *       200:
 *         description: Successfully retrieved wedding event(s).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Wedding event(s) retrieved successfully!"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "67e6664a8fe6bb8f3bab4234"
 *                       user:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "67e53d90ce27e89aef511790"
 *                           name:
 *                             type: string
 *                             example: "John Doe"
 *                           email:
 *                             type: string
 *                             example: "john@example.com"
 *                       groomsName:
 *                         type: string
 *                         example: "John Doe"
 *                       bridesName:
 *                         type: string
 *                         example: "Jane Smith"
 *                       marriageDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-04-15T00:00:00.000Z"
 *                       isDeleted:
 *                         type: boolean
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-03-28T09:05:14.278Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-03-28T10:02:24.187Z"
 *       404:
 *         description: No wedding event(s) found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "No wedding event(s) found."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/delete-wedding:
 *   delete:
 *     summary: Soft delete a wedding event
 *     description: Marks a wedding event as deleted by setting `isDeleted` to `true`. Only the owner of the event can delete it.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: The ID of the wedding event to delete.
 *         example: "67e6664a8fe6bb8f3bab4234"
 *     responses:
 *       200:
 *         description: Wedding event deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Wedding event deleted successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67e6664a8fe6bb8f3bab4234"
 *                     user:
 *                       type: string
 *                       example: "67e53d90ce27e89aef511790"
 *                     groomsName:
 *                       type: string
 *                       example: "John Doe"
 *                     bridesName:
 *                       type: string
 *                       example: "Jane Smith"
 *                     marriageDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-15T00:00:00.000Z"
 *                     isDeleted:
 *                       type: boolean
 *                       example: true
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-28T09:05:14.278Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-28T10:02:24.187Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/add-shagun:
 *   post:
 *     summary: Add a new Shagun entry for a wedding
 *     tags:
 *       - User 
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - wedding
 *               - name
 *               - shagunAmount
 *               - city
 *               - mobileNumber
 *             properties:
 *               wedding:
 *                 type: string
 *                 description: Wedding ID (MongoDB ObjectId)
 *                 example: "662c8d6d9f1e1a3fbc1e2e17"
 *               name:
 *                 type: string
 *                 description: Name of the person giving Shagun
 *                 example: "Ramesh Patel"
 *               shagunAmount:
 *                 type: number
 *                 description: Amount given as Shagun
 *                 example: 5100
 *               city:
 *                 type: string
 *                 description: City of the person giving Shagun
 *                 example: "Ahmedabad"
 *               mobileNumber:
 *                 type: string
 *                 description: Mobile number of the person (10 digits)
 *                 example: "9876543210"
 *               gift:
 *                 type: string
 *                 description: Optional gift item given along with Shagun
 *                 example: "Gold Chain"
 *     responses:
 *       201:
 *         description: Shagun entry added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Shagun entry added successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6631d7a55b9c7d88ec74d69b"
 *                     user:
 *                       type: string
 *                       example: "661fa43a6735a5cf7d14b72d"
 *                     wedding:
 *                       type: string
 *                       example: "662c8d6d9f1e1a3fbc1e2e17"
 *                     name:
 *                       type: string
 *                       example: "Ramesh Patel"
 *                     shagunAmount:
 *                       type: number
 *                       example: 5100
 *                     city:
 *                       type: string
 *                       example: "Ahmedabad"
 *                     mobileNumber:
 *                       type: string
 *                       example: "9876543210"
 *                     gift:
 *                       type: string
 *                       example: "Gold Chain"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T14:25:43.511Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T14:25:43.511Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/edit-shagun:
 *   patch:
 *     summary: Edit an existing Shagun entry
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: Shagun ID to be updated (MongoDB ObjectId)
 *                 example: "6631d7a55b9c7d88ec74d69b"
 *               wedding:
 *                 type: string
 *                 description: (Optional) New Wedding ID if changing wedding
 *                 example: "662c8d6d9f1e1a3fbc1e2e17"
 *               name:
 *                 type: string
 *                 description: (Optional) Updated name of the person
 *                 example: "Suresh Kumar"
 *               shagunAmount:
 *                 type: number
 *                 description: (Optional) Updated Shagun amount
 *                 example: 2100
 *               city:
 *                 type: string
 *                 description: (Optional) Updated city
 *                 example: "Surat"
 *               mobileNumber:
 *                 type: string
 *                 description: (Optional) Updated 10-digit mobile number
 *                 example: "9876501234"
 *               gift:
 *                 type: string
 *                 description: (Optional) Updated gift description
 *                 example: "Silver Plate"
 *     responses:
 *       200:
 *         description: Shagun and wedding details updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Shagun and wedding details updated successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6631d7a55b9c7d88ec74d69b"
 *                     user:
 *                       type: string
 *                       example: "661fa43a6735a5cf7d14b72d"
 *                     wedding:
 *                       type: string
 *                       example: "662c8d6d9f1e1a3fbc1e2e17"
 *                     name:
 *                       type: string
 *                       example: "Suresh Kumar"
 *                     shagunAmount:
 *                       type: number
 *                       example: 2100
 *                     city:
 *                       type: string
 *                       example: "Surat"
 *                     mobileNumber:
 *                       type: string
 *                       example: "9876501234"
 *                     gift:
 *                       type: string
 *                       example: "Silver Plate"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T14:25:43.511Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T15:00:10.123Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/add-budget:
 *   patch:
 *     summary: Add or update the total budget for a wedding
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - budget
 *             properties:
 *               id:
 *                 type: string
 *                 description: Wedding ID (MongoDB ObjectId)
 *                 example: "662c8d6d9f1e1a3fbc1e2e17"
 *               budget:
 *                 type: number
 *                 description: Total wedding budget amount
 *                 example: 500000
 *     responses:
 *       200:
 *         description: Budget added/updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "budget added successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "662c8d6d9f1e1a3fbc1e2e17"
 *                     user:
 *                       type: string
 *                       example: "661fa43a6735a5cf7d14b72d"
 *                     groomsName:
 *                       type: string
 *                       example: "Rahul Mehta"
 *                     bridesName:
 *                       type: string
 *                       example: "Priya Sharma"
 *                     marriageDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-15T00:00:00.000Z"
 *                     totalBudget:
 *                       type: number
 *                       example: 500000
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T14:25:43.511Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T16:00:10.123Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/delete-budget:
 *   delete:
 *     summary: Delete the budget field of a wedding
 *     tags:
 *       - User 
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: Wedding ID (MongoDB ObjectId)
 *         example: "662c8d6d9f1e1a3fbc1e2e17"
 *     responses:
 *       200:
 *         description: Budget deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Budget deleted successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "662c8d6d9f1e1a3fbc1e2e17"
 *                     user:
 *                       type: string
 *                       example: "661fa43a6735a5cf7d14b72d"
 *                     groomsName:
 *                       type: string
 *                       example: "Rahul Mehta"
 *                     bridesName:
 *                       type: string
 *                       example: "Priya Sharma"
 *                     marriageDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-15T00:00:00.000Z"
 *                     totalBudget:
 *                       type: number
 *                       nullable: true
 *                       example: null
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T14:25:43.511Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-27T16:45:10.123Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: flase
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */
 
/**
 * @swagger
 * /api/user/add-expense:
 *   post:
 *     summary: Add a new wedding expense
 *     description: Allows a user to add an expense related to a wedding. The user must be authenticated and authorized.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - wedding
 *               - expenseFor
 *               - totalAmount
 *               - paidDepositAmount
 *               - pendingAmount
 *             properties:
 *               wedding:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109ca"
 *                 description: The ObjectId of the wedding.
 *               expenseFor:
 *                 type: string
 *                 example: "Venue Booking"
 *                 description: Description of the expense.
 *               totalAmount:
 *                 type: number
 *                 example: 10000
 *                 description: Total cost of the expense.
 *               paidDepositAmount:
 *                 type: number
 *                 example: 3000
 *                 description: Amount already paid.
 *               pendingAmount:
 *                 type: number
 *                 example: 7000
 *                 description: Remaining amount to be paid.
 *     responses:
 *       201:
 *         description: Expense added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Expense added successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6632fcf9c94d72d24d6d7852"
 *                     user:
 *                       type: string
 *                       example: "6632fc4fc94d72d24d6d784a"
 *                     wedding:
 *                       type: string
 *                       example: "6632fca2c94d72d24d6d784e"
 *                     expenseFor:
 *                       type: string
 *                       example: "Venue Booking"
 *                     totalAmount:
 *                       type: number
 *                       example: 10000
 *                     paidDepositAmount:
 *                       type: number
 *                       example: 3000
 *                     pendingAmount:
 *                       type: number
 *                       example: 7000
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-05-01T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-05-01T12:00:00.000Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding event not found or unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Wedding event not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/edit-expense:
 *   patch:
 *     summary: Edit an existing wedding expense
 *     description: Allows a user to update an existing expense associated with a wedding. Authentication and user ownership are required.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - expenseId
 *             properties:
 *               expenseId:
 *                 type: string
 *                 example: "662fd3e4a7138d37b447b69f"
 *                 description: ObjectId of the expense to be updated.
 *               expenseFor:
 *                 type: string
 *                 example: "Catering Service"
 *                 description: Updated description of the expense.
 *               totalAmount:
 *                 type: number
 *                 example: 15000
 *                 description: Updated total cost of the expense.
 *               paidDepositAmount:
 *                 type: number
 *                 example: 5000
 *                 description: Updated paid amount.
 *               pendingAmount:
 *                 type: number
 *                 example: 10000
 *                 description: Updated remaining amount.
 *     responses:
 *       200:
 *         description: Expense updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Expense updated successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "662fd3e4a7138d37b447b69f"
 *                     user:
 *                       type: string
 *                       example: "6632fc4fc94d72d24d6d784a"
 *                     wedding:
 *                       type: string
 *                       example: "6632fca2c94d72d24d6d784e"
 *                     expenseFor:
 *                       type: string
 *                       example: "Catering Service"
 *                     totalAmount:
 *                       type: number
 *                       example: 15000
 *                     paidDepositAmount:
 *                       type: number
 *                       example: 5000
 *                     pendingAmount:
 *                       type: number
 *                       example: 10000
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-04-30T10:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-05-01T15:30:00.000Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid input. Expense ID is required and must be a valid ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Expense not found or unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Expense not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/delete-expense:
 *   delete:
 *     summary: Delete an existing wedding expense
 *     description: Allows a user to delete an existing expense. The user must be authenticated and own the expense.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: expenseId
 *         required: true
 *         schema:
 *           type: string
 *           example: "66338f1b0c8d650012f958c9"
 *         description: The ObjectId of the expense to delete.
 *     responses:
 *       200:
 *         description: Expense deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Expense deleted successfully!"
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid expense ID format. Must be a valid MongoDB ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Expense not found or unauthorized to delete.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Expense not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/add_guest:
 *   post:
 *     summary: Add a new wedding guest
 *     description: Allows an authenticated user to add a guest associated with a wedding.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - wedding
 *               - guest_name
 *               - total_family_members
 *               - city
 *             properties:
 *               wedding:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109ca"
 *                 description: The ObjectId of the wedding.
 *               guest_name:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Full name of the guest.
 *               total_family_members:
 *                 type: number
 *                 example: 3
 *                 description: Total number of family members attending with the guest.
 *               city:
 *                 type: string
 *                 example: "New York"
 *                 description: City from which the guest is coming.
 *     responses:
 *       201:
 *         description: Guest added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Guest added successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6633c9f59d6b8c001fe45cd8"
 *                     user:
 *                       type: string
 *                       example: "6632fc4fc94d72d24d6d784a"
 *                     wedding:
 *                       type: string
 *                       example: "6632fca2c94d72d24d6d784e"
 *                     guest_name:
 *                       type: string
 *                       example: "John Doe"
 *                     total_family_members:
 *                       type: number
 *                       example: 3
 *                     city:
 *                       type: string
 *                       example: "New York"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-05-01T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-05-01T12:00:00.000Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid input. Please check the guest details."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Wedding not found or not authorized to access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Wedding not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/edit_guest:
 *   patch:
 *     summary: Edit a guest's information
 *     description: Allows an authenticated user to update guest details for a specific wedding.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - guestId
 *             properties:
 *               guestId:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109cb"
 *                 description: The ObjectId of the guest to be updated.
 *               guest_name:
 *                 type: string
 *                 example: "Jane Doe"
 *                 description: Updated guest name (optional).
 *               total_family_members:
 *                 type: number
 *                 example: 4
 *                 description: Updated number of accompanying family members (optional).
 *               city:
 *                 type: string
 *                 example: "Los Angeles"
 *                 description: Updated city of the guest (optional).
 *     responses:
 *       200:
 *         description: Guest updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Guest updated successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6633c9f59d6b8c001fe45cd8"
 *                     user:
 *                       type: string
 *                       example: "6632fc4fc94d72d24d6d784a"
 *                     wedding:
 *                       type: string
 *                       example: "6632fca2c94d72d24d6d784e"
 *                     guest_name:
 *                       type: string
 *                       example: "Jane Doe"
 *                     total_family_members:
 *                       type: number
 *                       example: 4
 *                     city:
 *                       type: string
 *                       example: "Los Angeles"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-05-01T12:00:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-05-01T12:15:00.000Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid input. Please check the guest data."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Guest not found or unauthorized to access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Guest not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/delete-guest:
 *   delete:
 *     summary: Delete a guest from a wedding
 *     description: Allows an authenticated user to delete a guest from a specific wedding. The user must be the owner of the wedding or authorized to delete the guest.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: guestId
 *         required: true
 *         schema:
 *           type: string
 *           example: "60d0fe4f5311236168a109cb"
 *           description: The ObjectId of the guest to be deleted.
 *     responses:
 *       200:
 *         description: Guest deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Guest deleted successfully!"
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Guest ID is required and must be a valid ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Guest not found or unauthorized to delete.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Guest not found or unauthorized."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/get-shagun:
 *   get:
 *     summary: Retrieve one or more shagun entries for a wedding
 *     description: |
 *       This endpoint allows an authenticated user to fetch shagun records associated with a specific wedding.
 *       - If `id` is provided, it retrieves a specific shagun entry.
 *       - If only `weddingId` is provided, it returns all shagun entries for that wedding.
 *       - Supports filtering by `name`, `minAmount`, and `maxAmount`.
 *       The response includes the total shagun amount and the total number of entries.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: weddingId
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: true
 *         description: The ObjectId of the wedding for which to fetch shagun data.
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: false
 *         description: The ObjectId of a specific shagun entry to fetch.
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter shagun entries by guest name (partial match, case-insensitive).
 *       - in: query
 *         name: minAmount
 *         schema:
 *           type: number
 *           minimum: 0
 *         required: false
 *         description: Minimum shagun amount for filtering.
 *       - in: query
 *         name: maxAmount
 *         schema:
 *           type: number
 *           minimum: 0
 *         required: false
 *         description: Maximum shagun amount for filtering.
 *     responses:
 *       200:
 *         description: Shagun entry or entries retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Shagun entry retrieved successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     shagun:
 *                       type: object
 *                       nullable: true
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         shagunAmount:
 *                           type: number
 *                         city:
 *                           type: string
 *                         mobileNumber:
 *                           type: string
 *                         gift:
 *                           type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     shagunList:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           shagunAmount:
 *                             type: number
 *                           city:
 *                             type: string
 *                           mobileNumber:
 *                             type: string
 *                           gift:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                     totalShagunAmount:
 *                       type: number
 *                       example: 15000
 *                     totalCount:
 *                       type: number
 *                       example: 5
 *       400:
 *         description: Invalid request. Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access. You must be logged in to access this endpoint.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: No matching shagun entry or entries found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "No shagun entries found."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: An unexpected error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/get-guest:
 *   get:
 *     summary: Retrieve guest(s) for a wedding
 *     description: |
 *       Fetches either a single guest (if `id` is provided) or all guests associated with a specific wedding for the authenticated user.
 *       The total number of invitations and guests (sum of all `total_family_members`) is returned along with the guest data.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: weddingId
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: true
 *         description: The ID of the wedding to fetch guests for.
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         required: false
 *         description: Optional. The ID of a specific guest to retrieve.
 *     responses:
 *       200:
 *         description: Guests retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Guests retrieved successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     guests:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "60d0fe4f5311236168a109cb"
 *                           user:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: "60d0fe4f5311236168a109aa"
 *                               name:
 *                                 type: string
 *                                 example: "John Doe"
 *                               email:
 *                                 type: string
 *                                 example: "john@example.com"
 *                           wedding:
 *                             type: string
 *                             example: "60d0fe4f5311236168a109bb"
 *                           guest_name:
 *                             type: string
 *                             example: "Ravi Kumar"
 *                           total_family_members:
 *                             type: number
 *                             example: 4
 *                           city:
 *                             type: string
 *                             example: "Delhi"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-01-01T10:00:00.000Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-01-01T10:05:00.000Z"
 *                     totalInvitations:
 *                       type: number
 *                       example: 3
 *                     totalGuests:
 *                       type: number
 *                       example: 12
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request. Wedding ID is required and must be a valid ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       401:
 *         description: Unauthorized access. User not authenticated or lacks permission.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Guest(s) not found for the provided ID or wedding.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "No guests found."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       500:
 *         description: Internal server error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */

/**
 * @swagger
 * /api/user/get-expense:
 *   get:
 *     summary: Retrieve wedding expense(s)
 *     description: |
 *       Returns expense details for a wedding. You must pass `weddingId`. Optionally, pass `id` to get a specific expense.
 *       Calculates and returns total amount, paid amount, and pending amount.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: weddingId
 *         required: true
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: Wedding ID to filter expenses.
 *       - in: query
 *         name: id
 *         required: false
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: Optional. If provided, fetch a single expense record.
 *     responses:
 *       200:
 *         description: Expense(s) retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Expenses retrieved successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     expense:
 *                       type: object
 *                       nullable: true
 *                       description: Present only if `id` is passed.
 *                     expenses:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           expenseFor:
 *                             type: string
 *                             example: "Venue Booking"
 *                           totalAmount:
 *                             type: number
 *                             example: 15000
 *                           paidDepositAmount:
 *                             type: number
 *                             example: 5000
 *                           pendingAmount:
 *                             type: number
 *                             example: 10000
 *                     totalAmount:
 *                       type: number
 *                       example: 15000
 *                     totalPaid:
 *                       type: number
 *                       example: 5000
 *                     totalPending:
 *                       type: number
 *                       example: 10000
  *       400:
 *         description: Missing or invalid request parameters. The required `weddingId` parameter is missing or does not match the expected format.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid request. 'weddingId' is required and must be a valid ObjectId."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *
 *       401:
 *         description: Unauthorized access. The request lacks valid authentication credentials or the provided token is invalid or expired.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access. Please provide a valid authentication token."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *
 *       404:
 *         description: No expense records found for the provided wedding ID, or the specific expense ID does not exist under this wedding.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "No expenses found for the given wedding ID."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *
 *       500:
 *         description: Internal server error. Something went wrong on the server while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 *                 data:
 *                   type: string
 *                   nullable: true
 *                   example: null
 */
