import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  font-weight: bold;
  background-color: #fff;
  border-color: #666666;
  color: #666666;
`

export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
