'use client'

import { type FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  BotaoSalvar,
  BotaoCancelarRemover
} from '../../components/Contato/styles'
import { cadastrar } from '../../store/reducers/contatos'

import * as S from './styles'

const FormularioContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <input
        value={nomeCompleto}
        onChange={(evento) => setNomeCompleto(evento.target.value)}
        type="text"
        placeholder="Nome completo"
        required
      />
      <input
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="E-mail"
        required
      />
      <input
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        type="tel"
        placeholder="Telefone"
        required
      />
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      <BotaoCancelarRemover onClick={() => navigate('/')} type="button">
        Cancelar
      </BotaoCancelarRemover>
    </S.Form>
  )
}

export default FormularioContato
