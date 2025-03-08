"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function GeneratePage() {
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [style, setStyle] = useState("realistic")
  const [complexity, setComplexity] = useState([50])
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulando a geração de imagem
    setTimeout(() => {
      setGeneratedImage("/placeholder.svg?height=512&width=512")
      setLoading(false)
    }, 2000)

    // Em um cenário real, você faria uma chamada para a API de geração de imagens
    // const response = await fetch('/api/generate-image', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt, style, complexity: complexity[0] }),
    // })
    // const data = await response.json()
    // setGeneratedImage(data.imageUrl)
    // setLoading(false)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Gerador de Imagens</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt">Descrição da imagem</Label>
                <Textarea
                  id="prompt"
                  placeholder="Descreva a imagem que você deseja criar..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">Estilo</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger id="style">
                    <SelectValue placeholder="Selecione um estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realista</SelectItem>
                    <SelectItem value="abstract">Abstrato</SelectItem>
                    <SelectItem value="cartoon">Cartoon</SelectItem>
                    <SelectItem value="digital-art">Arte Digital</SelectItem>
                    <SelectItem value="fantasy">Fantasia</SelectItem>
                    <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="complexity">Complexidade</Label>
                <Slider id="complexity" min={0} max={100} step={1} value={complexity} onValueChange={setComplexity} />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Simples</span>
                  <span>Complexo</span>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  "Gerar Imagem"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center h-full">
              {generatedImage ? (
                <div className="space-y-4 w-full">
                  <div className="relative aspect-square w-full overflow-hidden rounded-md border">
                    <Image
                      src={generatedImage || "/placeholder.svg"}
                      alt="Imagem gerada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => window.open(generatedImage, "_blank")}>
                      Visualizar
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = generatedImage
                        link.download = `generated-image-${Date.now()}.png`
                        link.click()
                      }}
                    >
                      Baixar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-md border bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">A imagem gerada aparecerá aqui</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

