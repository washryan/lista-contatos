"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useContactStore } from "@/lib/store"

interface ContactCardProps {
  id: number
  nomeCompleto: string
  email: string
  telefone: string
}

export function ContactCard({ id, nomeCompleto, email, telefone }: ContactCardProps) {
  const { editContact, removeContact } = useContactStore()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("")
  const [emailState, setEmailState] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setName(nomeCompleto)
    setEmailState(email)
    setPhone(telefone)
  }, [nomeCompleto, email, telefone])

  function cancelEdit() {
    setIsEditing(false)
    setName(nomeCompleto)
    setEmailState(email)
    setPhone(telefone)
  }

  function handleSave() {
    editContact({
      id,
      nomeCompleto: name,
      email: emailState,
      telefone: phone,
    })
    setIsEditing(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isEditing && <em className="text-sm text-muted-foreground">Editando: </em>}
          {name}
        </CardTitle>
        <Badge variant="secondary" className="w-fit">
          Contato
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Nome completo"
            disabled={!isEditing}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={!isEditing ? "bg-muted" : ""}
          />
          <Input
            placeholder="Email"
            type="email"
            disabled={!isEditing}
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            className={!isEditing ? "bg-muted" : ""}
          />
          <Input
            placeholder="Telefone"
            disabled={!isEditing}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={!isEditing ? "bg-muted" : ""}
          />
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                Salvar
              </Button>
              <Button variant="destructive" onClick={cancelEdit}>
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Editar
              </Button>
              <Button variant="destructive" onClick={() => removeContact(id)}>
                Remover
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
