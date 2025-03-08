import Link from "next/link"
import { ImageIcon, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Gere imagens incríveis com IA
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Crie imagens únicas através de scripts e prompts. Explore nossa galeria ou crie suas próprias obras de
                  arte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24">
          <div className="absolute inset-0 bg-gray-50 border rounded-lg shadow-lg mx-4 md:mx-6"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Explore Nossa Galeria</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500">
                    Descubra milhares de imagens geradas por IA em nossa galeria curada. Encontre inspiração para seus
                    próprios projetos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/gallery">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Ver Galeria
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Crie Suas Próprias Imagens</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500">
                    Use nosso gerador de imagens para transformar suas ideias em arte visual. Basta descrever o que você
                    imagina.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/generate">
                      <Zap className="mr-2 h-4 w-4" />
                      Gerar Imagem
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

