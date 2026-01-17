import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

export default function ColumnistPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <header className="pt-40 pb-24 bg-brand-beige/30">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                                alt="Ricardo Silveira"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 text-center md:text-left max-w-2xl">
                            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Colunista Premium</span>
                            <h1 className="font-serif text-5xl md:text-7xl text-brand-olive font-bold">Ricardo Silveira</h1>
                            <p className="text-xl text-brand-olive/70 font-light leading-relaxed">
                                Consultor estratégico e mentor de chefs. Sua coluna "Estratégia de Luxo" é referência para quem busca elevar o padrão operacional e financeiro do seu negócio.
                            </p>
                            <div className="flex justify-center md:justify-start gap-8 pt-4">
                                <div className="text-center md:text-left">
                                    <p className="text-2xl font-bold text-brand-red">42</p>
                                    <p className="text-xs uppercase tracking-widest text-brand-olive/50">Artigos Publicados</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-2xl font-bold text-brand-red">15k</p>
                                    <p className="text-xs uppercase tracking-widest text-brand-olive/50">Leitores Mensais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-16 border-b border-brand-olive/10 pb-8 flex justify-between items-end">
                        <h2 className="font-serif text-3xl font-bold text-brand-olive">Coluna Especial: Estratégia de Luxo</h2>
                        <span className="text-brand-olive/50 text-sm">Mostrando 3 de 42 artigos</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "O Futuro do Fine Dining: Experiência vs. Eficiência",
                                excerpt: "Como manter o nível de estrelas Michelin em um cenário econômico desafiador e volátil.",
                                category: "Tendências",
                                author: "Ricardo Silveira",
                                date: "15 Jan 2026",
                                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
                                slug: "futuro-fine-dining"
                            },
                            {
                                title: "A Psicologia do Preço no Menu de Degustação",
                                excerpt: "A ciência por trás da percepção de valor e como estruturar preços que maximizam a experiência do cliente.",
                                category: "Negócios",
                                author: "Ricardo Silveira",
                                date: "05 Jan 2026",
                                image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
                                slug: "psicologia-do-preco"
                            },
                            {
                                title: "Vinhos e Rentabilidade: A Adega como Ativo Estratégico",
                                excerpt: "Como otimizar seu estoque de vinhos para gerar fluxo de caixa constante sem comprometer a curadoria.",
                                category: "Operação",
                                author: "Ricardo Silveira",
                                date: "28 Dez 2025",
                                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
                                slug: "vinhos-e-rentabilidade"
                            }
                        ].map((article, idx) => (
                            <ArticleCard key={idx} {...article} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="border-2 border-brand-olive text-brand-olive px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-olive hover:text-white transition-all">
                            Carregar mais artigos
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
