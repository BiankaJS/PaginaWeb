import { Application, Request, Response, Router } from 'express';
import Usuario from '../models/entities/Usuario';
import Sesion from '../models/Sesion';
import DatabaseConnection from '../database/DatabaseConnetion';

interface RegistroRequestBody{
    usuario:string;
    password:string;
    nombreCompleto:string;
}

interface LoginRequestBody
{
    username: string;
    password: string;
}

export default class AuthController{
    private router: Router;

    private constructor(app: Application)
    {
        this.router = Router();
        this.initializeRoutes();
        app.use('/auth', this.router);
    }

    private initializeRoutes(): void {
        this.router.post('/login', this.login);
        this.router.post('/registro', this.registro);
    }

    private async registro(req: Request, res: Response): Promise<void>
    {
        try {
            const {usuario,password,nombreCompleto} = <RegistroRequestBody>req.body;

            if(!usuario || !password || !nombreCompleto){
                res.status(400).end();
                return;
            }
        const repositorioUsuarios = await DatabaseConnection.getRepository(Usuario);
        const nuevoUsuario = new Usuario();
        nuevoUsuario.usuario = usuario;
        nuevoUsuario.password = password;
        nuevoUsuario.fechaCreacion = new Date;
        nuevoUsuario.fechaActualizacion = new Date;

        const sesion = Sesion.crearParaUsuario(nuevoUsuario);
        await repositorioUsuarios.save(nuevoUsuario);

        res.status(200).json(sesion);
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    }

    private async login(req: Request, res: Response): Promise<void>
    {
        try {
            const{username, password} = <LoginRequestBody> req.body;
            if(!username || !password){
                res.status(400).end();
                return;
            }
        const repositorioUsuario = await DatabaseConnection.getRepository(Usuario);
        

        const usuario =  await repositorioUsuario.findOneBy({
         usuario: username,
         password: password   
        });

        

        if(!usuario){
            res.status(401).end();
        } 
        else{
            const sesion = Sesion.crearParaUsuario(usuario);
            res.status(200).json(sesion);
        }
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    }

    public static mount(app: Application): AuthController
    {
        return new AuthController(app);
    }
}