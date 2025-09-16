import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import EstiloGlobal, { Container } from "./styles"
import store from "./store"
import Rotas from "./routes"
import tema from "./themes/dark"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={tema}>
        <BrowserRouter>
          <Container>
            <EstiloGlobal />
            <Rotas />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
