import { Application, Request, Response, Router } from 'express';

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

    }

    private async login(req: Request, res: Response): Promise<void>
    {

    }

    public static mount(app: Application): AuthController
    {
        return new AuthController(app);
    }
}