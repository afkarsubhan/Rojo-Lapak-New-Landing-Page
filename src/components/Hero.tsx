import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Platform Berlangganan Bersama <span className="text-primary">Legal & Bergaransi</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                            Nikmati layanan premium seperti Netflix, Spotify, Youtube, dan lainnya dengan harga lebih hemat, aman, dan legal. Bergabunglah dengan ribuan pengguna lainnya di Rojo Lapak.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#layanan"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-blue-600 transition-colors md:py-4 md:text-lg md:px-10"
                            >
                                Pesan Sekarang
                            </Link>
                            <Link
                                href="#how-to-order"
                                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10"
                            >
                                Cara Berlangganan <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Illustration Placeholder */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative aspect-square bg-blue-100 rounded-3xl overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                            <span className="text-primary font-bold text-2xl">Illustration Area</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
