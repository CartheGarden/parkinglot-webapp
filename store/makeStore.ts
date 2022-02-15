import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    const store = createStore(enhancedReducer);
    return store
}