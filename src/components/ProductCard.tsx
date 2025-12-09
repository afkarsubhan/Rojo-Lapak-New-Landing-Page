"use client";

import { useState } from "react";
import { MessageCircle, Check, ChevronDown } from "lucide-react";
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
    bestseller?: boolean;
}

export default function ProductCard({
    title,
    description,
    category,
    variants,
    bestseller = false,
}: ProductCardProps) {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        <div className="relative flex flex-col h-full rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
            {bestseller && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    TERLARIS
                </div>
            )}
            <div className="flex-1 flex flex-col">
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

                <div className="mt-6 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih Paket
                    </label>

                    {/* Custom Dropdown */}
                    <div className="relative">
                        {/* Backdrop for clicking outside */}
                        {isDropdownOpen && (
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsDropdownOpen(false)}
                            />
                        )}

                        {/* Trigger Button */}
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`relative z-20 w-full flex items-center justify-between rounded-lg bg-white py-2.5 pl-4 pr-3 text-left text-sm ring-1 transition-all duration-200 ${isDropdownOpen
                                    ? "ring-[#E50914] shadow-md border-transparent"
                                    : "ring-gray-300 hover:ring-gray-400"
                                }`}
                        >
                            <span className="font-medium text-gray-900 truncate mr-2">
                                {selectedVariant.name}
                            </span>
                            <ChevronDown
                                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#E50914]" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in zoom-in-95 duration-100 ease-out">
                                {variants.map((variant, index) => (
                                    <button
                                        key={index}
                                        className={`relative w-full cursor-pointer select-none py-2.5 pl-4 pr-9 text-left hover:bg-red-50 transition-colors ${selectedVariantIndex === index ? "bg-red-50 text-[#E50914]" : "text-gray-900"
                                            }`}
                                        onClick={() => {
                                            setSelectedVariantIndex(index);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        <span className={`block truncate ${selectedVariantIndex === index ? "font-semibold" : "font-normal"}`}>
                                            {variant.name}
                                        </span>
                                        {selectedVariantIndex === index && (
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#E50914]">
                                                <Check className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
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
            </div>

            <button
                onClick={handleOrder}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#E50914] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
            >
                <MessageCircle size={18} />
                Pesan Sekarang
            </button>

            {/* <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
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
            </ul> */}
        </div>
    );
}
