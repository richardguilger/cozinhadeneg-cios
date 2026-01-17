import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    image: string;
    slug: string;
}

export default function ArticleCard({ title, excerpt, category, author, date, image, slug }: ArticleCardProps) {
    return (
        <article className="group cursor-pointer">
            <Link href={`/artigos/${slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-brand-beige/20 mb-6">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-brand-olive/60 font-medium uppercase tracking-widest">
                        <span>{author}</span>
                        <span className="w-1 h-1 bg-brand-olive/30 rounded-full" />
                        <span>{date}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-brand-olive group-hover:text-brand-red transition-colors leading-snug">
                        {title}
                    </h3>

                    <p className="text-brand-olive/70 text-sm leading-relaxed line-clamp-2">
                        {excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Ler mais
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </article>
    );
}
