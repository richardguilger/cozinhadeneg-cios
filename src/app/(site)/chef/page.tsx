import Image from "next/image";

export default function ChefPage() {
    return (
        <main className="min-h-screen bg-brand-beige">

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="relative sticky top-32">
                            <div className="absolute -inset-4 border-2 border-brand-red rounded-3xl -z-10 translate-x-8 translate-y-8" />
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                                    alt="O Chef de Negócios"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">O Fundador</span>
                                <h1 className="font-serif text-5xl md:text-7xl text-brand-olive font-bold tracking-tight">O Chef de Negócios</h1>
                                <p className="text-2xl text-brand-olive/60 font-light italic">"A maestria não está no prato, mas na jornada que o levou até lá."</p>
                            </div>

                            <div className="prose prose-lg text-brand-olive/80 leading-relaxed space-y-8 font-light">
                                <p className="text-xl leading-relaxed">
                                    Com passagens por cozinhas estreladas na Europa e um MBA em Gestão Estratégica, nosso Chef fundador percebeu que o maior gap do mercado não era a falta de talento culinário, mas a fragilidade administrativa que derruba sonhos.
                                </p>
                                <div className="w-16 h-1 bg-brand-red rounded-full" />
                                <p>
                                    Sua trajetória é marcada pela dualidade: de manhã, analisando planilhas de DRE e fluxos de caixa; à noite, comandando o passe sob a pressão de 200 cobertos por serviço. Essa vivência única gerou a metodologia **Cozinha de Negócios**.
                                </p>
                                <p>
                                    Hoje, dedica-se a mentorar novos empreendedores, realizar consultorias críticas para grupos de investimento e compartilhar sua visão ácida e precisa sobre o futuro da hospitalidade através deste portal.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 py-10 border-y border-brand-olive/10">
                                <div>
                                    <h4 className="font-serif text-xl font-bold text-brand-olive mb-2">Formação</h4>
                                    <ul className="text-brand-olive/70 space-y-2 text-sm">
                                        <li>Le Cordon Bleu, Paris</li>
                                        <li>MBA Gestão FGV</li>
                                        <li>Marketing de Luxo, IE Madrid</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl font-bold text-brand-olive mb-2">Conquistas</h4>
                                    <ul className="text-brand-olive/70 space-y-2 text-sm">
                                        <li>Chef do Ano 2022</li>
                                        <li>+50 Consultorias</li>
                                        <li>Autor de 2 Bestsellers</li>
                                    </ul>
                                </div>
                            </div>

                            <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-xl">
                                Contratar Consultoria
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
