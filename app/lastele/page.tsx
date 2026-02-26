import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lastele | Lola Peostuudio",
  description: "Lastepidude pakkumised – õhupalliloomad, mängujuhid, näomaalingud",
};

export default function LastelePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#232323] mb-6">
          Lastele
        </h1>
        <p className="text-lg text-[#232323] mb-8">
          Siin lehel on lastepidude pakkumised. (Sisu tuleb täiendada.)
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
