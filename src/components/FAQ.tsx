"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Apakah layanan ini aman dan legal?",
        answer: "Tentu saja aman, semua akun yang kita jual FULL GARANSI, AMAN, DAN LEGAL. Karena kita juga membeli dari website resminya. Jadi jangan khawatir kalau akun yang kita jual bermasalah karena kita pasti mempertanggung jawabkan.",
    },
    {
        question: "Kalau sharing berarti dipakai bareng sama customer lain?",
        answer: "Jadi 1 akun netflix itu ada 5 profile, nah yang dimaksud disini sharing adalah nanti setiap customer masing-masing punya 1 profile, jadi nggak usah khawatir deh.",
    },
    {
        question: "Akunnya Bisa di pakai di device apa aja kak?",
        answer: "Semua akun yang kita jual bisa dipakai di ALL Device. Jadi bisa di pakai di Smart TV, Smartphones, Tablets, PC, Laptops, Game Console, SettopBoxes, dll.",
    },
    {
        question: "Pembayaran bisa via apa aja kak?",
        answer: "Kita ada pembayaran via BCA, DANA, OVO, GOPAY.",
    },
    {
        question: "Kenapa harganya bisa lebih murah dari pada di website resmi?",
        answer: "Karena kami menggunakan sistem Family Plan atau paket bundling khusus yang memungkinkan pembagian biaya langganan, sehingga jauh lebih hemat untuk setiap pengguna.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Pertanyaan Umum</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Jawaban untuk pertanyaan yang sering diajukan.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-gray-500" />
                                ) : (
                                    <ChevronDown className="text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
