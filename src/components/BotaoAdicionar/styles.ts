import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  font-size: 40px;
  background-color: ${variaveis.verde};
  color: #fff;
`
