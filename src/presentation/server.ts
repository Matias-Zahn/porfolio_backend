import cors from 'cors';
import express, { Router } from 'express';
import { envs } from '../config/envs';

export class Server {





    constructor(
        private readonly routes: Router
    ){}


    public start(){


        const app = express();


        app.use(express.json())
        app.use(express.urlencoded({extended: true}));
        app.use(cors())



        //RUTAS
        app.use(this.routes)    

    

        app.listen(envs.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${envs.PORT}`)
        })
        
    }

}