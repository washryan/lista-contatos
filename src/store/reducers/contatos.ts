import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type Contato from "../../models/Contato"

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: "João Silva Santos",
      email: "joao.silva@email.com",
      telefone: "(11) 99999-1234",
    },
    {
      id: 2,
      nomeCompleto: "Maria Oliveira Costa",
      email: "maria.oliveira@email.com",
      telefone: "(11) 98888-5678",
    },
    {
      id: 3,
      nomeCompleto: "Pedro Souza Lima",
      email: "pedro.souza@email.com",
      telefone: "(11) 97777-9012",
    },
  ],
}

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex((c) => c.id === action.payload.id)

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.email.toLowerCase() === action.payload.email.toLowerCase(),
      )

      if (contatoJaExiste) {
        alert("Já existe um contato com esse email")
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        }
        state.itens.push(contatoNovo)
      }
    },
  },
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
