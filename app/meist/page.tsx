import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Meist // Lola Peostuudio",
  description:
    "Lola Peostuudio lugu – Elora (Lola) ja meie tiim. Peokorraldus juba pea 12 aastat.",
};

const team = [
  {
    name: "Lola // Elora",
    role: "Peokorraldaja, Lola Peostuudio algataja",
    desc: "Pakun põnevaid tegevusi igale üritusele! Olgu siis tegemist kas väikselapse sünnipäevaga või hoopis Su 40nda juubeliga.",
    image: "/images/500030144-18061603913145287-42254426651713674-n.jpeg",
  },
  {
    name: "Teivo",
    role: "Lola partner/abiline, madude peremees, DJ",
    desc: "Aitan Lolat ürituste läbiviimises, olen kaasõhtujuht, tegelen madudega ning toon peole ka soovi korral MUUSIKA!",
    image: "/images/screenshot-2025-06-25-at-13.56.11.png",
  },
  {
    name: "Uljana",
    role: "Dekoreerimise ekspert, papagoide perenaine",
    desc: "Aerodisain, õhupallidest sambad ja vanikud ning kaunid fototaustad - dekoreerin Su peoruumi just Sinu soovidele vastavalt!",
    image: "/images/aurodisaini-expert-2.jpeg",
  },
  {
    name: "Oleg",
    role: "Papagoi Keskuse peremees",
    desc: "Olen Lola Peostuudio partneri Papagoi Keskuse peremees ning papagoide programmi peamine läbiviija.",
    image: "/images/papagoi-1.jpeg",
  },
  {
    name: "Sirli",
    role: "Näomaalija // Glitter tattoo artist // Fotograaf",
    desc: "Teen igale lapsele vahva näomaalingu, glitter tätoveeringu või jäädvustan Su peo kaunite piltidega!",
    image: "/images/504496337-18063916124145287-1632313631551243060-n.jpeg",
  },
  {
    name: "Elis",
    role: "Baaridaam",
    desc: "Sega Su peol kokku just Sinu lemmikud kokteilid ning lisaks võin aidata ka joogimenüü koostamisega!",
    image: "/images/screenshot-2025-06-25-at-14.08.58.png",
  },
  { name: "Riki", role: "Kogenud peoloom", desc: "Maisi-roninastik. Toon peole elevust juurde!", image: "/images/riki.jpeg" },
  { name: "Pirn", role: "Peo staar", desc: "Kuningpüüton. Kõik tahavad minuga aega veeta!", image: "/images/screenshot-2025-05-22-at-18.42.25.png" },
  { name: "Diego", role: "Tõeline ilueedi", desc: "Kuningboa. Noor, uhke ning kaunis!", image: "/images/505164689-18467201836079802-6476343287342823525-n.jpeg" },
  { name: "Mac", role: "Ühemehe bänd", desc: "Siniaara. Sellist esinejat pole Sa veel kunagi näinud!", image: "/images/papagoi.jpeg" },
  { name: "Millie", role: "Trikimeister", desc: "Aafrika hall papagoi. Teen Teile sellise SHOW!", image: "/images/papagoi2.jpg" },
];

export default function MeistPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-8 text-center">
            Kuidas see kõik alguse sai?
          </h1>
          <div className="space-y-6 mb-16">
            <p className="text-[#e5e5e5]">
              Hei-hei! Mina olen Elora (hüüdnimega siis Lola), olen noor
              ettevõtja, kes on peokorraldus-maailmas tegutsenud juba pea 12
              aastat.. uskumatu, eksole? Nagu mulle kord öeldi.. &quot;vanust
              pole ollagi, aga staaži kui palju&quot;. Võin julgelt öelda, et
              olen sel maastikul üks noorimaid tegijaid.
            </p>
            <p className="text-[#e5e5e5]">
              Kõik algas sellest, kui hakkasin 9-aastasena tegema õhupalliloomi
              (minust sai Oravaneiu Lola) ning sealt arenes mu äri aina edasi.
              Esimese pidude korraldamise kogemuse sain oma vanemate
              lastekeskusest, kus koos emaga erinevaid üritusi läbi viisime.
            </p>
            <p className="text-[#e5e5e5]">
              Esialgu tegelesin vaid lasteüritustega, kuid viimase paari aasta
              jooksul olen oma sihtgruppi laiendanud ning aina enam tekib mu
              kalendrisse ka erinevaid täiskasvanute pidusid – ja see on ikka
              tõsiselt lahe! Juba see, kui oled nõus oma juubeli minu, noore
              õhtujuhi kätte usaldama, on mu jaoks täielik kompliment!
            </p>
            <p className="text-[#e5e5e5]">
              Nüüdseks on Lola Peostuudiost saanud mitme-liikmelise tiimi ning
              laialdase teenustevalikuga ettevõte, kust leiab tegevusi ja
              dekoratsioone nii lastepidudele, täiskasvanute juubelitele,
              ettevõtte suvepäevadele kui ka kõikidele muudele sündmustele!
            </p>
            <a
              href="https://youtu.be/2VNB_lCAEFM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#f5d038] text-[#2c2402] font-semibold rounded hover:bg-[#cca60a] hover:text-white transition-colors"
            >
              VAATA TUTVUSTAVAT VIDEOT
            </a>
          </div>

          <h2 className="font-dancing text-3xl text-[#fafafa] text-center mb-12">
            Kes siis meie tiimis on?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {team.map((m, i) => (
              <div
                key={i}
                className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#fafafa] font-bold text-lg">{m.name}</h3>
                  <p className="text-[#f5d038] text-sm font-semibold mb-2">
                    {m.role}
                  </p>
                  <p className="text-[#e5e5e5] text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Tekkis küsimusi?
          </h2>
          <ContactForm />
        </div>
      </section>

      <section className="py-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-[#fafafa] mb-6">
            Peoteenused
          </h3>
          <a
            href="tel:+37258607141"
            className="text-2xl font-bold text-[#fafafa] hover:text-[#f5d038] block mb-4 transition-colors"
          >
            +372 5860 7141
          </a>
          <h3 className="text-xl font-bold text-[#fafafa] mb-2 mt-8">
            Dekoratsioonid
          </h3>
          <a
            href="tel:+3725141705"
            className="text-2xl font-bold text-[#fafafa] hover:text-[#f5d038] block transition-colors"
          >
            +372 514 1705
          </a>
        </div>
      </section>
    </div>
  );
}
