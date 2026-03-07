import { Playfair_Display, Poppins, Montserrat } from "next/font/google";
import { Josefin_Sans } from "next/font/google"
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
export const josefinSans = Josefin_Sans({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap',   // Optimize font loading behavior
  weight: ['300', '400', '700'], // Select specific weights
  variable: '--font-josefin-sans', // Define a CSS variable name (optional, but useful for Tailwind)
});