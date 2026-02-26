import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Teenused lasteüritustele // Lola Peostuudio",
  description:
    "Õhupalliloomad, mängujuhid, näomaalingud, glitter tätoveeringud, mullipidu – tegevused lasteüritustele",
};

const services = [
  {
    title: "Õhupalliloomad - 45€",
    price: "45€",
    desc: "Sobilik üritustele, kus on maksimaalselt 20 last. Iga laps saab valida endale ühe kuju. Ajakulu u 30-40min",
    image: "/images/ohupalliloomad.jpeg",
    link: "/ohupallid",
  },
  {
    title: "Õhupalliloomad (ajaliselt)",
    price: "Tavasünnipäev - 65€/h, Suurüritused - 75€/h",
    desc: "Sobilik suurematele üritustele / iga laps saab mitu kuju. Tunni jooksul jõuab õhupallimeister valmistada umbes 40 kuju",
    image: "/images/ohupalliloomad1.jpeg",
    link: "/ohupallid",
  },
  {
    title: "Mängujuhid",
    price: "85€/h (tavasünnipäev), Suurüritused - 100€/h",
    desc: "Kaks kostümeeritud mängujuhti. 85€ hind kehtib kuni 20 lapsega üritustele. Kostüümid: Piraadid, kassid, prints ja printsess, nõid ja metsakoll, Harley Quinn ja Jokker",
    image: "/images/piraadid.jpg",
    link: "/ohupallid",
  },
  {
    title: "Näomaalingud - 55€/h",
    price: "55€/h",
    desc: "Tunni jooksul jõuab näomaalija teha u 12 maalingut (väiksemaid pildikesi rohkem). Nüüd on meie tiimis lausa 2 näomaalijat!",
    image: "/images/504496337-18063916124145287-1632313631551243060-n.jpeg",
    link: "/ohupallid",
  },
  {
    title: "Glitter tätoveeringud - 55€/h",
    price: "55€/h",
    desc: "Tunni jooksul tehakse nii palju tätoveeringuid, kui vähegi jõuab (umbes 15tk). Tattood püsivad ilusti mitu päeva ning on veekindlad",
    image: "/images/tatood.jpg",
    link: "/ohupallid",
  },
  {
    title: "Juukse-tinselid - 10€/laps (min. 50€/üritus)",
    price: "10€/laps",
    desc: "Iga tüdruk saab valida oma lemmikut värvi tinselid. Paneme juuksed särama!",
    image: "/images/436223841-18021106337145287-5999016831817202194-n.jpg",
    link: "/ohupallid",
  },
  {
    title: "MULLIPIDU! (Mullimasinaga!) - 125€/h",
    price: "125€/h",
    desc: "Sobib vaid üritustele, mis toimuvad õues. Terve õu täitub lahedate tossumullidega! Lapsed saavad katsetada erinevaid mullitajaid. Laste arv ei ole piiratud!",
    image: "/images/mullid.jpeg",
    link: "/ohupallid",
  },
  {
    title: "Laps mullis - 65€",
    price: "65€",
    desc: "Kuni 20 lapsega üritustele. Kõik lapsed saavad minna MULLI SISSE ning teha seal vahvaid pilte. Ajakulu u 30-40min",
    image: "/images/mulitamine.jpg",
    link: "/ohupallid",
  },
  {
    title: "Randmetattood - 45€",
    price: "45€",
    desc: "Sobilik üritustele, kus on maksimaalselt 20 last. Iga laps saab valida endale 2 meelepärast tätoveeringut. Ajakulu u 40min-1h",
    image: "/images/tatood.jpg",
    link: "/ohupallid",
  },
  {
    title: "Ürituse jäädvustamine - 90€/h",
    price: "90€/h",
    desc: "Pärast üritust saadetakse Teile kõik välja tulnud pildid. Pildid jõuavad Teieni töödeldult!",
    image: "/images/499682121-4015204432126877-6484726073120279901-n.jpg",
    link: "/ohupallid",
  },
  {
    title: "Suhkruvatt ja minipannkoogid - al 70€",
    price: "al 70€",
    desc: "Laste poolt palavalt armastatud suhkruvatt ning minipannukad lisavad igale peole palju elevust!",
    image: "/images/20251009-183355.jpeg",
    link: "/lastele",
  },
  {
    title: "JÕULU ERI - Jõuluvana külastus - 95€",
    price: "95€",
    desc: "Ühel õigel jõulupeol peab ikka jõuluvana ka kohal olema! Lola Peostuudios on lausa 2 jõuluvana aastal!",
    image: "/images/joulud.jpeg",
    link: "/lastele",
  },
];

const animalPrograms = [
  { name: "Maisi-roninastik Riki", price: "60€" },
  { name: "Kuningpüüton Pirn", price: "90€" },
  { name: "Kuningboa Diego", price: "90€" },
  { name: "Papagoid Mac ja Millie", price: "175€" },
];

const packages = [
  {
    title: "Õhupalliloomad + mängujuhid (ca 1h)",
    price: "90€",
    desc: "Sobib nt väiksemate laste sünnipäevadele. Õhupalliloom igale lapsele, 30-40min mänge, kuni 20 lapsega üritustele",
  },
  {
    title: "Õhupalliloomad + mängujuhid (ca 1,5h)",
    price: "120€",
    desc: "Õhupalliloom igale lapsele, 40-50min mänge, kuni 20 lapsega üritustele",
  },
  {
    title: "Õhupalliloomad + näomaalingud",
    price: "115€/h",
    desc: "Näomaalija jõuab tunni jooksul maalida keskmiselt 15 maalingut. Õhupallimeister valmistada umbes 35 kuju.",
  },
];

export default function LastelePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Tegevused lasteüritustele
          </h1>
          <p className="text-[#e5e5e5] text-center mb-12">
            Üritustele, mis toimuvad Tartust väljas, lisandub transporditasu :)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700 hover:border-[#f5d038]/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#fafafa] font-bold text-lg mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[#f5d038] text-sm font-semibold mb-2">
                    {s.price}
                  </p>
                  <p className="text-[#e5e5e5] text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-dancing text-3xl text-[#fafafa] text-center mb-8">
            Programmid eksootiliste loomadega
          </h2>
          <p className="text-[#e5e5e5] text-center mb-8 max-w-3xl mx-auto">
            Programmid ühe maoga kestavad umbes 45min. Räägitakse madudest,
            vastatakse küsimustele ja lastakse madusid kätte võtta ning pilte
            teha. Papagoide programmi pakume koostöös Papagoi Keskusega.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {animalPrograms.map((p, i) => (
              <div
                key={i}
                className="bg-[#232323] p-4 rounded-lg border border-gray-700 text-center"
              >
                <p className="text-[#fafafa] font-semibold">{p.name}</p>
                <p className="text-[#f5d038] font-bold">{p.price}</p>
              </div>
            ))}
          </div>

          <h2 className="font-dancing text-3xl text-[#fafafa] text-center mb-8">
            Pakkumised
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((p, i) => (
              <div
                key={i}
                className="bg-[#232323] p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-[#fafafa] font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-[#f5d038] font-bold text-xl mb-3">
                  {p.price}
                </p>
                <p className="text-[#e5e5e5] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <Link
              href="/pakkumised"
              className="text-[#f5d038] font-semibold hover:text-[#cca60a] underline"
            >
              Vaata kõiki PAKKUMISI!
            </Link>
          </div>
          <p className="text-[#e5e5e5] text-center mb-8">
            Soovid peole ka dekoratsioone?{" "}
            <Link
              href="/ohupallid"
              className="text-[#f5d038] hover:text-[#cca60a] underline"
            >
              Leia sobilikud kaunistused siit! :)
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Leidsid meelepärase teenuse? Anna oma huvist teada!
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
