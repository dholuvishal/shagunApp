const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function sendOTP(mobileNumber, otp) {
  try {
      await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      to: `+91 ${mobileNumber}`,
      from: phoneNumber,  // Your Twilio number
    });

  } catch (error) {
    console.error('Failed to send OTP:', error);
  }
}


module.exports = sendOTP;