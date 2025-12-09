import { Users, UserCheck, Wallet, ShieldCheck, Tag, Headphones } from "lucide-react";

const features = [
    {
        name: "Ada Grup Untuk Semua Customer Aktif",
        description:
            "Grup ini bertujuan untuk membantu customer jika ada kendala, karena di grup ini ada admin teknisi & admin customer yang siap membantu.",
        icon: Users,
    },
    {
        name: "1 Customer = 1 Profile (Anti Screen Limit)",
        description:
            "Setiap customer memiliki profile masing-masing, walaupun sharing bukan berarti kenyamanan tidak terjaga. Sehingga 1 profile customer tidak untuk customer lain",
        icon: UserCheck,
    },
    {
        name: "Harga terjangkau",
        description:
            "Semua akun yang kita jual lebih murah, aman, legal tapi kualitas bukan murahan.",
        icon: Wallet,
    },
    {
        name: "Tidak perlu ganti-ganti akun",
        description:
            "Semua akun yang kita jual bisa menggunakan email pribadi atau dari kami dan tentunya tidak perlu ganti-ganti akun setiap bulannya",
        icon: ShieldCheck,
    },
    {
        name: "Harga khusus untuk customer perpanjang",
        description:
            "Salah satu favorit keuntungan dari customer setia rojo lapak adalah jika perpanjang mendapatkan harga yang lebih murah dari pada bulan sebelumnya",
        icon: Tag,
    },
    {
        name: "Full Service",
        description:
            "Jangan segan untuk bertanya karena kita siap membantu sampai customer bisa menggunakan.",
        icon: Headphones,
    },
];

export default function Features() {
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#E50914]">
                        Kenapa Memilih Kami?
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Keuntungan Membeli di Rojo Lapak
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nikmati layanan premium dengan berbagai keuntungan yang kami tawarkan khusus untuk Anda.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E50914]">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
