import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-olive text-brand-beige py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm inline-flex">
                            <div className="relative w-40 h-10 md:w-48 md:h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Cozinha de Negócios"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-brand-beige/80 leading-relaxed font-light">
                            Gastronomia é paixão. Negócio é estratégia. Aqui temos os dois.
                            Um portal dedicado ao empreendedorismo gastronômico premium.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white uppercase tracking-wider">
                            Navegação
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="#manifesto" className="hover:text-brand-red transition-colors">Manifesto</Link></li>
                            <li><Link href="/colunas" className="hover:text-brand-red transition-colors">Colunas</Link></li>
                            <li><Link href="/colunistas" className="hover:text-brand-red transition-colors">Colunistas</Link></li>
                            <li><Link href="/chef" className="hover:text-brand-red transition-colors">Chef de Negócios</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white uppercase tracking-wider">
                            Categorias
                        </h4>
                        <ul className="space-y-4 text-brand-beige/80">
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Gestão Gastronômica</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Marketing e Branding</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Operação e Cozinha</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Finanças e Negócios</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-white uppercase tracking-wider">
                            Newsletter
                        </h4>
                        <p className="text-sm text-brand-beige/70 mb-4">
                            Receba insights exclusivos sobre o mercado gastronômico.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-red transition-colors text-white placeholder:text-brand-beige/40"
                            />
                            <button
                                type="submit"
                                className="w-full bg-brand-red text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-lg active:scale-95"
                            >
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-brand-beige/50">
                        © {new Date().getFullYear()} Cozinha de Negócios. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-brand-beige/50 hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="text-brand-beige/50 hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="text-brand-beige/50 hover:text-white transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
