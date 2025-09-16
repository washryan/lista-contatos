"use client"

import { ContactCard } from "./contact-card"
import { useContactStore } from "@/lib/store"

export function ContactList() {
  const { contacts, filter } = useContactStore()

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.nomeCompleto.toLowerCase().includes(filter.toLowerCase()) ||
      contact.email.toLowerCase().includes(filter.toLowerCase()) ||
      contact.telefone.includes(filter),
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contatos</h2>
        <p className="text-gray-600">
          {filteredContacts.length} contato{filteredContacts.length !== 1 ? "s" : ""} encontrado
          {filteredContacts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            nomeCompleto={contact.nomeCompleto}
            email={contact.email}
            telefone={contact.telefone}
          />
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum contato encontrado</p>
          <p className="text-gray-400">Tente ajustar os filtros ou adicione um novo contato</p>
        </div>
      )}
    </div>
  )
}
