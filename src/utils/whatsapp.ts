export const createWhatsAppLink = (message: string = "Halo Admin Rojo Lapak, saya ingin berlangganan."): string => {
    const phoneNumber = "6282143370661"; // Generic number from footer
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};
