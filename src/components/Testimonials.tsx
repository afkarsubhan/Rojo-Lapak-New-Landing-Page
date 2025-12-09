const testimonials = [
    {
        name: "Budi Santoso",
        role: "Mahasiswa",
        content: "Rojo Lapak sangat membantu saya berhemat. Sekarang bisa nonton Netflix legal tanpa bikin kantong bolong.",
    },
    {
        name: "Siti Aminah",
        role: "Freelancer",
        content: "Prosesnya cepat dan adminnya ramah. Sangat recommended buat yang mau cari teman patungan.",
    },
    {
        name: "Rizky Pratama",
        role: "Karyawan Swasta",
        content: "Awalnya ragu, tapi ternyata aman banget. Udah langganan Spotify Family hampir setahun di sini.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimoni" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Apa Kata Mereka?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Ribuan pengguna telah bergabung dan menikmati layanan kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                            <div className="absolute top-8 right-8 text-primary/20">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 mb-6 relative z-10 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
