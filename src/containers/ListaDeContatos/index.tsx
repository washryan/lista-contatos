"use client"

import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import type { RootReducer } from '../../store'

import * as S from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.email.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.telefone.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (complemento) {
      mensagem = `${quantidade} contato(s) encontrado(s) como: ${complemento}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s)`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.Container>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeCompleto}>
            <Contato
              id={c.id}
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeContatos
