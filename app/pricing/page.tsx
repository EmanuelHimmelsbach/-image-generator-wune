import Link from "next/link"
import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Planos e Preços</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Escolha o plano ideal para suas necessidades de geração de imagens
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Gratuito</CardTitle>
            <CardDescription>Para uso pessoal e experimentação</CardDescription>
            <div className="mt-4 text-4xl font-bold">R$0</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>5 imagens por dia</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Resolução padrão (512x512)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Acesso à galeria pública</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Suporte por e-mail</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/register">Começar Grátis</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-2 border-black">
          <CardHeader className="bg-gray-50">
            <div className="text-center text-sm font-medium text-black mb-2">MAIS POPULAR</div>
            <CardTitle>Premium</CardTitle>
            <CardDescription>Para criadores e profissionais</CardDescription>
            <div className="mt-4 text-4xl font-bold">R$29</div>
            <div className="text-sm text-gray-500">por mês</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Geração ilimitada de imagens</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Alta resolução (até 1024x1024)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Acesso a modelos avançados</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Galeria privada</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Acesso à API</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/register?plan=premium">
                <CreditCard className="mr-2 h-4 w-4" />
                Assinar Agora
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Empresarial</CardTitle>
            <CardDescription>Para equipes e empresas</CardDescription>
            <div className="mt-4 text-4xl font-bold">R$99</div>
            <div className="text-sm text-gray-500">por mês</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Tudo do plano Premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Resolução máxima (até 2048x2048)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Múltiplos usuários (até 10)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Gerenciamento de equipe</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Suporte dedicado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-black" />
                <span>Personalização de marca</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact-sales">Falar com Vendas</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

