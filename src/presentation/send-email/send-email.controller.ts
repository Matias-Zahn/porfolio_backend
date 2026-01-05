import { Request, Response } from "express";
import { SendEmailService } from "./send-email.service";
import { SendEmailDTO } from "../../domain/dtos/send-email.dto";
import { CustomError } from "../../domain/errors/custom.error";

export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError)
      return res.status(error.statusCode).json(error.errorMessage);
    console.log(error);
    return res.status(500).json({ error: `Error de interno de servidor` });
  };

  public send = (req: Request, res: Response) => {
    const [error, sendEmailDTO] = SendEmailDTO.create(req.body);

    if (error) return res.status(400).json({ error });

    this.sendEmailService
      .send(sendEmailDTO!)
      .then((resp) => res.status(200).json({ message: "Algo bueno" }))
      .catch((err) => this.handleError(err, res));
  };
}
