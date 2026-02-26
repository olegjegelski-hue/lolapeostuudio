import Link from "next/link";
import {
  PartyPopper,
  Balloon,
  Gamepad2,
  Camera,
  Mic,
  Palette,
  Gift,
  Hash,
  Wind,
  Image,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    icon: Balloon,
    title: "Õhupalliloomad",
    href: "/ohupallid",
  },
  {
    icon: Gamepad2,
    title: "Mängujuhid lapse peole",
    href: "/lastele",
  },
  {
    icon: Camera,
    title: "Madudega pildistamine",
    href: "/fotosessioonid",
  },
  {
    icon: Mic,
    title: "Õhtujuht juubelile",
    href: "/taiskasvanutele",
  },
  {
    icon: PartyPopper,
    title: "Papagoide programm",
    href: "/koostood",
  },
  {
    icon: Image,
    title: "Fototaustad",
    href: "/fotosessioonid",
  },
  {
    icon: Palette,
    title: "Näomaalingud",
    href: "/lastele",
  },
  {
    icon: Gift,
    title: "Kingitus kallimale",
    href: "/ohupallid",
  },
  {
    icon: Hash,
    title: "Numbrikombod",
    href: "/lastele",
  },
  {
    icon: Wind,
    title: "Mullitamine",
    href: "/lastele",
  },
  {
    icon: Camera,
    title: "Fotosessioonid",
    href: "/fotosessioonid",
  },
  {
    icon: Sparkles,
    title: "Dekoratsioonid pulma",
    href: "/taiskasvanutele",
  },
];

const newOffers = [
  {
    title: "Magusad pakkumised su lapse peole",
    subtitle: "UUS koostööpartner",
    description: "Suhkruvatt ja minipannkoogid",
  },
  {
    title: "Fotosessioonid madudega/õhupallidega!",
    subtitle: "Kuningpüüton Pirn",
    description: "Õhupalliloomad + näomaalingud",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50/30">
      {/* Hero - Natuke minust */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Lola
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              Natuke minust
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Hei-hei! Mina olen Elora (hüüdnimega siis Lola), olen noor ettevõtja, kes on
              peokorraldus-maailmas tegutsenud juba pea 12 aastat.. uskumatu, eksole? Nagu
              mulle kord öeldi.. &quot;vanust pole ollagi, aga staaži kui palju&quot;. Võin
              julgelt öelda, et olen sel maastikul üks noorimaid tegijaid....
            </p>
            <Link
              href="/meist"
              className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              LOE EDASI
            </Link>
          </div>
        </div>
      </section>

      {/* UUED PAKKUMISED */}
      <section className="py-12 bg-white border-y border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            UUED PAKKUMISED!!
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newOffers.map((offer, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wide">
                  {offer.subtitle}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{offer.title}</h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/lastele"
              className="text-pink-600 font-semibold hover:text-pink-700 underline"
            >
              Vaata kõiki lastepidude pakkumisi SIIT
            </Link>
          </div>
        </div>
      </section>

      {/* Teeme Sinu sündmusest unustamatu elamuse! */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Teeme Sinu sündmusest unustamatu elamuse!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-xl hover:border-pink-200 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-pink-600 transition-colors">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-gradient-to-b from-purple-50/50 to-pink-50/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Peoteenused</h3>
          <a
            href="tel:+37258607141"
            className="text-2xl font-bold text-pink-600 hover:text-pink-700 block mb-4"
          >
            +372 5860 7141
          </a>
          <h3 className="text-xl font-bold text-gray-800 mb-2 mt-8">Dekoratsioonid</h3>
          <a
            href="tel:+3725141705"
            className="text-2xl font-bold text-pink-600 hover:text-pink-700 block"
          >
            +372 514 1705
          </a>
        </div>
      </section>
    </div>
  );
}
