"use server"
import { Resend } from 'resend';

type Props = {
    address: string;
    name: string;
    email: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
    address,
    name,
    email
}: Props) => {
    console.log("Here")

    if (address === 'address value' || address === '') { return null }
    if (name === 'address value' || name === '') { return null }
    if (email === 'address value' || email === '') { return null }

    console.log("Sending email: ", email, name, address)

    return await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: `Hey ${name.split(" ")}, hemos enviado tu taxi 🚕`,
        text: `Hola ${name.split(" ")[0]}, tu taxi llegará pronto a ${address}. Gracias por elegirnos.`
    });

}