"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";

const products = [
    {
        title: "Netflix",
        description: "Nonton film dan series favorit tanpa batas dengan kualitas terbaik.",
        category: "Movie",
        variants: [
            { name: "1 Bulan (HP/Tablet)", price: 42500, originalPrice: 50000 },
            { name: "1 Bulan (Smart TV)", price: 55000, originalPrice: 60000 },
            { name: "Sharing 1 Bulan (Smart TV)", price: 60000 },
            { name: "Sharing 2 Bulan (Non-Smart TV)", price: 85000 },
        ],
    },
    {
        title: "Spotify",
        description: "Dengarkan musik tanpa iklan dengan kualitas audio tinggi.",
        category: "Music",
        variants: [
            { name: "1 Bulan (Individual)", price: 32400, originalPrice: 35000 },
            { name: "2 Bulan (Individual)", price: 85000 },
        ],
    },
    {
        title: "YouTube Premium",
        description: "Nonton video tanpa iklan dan putar di latar belakang.",
        category: "Music",
        variants: [
            { name: "1 Bulan", price: 37830, originalPrice: 39000 },
        ],
    },
    {
        title: "Disney+ Hotstar",
        description: "Film dan series terbaik dari Disney, Marvel, Star Wars, dan lainnya.",
        category: "Movie",
        variants: [
            { name: "1 Bulan (Semua Perangkat)", price: 27000, originalPrice: 30000 },
            { name: "3 Bulan (Semua Perangkat)", price: 95000 },
        ],
    },
    {
        title: "Prime Video",
        description: "Nikmati konten eksklusif Amazon Originals dan film populer.",
        category: "Movie",
        variants: [
            { name: "1 Bulan (Semua Perangkat)", price: 21250, originalPrice: 30000 },
            { name: "2 Bulan (Semua Perangkat)", price: 56000 },
        ],
    },
    {
        title: "Vidio",
        description: "Streaming olahraga, sinetron, dan film Indonesia terlengkap.",
        category: "Movie",
        variants: [
            { name: "Platinum 1 Bulan", price: 25000 },
            { name: "Diamond (EPL) 1 Bulan", price: 169750, originalPrice: 175000 },
        ],
    },
    {
        title: "WeTV",
        description: "Drama Asia terbaik, anime, dan variety show.",
        category: "Movie",
        variants: [
            { name: "3 Bulan (Semua Perangkat)", price: 42000 },
        ],
    },
    {
        title: "Viu",
        description: "Drama Korea, Variety Show, dan film Asia terbaru.",
        category: "Movie",
        variants: [
            { name: "1 Bulan (Semua Perangkat)", price: 9600, originalPrice: 12000 },
        ],
    },
    {
        title: "Canva Pro",
        description: "Desain grafis mudah dengan ribuan template premium.",
        category: "Tools",
        variants: [
            { name: "3 Bulan", price: 35000 },
        ],
    },
    {
        title: "CapCut Pro",
        description: "Edit video profesional dengan fitur premium.",
        category: "Tools",
        variants: [
            { name: "1 Bulan", price: 50000 },
        ],
    },
    {
        title: "HBO GO",
        description: "Film blockbuster dan serial HBO Original terbaik.",
        category: "Movie",
        variants: [
            { name: "1 Bulan", price: 33250, originalPrice: 35000 },
        ],
    },
    {
        title: "Catchplay+",
        description: "Film terbaru dari bioskop dan series eksklusif.",
        category: "Movie",
        variants: [
            { name: "1 Bulan", price: 20000, originalPrice: 25000 },
        ],
    },
];

const categories = ["All", "Movie", "Music", "Tools"];

export default function ProductSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-gray-50 py-24 sm:py-32" id="products">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Pilih Layanan Premium
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Berlangganan layanan premium favoritmu dengan harga termurah.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-full border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E50914] sm:text-sm sm:leading-6 shadow-sm"
                            placeholder="Cari layanan (misal: Netflix)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                        ? "bg-[#E50914] text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100 ring-1 ring-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.title}
                            title={product.title}
                            description={product.description}
                            category={product.category}
                            variants={product.variants}
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center mt-12 text-gray-500">
                        Tidak ada layanan yang ditemukan untuk pencarian Anda.
                    </div>
                )}
            </div>
        </div>
    );
}
