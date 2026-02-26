import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pakkumised lastepidudele // Lola Peostuudio",
  description:
    "Leia sobivad pakkumised ja teenuste-kombod oma lapse peole meie käest!",
};

export default function PakkumisedPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
          Pakkumised lasteüritustele
        </h1>
        <p className="text-lg text-[#e5e5e5] mb-8 text-center">
          Üritustele, mis toimuvad Tartust väljas, lisandub transporditasu :)
        </p>
        <p className="text-[#e5e5e5] mb-8">
          Siin lehel on lastepidude pakkumised. (Sisu tuleb täiendada originaalilt.)
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
