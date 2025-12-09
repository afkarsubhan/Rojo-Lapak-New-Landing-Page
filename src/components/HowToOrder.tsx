import { Smartphone, CreditCard, Clock, PackageCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Pesan Layanan",
        icon: Smartphone,
    },
    {
        number: "02",
        title: "Pembayaran",
        icon: CreditCard,
    },
    {
        number: "03",
        title: "Menunggu Proses",
        icon: Clock,
    },
    {
        number: "04",
        title: "Pesanan Diterima",
        icon: PackageCheck,
    },
];

export default function HowToOrder() {
    return (
        <div id="how-to-order" className="bg-linear-to-br from-[#1a7bb5] to-[#0d5a8f] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Cara Berlangganan
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                {/* Yellow circle background */}
                                <div className="w-32 h-32 bg-linear-to-br from-[#f5c542] to-[#f0b429] rounded-full flex items-center justify-center shadow-lg">
                                    {/* Icon container */}
                                    <div className="bg-white/90 rounded-2xl p-4 shadow-md">
                                        <step.icon className="h-12 w-12 text-[#1a7bb5]" strokeWidth={2} />
                                    </div>
                                </div>
                                {/* Step number badge */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#f5c542] text-[#1a7bb5] font-bold text-sm px-3 py-1 rounded-full border-2 border-white shadow-md">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
