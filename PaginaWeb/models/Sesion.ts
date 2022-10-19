import jwt from 'jsonwebtoken';
import Usuario from "./entities/Usuario";

export default class Sesion{
    public tokenSesion: string;
    private static readonly secret = 'Les mamites hot';

    private constructor(tokenSesion: string){
        this.tokenSesion = tokenSesion;
    }

    public static tokenUsuario(usuario: Usuario): Sesion{
        const data = {
            usuario: usuario.usuario,
            password: usuario.password
        }
        const token = jwt.sign({ data }, Sesion.secret, { expiresIn: '1d'});
        return new Sesion(token);
    }

    
}