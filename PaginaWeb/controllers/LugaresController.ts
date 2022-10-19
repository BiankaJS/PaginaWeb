import { Application, Router, Request, Response} from "express";

export default class LugaresController
{
    private router: Router;

    private constructor(app: Application)
    {
        this.router = Router();
        this.initializeRoutes();
        app.use('/lugares', this.router);
    }

    private initializeRoutes(): void {

    }

    private async consultaLugares(req: Request, res: Response): Promise<void>
    {
        
    }

    private async nuevoLugar(req: Request, res: Response): Promise<void>
    {
        
    }

    private async consultaLugarId(req: Request, res: Response): Promise<void>
    {

    }

    public static mount (app: Application): LugaresController
    {
        return new LugaresController(app);
    }
}