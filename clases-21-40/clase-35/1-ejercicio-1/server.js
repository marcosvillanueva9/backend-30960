import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'myrl.schultz18@ethereal.email',
    pass: 'TaCZVFh5RckpaxHmb4',
  },
})

const asunto = process.argv[2] || 'sin asunto'
const mensaje = process.argv[3] || 'sin mensaje'

console.log('Enviando mensaje...')
const info = await transporter.sendMail({
  from: 'myrl.schultz18@ethereal.email',
  to: 'myrl.schultz18@ethereal.email',
  subject: asunto,
  text: mensaje,
})

console.log('Mensaje enviado', info)