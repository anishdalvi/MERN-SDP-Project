const nodemailer = require('nodemailer')

const sendMail = (email, username, otp) => {
    try {
        const transport = nodemailer.createTransport({
            
            host: "smtp.gmail.com",
            port: 465,
           
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        })

        return transport.sendMail({
            from:"usemetotestmailservice@gmail.com",
            to: email,
            subject: "OTP for Email Verfication MERN Stack SDP",
            html:       // template literals ``
            `   
            <div>
            <h1>Hello ${username}</h1>       
            <h2>Email Service of Nodemailer.....Ting Tong</h2>
            <br />
            <p>Your OTP for email verification is <strong> ${otp} </strong>
            <br />
            <h4>Thank You</h4>
            </div>
            `

        })
        .then((response) => {
            console.log("Email Sent ");
        })
    } catch (error) {
        console.log("Error:", error);
    }
}

module.exports = {
    sendMail
}