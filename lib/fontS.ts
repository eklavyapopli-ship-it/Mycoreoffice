import { Playfair_Display, Poppins, Montserrat } from "next/font/google";
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify desired weights
  style: ['normal', 'italic'],
  display: 'swap', // Recommended for better performance
});
export const brandFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const navFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});