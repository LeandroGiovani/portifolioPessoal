import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Erro SMTP:", error);
  } else {
    console.log("Servidor SMTP pronto para enviar emails");
  }
});

app.post("/api/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  try {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📩 Novo contato do portfólio - ${name}`,
        html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:30px;">
            
            <div style="
            max-width:600px;
            margin:auto;
            background:white;
            border-radius:8px;
            padding:30px;
            box-shadow:0 4px 12px rgba(0,0,0,0.08);
            ">

            <h2 style="
                margin-top:0;
                color:#2563eb;
                font-size:22px;
            ">
                Novo contato pelo portfólio
            </h2>

            <p style="color:#555; margin-bottom:25px;">
                Alguém entrou em contato através do seu site.
            </p>

            <table style="width:100%; border-collapse:collapse;">
                <tr>
                <td style="padding:10px 0; font-weight:bold; color:#333;">Nome</td>
                <td style="padding:10px 0; color:#555;">${name}</td>
                </tr>
                <tr>
                <td style="padding:10px 0; font-weight:bold; color:#333;">Email</td>
                <td style="padding:10px 0; color:#555;">${email}</td>
                </tr>
            </table>

            <div style="
                margin-top:25px;
                padding:15px;
                background:#f9fafb;
                border-left:4px solid #2563eb;
                border-radius:4px;
            ">
                <p style="margin:0; color:#333;">
                ${message}
                </p>
            </div>

            <hr style="margin:30px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:12px; color:#888; margin:0;">
                Mensagem enviada através do formulário do seu portfólio.
            </p>

            </div>

        </div>
        `
        });

    res.json({ success: true });

  } catch (error) {

    console.error("Erro ao enviar email:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});