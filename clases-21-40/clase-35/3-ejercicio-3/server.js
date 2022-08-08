import twilio from 'twilio'

const accountSid = 'ACd9518e92486ab2547dc1f3b7525e2e40'
const authToken = 'b7a3689470d1299db6fe9e37fe1dc5af'

const twilioClient = twilio(accountSid, authToken)

const from = '+19382225455'
const to = '+17868342999'
const body = 'Hello from Twilio!'

const info = await twilioClient.messages.create({body, from, to})

console.log(info)