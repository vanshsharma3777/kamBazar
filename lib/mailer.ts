import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:Number(process.env.SMTP_PORT),
    secure:true,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD,
    }
})

export async function sendVerificationEmail(to:string , otp:string){
    const mailOptions={
        from:`"KaamBazar" ${process.env.SMTP_USER}>`,
        to,
        subject:"Verify your KaamBazar email",
        html:`
        <div style="font-family:Arial,sans-serif;padding:20px;background:#f8fafc;">
        <h2 style="color:#2563eb;">KaamBazar Email Verification</h2>
        <p>Hi there 👋,</p>
        <p>Use the following OTP to verify your email:</p>
        <h1 style="color:#1e40af;background:#e0f2fe;display:inline-block;padding:8px 16px;border-radius:8px;">${otp}</h1>
        <p>This OTP is valid for <b>1 minutes</b>.</p>
        <p>Thanks,<br/>The KaamBazar Team 💼</p>
      </div>
        `
    }

    await transporter.sendMail(mailOptions)
}