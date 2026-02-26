"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111111] shadow-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Lola Peostuudio logo"
              className="h-[7.5rem] w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base"
            >
              Esileht
            </Link>
            <div className="relative group">
              <Link
                href="/lastele"
                className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base flex items-center"
              >
                Lastele
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#232323] rounded shadow-lg border border-[#eec20c]/30 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  href="/lastele"
                  className="block px-4 py-2 text-[#bc9c22] hover:text-[#f5d038] hover:bg-[#f5d038]/10"
                >
                  Teenused
                </Link>
                <Link
                  href="/pakkumised"
                  className="block px-4 py-2 text-[#bc9c22] hover:text-[#f5d038] hover:bg-[#f5d038]/10"
                >
                  PAKKUMISED
                </Link>
              </div>
            </div>
            <Link
              href="/taiskasvanutele"
              className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base"
            >
              Täiskasvanutele
            </Link>
            <Link
              href="/ohupallid"
              className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base"
            >
              Õhupallid
            </Link>
            <Link
              href="/fotosessioonid"
              className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base"
            >
              UUS! Fotosessioonid!
            </Link>
            <Link
              href="/koostood"
              className="text-[#bc9c22] hover:text-[#f5d038] font-medium transition-colors text-base"
            >
              KOOSTÖÖD
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#bc9c22] hover:text-[#f5d038]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-[#eec20c]/30 pt-4">
            <Link
              href="/"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Esileht
            </Link>
            <Link
              href="/lastele"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Lastele
            </Link>
            <Link
              href="/taiskasvanutele"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Täiskasvanutele
            </Link>
            <Link
              href="/ohupallid"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Õhupallid
            </Link>
            <Link
              href="/fotosessioonid"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Fotosessioonid
            </Link>
            <Link
              href="/koostood"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Koostööd
            </Link>
            <Link
              href="/pakkumised"
              className="block py-2 text-[#bc9c22] hover:text-[#f5d038]"
              onClick={() => setIsOpen(false)}
            >
              Pakkumised
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
