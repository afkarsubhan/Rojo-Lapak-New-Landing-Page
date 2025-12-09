"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import productsData from "@/data/products.json";

const categories = ["All", "Movie", "Music", "Tools"];
export default function ProductSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = productsData.filter((product) => {
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
                            bestseller={product.terlaris}
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
