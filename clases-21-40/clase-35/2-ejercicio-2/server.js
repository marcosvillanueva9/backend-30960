import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'marcosvillanueva009@gmail.com',
    pass: 'usjynpzmkmmfcxut',
  },
})

const asunto = process.argv[2] || 'sin asunto'
const mensaje = process.argv[3] || 'sin mensaje'

console.log('Enviando mensaje...')
const info = await transporter.sendMail({
  from: 'marcosvillanueva009@gmail.com',
  to: ['tobyceballos44@gmail.com', 'marcosvillanueva009@gmail.com'],
  subject: asunto,
  text: mensaje,
  attachments: [
    {
      path: './grogu.webp'
    }
  ]
})

console.log('Mensaje enviado', info)