import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HelpPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Central de Ajuda</h1>
        <p className="text-muted-foreground">Encontre respostas para suas dúvidas e aprenda a usar nossa plataforma</p>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
          <TabsTrigger value="guides">Guias</TabsTrigger>
          <TabsTrigger value="contact">Contato</TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
              <CardDescription>Respostas para as dúvidas mais comuns sobre nossa plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona a geração de imagens?</AccordionTrigger>
                  <AccordionContent>
                    Nossa plataforma utiliza inteligência artificial avançada para gerar imagens a partir de descrições
                    textuais (prompts). O sistema interpreta seu texto e cria uma imagem correspondente baseada no que
                    você descreveu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Posso usar as imagens geradas comercialmente?</AccordionTrigger>
                  <AccordionContent>
                    Sim, todas as imagens geradas em nossa plataforma podem ser utilizadas para fins comerciais. Você
                    detém os direitos de uso das imagens que criar em nossa plataforma.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Quantas imagens posso gerar por dia?</AccordionTrigger>
                  <AccordionContent>
                    O número de imagens que você pode gerar depende do seu plano de assinatura. Usuários gratuitos podem
                    gerar até 5 imagens por dia, enquanto assinantes premium têm acesso ilimitado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Como posso melhorar a qualidade das imagens geradas?</AccordionTrigger>
                  <AccordionContent>
                    Para obter melhores resultados, use prompts detalhados e específicos. Descreva o estilo, cores,
                    composição e outros elementos visuais que deseja ver na imagem. Você também pode ajustar os
                    parâmetros de complexidade e estilo na interface de geração.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>É possível editar as imagens após a geração?</AccordionTrigger>
                  <AccordionContent>
                    Atualmente, nossa plataforma não oferece ferramentas de edição integradas. Recomendamos baixar a
                    imagem e utilizar um software de edição externo para fazer ajustes. No futuro, planejamos adicionar
                    recursos básicos de edição.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle>Guias e Tutoriais</CardTitle>
              <CardDescription>Aprenda a utilizar todos os recursos da nossa plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Primeiros passos</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Um guia completo para começar a usar nossa plataforma e gerar suas primeiras imagens.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Criando prompts eficientes</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Aprenda técnicas para criar prompts que resultam em imagens de alta qualidade.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Estilos e parâmetros</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Entenda como os diferentes estilos e parâmetros afetam o resultado final das imagens.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Gerenciando sua galeria</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Saiba como organizar, compartilhar e baixar as imagens da sua galeria pessoal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
              <CardDescription>
                Não encontrou o que procurava? Entre em contato com nossa equipe de suporte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">E-mail de Suporte</h3>
                  <p className="text-muted-foreground">
                    Para dúvidas gerais e suporte: <span className="font-medium">suporte@imagenai.com</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">Segunda a sexta, das 9h às 18h (exceto feriados)</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Tempo de Resposta</h3>
                  <p className="text-muted-foreground">Respondemos a maioria das solicitações em até 24 horas úteis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

