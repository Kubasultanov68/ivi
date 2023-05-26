import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from "redux-persist"
import storage from "redux-persist/lib/storage"

import user from "./reducers/user";
import movie from "./reducers/movie";
import oneMedia from "./reducers/oneMedia";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['users']
}

const rootReducer = combineReducers({
    user,
    movie,
    oneMedia
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store