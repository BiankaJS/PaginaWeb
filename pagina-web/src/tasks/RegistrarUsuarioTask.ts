import AuthenticationServices from '../services/AuthenticationService';
interface DtoFormularioRegirstoUsuario {
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    correo: string;
    telefono: string;
    password: string;
    verificarPassword: string;
}

export default class RegistroUsuarioTask {
    private _dtoFormularioRegistroUsuario: DtoFormularioRegirstoUsuario;

    public constructor(_dtoFormularioRegistroUsuario : DtoFormularioRegirstoUsuario) {
        this._dtoFormularioRegistroUsuario = _dtoFormularioRegistroUsuario;
    }

    public async execute(): Promise<void> {
        //validar los datos del formulario
        this.validarDtoFormulario();
        //llamar el servicio para registrar el usuario
        const tokenSession = await this.registrarUsuario();
        //guardar el token en el almacenamiento local del navegador
        localStorage.setItem('tokenSession', tokenSession);
    }

    private validarDtoFormulario(): void {
        const { nombre, apellidos, fechaNacimiento, correo, telefono, password, verificarPassword} = this._dtoFormularioRegistroUsuario;

        if(!nombre || !apellidos || !fechaNacimiento || !correo || !telefono || !password || !verificarPassword) {
            throw new Error('ErrorFormularioIncompleto');
        }

        if(password !== verificarPassword)
        {
            throw new Error('ErrorPasswordNoCoinciden');
        }
    }

    private async registrarUsuario(): Promise<string> {
        const servicioAuthentication = new AuthenticationServices();
        const { nombre, apellidos, fechaNacimiento, correo, telefono, password} = this._dtoFormularioRegistroUsuario;
        return servicioAuthentication.registroUsuario( {
            nombre, apellidos, fechaNacimiento, correo, telefono, password
        });
    }
}