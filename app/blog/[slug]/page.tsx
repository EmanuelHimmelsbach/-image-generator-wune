import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

// Dados simulados para os posts do blog
const blogPosts = [
  {
    id: 1,
    title: "Como criar imagens impressionantes com IA",
    excerpt: "Aprenda técnicas avançadas para gerar imagens de alta qualidade usando inteligência artificial.",
    content: `
      <p>A geração de imagens com inteligência artificial revolucionou a forma como criamos conteúdo visual. Neste artigo, vamos explorar técnicas avançadas para criar imagens impressionantes usando IA.</p>
      
      <h2>Entendendo os fundamentos</h2>
      <p>Antes de mergulharmos nas técnicas avançadas, é importante entender como funcionam os modelos de geração de imagens. Esses modelos são treinados em milhões de imagens e aprendem a criar novas imagens baseadas nos padrões que identificaram.</p>
      
      <h2>Técnica 1: Prompts detalhados</h2>
      <p>Um dos segredos para gerar imagens impressionantes é criar prompts detalhados. Quanto mais específico for seu prompt, melhores serão os resultados. Por exemplo, em vez de pedir "um gato", tente "um gato siamês sentado em uma janela ao pôr do sol, com luz dourada iluminando seu pelo, estilo fotorrealista".</p>
      
      <h2>Técnica 2: Iteração e refinamento</h2>
      <p>Raramente você conseguirá a imagem perfeita na primeira tentativa. A iteração é fundamental. Use a primeira imagem gerada como base e refine seu prompt para obter resultados melhores nas próximas tentativas.</p>
      
      <h2>Técnica 3: Combinação de estilos</h2>
      <p>Experimente combinar diferentes estilos artísticos em seu prompt. Por exemplo, "uma paisagem urbana futurista, combinando elementos de cyberpunk e art déco, com luzes neon refletindo em superfícies molhadas".</p>
      
      <h2>Conclusão</h2>
      <p>A geração de imagens com IA é uma habilidade que melhora com a prática. Experimente diferentes abordagens, estude os resultados e continue refinando suas técnicas. Com o tempo, você será capaz de criar imagens verdadeiramente impressionantes.</p>
    `,
    date: "2023-10-15",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    slug: "como-criar-imagens-impressionantes-com-ia",
    category: "Tutorial",
    author: {
      name: "Ana Silva",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    title: "As melhores ferramentas para geração de imagens em 2023",
    excerpt: "Uma análise comparativa das principais ferramentas de geração de imagens disponíveis atualmente.",
    content: `
      <p>Com o avanço da inteligência artificial, surgiram diversas ferramentas para geração de imagens. Neste artigo, analisamos as melhores opções disponíveis em 2023.</p>
      
      <h2>DALL-E 2</h2>
      <p>Desenvolvido pela OpenAI, o DALL-E 2 é uma das ferramentas mais populares para geração de imagens. Ele se destaca pela qualidade das imagens geradas e pela capacidade de entender prompts complexos.</p>
      
      <h2>Midjourney</h2>
      <p>O Midjourney ganhou popularidade por seu estilo artístico distintivo. É especialmente bom para criar imagens com qualidade artística e estética única.</p>
      
      <h2>Stable Diffusion</h2>
      <p>Uma opção de código aberto que ganhou muita tração. O Stable Diffusion oferece grande flexibilidade e pode ser executado localmente em computadores com GPUs potentes.</p>
      
      <h2>Comparativo de recursos</h2>
      <p>Cada ferramenta tem seus pontos fortes. O DALL-E 2 se destaca na precisão, o Midjourney na qualidade artística, e o Stable Diffusion na flexibilidade e personalização.</p>
      
      <h2>Conclusão</h2>
      <p>A escolha da melhor ferramenta depende do seu objetivo. Para uso profissional, o DALL-E 2 pode ser a melhor opção. Para criações artísticas, o Midjourney se destaca. E para quem busca flexibilidade e controle, o Stable Diffusion é a escolha ideal.</p>
    `,
    date: "2023-09-28",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    slug: "melhores-ferramentas-geracao-imagens-2023",
    category: "Análise",
    author: {
      name: "Carlos Mendes",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          O artigo que você está procurando não existe ou foi removido.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o blog
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-2 mb-6">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.author.name} • {formatDate(post.date)}
          </span>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

