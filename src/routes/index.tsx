import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Cadastro from "../pages/Cadastro"
import Contatos from "../pages/Contatos"
import NovoContato from "../pages/NovoContato"

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/novo" element={<Cadastro />} />
    <Route path="/contatos" element={<Contatos />} />
    <Route path="/contatos/novo" element={<NovoContato />} />
  </Routes>
)

export default Rotas
