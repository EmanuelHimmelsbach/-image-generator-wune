"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

// Dados simulados para a galeria de imagens
const galleryImages = [
  {
    id: 1,
    title: "Paisagem Futurista",
    description: "Uma cidade futurista com arranha-céus e veículos voadores",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Cidade futurista com arranha-céus de vidro, carros voadores, céu roxo, estilo cyberpunk",
  },
  {
    id: 2,
    title: "Retrato Abstrato",
    description: "Um retrato abstrato com elementos geométricos",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Retrato abstrato, formas geométricas coloridas, estilo cubista moderno",
  },
  {
    id: 3,
    title: "Natureza Fantástica",
    description: "Uma paisagem natural com elementos fantásticos",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Floresta mágica, árvores gigantes, cogumelos brilhantes, criaturas místicas, estilo fantasia",
  },
  {
    id: 4,
    title: "Espaço Sideral",
    description: "Uma cena do espaço com planetas e nebulosas",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Galáxia distante, planetas coloridos, nebulosas, estrelas brilhantes, estilo realista",
  },
  {
    id: 5,
    title: "Arte Digital",
    description: "Uma composição digital com elementos tecnológicos",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Arte digital, circuitos, luzes neon, interface futurista, estilo tech art",
  },
  {
    id: 6,
    title: "Mundo Submarino",
    description: "Uma cena do fundo do oceano com criaturas marinhas",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Oceano profundo, criaturas bioluminescentes, corais coloridos, bolhas, estilo realista",
  },
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image src={image.imageUrl || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{image.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{image.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={selectedImage.imageUrl || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium">Prompt utilizado:</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                {selectedImage.prompt}
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

