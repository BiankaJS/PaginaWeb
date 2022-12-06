import AuthenticationService from "../services/AuthenticationService";

interface DtoLoginUsuario {
    usuario: string;
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
        const { usuario, password } = this._dtoLoginUsuario;
        if(!usuario || !password) throw new Error('ErrorFormularioIncompleto')
    }

    private async loginUsuario(): Promise<string> {
        const servicioAuthentication = new AuthenticationService();
        const { usuario, password } = this._dtoLoginUsuario;
        return servicioAuthentication.loginUsuario( {
            usuario, password
        });
    }
}