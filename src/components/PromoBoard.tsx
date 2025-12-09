"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images for development
const desktopPromos = [
    "https://placehold.co/1200x400/png?text=Promo+Desktop+1",
    "https://placehold.co/1200x400/png?text=Promo+Desktop+2",
    "https://placehold.co/1200x400/png?text=Promo+Desktop+3",
];

const mobilePromos = [
    "https://placehold.co/400x600/png?text=Promo+Mobile+1",
    "https://placehold.co/400x600/png?text=Promo+Mobile+2",
    "https://placehold.co/400x600/png?text=Promo+Mobile+3",
];

export default function PromoBoard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % desktopPromos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % desktopPromos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + desktopPromos.length) % desktopPromos.length);
    };

    return (
        <section className="py-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Promo Spesial</h2>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    {/* Desktop View (Landscape) */}
                    <div className="hidden md:block relative aspect-[3/1]">
                        <Image
                            src={desktopPromos[currentIndex]}
                            alt={`Promo ${currentIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-500"
                            unoptimized
                        />
                    </div>

                    {/* Mobile View (Portrait) */}
                    <div className="block md:hidden relative aspect-[2/3]">
                        <Image
                            src={mobilePromos[currentIndex]}
                            alt={`Promo ${currentIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-500"
                            unoptimized
                        />
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {desktopPromos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
