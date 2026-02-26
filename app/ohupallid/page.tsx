import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Õhupallid // Lola Peostuudio",
  description:
    "Õhupallidekoratsioonid – heeliumpallid, sambad, fototaustad, pulmad, aerokimbud",
};

const categories = [
  {
    title: "Heeliumpallid",
    desc: "See 1922 aastast kasutusel olnud gaas pole tänaseni kaotanud populaarsust. Täita saab nii lateks- kui fooliumpalle. Meie heeliumpallide hinnad sisaldavad geeliga töötlemist.",
    image: "/images/heeliumpallid-1.jpeg",
  },
  {
    title: "Sambad / Vanikud",
    desc: "Sambad ja vanikud, mis kaunistavad ukseava, trepi käsipuud – ütlevad külalistele teretulnud! Sammaste ja vanikute valik on tohutu.",
    image: "/images/436341652-18020718731145287-2859080540695611851-n.jpeg",
  },
  {
    title: "Temaatilised kaunistused",
    desc: "Igal lapsel on oma lemmik multikas. Üllata oma last vahva temaatilise peoga! Läheneme loominguliselt ning viime täide isegi need ideed, mida arvad et pole võimalik teha!",
    image: "/images/ohupalliloomad.jpeg",
  },
  {
    title: "Fototaustad",
    desc: "Õiget värvi õhupallid suudavad teha iga peoruumi elegantseks. Fotoseina olemasolu julgustab kõiki tegema vahvaid pilte!",
    image: "/images/490216001-1207530831378108-8290556476081751762-n.jpg",
  },
  {
    title: "Numbrikombod",
    desc: "Sooviksid kingituseks midagi erilisemat? Teeme Sulle vahva kombo, kus kombineerime nii heeliumi kui ka tavalise õhuga täidetud õhupalle!",
    image: "/images/img-9660-536x788.jpeg",
  },
  {
    title: "Lauakaunistused",
    desc: "Ka lauad ja kapipealsed vajavad kaunistamist! Teeme väiksemad kombod, mis sobivad neid suurepäraselt katma!",
    image: "/images/20251009-183355.jpeg",
  },
  {
    title: "Asutuste kaunistamine",
    desc: "Lasteaiad, koolid – sissepääsu või fuajee kaunistamine, lae rippkompositsioonid, sambad vastavalt asutuse värvieelistusele.",
    image: "/images/koolide-dekoreerimine.jpg",
  },
  {
    title: "Beebipidu",
    desc: "Oled planeerimas oma lapse soo avaldamise pidu? Ehk hoopis katsikuid või lapse esimest sünnipäeva? Leia oma beebipeoks vajalikud kaunistused!",
    image: "/images/beebipidu.jpeg",
  },
  {
    title: "Pulmad",
    desc: "Oled alati unistanud, et Sinu pulmas oleks lagi õhupallidega kaetud? Või sissepääsu pidulikumaks? Ehk fotosein?",
    image: "/images/pulm-1.jpeg",
  },
  {
    title: "Aerokimbud",
    desc: "Üllata oma kallimat unikaalse ning kauni kingitusega – õhupallidest lillekimbuga! Võimalused on lõputud ning värvivalik meeletu!",
    image: "/images/screenshot-2025-06-25-at-16.09.55-1-800x1039.png",
  },
  {
    title: "Hiigelkoerad",
    desc: "Telli endale sobivates värvides MEGA LAHE õhupallidest hiigelkoer! Kasuta fotosessiooniks või kaunistuseks!",
    image: "/images/ohupalliloomad.jpeg",
  },
  {
    title: "Hiigelpallid",
    desc: "Suured ja lahedad õhupallid, et luua efekti! Mine pildistama, lisa neile peale personaalne sõnum või kingi niisama kellelegi!",
    image: "/images/436341652-18020718731145287-2859080540695611851-n.jpeg",
  },
];

export default function OhupallidPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Õhupallidekoratsioonid
          </h1>
          <p className="text-[#e5e5e5] text-center mb-12 max-w-3xl mx-auto">
            Kui soovite oma sündmusele wow-efekti ja pidulikkust, siis aitame
            õhupallidisaini valikuga. Meie osav aerodisainer on pühendunud Teie
            ideede elluviimisele.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((c, i) => (
              <div
                key={i}
                className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700 hover:border-[#f5d038]/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#fafafa] font-bold text-lg mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[#e5e5e5] text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Anna oma soovist teada!
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
