import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl bg-card text-card-foreground relative",
        "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
        "bg-gradient-to-b from-white to-[#e6f3ff] dark:from-[#1e293b] dark:to-[#0f172a]",
        hoverable && "transition-all duration-200 hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.8)] hover:translate-y-[-5px]",
        className
      )}
      role="article"
      tabIndex={0}
      {...props}
    >
      {/* Logo container */}
      <div className="absolute top-6 left-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-black-KyM3yfA9uFJ5qaBIXXSOMrTeJcWqBc.png"
          alt="Wealthberry Logo"
          width={150}
          height={50}
          className="block dark:hidden" // Show in light mode only
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wb-logo-white-np4PNx269d9wxZf3AhUf5DcZsPhoM3.png"
          alt="Wealthberry Logo"
          width={150}
          height={50}
          className="hidden dark:block" // Show in dark mode only
        />
      </div>
      {props.children}
    </div>
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("flex flex-col space-y-1.5 p-6", className)} 
      {...props} 
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn(
        "text-2xl font-semibold tracking-tight leading-none text-foreground",
        className
      )} 
      {...props} 
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p 
      ref={ref} 
      className={cn(
        "text-sm leading-normal text-muted-foreground",
        className
      )} 
      {...props} 
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("p-6 pt-0", className)} 
      {...props} 
    />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "flex gap-4 items-center p-6 pt-0",
        className
      )} 
      {...props} 
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

