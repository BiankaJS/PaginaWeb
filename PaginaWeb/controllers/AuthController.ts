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

    }
}