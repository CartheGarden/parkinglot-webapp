import { AppState } from "./AppState"
import type { SaveParkingSpaceIdAction } from "./actions"

const initialState: AppState = {
    parkingSpaceId: "",
}

export const rootReducer = (state: AppState = initialState, action: SaveParkingSpaceIdAction) => {
    switch(action.type) {
        case 'saveParkingSpaceId': return {...state, parkingSpaceId: action.parkingSpaceId}
        // case 'logout': return initialState
    }
    return state
}