import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} ImagenAI. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:underline underline-offset-4">
            Termos
          </Link>
          <Link href="/privacy" className="hover:underline underline-offset-4">
            Privacidade
          </Link>
          <Link href="/help" className="hover:underline underline-offset-4">
            Ajuda
          </Link>
        </nav>
      </div>
    </footer>
  )
}

