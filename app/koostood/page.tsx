import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Koostööd // Lola Peostuudio",
  description:
    "Lola Peostuudio koostööpartnerid – Papagoi Keskus, Magic Food, A&R Üritused",
};

const partners = [
  {
    name: "Papagoi Keskus",
    desc: "Papagoi Keskus on üks eriline paik, mida on mõnus külastada nii pere kui ka sõpradega. Ruumis lendab vabalt ringi üle 30 papagoi ning külastuse jooksul jagab peremees põnevaid lugusid ja fakte nende imeliste lindude elust ja pidamisest. Külastajatel on võimalus papagoisid lähedalt vaadelda, nendega suhelda ja ka pilte teha. Papagoi Keskuses saab pidada ka sünnipäevi ja muid üritusi. Lisaks on võimalus kutsuda keskusest välja kaks tõeliselt kaunist lindu – siniaara Mac ja aafrika hall papagoi Millie.",
    image: "/images/papagoi.jpeg",
    link: "https://papagoi.ee/",
    linkText: "KÜLASTA KODULEHTE",
  },
  {
    name: "Magic Food",
    desc: "Magic Food muudab iga peo magusaks! Nende käest saad vahvad värvilised suhkruvatid või hoopis magusad minipannkoogid, mis on ideaalseks ampsuks nii väikestele kui suurtele maiustajatele! Soovid kiiret lahendust? Valmis pannkoogid tuuakse otse lauale! Otsid elamust? Tullakse panniga kohale ja küpsetatakse pannkooke otse peopaigas. Suhkruvatt lisab igale peole palju elevust!",
    image: "/images/20251009-183355.jpeg",
    link: "https://www.facebook.com/magicfoodsuhkruvatt",
    linkText: "VAATA NENDE TEGEMISI FACEBOOKIST",
  },
  {
    name: "A & R Üritused",
    desc: "A&R Üritused ei korralda lihtsalt pidusid – nad juhivad sündmusi. Algusest lõpuni - nad ühendavad muusika, tehnika ja atmosfääri üheks tervikuks. Olgu tegu lastepeo, juubeli, firmapeo, pulma või avaliku üritusega – iga detail on paigas. Pakuvad: DJ ja muusikaline lahendus, professionaalne heli ja valgus, õhtujuhtimine, dekoratsioonid ja peokujundus.",
    image: "/images/screenshot-2025-06-25-at-13.56.11.png",
    link: "https://sites.google.com/view/ar-uritused/kodu",
    linkText: "VAATA NENDE KODULEHTE",
  },
];

export default function KoostoodPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Meie koostööpartnerid!
          </h1>
          <p className="text-[#e5e5e5] text-center mb-12">
            Selleks, et Teie peod oleksid veelgi lahedamad, oleme siia kokku
            koondanud kõik oma koostööpartnerid! Pakud ise ka mõnda lahedat
            teenust? Oleme alati avatud uuteks ideedeks!
          </p>

          <div className="space-y-12 mb-16">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 aspect-square md:aspect-auto md:min-h-[200px] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="font-dancing text-3xl text-[#fafafa] mb-4">
                      {p.name}
                    </h2>
                    <p className="text-[#e5e5e5] mb-4">{p.desc}</p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#f5d038] text-[#2c2402] font-semibold rounded hover:bg-[#cca60a] hover:text-white transition-colors"
                    >
                      {p.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Tuli mingi idee või soovid rohkem infot? Kirjuta meile!
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
