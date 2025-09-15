'use client'

import { useDispatch, useSelector } from 'react-redux'

import { alterarTermo } from '../../store/reducers/filtro'
import type { RootReducer } from '../../store'
import * as S from './styles'

const BarraPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Campo
      type="text"
      placeholder="Buscar contatos..."
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default BarraPesquisa
