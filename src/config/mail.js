var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth: {
        user: 'blacktweetyapp@yahoo.com',
        pass: 'levrone2000'
    }
});

module.exports = transporter;