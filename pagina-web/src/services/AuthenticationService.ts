import axios, { AxiosError } from 'axios';

interface RegistroDto{
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    correo: string;
    telefono: string;
    password: string;
}

interface LoginDto{
    correo: string,
    password: string
}

export default class AuthenticationService {
    private baseUrl: string;

    public constructor()
    {
        this.baseUrl = 'http://localhost:3001/auth';
    }

    public async registroUsuario(dto: RegistroDto): Promise<string> {
        try {
            const respuesta = await axios.post(
                `${this.baseUrl}/registro`, dto
            );
            return respuesta.data.tokenSesion as string
        }
        catch(e)
        {
            if(e instanceof AxiosError) {
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 409:
                        throw new Error('ErrorNombreUsuarioDuplicado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            } else {
                throw e;
            }
        }
    }

    public async loginUsuario(dto: LoginDto): Promise<string>
    {
        try {
            const respuesta = await axios.post(
                `${this.baseUrl}/login`, dto
            );
            return respuesta.data.tokenSession as string
        }
        catch(e)
        {
            if(e instanceof AxiosError) {
                switch(e.response?.status) {
                    case 400: 
                        throw new Error('ErrorFormularioIncompleto');
                    case 401: 
                        throw new Error('ErrorUsuarioNoEncontrado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            } else {
                throw e;
            }
        }
    }
}