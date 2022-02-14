import { AppState } from "./AppState"
import type { SaveParkingLockAction } from "./actions"

const initialState: AppState = {
    parkingLockId: "",
}

export const rootReducer = (state: AppState = initialState, action: SaveParkingLockAction) => {
    switch(action.type) {
        case 'saveParkingLock': return {...state, parkingLockId: action.parkingLockId}
        // case 'logout': return initialState
    }
    return state
}