import { Application, Router, Request, Response} from "express";

export default class LugaresController
{
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