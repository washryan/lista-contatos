import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Lista de Contatos",
  description: "Aplicativo para gerenciar contatos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
