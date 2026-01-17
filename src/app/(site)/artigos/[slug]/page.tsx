import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { safeFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const post = await safeFetch<any>(POST_QUERY, { slug: params.slug });

    if (!post) {
        // Fallback para quando o CMS ainda não está populado
        return (
            <main className="min-h-screen bg-white flex items-center justify-center p-20 text-center">
                <div className="space-y-6">
                    <h1 className="font-serif text-4xl font-bold text-brand-olive">Artigo em Edição</h1>
                    <p className="text-brand-olive/60">Este conteúdo está sendo migrado para o novo sistema. Volte em instantes.</p>
                    <Link href="/" className="text-brand-red font-bold uppercase tracking-widest hover:underline inline-block">
                        Voltar para Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <article className="pt-32 pb-24">
                {/* Header */}
                <header className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-16 space-y-6">
                    {post.categories && post.categories[0] && (
                        <span className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-md inline-block">
                            {post.categories[0].title}
                        </span>
                    )}
                    <h1 className="font-serif text-4xl md:text-6xl text-brand-olive font-bold leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-brand-olive/60 uppercase tracking-[0.2em] text-xs font-semibold">
                        <span>Por {post.author.name}</span>
                        <span className="w-1 h-1 bg-brand-olive/30 rounded-full" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="container mx-auto px-4 md:px-8 mb-16">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
                            <Image
                                src={urlForImage(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                    <div className="prose prose-xl prose-stone font-sans text-brand-olive/90 leading-relaxed space-y-8">
                        <PortableText value={post.body} />
                    </div>

                    {/* Author Card */}
                    {post.author && (
                        <div className="mt-24 p-12 bg-brand-beige/30 rounded-3xl flex flex-col md:flex-row items-center gap-10">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl shrink-0">
                                {post.author.image && (
                                    <Image
                                        src={urlForImage(post.author.image).url()}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="font-serif text-2xl font-bold text-brand-olive">{post.author.name}</h3>
                                <p className="text-brand-olive/70 leading-relaxed">
                                    {post.author.bio}
                                </p>
                                <div className="pt-2 flex justify-center md:justify-start gap-4">
                                    <Link href={`/colunistas/${post.author.slug.current}`} className="text-brand-red font-bold uppercase tracking-widest text-xs hover:underline">
                                        Ver Perfil Completo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </main>
    );
}
