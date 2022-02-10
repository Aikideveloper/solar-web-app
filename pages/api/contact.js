require('dotenv').config()
const PASSWORD = process.env.PASSWORD;

export default function (req, res) {
  let nodemailer = require('nodemailer')

  const mailData = {
    "from": "solardelatorre@gmail.com",
    "to": "solardelatorre@gmail.com",
    "subject": "SUBSCRIPCIÓN DE CONSUMO SOLAR",
    "html": `
      <div ">
        Enhorabuena!${req.body.name}, quiere saber más Jamo!
        Email -> ${req.body.email}
      </div>
    `
   }

  const transporter = nodemailer.createTransport({
    port: "465",
    host: "smtp.gmail.com",
    auth: {
      user: 'solardelatorre@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  transporter.sendMail(mailData)
    .then(() => {
      console.log('email send!')
      return res.status(200)
    })
    .catch(err => console.log(err))
  res.end()
}