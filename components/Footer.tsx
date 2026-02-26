import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">Lola Peostuudio</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Teeme Sinu sündmusest unustamatu elamuse! Õhupalliloomad, mängujuhid,
              fotosessioonid ja palju muud.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-pink-400 mb-4">Kiirlingid</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Esileht
                </Link>
              </li>
              <li>
                <Link href="/lastele" className="text-gray-300 hover:text-white transition-colors">
                  Lastele
                </Link>
              </li>
              <li>
                <Link href="/taiskasvanutele" className="text-gray-300 hover:text-white transition-colors">
                  Täiskasvanutele
                </Link>
              </li>
              <li>
                <Link href="/ohupallid" className="text-gray-300 hover:text-white transition-colors">
                  Õhupallid
                </Link>
              </li>
              <li>
                <Link href="/fotosessioonid" className="text-gray-300 hover:text-white transition-colors">
                  Fotosessioonid
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-400 mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <p className="text-sm text-gray-300">Peoteenused: +372 5860 7141</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <p className="text-sm text-gray-300">Dekoratsioonid: +372 514 1705</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Lola Peostuudio
        </div>
      </div>
    </footer>
  );
}
