import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60 text-center md:text-left">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Twitter
          </Link>
          <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
