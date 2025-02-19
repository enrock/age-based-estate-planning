"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-black-KyM3yfA9uFJ5qaBIXXSOMrTeJcWqBc.png"
                alt="WealthBerry"
                className="block h-10 w-auto dark:hidden"
                width="120"
                height="40"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-white-np4PNx269d9wxZf3AhUf5DcZsPhoM3.png"
                alt="WealthBerry"
                className="hidden h-10 w-auto dark:block"
                width="120"
                height="40"
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/features" 
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 