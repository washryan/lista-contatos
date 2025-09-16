"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"

import * as S from "./styles"
import { remover, editar } from "../../store/reducers/contatos"
import type ContatoClass from "../../models/Contato"
import { Campo } from "../../styles"

type Props = ContatoClass

const Contato = ({ nomeCompleto, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto_, setNomeCompleto] = useState("")
  const [email_, setEmail] = useState("")
  const [telefone_, setTelefone] = useState("")

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNomeCompleto(nomeCompleto)
    setEmail(email)
    setTelefone(telefone)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {nomeCompleto}
      </S.Titulo>
      {estaEditando ? (
        <>
          <Campo
            placeholder="Nome completo"
            value={nomeCompleto_}
            onChange={(evento) => setNomeCompleto(evento.target.value)}
          />
          <Campo placeholder="E-mail" value={email_} onChange={(evento) => setEmail(evento.target.value)} />
          <Campo placeholder="Telefone" value={telefone_} onChange={(evento) => setTelefone(evento.target.value)} />
        </>
      ) : (
        <>
          <S.Descricao>E-mail: {email}</S.Descricao>
          <S.Descricao>Telefone: {telefone}</S.Descricao>
        </>
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nomeCompleto: nomeCompleto_,
                    email: email_,
                    telefone: telefone_,
                    id,
                  }),
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
