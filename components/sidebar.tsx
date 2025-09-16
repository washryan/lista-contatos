"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useContactStore } from "@/lib/store"

export function Sidebar() {
  const pathname = usePathname()
  const { contacts, filter, setFilter } = useContactStore()

  const totalContacts = contacts.length
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.nomeCompleto.toLowerCase().includes(filter.toLowerCase()) ||
      contact.email.toLowerCase().includes(filter.toLowerCase()) ||
      contact.telefone.includes(filter),
  )

  return (
    <aside className="w-80 bg-white border-r border-gray-200 p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lista de Contatos</h1>
          <Input
            placeholder="Buscar contatos..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filtros</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total de contatos</span>
              <Badge variant="secondary">{totalContacts}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Resultados da busca</span>
              <Badge variant="outline">{filteredContacts.length}</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <Button asChild variant={pathname === "/" ? "default" : "outline"} className="w-full justify-start">
            <Link href="/">Ver Contatos</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/contatos/novo" ? "default" : "outline"}
            className="w-full justify-start"
          >
            <Link href="/contatos/novo">Novo Contato</Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}
