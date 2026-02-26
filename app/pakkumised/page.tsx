import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pakkumised lastepidudele // Lola Peostuudio",
  description:
    "Leia sobivad pakkumised ja teenuste-kombod oma lapse peole meie käest!",
};

export default function PakkumisedPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#232323] mb-4 text-center">
          Pakkumised lasteüritustele
        </h1>
        <p className="text-lg text-[#232323] mb-8 text-center">
          Üritustele, mis toimuvad Tartust väljas, lisandub transporditasu :)
        </p>
        <p className="text-[#232323] mb-8">
          Siin lehel on lastepidude pakkumised. (Sisu tuleb täiendada originaalilt.)
        </p>
        <Link
          href="/"
          className="text-[#bc9c22] font-semibold hover:text-[#735f15] hover:underline"
        >
          ← Tagasi esilehele
        </Link>
      </div>
    </div>
  );
}
