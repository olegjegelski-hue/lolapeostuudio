"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Lola Peostuudio
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Esileht
            </Link>
            <Link
              href="/lastele"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Lastele
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-500 font-medium transition-colors flex items-center gap-1">
                Teenused
                <span className="text-xs font-bold text-pink-500">PAKKUMISED</span>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-pink-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/taiskasvanutele"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  Täiskasvanutele
                </Link>
                <Link
                  href="/ohupallid"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  Õhupallid
                </Link>
                <Link
                  href="/fotosessioonid"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  UUS! Fotosessioonid!
                </Link>
                <Link
                  href="/koostood"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  KOOSTÖÖD
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-pink-100 pt-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Esileht
            </Link>
            <Link
              href="/lastele"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Lastele
            </Link>
            <Link
              href="/taiskasvanutele"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Täiskasvanutele
            </Link>
            <Link
              href="/ohupallid"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Õhupallid
            </Link>
            <Link
              href="/fotosessioonid"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Fotosessioonid
            </Link>
            <Link
              href="/koostood"
              className="block py-2 text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Koostööd
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
