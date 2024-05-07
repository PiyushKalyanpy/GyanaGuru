import type { Metadata } from "next";
import { Manrope, Inter, Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import { getServerSession } from "next-auth";
import SessionProvider from "./providers";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
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
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} dark`}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
