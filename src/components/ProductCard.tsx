"use client";

import { useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import { createWhatsAppLink } from "@/utils/whatsapp";

interface ProductVariant {
    name: string;
    price: number;
    originalPrice?: number;
}

interface ProductCardProps {
    title: string;
    description: string;
    category: string;
    variants: ProductVariant[];
}

export default function ProductCard({
    title,
    description,
    category,
    variants,
}: ProductCardProps) {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const selectedVariant = variants[selectedVariantIndex];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleOrder = () => {
        const message = `Halo Rojo Lapak, saya ingin memesan ${title} - ${selectedVariant.name}`;
        window.open(createWhatsAppLink(message), "_blank");
    };

    return (
        <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {title}
                </h3>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold leading-5 text-[#E50914]">
                    {category}
                </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600 min-h-[48px]">
                {description}
            </p>

            <div className="mt-6">
                <label htmlFor={`variant-${title}`} className="block text-sm font-medium text-gray-700 mb-2">
                    Pilih Paket
                </label>
                <select
                    id={`variant-${title}`}
                    value={selectedVariantIndex}
                    onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#E50914] sm:text-sm sm:leading-6"
                >
                    {variants.map((variant, index) => (
                        <option key={index} value={index}>
                            {variant.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-gray-900">
                    {formatPrice(selectedVariant.price)}
                </span>
                {selectedVariant.originalPrice && (
                    <span className="text-sm font-semibold leading-6 text-gray-400 line-through">
                        {formatPrice(selectedVariant.originalPrice)}
                    </span>
                )}
            </div>

            <button
                onClick={handleOrder}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#E50914] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
            >
                <MessageCircle size={18} />
                Pesan Sekarang
            </button>

            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#E50914]" aria-hidden="true" />
                    Proses Cepat
                </li>
                <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#E50914]" aria-hidden="true" />
                    Garansi Full
                </li>
                <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#E50914]" aria-hidden="true" />
                    Legal & Aman
                </li>
            </ul>
        </div>
    );
}
