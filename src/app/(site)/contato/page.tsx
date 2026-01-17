import Link from "next/link";

export default function ContatoPage() {
    return (
        <main className="min-h-screen bg-brand-beige">

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 space-y-6">
                            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-sm">Conecte-se</span>
                            <h1 className="font-serif text-5xl md:text-7xl text-brand-olive font-bold">Entre em Contato</h1>
                            <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
                            <p className="text-xl text-brand-olive/70 max-w-2xl mx-auto font-light">
                                Dúvidas, sugestões ou parcerias? Nossa equipe está pronta para atendê-lo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-olive/5">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/50">Nome Completo</label>
                                            <input type="text" className="w-full bg-brand-beige/30 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="Seu nome..." />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/50">E-mail</label>
                                            <input type="email" className="w-full bg-brand-beige/30 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="seu@email.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/50">Assunto</label>
                                        <input type="text" className="w-full bg-brand-beige/30 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="Sobre o que vamos falar?" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/50">Mensagem</label>
                                        <textarea rows={6} className="w-full bg-brand-beige/30 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-red transition-all resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
                                    </div>
                                    <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-lg text-lg">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-brand-olive rounded-3xl p-8 md:p-10 text-white space-y-8 shadow-xl">
                                    <h3 className="font-serif text-3xl font-bold">Informações</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-3 rounded-lg">📧</div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-widest font-bold">E-mail</p>
                                                <p className="text-lg">contato@cozinhadenegocios.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-3 rounded-lg">📱</div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-widest font-bold">WhatsApp</p>
                                                <p className="text-lg">+55 (11) 99999-9999</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/10 p-3 rounded-lg">📍</div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Base</p>
                                                <p className="text-lg">São Paulo/SP - Itaim Bibi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-3xl p-8 border border-brand-olive/5 shadow-sm text-center space-y-4">
                                    <p className="font-serif text-xl font-bold text-brand-olive italic">"Acompanhe nossos canais"</p>
                                    <div className="flex justify-center gap-6 text-2xl">
                                        <Link href="#" className="hover:scale-110 transition-transform">📸</Link>
                                        <Link href="#" className="hover:scale-110 transition-transform">💼</Link>
                                        <Link href="#" className="hover:scale-110 transition-transform">🐦</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
