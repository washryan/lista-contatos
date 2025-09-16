"use client"

import { useDispatch, useSelector } from "react-redux"
import { alterarTermo } from "../../store/reducers/filtro"
import * as S from "./styles"
import type { RootState } from "../../store"

const BarraPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootState) => state.filtro)

  return (
    <S.Campo
      type="text"
      placeholder="Buscar"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default BarraPesquisa
