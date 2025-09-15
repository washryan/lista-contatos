"use client"

import { useDispatch, useSelector } from "react-redux"
import { alterarFiltro } from "../../store/reducers/filtro"
import * as S from "./styles"
import type { RootReducer } from "../../store"

export type Props = {
  legenda: string
  criterio: "nome" | "email" | "todas"
  valor?: string
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === "todas") return contatos.itens.length
    if (criterio === "nome") {
      return contatos.itens.filter((item) => item.nomeCompleto.toLowerCase().includes((valor || "").toLowerCase()))
        .length
    }
    if (criterio === "email") {
      return contatos.itens.filter((item) => item.email.toLowerCase().includes((valor || "").toLowerCase())).length
    }
    return 0
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor,
      }),
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
