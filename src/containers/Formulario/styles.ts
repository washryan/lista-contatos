import styled from "styled-components"

export const Container = styled.main`
  height: 100vh;
  padding: 0 40px;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const BotaoSalvar = styled.button`
  background-color: #44bd32;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: none;
  margin-right: 8px;
`
