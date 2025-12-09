"use client";

import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppLink } from "@/utils/whatsapp";

export default function FloatingWhatsApp() {
    const handleClick = () => {
        const message = "Halo Rojo Lapak, saya ingin bertanya mengenai layanan berlangganan.";
        window.open(createWhatsAppLink(message), "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            aria-label="Chat WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8 text-white" />
        </button>
    );
}
