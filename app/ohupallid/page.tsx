import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Õhupallid | Lola Peostuudio",
  description: "Õhupalliloomad ja õhupallidekoratsioonid",
};

export default function OhupallidPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
          Õhupallid
        </h1>
        <p className="text-lg text-[#e5e5e5] mb-8">
          Siin lehel on õhupalliloomade ja õhupallide pakkumised. (Sisu tuleb täiendada.)
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
