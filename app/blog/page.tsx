import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

// Dados simulados para os posts do blog
const blogPosts = [
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
  {
    id: 4,
    title: "O futuro da geração de imagens por IA",
    excerpt: "Uma visão sobre como a tecnologia de geração de imagens por IA deve evoluir nos próximos anos.",
    date: "2023-08-22",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "futuro-geracao-imagens-ia",
    category: "Tendências",
  },
  {
    id: 5,
    title: "Ética na geração de imagens por IA",
    excerpt: "Discussão sobre questões éticas relacionadas à criação de imagens usando inteligência artificial.",
    date: "2023-08-05",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "etica-geracao-imagens-ia",
    category: "Discussão",
  },
  {
    id: 6,
    title: "Como otimizar seus prompts para melhores resultados",
    excerpt: "Dicas práticas para melhorar seus prompts e obter imagens mais precisas e de maior qualidade.",
    date: "2023-07-18",
    imageUrl: "/placeholder.svg?height=300&width=500",
    slug: "otimizar-prompts-melhores-resultados",
    category: "Tutorial",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Artigos, tutoriais e novidades sobre geração de imagens com IA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
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
    </div>
  )
}

