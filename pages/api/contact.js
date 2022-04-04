require('dotenv').config()

const PASSWORD = process.env.PASSWORD;

const mainFn =  async (req, res) => {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: "465",
    host: "smtp.gmail.com",
    auth: {
      user: 'autoconsumosolarmarketing@gmail.com',
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
              [date.getHours() + 2,
                date.getMinutes(),
                date.getSeconds()].join(':');
}

const mailData = {
  "from": "autoconsumosolarmarketing@gmail.com",
  "to": "autoconsumosolarmarketing@gmail.com",
  "subject": `SOLICITUD DE PRESUPUESTO WEB - ${req.body.province} - ${formatDate(new Date())}`,
  "html": `
    nombre: ${req.body.name}<br>
    email: ${req.body.email}<br>
    teléfono: ${req.body.phone}<br>
    `
 }

 const mailUserData = {
  "from": "autoconsumosolarmarketing@gmail.com",
  "to": `${req.body.email}`,
  "subject": `Autoconsumo Solar - Solicitud de presupuesto`,
  "html": `Tu solicitud de presupuesto ha sido enviada, uno de nuestros asesores energéticos se pondrá en contacto contigo en un plazo máximo de 24-48h laborables.<br>
  <br>Un cordial saludo,<br><br>Autoconsumo Solar`
 }

  await new Promise((resolve, reject) => {
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

export default mainFn
