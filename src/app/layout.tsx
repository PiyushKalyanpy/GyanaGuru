import type { Metadata } from "next";
import { Manrope, Inter, Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import Providers from "./(root)/providers";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const ibmPlexSans = IBM_Plex_Sans({
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className="">
        <body className={`${ibmPlexSans.className} light`}>{children}</body>
      </html>
    </Providers>
  );
}
