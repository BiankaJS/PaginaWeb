import AuthenticationService from "../services/AuthenticationService";

interface DtoLoginUsuario {
    correo: string;
    password: string;
}

export default class LoginUsuarioTask {
    private _dtoLoginUsuario: DtoLoginUsuario;

    public constructor (_dtoLoginUsuario: DtoLoginUsuario)
    {
        this._dtoLoginUsuario = _dtoLoginUsuario;
    }

    public async execute(): Promise<void> {
        this.validarDtoFormulario();
        const tokenSession = await this.loginUsuario();
        localStorage.setItem('tokenSession', tokenSession);
    }

    private validarDtoFormulario(): void {
        const { correo, password } = this._dtoLoginUsuario;
        if(!correo || !password) throw new Error('ErrorFormularioIncompleto')
    }

    private async loginUsuario(): Promise<string> {
        const servicioAuthentication = new AuthenticationService();
        const { correo, password } = this._dtoLoginUsuario;
        return servicioAuthentication.loginUsuario( {
            correo, password
        });
    }
}