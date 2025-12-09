"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Layanan", href: "#products" },
    { name: "Keuntungan", href: "#features" },
    { name: "Promo", href: "#promo" },
    // { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Cara Berlangganan", href: "#how-to-order" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.jpg" alt="Rojo Lapak Logo" className="h-10 w-auto rounded-lg" />
                            <span className="text-xl font-bold text-primary block">Rojo Lapak</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* <Link
                            href="/login"
                            className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                        >
                            Login
                        </Link> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* <Link
                            href="/login"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link> */}
                    </div>
                </div>
            )}
        </nav>
    );
}
