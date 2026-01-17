import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { safeFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const categorias = [
    { title: "Tendências", slug: "tendencias", desc: "O que vem por aí no mercado global." },
    { title: "Marketing", slug: "marketing", desc: "Estratégias de posicionamento e branding." },
    { title: "Gestão", slug: "gestao", desc: "Eficiência operacional e rentabilidade." },
    { title: "Experiência", slug: "experiencia", desc: "O design do serviço e a jornada do cliente." }
];

export default async function ColunasPage() {
    const posts = await safeFetch<any[]>(POSTS_QUERY) || [];

    return (
        <main className="min-h-screen bg-brand-beige">

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mb-16 space-y-6">
                        <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Categorias</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-olive font-bold">Colunas</h1>
                        <div className="w-24 h-1.5 bg-brand-red rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {categorias.map((col, idx) => (
                            <Link
                                key={idx}
                                href={`/colunas/${col.slug}`}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-olive/5 hover:border-brand-red transition-all group"
                            >
                                <h3 className="font-serif text-2xl font-bold text-brand-olive group-hover:text-brand-red transition-colors mb-2">{col.title}</h3>
                                <p className="text-sm text-brand-olive/60 leading-relaxed">{col.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-12">
                        <h2 className="font-serif text-3xl font-bold text-brand-olive">Artigos Recentes</h2>
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
                                <p className="text-brand-olive/60 col-span-full py-12">Nenhum artigo publicado recentemente.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
