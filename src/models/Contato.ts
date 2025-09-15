class Contato {
  nome: string
  email: string
  telefone: string
  id: number
  editando: boolean = false

  constructor(nome: string, email: string, telefone: string, id: number) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}
