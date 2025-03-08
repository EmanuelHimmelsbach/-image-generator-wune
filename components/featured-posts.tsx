import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

// Dados simulados para os posts em destaque
const featuredPosts = [
  {
    id: 1,
    title: "Como criar imagens impressionantes com IA",
    excerpt: "Aprenda técnicas avançadas para gerar imagens de alta qualidade usando inteligência artificial.",
    date: "2023-10-15",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "como-criar-imagens-impressionantes-com-ia",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "As melhores ferramentas para geração de imagens em 2023",
    excerpt: "Uma análise comparativa das principais ferramentas de geração de imagens disponíveis atualmente.",
    date: "2023-09-28",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "melhores-ferramentas-geracao-imagens-2023",
    category: "Análise",
  },
  {
    id: 3,
    title: "Entendendo prompts: a arte de comunicar com IAs geradoras",
    excerpt:
      "Descubra como criar prompts eficientes para obter exatamente o que você deseja das IAs de geração de imagens.",
    date: "2023-09-10",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "entendendo-prompts-arte-comunicar-ias-geradoras",
    category: "Guia",
  },
]

export function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden flex flex-col h-full">
          <div className="relative h-48">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <CardContent className="flex-1 p-6">
            <Badge className="mb-2">{post.category}</Badge>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <time className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.date)}</time>
          </CardContent>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
              Ler artigo completo
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

