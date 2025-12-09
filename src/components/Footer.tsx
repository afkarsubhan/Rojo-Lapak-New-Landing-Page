import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Rojo Lapak</h3>
                        <p className="text-gray-400 mb-6">
                            Platform berlangganan bersama legal & bergaransi. Solusi hemat untuk menikmati layanan premium.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Rojo Lapak</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Produk Populer</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Netflix Premium
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Spotify Family
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Youtube Premium
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Disney+ Hotstar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail className="flex-shrink-0 mr-3 text-primary" size={20} />
                                <span className="text-gray-400">admin@rojolapak.com</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="flex-shrink-0 mr-3 text-primary" size={20} />
                                <span className="text-gray-400">+62 812-3456-7890</span>
                            </li>
                            <li className="text-gray-400 text-sm">
                                Jam Operasional:<br />
                                Senin - Minggu<br />
                                08.00 - 22.00 WIB
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Rojo Lapak. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
