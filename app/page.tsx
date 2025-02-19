"use client"

import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Hero />
    </main>
  )
}
