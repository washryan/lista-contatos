import { configureStore } from "@reduxjs/toolkit"

import contatosReducer from "./reducers/contatos"
import filtroReducer from "./reducers/filtro"

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type RootReducer = ReturnType<typeof store.getState>

export default store
