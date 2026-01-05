### 📨 Servicio de Backend
API ligera construida en **Node.js** encargada de procesar las solicitudes del formulario de contacto. Actúa como pasarela segura entre el frontend y el servidor SMTP (Gmail/Nodemailer), protegiendo las credenciales y garantizando la entrega de los mensajes.

#### 🔐 Configuración del Backend (.env)
Para ejecutar el servicio de correos, crea un archivo `.env` en la raíz del servidor con las siguientes claves:

```env
PORT=3000
MAILER_SERVICE=gmail
MAILER_EMAIL=tu_correo@gmail.com
MAILER_SECRET_KEY=tu_contraseña_de_aplicacion