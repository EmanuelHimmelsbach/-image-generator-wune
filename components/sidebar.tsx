"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Home,
  Images,
  BookOpen,
  Settings,
  HelpCircle,
  LogIn,
  UserPlus,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/generate", label: "Gerar Imagem", icon: Images },
    { href: "/gallery", label: "Galeria", icon: Images },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/help", label: "Ajuda", icon: HelpCircle },
    { href: "/settings", label: "Configurações", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Desktop toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-50 hidden md:flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </Button>

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center">
              <Image src="/img/Preto Sem fundo.png" alt="Logo" width={85} height={30} className="object-contain" />
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-100",
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t space-y-2">
            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 w-full"
            >
              <LogIn className="h-5 w-5" />
              Entrar
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 w-full"
            >
              <UserPlus className="h-5 w-5" />
              Cadastrar
            </Link>
          </div>
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 bg-white border-r transform transition-all duration-200 ease-in-out hidden md:block",
          isOpen ? "w-64" : "w-20",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center">
              {isOpen ? (
                <Image src="/img/Preto Sem fundo.png" alt="Logo" width={85} height={30} className="object-contain" />
              ) : (
                <Image src="/img/Preto Sem fundo.png" alt="Logo" width={25} height={25} className="object-contain" />
              )}
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md text-sm font-medium transition-colors",
                    pathname === item.href ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-100",
                    isOpen ? "px-3 py-2 gap-3" : "p-2 justify-center",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          <div className={cn("border-t space-y-2", isOpen ? "p-4" : "p-2")}>
            <Link
              href="/login"
              className={cn(
                "flex items-center rounded-md text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 w-full",
                isOpen ? "px-3 py-2 gap-3" : "p-2 justify-center",
              )}
            >
              <LogIn className="h-5 w-5" />
              {isOpen && <span>Entrar</span>}
            </Link>
            <Link
              href="/register"
              className={cn(
                "flex items-center rounded-md text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 w-full",
                isOpen ? "px-3 py-2 gap-3" : "p-2 justify-center",
              )}
            >
              <UserPlus className="h-5 w-5" />
              {isOpen && <span>Cadastrar</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content padding */}
      <div className={cn("md:pl-20 transition-all duration-200 ease-in-out", isOpen && "md:pl-64")}></div>
    </>
  )
}

