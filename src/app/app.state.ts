import { User } from './shared/user.model';


export interface AppState {
    readonly users: User[];
}