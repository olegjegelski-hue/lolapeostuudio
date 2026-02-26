import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meist | Lola Peostuudio",
  description: "Tutvuge Lola Peostuudioga – Elora (Lola) ja meie lugu",
};

export default function MeistPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#232323] mb-6">
          Meist
        </h1>
        <p className="text-lg text-[#232323] mb-8">
          Täpsem info Lola (Elora) ja Lola Peostuudio kohta. (Sisu tuleb täiendada.)
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
