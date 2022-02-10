require('dotenv').config()
const PASSWORD = process.env.PASSWORD;

export default async (req, res) => {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: "465",
    host: "smtp.gmail.com",
    auth: {
      user: 'solardelatorre@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

const mailData = {
  "from": "solardelatorre@gmail.com",
  "to": "solardelatorre@gmail.com",
  "subject": "SUBSCRIPCIÓN DE CONSUMO SOLAR",
  "html": `${req.body.email}`
 }


  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
  });
  res.status(200).json({ status: "OK" });
  res.end()
}