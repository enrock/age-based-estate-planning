"use client"

import { useState, useMemo, useCallback, memo } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download, Info, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import React from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

const getLifeStage = (age: number) => {
  if (age < 30) return "Young Professional"
  if (age < 40) return "New Parent"
  if (age < 55) return "Mid-Career"
  if (age < 70) return "Pre-Retirement"
  return "Golden Years"
}

const MetricDisplay = memo(
  ({
    label,
    value,
    tooltipId,
    onTooltipClick,
  }: {
    label: string
    value: string | number
    tooltipId: string
    onTooltipClick: (id: string) => void
  }) => (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold text-slate-100 dark:text-slate-900 mb-2">{value}</div>
      <div className="text-sm text-slate-300 dark:text-slate-600 flex items-center justify-center">
        {label}
        <button
          onClick={() => onTooltipClick(tooltipId)}
          className="p-1 ml-1 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Info className="w-4 h-4 text-slate-300 dark:text-slate-600" />
        </button>
      </div>
    </div>
  ),
)

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Hero />
    </main>
  )
}

