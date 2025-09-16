"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useContactStore } from "@/lib/store"

export function ContactForm() {
  const router = useRouter()
  const { addContact } = useContactStore()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Por favor, preencha todos os campos")
      return
    }

    addContact({
      nomeCompleto: name.trim(),
      email: email.trim(),
      telefone: phone.trim(),
    })

    // Reset form
    setName("")
    setEmail("")
    setPhone("")

    // Navigate back to contacts list
    router.push("/")
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Novo Contato</h2>
        <p className="text-gray-600">Adicione um novo contato à sua lista</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                placeholder="Digite o nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                placeholder="Digite o telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Salvar Contato
              </Button>
              <Button type="button" variant="outline" onClick={() => router.push("/")}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
