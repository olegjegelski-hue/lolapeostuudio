import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home // Lola Peostuudio",
  description:
    "Olen planeerimas üritust ning vajad sinna põnevaid tegevusi või hoopis dekoratsioone? - Meie saame sind aidata!",
  keywords:
    "peokorraldus, lapse sünnipäev, õhupalliloomad, mängujuhid, fotosessioonid, näomaalingud, Tartu",
  icons: {
    icon: "/images/taustaga-logo.png",
  },
  openGraph: {
    title: "Lola Peostuudio",
    description: "Teeme Sinu sündmusest unustamatu elamuse!",
    type: "website",
    locale: "et_EE",
    images: ["/images/index-meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${dancingScript.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
