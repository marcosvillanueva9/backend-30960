import twilio from 'twilio';

const accountSid = 'accountSid';
const authToken = 'authToken';

const client = twilio(accountSid, authToken);

const numero = process.argv[2] || '+5492612515909';
const mensaje = process.argv[3] || 'Este es un mensaje automatico';

try {
    const message = await client.messages.create({
        body: mensaje,
        to: `whatsapp:${numero}`,
        from: 'whatsapp:+14155238886'
    });

    console.log(message);
} catch (error) {
    console.log(error);
}