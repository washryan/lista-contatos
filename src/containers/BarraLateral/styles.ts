import styled from "styled-components"

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Titulo = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Filtro = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin-right: 8px;
`

export const Label = styled.span`
  font-size: 14px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #44bd32;
  border-radius: 8px;
  margin-top: 8px;
`

export const BotaoVoltar = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #999;
  border-radius: 8px;
  margin-top: 16px;
`
