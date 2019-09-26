// Requiring environment variables 
require('dotenv').config() 
// Twilio automatically looks for and knows that my TWILIO_AUTH_TOKEN and TWILIO_ACCOUNT_SID are in .env
const client = require('twilio')(); 

// Creating the messages 
client.messages 
.create({
    body: "🎶🔕 And that's the soouunnd of me not calling you back 🔕🎶",
    from: process.env.FROM_NUMBER,
    to: process.env.TO_NUMBER
})
.then(console.log("Lizzo SOS sent!"))