import express, {Application} from 'express';
import bodyParser from 'body-parser';

import AuthController from "./controllers/AuthController";
import AutosController from "./controllers/LugaresController";

const app: Application = express();
app.use(bodyParser.json());
AutosController.mount(app);
AuthController.mount(app);

export default app;