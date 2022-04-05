import { Action } from '@ngrx/store'
import { User } from '../shared/user.model';

// 2 - Definición del tipo de acción
export const GET_USER = 'Get User'

// 3 - Creación de la clase tipo GetUser
export class GetUser implements Action {
  readonly type = GET_USER
  constructor(public payload: User) { }
}

// 4 - Exportación de la acción
export type Actions = GetUser