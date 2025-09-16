import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type FiltroState = {
  termo: string
  criterio: "nome" | "email" | "todas"
  valor?: string
}

const initialState: FiltroState = {
  termo: "",
  criterio: "todas",
  valor: "",
}

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<{ criterio: "nome" | "email" | "todas"; valor?: string }>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    },
  },
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
