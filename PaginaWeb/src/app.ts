import express, {Application} from 'express'; 
import bodyParser from 'body-parser'; 
import AuthController from "../controllers/AuthController"; 
import LugaresController from '../controllers/LugaresController'; 
 
const app: Application = express(); 
app.use(bodyParser.json()); 
LugaresController.mount(app); 
AuthController.mount(app); 
export default app;