import type {Action} from 'redux'
import {parkingSapce} from './AppState'

export type SaveParkingSpaceIdAction = Action<'saveParkingSpaceId'> & {
    parkingSpaceId: string
}

export const saveParkingSpaceAction = (parkingSpaceId: string): SaveParkingSpaceIdAction => ({
    type: 'saveParkingSpaceId',
    parkingSpaceId
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