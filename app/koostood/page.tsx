import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koostööd | Lola Peostuudio",
  description: "Lola Peostuudio koostööpartnerid – Papagoi Keskus jt",
};

export default function KoostoodPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
          Koostööd
        </h1>
        <p className="text-lg text-[#e5e5e5] mb-8">
          Siin lehel on koostööpartnerite info (nt Papagoi Keskuse papagoide programm). (Sisu
          tuleb täiendada.)
        </p>
        <Link
          href="/"
          className="text-[#f5d038] font-semibold hover:text-[#cca60a] hover:underline"
        >
          ← Tagasi esilehele
        </Link>
      </div>
    </div>
  );
}
