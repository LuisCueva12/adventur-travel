import { Resend } from 'resend';
//console.log("API Key:", process.env.RESEND_API_KEY); // Esto muestra tu clave API en consola. Úsalo solo para pruebas locales.
const resend = new Resend(process.env.RESEND_API_KEY); // Reemplaza con tu clave de API de Resend

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Método ${req.method} no permitido` });
    }

    const { nombre, email, celular, mensaje } = req.body;

    try {
        await resend.emails.send({
            from: 'noreply@resend.dev',
            to: 'doralyyhuaripata.9@gmail.com',
            subject: 'Nuevo mensaje de contacto',
            html: `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Celular:</strong> ${celular}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}