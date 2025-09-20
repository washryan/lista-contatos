import { configureStore } from "@reduxjs/toolkit"

import contactReducer from './Reducers/Contact'

export const store = configureStore({
    reducer: {
        contacts: contactReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch