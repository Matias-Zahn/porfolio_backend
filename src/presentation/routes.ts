import { Router } from "express";
import { SendEmailController } from "./send-email/send-email.controller";
import { SendEmailService } from "./send-email/send-email.service";
import { envs } from "../config/envs";

export class AppRoutes {
  static get routes(): Router {
    const routes = Router();

    const service = new SendEmailService({
      mailerEmail: envs.EMAIL_USER,
      mailerKey: envs.EMAIL_PASS,
      mailerService: envs.SERVICE
    });
    const controller = new SendEmailController(service);

    routes.post("/send-email", controller.send);

    return routes;
  }
}
