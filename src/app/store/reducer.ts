import { User } from '../shared/user.model';
import * as Actions from './actions'

// 2 - Estado inicial
const initialState: User = {
  user: '',
  pass: ''
}

// 3 - Switch con las funciones puras
export function reducer(state: User[] = [initialState], action: Actions.Actions) {
  switch (action.type) {
    case Actions.GET_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}