 const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;
app.use(bodyParser.json());
// Replace with your email and password
const senderEmail = '202200619@vupune.ac.in';
const senderPassword = 'ihaveabmwx1$';
const fixedRecipientEmail = '202200619@vupune.ac.in'; // Fixed recipientemail address
const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: senderEmail,
 pass: senderPassword
 }
});
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
});
app.post('/send-email', (req, res) => {
 // Use the fixed recipient email address
 const recipientEmail = fixedRecipientEmail;
 const mailOptions = {
 from: senderEmail,
 to: recipientEmail,
 subject: 'OTP',
 text: 'YOUR LOGIN OTP IS 123456! DO NOT SHARE THIS OTP WITH ANYONE ELSE'
 };
 transporter.sendMail(mailOptions, (error, info) => {
 if (error) {
 console.error('Error:', error);
 res.json({ success: false, message: 'Error sending email.' });
 } else {
 console.log('Email sent:', info.response);
 res.json({ success: true, message: 'Email sent successfully.' });
 }
 });
});
// Serve static files from the same directory (including otp.html andsuccess.html)
app.use(express.static(__dirname));
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});