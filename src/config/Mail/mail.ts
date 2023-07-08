import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '4e94ec4c9936e3',
    pass: '0756d8a9a51463',
  },
});

const mailOptions: nodemailer.SendMailOptions = {
  from: 'EquipeBarber@gmail.com',
  to: 'felixmacarenco@gmail.com',
  subject: 'Novo Cancelamento',
  text: 'Novo Cancelamento de Agendamento',
};

export {transporter,mailOptions}
