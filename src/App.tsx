import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
      </Container>
    </>
  )
}

export default App
