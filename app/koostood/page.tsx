import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koostööd | Lola Peostuudio",
  description: "Lola Peostuudio koostööpartnerid – Papagoi Keskus jt",
};

export default function KoostoodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Koostööd</h1>
        <p className="text-lg text-gray-600 mb-8">
          Siin lehel on koostööpartnerite info (nt Papagoi Keskuse papagoide programm). (Sisu
          tuleb täiendada.)
        </p>
        <Link href="/" className="text-pink-600 font-semibold hover:underline">
          ← Tagasi esilehele
        </Link>
      </div>
    </div>
  );
}
