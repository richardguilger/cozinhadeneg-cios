import { groq } from "next-sanity";

// Buscar todos os artigos para o feed
export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->{name, image, slug},
  "categories": categories[]->{title, slug}
}`;

// Buscar um artigo único pelo slug
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "author": author->{name, image, bio, slug},
  "categories": categories[]->{title, slug}
}`;

// Buscar todos os colunistas
export const AUTHORS_QUERY = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  role,
  bio
}`;
