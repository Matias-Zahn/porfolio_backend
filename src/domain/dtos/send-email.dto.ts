import { regularExps } from "../../config/reg-exp";

export class SendEmailDTO {
  private constructor(
    public name: string,
    public email: string,
    public subject: string,
    public message: string
  ) {}

  public static create(object: {
    [key: string]: any;
  }): [string | undefined, SendEmailDTO?] {
    if (!object) return ["Falta todos los argumentos"];

    const { name, email, subject, message } = object;

    if (!name) return ["Falta el nombre"];
    if (!email) return ["Falta el email"];
    if (!subject) return ["Falta el asunto"];
    if (!message) return ["Falta el mensaje"];

    if (!regularExps.email.test(email)) return ["El email no es válido"];

    return [undefined, new SendEmailDTO(name, email, subject, message)];
  }
}
