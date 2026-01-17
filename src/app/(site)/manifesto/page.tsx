import Image from "next/image";

export default function ManifestoPage() {
    return (
        <main className="min-h-screen bg-brand-beige">

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20 space-y-6">
                            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-sm">Nossa Alma</span>
                            <h1 className="font-serif text-5xl md:text-8xl text-brand-olive font-bold">O Manifesto</h1>
                            <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
                        </div>

                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-20">
                            <Image
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
                                alt="Manifesto Cozinha de Negócios"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-center">
                                <p className="font-serif text-2xl md:text-5xl text-white font-bold leading-tight italic">
                                    "Onde a alquimia dos sabores encontra a precisão dos números."
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-xl prose-stone mx-auto space-y-12 text-brand-olive/80 font-light leading-relaxed">
                            <p className="text-2xl font-medium text-brand-olive first-letter:text-7xl first-letter:font-serif first-letter:text-brand-red first-letter:mr-3 first-letter:float-left">
                                Acreditamos que a gastronomia é a mais complexa das formas de arte, pois é a única que exige viabilidade econômica imediata para sobreviver. Cada prato é um projeto, cada serviço é uma operação logística e cada restaurante é um ecossistema.
                            </p>

                            <div className="space-y-6">
                                <h3 className="font-serif text-3xl font-bold text-brand-red">Nossa Missão</h3>
                                <p>
                                    Nossa missão é equipar os líderes da hospitalidade com as ferramentas intelectuais e estratégicas necessárias para transformar paixão em perenidade. Não aceitamos o mito do "chefe artista quebrado".
                                </p>
                            </div>

                            <div className="bg-white p-12 rounded-3xl shadow-sm border border-brand-olive/5 space-y-8 italic font-serif">
                                <p className="text-3xl text-brand-olive/90 leading-tight">
                                    "Um grande restaurante não morre por falta de tempero; ele morre por falta de visão estratégica."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-brand-red" />
                                    <span className="text-brand-red uppercase tracking-widest text-sm font-sans font-bold">A Liderança</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-serif text-3xl font-bold text-brand-red">Nossos Valores</h3>
                                <ul className="list-none p-0 space-y-4">
                                    {[
                                        "Rigor Técnico na Cozinha e no CAD.",
                                        "Transparência Radical na Gestão.",
                                        "Inovação com Respeito à Tradição.",
                                        "Comprometimento com a Lucratividade Ética."
                                    ].map((valor, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <span className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0" />
                                            <span>{valor}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
