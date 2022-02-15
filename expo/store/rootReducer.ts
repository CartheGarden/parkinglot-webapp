import { AppState } from "./AppState"
import type { SaveActions } from "./actions"

const initialState: AppState = {
  parkingSpaceId: "",
  parkingLockId: "",
};

export const rootReducer = (state: AppState = initialState, action: SaveActions) => {
  switch (action.type) {
    case "saveParkingSpaceId":
      return { ...state, parkingSpaceId: action.parkingSpaceId };
    case "saveParkingLockId":
      return { ...state, parkingLockId: action.parkingLockId };
    // case 'logout': return initialState
  }
  return state;
};