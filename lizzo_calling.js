// Requiring environment variables
require('dotenv').config()
const client = require('twilio')(); 

client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml', 
        to: process.env.TO_NUMBER, 
        from: process.env.FROM_NUMBER
    })
    .then(call => console.log("Lizzo calling!"))