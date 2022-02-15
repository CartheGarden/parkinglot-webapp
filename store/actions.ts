import type {Action} from 'redux'
import {parkingSapce} from './AppState'

export type SaveParkingSpaceIdAction = Action<'saveParkingSpaceId'> & {
    parkingSpaceId: string
}

export type SaveParkingLockIdAction = Action<'saveParkingLockId'> & {
    parkingLockId: string
}

export type SaveActions = SaveParkingSpaceIdAction | SaveParkingLockIdAction;

export const saveParkingSpaceIdAction = (parkingSpaceId: string): SaveParkingSpaceIdAction => ({
    type: 'saveParkingSpaceId',
    parkingSpaceId
})

export const saveParkingLockIdAction = (
  parkingLockId: string
): SaveParkingLockIdAction => ({
  type: "saveParkingLockId",
  parkingLockId,
});

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