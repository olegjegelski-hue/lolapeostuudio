import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lola Peostuudio – Peokorraldus ja sündmused",
  description:
    "Lola Peostuudio – õhupalliloomad, mängujuhid, fotosessioonid, näomaalingud. Teeme Sinu sündmusest unustamatu elamuse!",
  keywords:
    "peokorraldus, lapse sünnipäev, õhupalliloomad, mängujuhid, fotosessioonid, näomaalingud, Tartu",
  openGraph: {
    title: "Lola Peostuudio",
    description: "Teeme Sinu sündmusest unustamatu elamuse!",
    type: "website",
    locale: "et_EE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
