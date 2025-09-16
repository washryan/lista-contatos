class Contato {
  nomeCompleto: string
  email: string
  telefone: string
  id: number
  editando?: boolean

  constructor(nomeCompleto: string, email: string, telefone: string, id: number, editando: boolean = false) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.id = id
    this.editando = editando
  }
}

export default Contato
