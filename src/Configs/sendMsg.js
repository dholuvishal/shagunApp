const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function sendMessage(mobileNumber, messageBody) {
  try {
    await client.messages.create({
      body: messageBody,
      to:  `+91 ${mobileNumber}`, 
      from: phoneNumber, 
    });

  } catch (error) {
    console.error('❌ Failed to send SMS:', error);
  }
}

module.exports = sendMessage;
