
const fs = require('fs');

function generateOTP(length = 6) {
  let otp = "";
  const characters = "123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  while (otp.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}

const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
        reject(err);
      } else {
        console.log(`File deleted successfully: ${filePath}`);
        resolve();
      }
    });
  });
};

module.exports = { generateOTP, deleteFile };
