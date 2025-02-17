import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-12">
          {/* Left side - Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Transform Your Digital Experience
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Create stunning, responsive websites with our modern UI components and intuitive design system.
            </h3>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Card UI */}
          <div className="flex-1 w-full max-w-xl">
            <Card className="w-full bg-white dark:bg-slate-800 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="h-12 w-3/4 bg-slate-100 dark:bg-slate-700 rounded-lg animate-pulse" />
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded animate-pulse" />
                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded animate-pulse w-4/6" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-1/2 bg-slate-100 dark:bg-slate-700 rounded-lg animate-pulse" />
                    <div className="h-10 w-1/2 bg-slate-100 dark:bg-slate-700 rounded-lg animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 