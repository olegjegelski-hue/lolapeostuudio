import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Pakkumised lastepidudele // Lola Peostuudio",
  description:
    "Leia sobivad pakkumised ja teenuste-kombod oma lapse peole meie käest!",
};

const packages = [
  {
    title: "Õhupalliloomad + mängujuhid (ca 1h)",
    price: "90€",
    items: [
      "Kuni 20 lapsega üritustele",
      "30-40min mänge ja tegevusi",
      "Õhupalliloom igale lapsele",
    ],
    desc: "Sobib nt väiksemate laste sünnipäevadele, kes ei taha pikalt ühe tegevusega tegeleda.",
  },
  {
    title: "Õhupalliloomad + mängujuhid (ca 1,5h)",
    price: "120€",
    items: [
      "Kuni 20 lapsega üritustele",
      "40-50min mänge ja tegevusi",
      "Õhupalliloom igale lapsele",
    ],
    desc: "Sobilik seltskonnale, kes on valmis tegema ka pikemalt mängujuhtidega tegevusi kaasa.",
  },
  {
    title: "Õhupalliloomad + näomaalingud",
    price: "115€/h",
    items: [
      "Näomaalija jõuab tunni jooksul maalida keskmiselt 15 maalingut",
      "Õhupallimeister valmistada umbes 35 kuju",
    ],
    desc: "Oleneb, milliseid maalinguid lapsed soovivad. Väiksemaid pildikesi jõuab tunnis rohkem teha.",
  },
  {
    title: "Glitter-tattood + näomaalingud (ca 2h)",
    price: "105€",
    items: [
      "Ajakulu umbes 2h",
      "15 lapsele näomaaling",
      "15 lapsele glitter tätoveering",
    ],
    desc: "",
  },
  {
    title: "Mullipidu õues + mängujuhid (ca 1,5h)",
    price: "160€",
    items: [
      "Kuni 20 lapsega üritustele",
      "Vahvad mängud, tantsud ja võistlused (u 30min)",
      "MEGA MULLIPIDU koos mullimasinaga 1h",
    ],
    desc: "",
  },
  {
    title: "Mängujuhid + randmetattood (ca 1,5h)",
    price: "120€",
    items: [
      "Kuni 20 lapsega üritustele",
      "Umbes 40min mänge (kostümeeritud) mängujuhtidega",
      "2 randmetattood igale lapsele",
    ],
    desc: "",
  },
  {
    title: "Mängujuhid + üks valitud madu (ca 1h)",
    price: "105€/135€",
    items: [
      "Kuni 20 lapsega üritustele",
      "Vahvad mängud, tantsud ja võistlused (u 30min)",
      "Mao tutvustamine, temaga tegelemine/kätte võtmine (u 30min)",
    ],
    desc: "",
  },
  {
    title: "Õhupalliloomad + laps mullis (ca 1h)",
    price: "100€",
    items: [
      "Kuni 20 lapsega üritustele",
      "Iga laps saab valida ühe õhupallilooma (u 30min)",
      "Lapsed saavad minna MULLI SISSE ning seal vahvaid pilte teha (u 30min)",
    ],
    desc: "",
  },
  {
    title: "Õhupallid + mängud + näomaalingud (ca 1,5h)",
    price: "200€",
    items: [
      "Kuni 20 lapsega üritustele",
      "40-50min mänge ja tegevusi",
      "Iga laps saab valida ühe õhupallilooma (u 30min)",
      "Jooksvalt tehakse igale lapsele ka näomaaling",
    ],
    desc: "",
  },
  {
    title: "Pannkoogid + õhupalliloomad (1h) - 15 pannkooki",
    price: "180€",
    items: [
      "Kuni 20 lapsega üritustele",
      "15 kohapeal küpsetatud Magic Food minipannkooki igale lapsele",
      "Lapsed saavad tellida nii palju õhupalliloomi, kui jõuab",
    ],
    desc: "",
  },
  {
    title: "Pannkoogid + õhupalliloomad (1h) - 25 pannkooki",
    price: "205€",
    items: [
      "Kuni 20 lapsega üritustele",
      "25 kohapeal küpsetatud Magic Food minipannkooki igale lapsele",
      "Lapsed saavad tellida nii palju õhupalliloomi, kui jõuab",
    ],
    desc: "",
  },
  {
    title: "Suhkruvatt + õhupalliloomad (1h)",
    price: "125€",
    items: [
      "Lapsed saavad tellida nii palju suhkruvatti ja õhupalliloomi, kui jõuab",
      "Tunni jooksul jõuab õhupallimeister valmistada 40+ kuju",
      "Suhkruvatte jõuab Magic Food valmistada umbes 50",
    ],
    desc: "",
  },
];

export default function PakkumisedPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Pakkumised lasteüritustele
          </h1>
          <p className="text-[#e5e5e5] text-center mb-12">
            Üritustele, mis toimuvad Tartust väljas, lisandub transporditasu :)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {packages.map((p, i) => (
              <div
                key={i}
                className="bg-[#232323] p-6 rounded-lg border border-gray-700 hover:border-[#f5d038]/50 transition-colors"
              >
                <h3 className="text-[#fafafa] font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-[#f5d038] font-bold text-xl mb-4">
                  {p.price}
                </p>
                <ul className="space-y-2 mb-4">
                  {p.items.map((item, j) => (
                    <li key={j} className="text-[#e5e5e5] text-sm flex gap-2">
                      <span className="text-[#f5d038]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {p.desc && (
                  <p className="text-[#a0a0a0] text-sm">{p.desc}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-[#e5e5e5] text-center mb-12">
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
