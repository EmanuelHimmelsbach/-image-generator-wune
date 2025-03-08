import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

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
  {
    id: 7,
    title: "Paisagem Montanhosa",
    description: "Montanhas majestosas ao pôr do sol",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Montanhas nevadas, pôr do sol dourado, lago refletindo o céu, estilo paisagem",
  },
  {
    id: 8,
    title: "Cidade Noturna",
    description: "Uma cidade iluminada à noite com luzes coloridas",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Cidade à noite, luzes coloridas, reflexos na água, céu estrelado, estilo urbano",
  },
  {
    id: 9,
    title: "Personagem Anime",
    description: "Um personagem em estilo anime com roupas futuristas",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Personagem anime, cabelo colorido, roupas futuristas, pose dinâmica, estilo anime japonês",
  },
  {
    id: 10,
    title: "Natureza Morta",
    description: "Uma composição de frutas e objetos em estilo clássico",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Natureza morta, frutas, vaso antigo, luz dramática, estilo pintura a óleo clássica",
  },
  {
    id: 11,
    title: "Arquitetura Antiga",
    description: "Um templo antigo com arquitetura detalhada",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Templo antigo, colunas ornamentadas, escadaria de mármore, luz do sol, estilo arquitetura clássica",
  },
  {
    id: 12,
    title: "Animal Fantástico",
    description: "Uma criatura mítica em um ambiente mágico",
    imageUrl: "/placeholder.svg?height=400&width=600",
    prompt: "Dragão, escamas brilhantes, asas abertas, montanha vulcânica, estilo fantasia épica",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Galeria de Imagens</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Explore nossa coleção de imagens geradas por IA
        </p>

        <div className="flex max-w-md mx-auto">
          <Input type="text" placeholder="Buscar imagens..." className="rounded-r-none" />
          <Button className="rounded-l-none">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image src={image.imageUrl || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{image.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{image.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

