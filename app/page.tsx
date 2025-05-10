import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight, Code, BookOpen, PanelLeft } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <section className="flex flex-col items-center text-center my-16 md:my-24 space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Learn <span className="text-blue-600 dark:text-blue-400">Selenium</span> Interactively
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
          Master browser automation with hands-on examples and interactive coding exercises
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            href="/topics" 
            className={buttonVariants({
              size: "lg",
              className: "gap-2"
            })}
          >
            <BookOpen size={20} />
            Browse Topics
          </Link>
          <Link 
            href="/playground" 
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "gap-2"
            })}
          >
            <Code size={20} />
            Try Playground
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 p-2 bg-primary/10 w-fit rounded-md">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Learn Step-by-Step</h3>
          <p className="text-muted-foreground mb-4">
            Explore comprehensive tutorials on Selenium WebDriver with Python code examples
          </p>
          <Link 
            href="/topics" 
            className="text-primary inline-flex items-center gap-1 group"
          >
            Browse topics
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 p-2 bg-primary/10 w-fit rounded-md">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Practice in Browser</h3>
          <p className="text-muted-foreground mb-4">
            Write and execute Selenium code directly in your browser with our integrated playground
          </p>
          <Link 
            href="/playground" 
            className="text-primary inline-flex items-center gap-1 group"
          >
            Open playground
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 p-2 bg-primary/10 w-fit rounded-md">
            <PanelLeft className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Output</h3>
          <p className="text-muted-foreground mb-4">
            Get instant feedback with a built-in console that displays your code's output
          </p>
          <Link 
            href="/topics/introduction" 
            className="text-primary inline-flex items-center gap-1 group"
          >
            Try an example
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-8 rounded-xl shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to automate your browser?</h2>
            <p className="text-muted-foreground mb-6">
              Start learning Selenium today with our interactive platform that helps you master web automation in a hands-on environment.
            </p>
            <Link 
              href="/topics/introduction" 
              className={buttonVariants({
                size: "lg",
                className: "gap-2"
              })}
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}