import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const newOffers = [
  {
    title: "Magusad pakkumised su lapse peole (UUS koostööpartner)",
    image: "/images/20251009-183355.jpeg",
    alt: "Suhkruvatt ja minipannkoogid",
    href: "/lastele",
  },
  {
    title: "Fotosessioonid madudega/õhupallidega!",
    image: "/images/screenshot-2025-05-22-at-18.42.25.png",
    alt: "kuningpüüton Pirn",
    href: "/fotosessioonid",
  },
  {
    title: "Vaata kõiki lastepidude pakkumisi SIIT",
    image: "/images/436341652-18020718731145287-2859080540695611851-n.jpeg",
    alt: "Õhupalliloomad + näomaalingud",
    href: "/lastele",
  },
];

const services = [
  {
    image: "/images/ohupalliloomad.jpeg",
    alt: "õhupalliloomad",
    title: "Õhupalliloomad",
    href: "/lastele",
  },
  {
    image: "/images/436223841-18021106337145287-5999016831817202194-n.jpg",
    alt: "piraadid - mängujuhid lapse sünnipäevale",
    title: "Mängujuhid lapse peole",
    href: "/lastele",
  },
  {
    image: "/images/505164689-18467201836079802-6476343287342823525-n.jpeg",
    alt: "Püütoniga pildistamine",
    title: "Madudega pildistamine",
    href: "/fotosessioonid",
  },
  {
    image: "/images/screenshot-2025-06-25-at-13.56.11.png",
    alt: "Õhtujuht juubelile",
    title: "Õhtujuht juubelile",
    href: "/taiskasvanutele",
  },
  {
    image: "/images/papagoi.jpeg",
    alt: "Papagoi Keskuse papagoi Mac",
    title: "Papagoide programm",
    href: "/lastele",
  },
  {
    image: "/images/490216001-1207530831378108-8290556476081751762-n.jpg",
    alt: "Sinine fototaust",
    title: "Fototaustad",
    href: "/fotosessioonid",
  },
  {
    image: "/images/504496337-18063916124145287-1632313631551243060-n.jpeg",
    alt: "Näomaalingud",
    title: "Näomaalingud",
    href: "/lastele",
  },
  {
    image: "/images/screenshot-2025-06-25-at-16.09.55-1-800x1039.png",
    alt: "õhupallidest lillekimp kingituseks",
    title: "Kingitus kallimale",
    href: "/ohupallid",
  },
  {
    image: "/images/img-9660-536x788.jpeg",
    alt: "Numbrikombo",
    title: "Numbrikombod",
    href: "/lastele",
  },
  {
    image: "/images/mulitamine.jpg",
    alt: "Hiigelmullide tegemine",
    title: "Mullitamine",
    href: "/lastele",
  },
  {
    image: "/images/499682121-4015204432126877-6484726073120279901-n.jpg",
    alt: "fotosessioon",
    title: "Fotosessioonid",
    href: "/fotosessioonid",
  },
  {
    image: "/images/pulm-1.jpeg",
    alt: "Dekoratsioonid pulma",
    title: "Dekoratsioonid pulma",
    href: "/taiskasvanutele",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Natuke minust (header02) */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <Link href="/meist" className="block">
                <Image
                  src="/images/500030144-18061603913145287-42254426651713674-n.jpeg"
                  alt="Lola"
                  width={400}
                  height={500}
                  className="w-full max-w-sm object-cover rounded"
                />
              </Link>
            </div>
            <div className="lg:w-2/3">
              <h1 className="font-dancing text-4xl md:text-5xl lg:text-6xl text-[#232323] mb-6">
                Natuke minust
              </h1>
              <p className="text-[#232323] text-base md:text-lg leading-relaxed mb-6">
                Hei-hei! Mina olen Elora (hüüdnimega siis Lola), olen noor
                ettevõtja, kes on peokorraldus-maailmas tegutsenud juba pea 12
                aastat.. uskumatu, eksole? Nagu mulle kord öeldi.. &quot;vanust
                pole ollagi, aga staaži kui palju&quot;. Võin julgelt öelda, et
                olen sel maastikul üks noorimaid tegijaid....
              </p>
              <Link
                href="/meist"
                className="inline-block px-6 py-3 bg-[#f5d038] text-[#2c2402] font-semibold rounded hover:bg-[#cca60a] hover:text-white transition-colors shadow-md"
              >
                LOE EDASI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UUED PAKKUMISED (pricing3) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#232323] mb-10">
            UUED PAKKUMISED!!
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newOffers.map((offer, i) => (
              <Link
                key={i}
                href={offer.href}
                className="group block bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#232323] text-base md:text-lg">
                    {offer.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teeme Sinu sündmusest unustamatu elamuse! (content4 + features4) */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-dancing text-3xl md:text-4xl lg:text-5xl text-center text-[#232323] mb-12">
            Teeme Sinu sündmusest unustamatu elamuse!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#f5d038] flex items-center justify-center rounded-tl-full opacity-90 group-hover:opacity-100">
                    <svg
                      className="w-5 h-5 text-[#2c2402]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-4 border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="text-[#232323] font-medium text-sm md:text-base">
                    {service.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form (form2) */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact info - Peoteenused */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-[#232323] mb-6">
            Peoteenused
          </h3>
          <a
            href="tel:+37258607141"
            className="text-2xl font-bold text-[#232323] hover:text-[#bc9c22] block mb-4 transition-colors"
          >
            +372 5860 7141
          </a>
          <h3 className="text-xl font-bold text-[#232323] mb-2 mt-8">
            Dekoratsioonid
          </h3>
          <a
            href="tel:+3725141705"
            className="text-2xl font-bold text-[#232323] hover:text-[#bc9c22] block transition-colors"
          >
            +372 514 1705
          </a>
        </div>
      </section>
    </div>
  );
}
