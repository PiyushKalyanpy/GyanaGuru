import type { Metadata } from "next";
import { Manrope, Inter, Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gyanaguru",
    template: "%s - Gyanaguru",
  },
  description: "Learn for free with Gyanaguru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
