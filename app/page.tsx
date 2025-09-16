"use client"

import dynamic from "next/dynamic"

const ReactApp = dynamic(() => import("../src/App"), {
  ssr: false,
  loading: () => <div>Carregando...</div>,
})

export default function Home() {
  return <ReactApp />
}
