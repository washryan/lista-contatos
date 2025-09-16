"use client"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import FiltroCard from "../../components/FiltroCard"
import type { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

import * as S from "./styles"
import { Botao, Campo } from "../../styles"

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="nome" legenda="por nome" />
              <FiltroCard criterio="email" legenda="por email" />
              <FiltroCard criterio="todas" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate("/")}>Voltar a lista de contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
