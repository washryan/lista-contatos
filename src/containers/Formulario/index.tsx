"use client"

import { type FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { cadastrar } from "../../store/reducers/contatos"
import { Campo } from "../../styles"
import * as S from "./styles"

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeCompleto, setNomeCompleto] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone,
      }),
    )
    navigate("/")
  }

  return (
    <S.Container>
      <S.Titulo>Novo contato</S.Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="Nome completo"
          required
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
          required
        />
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </S.Form>
    </S.Container>
  )
}

export default Formulario
