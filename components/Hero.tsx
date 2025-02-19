"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState, useCallback } from "react"
import { Info, RefreshCw, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const MetricDisplay = ({
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
  <div className="flex flex-col justify-center items-center">
    <div className="mb-2 text-4xl font-bold text-slate-900 dark:text-slate-100">{value}</div>
    <div className="flex justify-center items-center text-sm text-slate-600 dark:text-slate-300">
      {label}
      <button
        onClick={() => onTooltipClick(tooltipId)}
        className="p-1 ml-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Info className="w-4 h-4 text-slate-600 dark:text-slate-300" />
      </button>
    </div>
  </div>
)

const getLifeStage = (age: number) => {
  if (age < 30) return "Young Professional"
  if (age < 40) return "New Parent"
  if (age < 55) return "Mid-Career"
  if (age < 70) return "Pre-Retirement"
  return "Golden Years"
}

const Hero = () => {
  const [age, setAge] = useState(30)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const averageHourlyRate = 285
  const baseAttorneyHours = 15

  const calculatedValues = {
    intestateCost: Math.round(baseAttorneyHours * Math.pow(age / 30, 1.5) * averageHourlyRate * 2),
    attorneyCost: Math.round(baseAttorneyHours * Math.pow(age / 30, 1.5) * averageHourlyRate)
  }

  const handleSliderChange = (value: number[]) => {
    setAge(value[0])
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  const handleTooltipClick = useCallback((tooltipId: string) => {
    setActiveTooltip(tooltipId)
  }, [])

  const handleReset = () => {
    setAge(30)
    setHasInteracted(false)
  }

  const handleDownloadPDF = () => {
    console.log("Downloading 2025 Planning Guide PDF")
  }

  const lifeStage = getLifeStage(age)

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-12">
          {/* Left side - Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Transform Your Digital Experience
            </h1>
            <h3 className="mb-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Create stunning, responsive websites with our modern UI components and intuitive design system.
            </h3>
            <div className="flex gap-4">
              <Button size="lg" className="px-8 text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Card UI */}
          <div className="flex-1 w-full max-w-xl">
            <Card 
              className={`w-full bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-xl relative overflow-hidden transition-all duration-300 ease-in-out z-[1] ${
                activeTooltip ? "blur-sm" : ""}`}
            >
              <ThemeToggle />

              <div className="absolute top-2 left-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-black-KyM3yfA9uFJ5qaBIXXSOMrTeJcWqBc.png"
                  alt="WealthBerry"
                  className="block w-auto h-20 dark:hidden"
                  width="400"
                  height="80"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-white-np4PNx269d9wxZf3AhUf5DcZsPhoM3.png"
                  alt="WealthBerry"
                  className="hidden w-auto h-20 dark:block"
                  width="400"
                  height="80"
                />
              </div>
              
              <CardContent className="p-8 pt-24">
                <h1 className="mb-6 text-3xl text-center text-slate-900 dark:text-slate-100">
                  Estate Planning Calculator
                </h1>
                
                <div className="grid grid-cols-3 gap-6 mb-12 text-center">
                  <MetricDisplay 
                    label="Your Age" 
                    value={age} 
                    tooltipId="age" 
                    onTooltipClick={handleTooltipClick} 
                  />
                  <MetricDisplay 
                    label="Family Cost" 
                    value={`$${calculatedValues.intestateCost.toLocaleString()}`} 
                    tooltipId="familyCost" 
                    onTooltipClick={handleTooltipClick} 
                  />
                  <MetricDisplay 
                    label="Attorney Cost" 
                    value={`$${calculatedValues.attorneyCost.toLocaleString()}`} 
                    tooltipId="attorneyCost" 
                    onTooltipClick={handleTooltipClick} 
                  />
                </div>

                <div className="mb-6">
                  <Slider
                    min={18}
                    max={100}
                    step={1}
                    value={[age]}
                    onValueChange={handleSliderChange}
                    className="mb-1 [&>.bg-primary]:bg-gradient-to-r [&>.bg-primary]:from-[hsl(120,70%,45%)] [&>.bg-primary]:to-[hsl(0,70%,45%)]"
                    aria-label="Adjust age for estate planning calculation"
                  />
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      className="text-xs text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
                    >
                      <RefreshCw className="mr-1 w-3 h-3" />
                      Reset
                    </Button>
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <div className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Life Stage: {lifeStage}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Adjust your age to see how estate planning needs evolve
                  </div>
                </div>

                {/* Add conditional buttons */}
                {hasInteracted && (
                  <div className="grid grid-cols-2 gap-6">
                    <Button
                      className={`w-full bg-purple-600 hover:bg-purple-700 text-slate-100 text-lg py-3 rounded-xl transition-all duration-300 ${
                        hasInteracted ? "scale-100" : "scale-95"
                      }`}
                    >
                      Get Started
                    </Button>
                    <Button
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-slate-100 text-lg py-3 rounded-xl transition-all duration-300 ${
                        hasInteracted ? "scale-100" : "scale-95"
                      }`}
                      onClick={handleDownloadPDF}
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download 2025 Guide
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 