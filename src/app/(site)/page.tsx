import Image from "next/image";
import { BarChart3, Sparkles, UtensilsCrossed, Users2 } from "lucide-react";
import { safeFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default async function Home() {
  const posts = await safeFetch<any[]>(POSTS_QUERY) || [];

  const pilares = [
    { title: "Gestão Eficiente", desc: "Processos otimizados que garantem a saúde financeira do seu restaurante.", icon: <BarChart3 className="w-8 h-8 text-brand-red" /> },
    { title: "Branding de Autoridade", desc: "Construindo uma marca que é reconhecida pela excelência.", icon: <Sparkles className="w-8 h-8 text-brand-red" /> },
    { title: "Engenharia de Cardápio", desc: "Equilíbrio perfeito entre criatividade técnica e rentabilidade.", icon: <UtensilsCrossed className="w-8 h-8 text-brand-red" /> },
    { title: "Cultura e Equipe", desc: "Lideranças que inspiram e times que entregam consistência.", icon: <Users2 className="w-8 h-8 text-brand-red" /> },
  ];

  return (
    <main className="min-h-screen bg-brand-beige">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Cozinha Profissional"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-brand-beige" />
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-sm md:text-base">
                O Portal da Gestão Gastronômica
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tighter">
                Cozinha de <br />
                <span className="text-brand-red italic">Negócios</span>
              </h1>
            </div>

            <div className="w-20 h-1 bg-brand-red mx-auto rounded-full" />

            <p className="font-sans text-lg md:text-xl text-white/90 font-light tracking-wide leading-relaxed">
              Gastronomia é paixão. Negócio é estratégia. <br className="hidden md:block" />
              <span className="font-semibold text-brand-red">Onde a excelência encontra a rentabilidade.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <button className="bg-brand-red text-white px-8 py-3.5 rounded-full font-bold text-base uppercase tracking-widest hover:bg-brand-red/90 transition-all transform hover:scale-105 shadow-22">
                Explorar Portal
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base uppercase tracking-widest hover:bg-white/20 transition-all transform hover:scale-105">
                Ver Manifesto
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">O Manifesto</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-olive font-bold leading-tight">
                Não é apenas sobre comer. É sobre como o negócio respira.
              </h2>
              <div className="w-16 h-1 bg-brand-red rounded-full" />
              <div className="space-y-6 text-brand-olive/80 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  No Cozinha de Negócios, acreditamos que a excelência gastronômica só atinge seu pleno potencial quando sustentada por uma estratégia de negócios impecável.
                </p>
                <p>
                  Muitos chefes dominam a alquimia dos sabores, mas poucos dominam a alquimia do lucro, da gestão de pessoas e do branding que perpetua legados.
                </p>
                <p className="italic font-serif text-2xl text-brand-red mt-8 px-6 border-l-4 border-brand-red">
                  "Unimos o rigor da cozinha profissional com a precisão do conselho administrativo."
                </p>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-brand-beige rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
                alt="Professional Chef"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-12 left-12 z-20 text-white">
                <p className="font-serif text-3xl font-bold">Mestria Técnica</p>
                <p className="font-sans uppercase tracking-widest text-sm opacity-80">Visão Estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why us? */}
      <section className="py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-red font-bold">Pilares da Cozinha de Negócios</h2>
            <p className="text-brand-olive/70 text-lg">Nossa expertise está fundamentada em quatro pilares essenciais para o sucesso sustentável.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilares.map((pilar, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-brand-olive/5 group hover:-translate-y-2">
                <div className="mb-6 bg-brand-beige/30 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                  {pilar.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-olive mb-4 group-hover:text-brand-red transition-colors">{pilar.title}</h3>
                <p className="text-brand-olive/70 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Profile Section */}
      <section className="py-24 bg-white border-y border-brand-olive/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3 relative">
              <div className="absolute -inset-4 border-2 border-brand-red rounded-2xl -z-10 translate-x-8 translate-y-8 hidden lg:block" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                  alt="Chef de Negócios"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-4">
                <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">A Liderança</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-olive font-bold">O Chef de Negócios</h2>
                <p className="text-xl text-brand-olive/60 font-medium">Mentoria, Estratégia e Alta Gastronomia</p>
              </div>

              <div className="space-y-6 text-brand-olive/80 text-lg leading-relaxed">
                <p>
                  Com mais de 15 anos à frente de cozinhas premiadas e consultorias estratégicas, nosso fundador une a sensibilidade do fogão com a frieza dos números.
                </p>
                <p>
                  O Cozinha de Negócios nasceu da necessidade de elevar o padrão da gestão gastronômica no Brasil, transformando talentos culinários em empresários de sucesso.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 py-8 border-y border-brand-olive/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-red">50+</p>
                  <p className="text-sm uppercase tracking-widest text-brand-olive/50">Projetos Atendidos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-red">15</p>
                  <p className="text-sm uppercase tracking-widest text-brand-olive/50">Anos de Mercado</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-red">R$ 10M+</p>
                  <p className="text-sm uppercase tracking-widest text-brand-olive/50">Em Lucro Gerado</p>
                </div>
              </div>

              <button className="bg-brand-olive text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red transition-all shadow-lg">
                Conheça a Trajetória
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Feed Section */}
      <section className="py-24 bg-brand-beige/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">O Portal</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-olive font-bold">Últimas do Mercado</h2>
            </div>
            <Link href="/colunas" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2">
              Ver todas as colunas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts && posts.length > 0 ? (
              posts.map((post: any) => (
                <ArticleCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.categories?.[0]?.title || "Geral"}
                  author={post.author.name}
                  date={new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  image={post.mainImage ? urlForImage(post.mainImage).url() : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"}
                  slug={post.slug.current}
                />
              ))
            ) : (
              <p className="text-brand-olive/60 col-span-full text-center py-12">Nenhum artigo publicado recentemente.</p>
            )}
          </div>

          {/* Featured Columnist Banner */}
          <div className="mt-24 bg-brand-olive rounded-3xl p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 -skew-x-12 translate-x-12" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <span className="text-white/60 font-bold uppercase tracking-[0.3em] text-sm">Destaque da Semana</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
                  Acompanhe a Coluna de <br className="hidden md:block" />
                  <span className="text-brand-red italic underline decoration-white/20 underline-offset-8">Estratégia de Luxo</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Semanalmente, as mentes mais brilhantes do setor compartilham insights que você não encontra em nenhum outro lugar.
                </p>
                <button className="bg-white text-brand-olive px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-xl">
                  Quero Acompanhar
                </button>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-500">
                <Image
                  src="/destaque-semana.jpg"
                  alt="Fine Dining Space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
