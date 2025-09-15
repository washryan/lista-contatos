"use client"
import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { MainContainer, Titulo } from "../../styles"

import type { RootReducer } from "../../store"

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.email.toLowerCase().search(termo.toLowerCase()) >= 0,
      )

      if (criterio === "nome") {
        contatosFiltrados = contatosFiltrados.filter((item) =>
          item.nomeCompleto.toLowerCase().includes((valor || "").toLowerCase()),
        )
      } else if (criterio === "email") {
        contatosFiltrados = contatosFiltrados.filter((item) =>
          item.email.toLowerCase().includes((valor || "").toLowerCase()),
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ""
    const complementacao = termo !== undefined && termo.length > 0 ? `e "${termo}"` : ""

    if (criterio === "todas") {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${criterio}=${valor}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato id={c.id} nomeCompleto={c.nomeCompleto} email={c.email} telefone={c.telefone} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
