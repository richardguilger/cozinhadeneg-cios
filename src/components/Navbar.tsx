"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "Manifesto", href: "#manifesto" },
    { name: "Colunas", href: "/colunas" },
    { name: "Colunistas", href: "/colunistas" },
    { name: "Chef", href: "/chef" },
    { name: "Contato", href: "/contato" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-beige/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div className="relative w-40 h-12 md:w-56 md:h-16">
                        <Image
                            src="/logo.png"
                            alt="Cozinha de Negócios"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-brand-olive hover:text-brand-red font-medium transition-colors text-sm uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/assinar"
                        className="bg-brand-red text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-red/90 transition-all transform hover:scale-105 active:scale-95 shadow-md"
                    >
                        Assinar
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-brand-olive p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 bg-brand-beige absolute top-full left-0 right-0 border-t border-brand-olive/10 ${isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 px-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-brand-olive hover:text-brand-red font-medium text-lg uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/assinar"
                        className="w-full text-center bg-brand-red text-white px-6 py-3 rounded-full font-bold text-lg uppercase tracking-widest"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Assinar
                    </Link>
                </div>
            </div>
        </nav>
    );
}
