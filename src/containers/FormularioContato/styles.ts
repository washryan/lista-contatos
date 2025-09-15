import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea,
  input {
    display: block;
    margin-bottom: 20px;
    padding: 8px;
    width: 100%;
    resize: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #666666;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
