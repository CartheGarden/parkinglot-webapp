import type {Action} from 'redux'
import {parkingSapce} from './AppState'

export type SaveParkingLockAction = Action<'saveParkingLock'> & {
    parkingLockId: string
}

export const saveParkingLockAction = (parkingLockId: string): SaveParkingLockAction => ({
    type: 'saveParkingLock',
    parkingLockId
})

// type LogoutAction = Action<'logout'>
// type LoginAction = Action<'login'> & {
//     loggedUser: User
// }

// export type LoginActions = LogoutAction | LoginAction

// export const loginAction = (loggedUser: User): LoginAction => ({
//     type: 'login',
//     loggedUser
// })
// export const logoutAction = (): LogoutAction => ({
//     type: 'logout'
// })