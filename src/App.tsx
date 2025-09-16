"use client"

import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"

import EstiloGlobal, { Container } from "./styles"
import store from "./store"
import Contatos from "./pages/Contatos"
import NovoContato from "./pages/NovoContato"

const rotas = createBrowserRouter([
  { path: "/", element: <Contatos /> },
  { path: "/contatos/novo", element: <NovoContato /> }
])

function App() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        {isClient && <RouterProvider router={rotas} />}
      </Container>
    </Provider>
  )
}

export default App
