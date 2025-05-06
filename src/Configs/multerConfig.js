const multer = require("multer");
const fs = require("fs");
const path = require("path");
const User = require("../Models/userModel");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let userMobile = req.body.mobileNumber || (req.user?.role === "user" ? req.user.mobileNumber : null);

        if (!userMobile) {
            const userId = req.body.id || req.query.id;

            if (req.user?.role === "admin") {
                if (userId) {
                    User.findOne({ _id: userId }).lean().then(user => {
                        if (!user) {
                            return cb(new Error("User not found."), "");
                        }

                        userMobile = user.mobileNumber;
                        if (!userMobile) {
                            return cb(new Error("User mobile number is required."), "");
                        }

                        const uploadPath = path.join(__dirname, `../Uploads/${userMobile}`);
                        fs.mkdirSync(uploadPath, { recursive: true });

                        cb(null, uploadPath);
                    }).catch(error => {
                        cb(error, "");
                    });
                } else {
                    if (req.user?.mobileNumber) {
                        userMobile = req.user.mobileNumber;
                    } else {
                        return cb(new Error("User mobile number is required."), "");
                    }
                }
            } else {
                return cb(new Error("User mobile number is required."), "");
            }
        }

        if (userMobile) {
            console.log("Uploading for mobile:", userMobile);
            const uploadPath = path.join(__dirname, `../Uploads/${userMobile}`);
            fs.mkdirSync(uploadPath, { recursive: true });
            cb(null, uploadPath);
        }
    },

    filename: (req, file, cb) => {
        const timeStamps = Date.now();
        const filename = `${timeStamps}${path.extname(file.originalname)}`;

        req.filename = filename;

        cb(null, filename)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];

    if(allowedMimeTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(new Error("Only .jpg, .png, .jpeg types of file are allowed"))
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 10000000},
});

module.exports = upload