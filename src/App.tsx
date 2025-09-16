"use client"

import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import EstiloGlobal, { Container } from "./styles"

import store from "./store"
import Contatos from "./pages/Contatos"
import NovoContato from "./pages/NovoContato"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Contatos />,
  },
  {
    path: "/contatos/novo",
    element: <NovoContato />,
  },
])

function App() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
