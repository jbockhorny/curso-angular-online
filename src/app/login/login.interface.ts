import { Usuario } from '../shared/services/interfaces/usuario.interface';

export interface LoginResponse {
    usuario: Usuario;
    token: string;
}