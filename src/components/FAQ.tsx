"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Apakah layanan ini aman dan legal?",
        answer: "Layanan kami **sangat aman dan legal**. Semua akun yang kami jual bergaransi penuh karena kami membelinya langsung dari website atau penyedia resmi. Anda tidak perlu khawatir jika terjadi masalah, karena kami pasti akan bertanggung jawab penuh.",
    },
    {
        question: "Apakah 'sharing' berarti akun digunakan bersama dengan pelanggan lain?",
        answer: "Ya, sistem *sharing* berarti Anda berbagi satu akun dengan pelanggan lain, namun Anda akan mendapatkan **satu profil pribadi** khusus dalam akun tersebut (contoh: satu akun Netflix memiliki lima profil). Dengan demikian, privasi dan riwayat tontonan Anda akan tetap terjaga.",
    },
    {
        question: "Perangkat apa saja yang bisa digunakan untuk mengakses akun?",
        answer: "Semua akun yang kami jual **dapat digunakan di berbagai jenis perangkat** (*All Device*). Anda bisa menggunakannya di *Smart TV, smartphone, tablet, PC/laptop, konsol game, set-top box, dan lain-lain*.",
    },
    {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer: "Kami menerima pembayaran melalui **transfer bank (BCA)** dan **dompet digital** seperti **DANA, OVO, GOPAY, dan QRIS**.",
    },
    {
        question: "Mengapa harga langganan bisa lebih murah dibandingkan website resmi?",
        answer: "Harga kami lebih terjangkau karena kami memanfaatkan **sistem *Family Plan* atau paket *bundling*** khusus yang disediakan oleh penyedia layanan. Sistem ini memungkinkan adanya pembagian biaya langganan, sehingga jauh lebih hemat untuk setiap pengguna.",
    },
];

// Helper function to parse markdown-style bold markers
const parseMarkdown = (text: string): string => {
    // Replace **text** with <strong>text</strong>
    let parsed = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Replace *text* with <strong>text</strong> (but not if already inside **)
    parsed = parsed.replace(/(?<!\*)\*(?!\*)(.+?)\*(?!\*)/g, '<strong>$1</strong>');
    return parsed;
};

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
                                <div
                                    className="px-6 pb-4 text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: parseMarkdown(faq.answer) }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
