import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport'

const auth = {
    auth: {
      api_key: process.env.EMAIL_SEND_KEY,
      domain: process.env.EMAIL_SEND_DOMAIN
    }
}
  
// const transporter = nodemailer.createTransport(mg(auth));

export const sendBookingEmail = (booking) => {
    const { email, slot } = booking;
    
    // // let transporter = nodemailer.createTransport({
    // //     host: 'smtp.sendgrid.net',
    // //     port: 587,
    // //     auth: {
    // //         user: "apikey",
    // //         pass: process.env.SENDGRID_API_KEY
    // //     }
    // // });
    
    // transporter.sendMail({
    //     from: "jhankar.mahbub2@gmail.com", // verified sender email
    //     to: email || 'jhankar.mahbub2@gmail.com', // recipient email
    //     subject: `Your appointment for is confirmed`, // Subject line
    //     text: "Hello world!", // plain text body
    //     html: `
    //     <h3>Your appointment is confirmed</h3>
    //     <div>
    //         <p>Please join zoom link at ${slot}</p>
    //         <p>Thanks from soloventure.</p>
    //     </div>
        
    //     `, // html body
    // }, function (error, info) {
    //     if (error) {
    //         console.log('Email send error', error);
    //     } else {
    //         console.log('Email sent: ' + info);
    //     }
    // });
    console.log("didnt implemented mail on booking confirmation yet, booking for email: " + email + " at " + slot )
}
