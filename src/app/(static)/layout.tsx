import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-hidden lg:block h-fit gap-y-10 dark:bg-neutral-950">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}