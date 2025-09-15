import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

type FiltroState = {
  termo?: string
  criterio: "todas" | "nome" | "email"
  valor?: string
}

const initialState: FiltroState = {
  termo: "",
  criterio: "todas",
}

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<{ criterio: "todas" | "nome" | "email"; valor?: string }>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    },
  },
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
