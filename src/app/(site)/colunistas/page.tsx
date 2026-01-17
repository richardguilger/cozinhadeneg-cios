import Image from "next/image";
import Link from "next/link";
import { safeFetch } from "@/sanity/lib/client";
import { AUTHORS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function ColunistasPage() {
    const authors = await safeFetch<any[]>(AUTHORS_QUERY) || [];

    return (
        <main className="min-h-screen bg-brand-beige">

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mb-16 space-y-6">
                        <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm md:text-base">Mentes Brilhantes</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-olive font-bold">Nossos Colunistas</h1>
                        <div className="w-24 h-1.5 bg-brand-red rounded-full" />
                        <p className="text-xl text-brand-olive/70 leading-relaxed font-light">
                            Conheça as vozes que moldam o pensamento estratégico e gastronômico do nosso portal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {authors && authors.length > 0 ? (
                            authors.map((colunista: any) => (
                                <Link
                                    key={colunista._id}
                                    href={`/colunistas/${colunista.slug.current}`}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-olive/5"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        {colunista.image && (
                                            <Image
                                                src={urlForImage(colunista.image).url()}
                                                alt={colunista.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-8 space-y-4">
                                        <div>
                                            <h2 className="font-serif text-2xl font-bold text-brand-olive group-hover:text-brand-red transition-colors">
                                                {colunista.name}
                                            </h2>
                                            <p className="text-brand-red font-bold uppercase tracking-widest text-xs mt-1">
                                                {colunista.role}
                                            </p>
                                        </div>
                                        <p className="text-brand-olive/60 text-sm leading-relaxed line-clamp-3">
                                            {colunista.bio}
                                        </p>
                                        <div className="pt-4 border-t border-brand-olive/10 flex items-center justify-between">
                                            <span className="text-brand-olive font-bold text-xs uppercase tracking-widest">Ver Perfil</span>
                                            <svg className="w-4 h-4 text-brand-red transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-brand-olive/60 col-span-full py-12">Carregando mentes brilhantes...</p>
                        )}
                    </div>
                </div>
            </div>

        </main>
    );
}
