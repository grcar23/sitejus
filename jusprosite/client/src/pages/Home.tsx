import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: "Automação de Logins",
      subtitle: "Sem Tokens Físicos",
      description: "Acesso seguro e remoto aos tribunais sem a necessidade de certificados digitais físicos.",
      features: [
        "Gestão centralizada de credenciais",
        "Mobilidade total - acesso de qualquer lugar",
        "Controle compartilhado para toda a equipe"
      ]
    },
    {
      id: 2,
      title: "Jurimetria Avançada",
      subtitle: "Dados em Vantagem",
      description: "Análise preditiva e mapeamento do perfil decisório dos magistrados.",
      features: [
        "Análise prévia de petições",
        "Jurimetria pós-distribuição",
        "Estratégia baseada em dados"
      ]
    },
    {
      id: 3,
      title: "Suíte de IA Jurídica",
      subtitle: "Inteligência Legal",
      description: "Ecossistema de IAs treinadas especificamente para o rigor da prática legal.",
      features: [
        "Análise de processos em andamento",
        "Peticionamento e cálculos precisos",
        "Revisão técnica de petições"
      ]
    },
    {
      id: 4,
      title: "Atendimento Omnichannel",
      subtitle: "Comunicação Unificada",
      description: "Central de comunicação integrada com agente de IA para WhatsApp.",
      features: [
        "Centralização de canais",
        "Agente de IA inteligente",
        "Disparo em massa seguro"
      ]
    },
    {
      id: 5,
      title: "Dados Estratégicos",
      subtitle: "Inteligência de Negócio",
      description: "Mineração de dados judiciais de alta complexidade.",
      features: [
        "Base de dados CAT",
        "Extração de tribunais",
        "Análises de profundidade"
      ]
    }
  ];

  const benefits = [
    { icon: "🔒", title: "Segurança Máxima", description: "Protocolos rigorosos de proteção de dados jurídicos" },
    { icon: "⚙️", title: "Integração Nativa", description: "Ecossistema coeso onde as ferramentas comunicam entre si" },
    { icon: "📈", title: "Escalabilidade", description: "Soluções que crescem com seu escritório" },
    { icon: "👥", title: "Suporte Especializado", description: "Equipe com DNA técnico e jurídico" }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5511975379933?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20das%20soluções%20da%20JusPro.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white font-bold">JP</div>
            <span className="font-bold text-lg text-black">JusPro Sistemas</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#solucoes" className="text-gray-700 hover:text-red-600 transition">Soluções</a>
            <a href="#beneficios" className="text-gray-700 hover:text-red-600 transition">Benefícios</a>
            <a href="#contato" className="text-gray-700 hover:text-red-600 transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Portfólio de Soluções Tecnológicas
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Automação, Inteligência de Dados e Eficiência no Atendimento para Escritórios e Departamentos Jurídicos
              </p>
              <div className="flex gap-4">
                <Button onClick={openWhatsApp} className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg cursor-pointer z-10 relative">
                  Agende uma Demonstração
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="bg-red-600 rounded-lg p-8 text-center">
              <div className="text-6xl font-black mb-4">5</div>
              <p className="text-xl font-semibold">Pilares Tecnológicos</p>
              <p className="text-gray-100 mt-2">Transformando a prática jurídica com inovação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-black mb-12 text-center">O Desafio do Setor Jurídico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Processos Manuais", desc: "Rotinas repetitivas que geram ineficiência" },
              { num: "02", title: "Acesso Fragmentado", desc: "Dependência de tokens físicos" },
              { num: "03", title: "Estratégia Empírica", desc: "Decisões sem suporte de dados" },
              { num: "04", title: "Comunicação Dispersa", desc: "Atendimento descentralizado" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-600 transition">
                <div className="text-3xl font-black text-red-600 mb-3">{item.num}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-black mb-4 text-center">Os Cinco Pilares</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Soluções integradas que transformam a operação jurídica com tecnologia de ponta
          </p>

          <div className="space-y-6">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white p-6 rounded cursor-pointer hover:shadow-lg transition"
                onClick={() => setActiveTab(activeTab === solution.id ? null : solution.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-bold text-red-600 mb-1">Solução {solution.id.toString().padStart(2, '0')}</div>
                    <h3 className="text-2xl font-black text-black">{solution.title}</h3>
                    <p className="text-red-600 font-semibold mt-1">{solution.subtitle}</p>
                  </div>
                  <div className="text-2xl">{activeTab === solution.id ? "−" : "+"}</div>
                </div>

                {activeTab === solution.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-black text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center">Por Que Escolher a JusPro Sistemas?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">Vamos Modernizar a Sua Operação Jurídica?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Implementação rápida, suporte especializado e transformação digital garantida
          </p>
          <Button onClick={openWhatsApp} className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg cursor-pointer z-10 relative">
            Agende uma Demonstração Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-black mb-12 text-center">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Contatos</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Guilherme</p>
                    <p className="text-gray-600">WhatsApp: <a href="https://wa.me/5511975379933" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">11 97537-9933</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">E-mail Comercial</p>
                    <p className="text-gray-600"><a href="mailto:comercial@jusprosistemas.com.br" className="text-red-600 hover:underline">comercial@jusprosistemas.com.br</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Próximos Passos</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <p className="font-semibold">Agende uma demonstração personalizada</p>
                    <p className="text-gray-400 text-sm">Conheça as soluções na prática</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <p className="font-semibold">Implementação rápida e assistida</p>
                    <p className="text-gray-400 text-sm">Integração com seu workflow</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <p className="font-semibold">Suporte total no onboarding</p>
                    <p className="text-gray-400 text-sm">Equipe especializada disponível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2026 JusPro Sistemas. Todos os direitos reservados.</p>
          <p className="text-sm italic">"A tecnologia não substitui o advogado, mas o advogado que usa tecnologia substituirá o que não usa."</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511975379933?text=Olá!%20Estou%20no%20site%20da%20JusPro%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}