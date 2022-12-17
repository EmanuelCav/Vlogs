import nodemailer from 'nodemailer';

const { MY_HOST, MY_EMAIL, MY_PASS } = process.env

let transporter = nodemailer.createTransport({
    host: MY_HOST,
    port: 587,
    secure: false,
    auth: {
        user: MY_EMAIL,
        pass: MY_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const infoEmail = async (email: string) => {

    try {

        await transporter.sendMail({
            from: `'EMAILS' ${MY_EMAIL}`,
            to: email,
            subject: "Emails - Validate an account",
            html: "<b>Hello world?</b>",
        });

    } catch (error) {
        throw error
    }

}


