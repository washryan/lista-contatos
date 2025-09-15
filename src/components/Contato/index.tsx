'use client'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import type ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nomeCompleto, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompletoState, setNomeCompletoState] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [telefoneContato, setTelefoneContato] = useState('')

  useEffect(() => {
    setNomeCompletoState(nomeCompleto)
    setEmailContato(email)
    setTelefoneContato(telefone)
  }, [nomeCompleto, email, telefone])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompletoState(nomeCompleto)
    setEmailContato(email)
    setTelefoneContato(telefone)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {nomeCompletoState}
      </S.Titulo>
      <S.Tag>Contato</S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={nomeCompletoState}
        onChange={(evento) => setNomeCompletoState(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={emailContato}
        onChange={(evento) => setEmailContato(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefoneContato}
        onChange={(evento) => setTelefoneContato(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nomeCompleto: nomeCompletoState,
                    email: emailContato,
                    telefone: telefoneContato,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
