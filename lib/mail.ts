import nodemailer from "nodemailer";

const SOURCE_EMAIL = "";
const SOURCE_PASSWORD = "";

const Transporter = nodemailer.createTransport({service:"gmail", auth:{user:SOURCE_EMAIL, pass:SOURCE_PASSWORD}})

const sendWelcomeMail = async (email:string) => {
    
    console.log(email, SOURCE_EMAIL);
    let info = await Transporter.sendMail({
      from: SOURCE_EMAIL,
      to: email,
      subject: `Welcome to GyanaGuru!!`,

      html: `<b>Hi!!</b>,<br/><br/>
      Congratulations! Your registration for <b>GyanaGuru</b> is successful.<br/><br/>
      Regards<br/>
      GyanaGuru<br/>`
    });
    console.log(info);
}

export default sendWelcomeMail
