"use client"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import type { RootState } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

import * as S from "./styles"
import { Campo } from "../../styles"

type Props = {
  mostrarFiltros?: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootState) => state.filtro)
  const { itens } = useSelector((state: RootState) => state.contatos)

  const filtrados = itens.filter(
    (item) =>
      item.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0 ||
      item.email.toLowerCase().search(termo.toLowerCase()) >= 0 ||
      item.telefone.search(termo) >= 0,
  )

  return (
    <S.Aside>
      <div>
        <S.Titulo>Lista de Contatos</S.Titulo>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <S.Filtro>
                <S.Contador>{filtrados.length}</S.Contador>
                <S.Label>contatos encontrados</S.Label>
              </S.Filtro>
            </S.Filtros>
          </>
        ) : (
          <S.BotaoVoltar onClick={() => navigate("/")}>← Voltar à lista de contatos</S.BotaoVoltar>
        )}
      </div>
      <S.Botao onClick={() => navigate("/novo")}>Novo contato</S.Botao>
    </S.Aside>
  )
}

export default BarraLateral
