export default function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cozinha de Negócios",
        "url": "https://cozinhadenegocios.com.br",
        "description": "Portal editorial premium focado em empreendedorismo gastronômico.",
        "publisher": {
            "@type": "Organization",
            "name": "Cozinha de Negócios",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cozinhadenegocios.com.br/logo.png"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
