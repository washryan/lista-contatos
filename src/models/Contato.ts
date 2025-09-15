class Contato {
  nomeCompleto: string
  email: string
  telefone: string
  id: number
  editando: boolean = false

  constructor(nomeCompleto: string, email: string, telefone: string, id: number) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
