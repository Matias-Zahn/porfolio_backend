import { SendEmailDTO } from "../../domain/dtos/send-email.dto";
import nodemailer from "nodemailer";

export interface SendEmailOptions {
  mailerService: string;
  mailerEmail: string;
  mailerKey: string;
}

export class SendEmailService {
  private readonly transporter: nodemailer.Transporter;
  private readonly senderEmail: string;

  constructor(options: SendEmailOptions) {
    this.senderEmail = options.mailerEmail;

    this.transporter = nodemailer.createTransport({
      service: options.mailerService,
      auth: {
        user: options.mailerEmail,
        pass: options.mailerKey,
      },
    });
  }

  public async send(sendEmailDTO: SendEmailDTO): Promise<boolean> {
    const { name, email, subject, message } = sendEmailDTO;

    try {
      const sentInformation = await this.transporter.sendMail({
        from: `"Portfolio Contact" <${this.senderEmail}>`,
        to: this.senderEmail,
        replyTo: email,
        subject: `Mensaje de ${name}: ${subject}`,
        html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                        <h2 style="color: #3b82f6;">Tienes un nuevo contacto</h2>
                        <p><strong>De:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                        <p><strong>Asunto:</strong> ${subject}</p>
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                        <h3>Mensaje:</h3>
                        <p style="white-space: pre-line; color: #333;">${message}</p>
                        <br>
                        <small style="color: #888;">Este correo fue enviado desde tu Portafolio Web.</small>
                    </div>
                `,
      });
      return true;
    } catch (error) {
      console.error("Error enviando email:", error);
      return false;
    }
  }
}
