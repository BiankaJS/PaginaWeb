import axios, { AxiosError} from "axios";
import Lugar from "../models/Lugar";

interface LugarBackend{
    Id: number;
    nombre: string;
    descripcion: string;
    direccion: string;
    telefono: string;
    imagen: string
}

export default class LugaresService{
    private baseUrl: string;

    public constructor()
    {
        this.baseUrl = 'http://localhost:3001/lugares'
    }

    public async obtenerLugares(): Promise<Lugar[]> {
        try {
            const respuesta = await axios.get(this.baseUrl);
            const listLugar = respuesta.data.map((lugar: LugarBackend) => (
                new Lugar(
                    lugar.Id, lugar.nombre, lugar.descripcion, lugar.direccion, lugar.telefono, lugar.imagen)
            ));
            return listLugar;
        } catch (e) {
            if(e instanceof AxiosError && e.response) {
                switch(e.response.status) {
                    case 404: 
                        throw new Error('NoSeEncontraronLugares')
                    default:
                        throw e;
                }
            }
            throw e;
        }
    }
}