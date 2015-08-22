var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'chornij1@gmail.com',
        pass: '3802221643'
    }
});

module.exports = transporter;