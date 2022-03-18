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

const formatDate = date => {
    return [date.getMonth()+1,
               date.getDate(),
               date.getFullYear()].join('/')+' '+
              [date.getHours(),
                date.getMinutes(),
                date.getSeconds()].join(':');
}

const mailData = {
  "from": "solardelatorre@gmail.com",
  "to": "solardelatorre@gmail.com",
  "subject": `SOLICITUD DE PRESUPUESTO WEB - ${req.body.province} - ${formatDate(new Date)}`,
  "html": `
    nombre: ${req.body.name}<br>
    email: ${req.body.email}<br>
    teléfono: ${req.body.phone}<br>
    `
 }

 const mailUserData = {
  "from": "solardelatorre@gmail.com",
  "to": `${req.body.email}`,
  "subject": `SOLICITUD DE PRESUPUESTO WEB`,
  "html": `Tu solicitud de presupuesto ha sido enviado, nos pondremos en contacto contigo lo antes posible`
 }

  await new Promise((resolve, reject) => {
    console.log('password', PASSWORD)
    transporter.sendMail(mailData, async(err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            await new Promise((resolve, reject) => {
              transporter.sendMail(mailUserData, (err, info) => {
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

            resolve(info);
        }
    });
  });
  res.end()


}