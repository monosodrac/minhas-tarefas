import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 10px;
  background-color: #e1a32a;
  color: #fff;
`

export const Descricao = styled.textarea`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  width: 100%;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  font-size: 10px;
  background-color: transparent;
  color: #8b8b8b;
  resize: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  background-color: #2f3640;
  color: #fff;
  cursor: pointer;
`
