import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Täiskasvanutele // Lola Peostuudio",
  description:
    "Õhtujuhid juubelile, peokorraldus, fotograaf, baariteenus – muudame täiskasvanute peod huvitavamaks",
};

const animalPrograms = [
  { name: "Maisi-roninastik Riki", price: "60€" },
  { name: "Kuningpüüton Pirn", price: "90€" },
  { name: "Kuningboa Diego", price: "90€" },
  { name: "Papagoid Mac ja Millie", price: "175€" },
];

export default function TaiskasvanutelePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Muudame ka täiskasvanute peod huvitavamaks!
          </h1>
          <h2 className="text-xl text-[#e5e5e5] text-center mb-12">
            Otsid enda või mõne lähedase juubelile õhtujuhte? - Usalda noori
            tegijaid!
          </h2>

          <div className="space-y-8 mb-16">
            <div>
              <h2 className="font-dancing text-3xl text-[#fafafa] mb-4">
                Kutsu meid õhtujuhtideks!
              </h2>
              <p className="text-[#e5e5e5] mb-4">
                Tulemas on Sinu või mõne Su sõbra/pereliikme JUUBEL? Ehk hoopis
                mingi muu üritus? Vajad sinna põnevaid tegevusi..? - MUIDUGI
                VAJAD! Noored peokorraldajad tõmbavad PEO KÄIMA! Teeme Teile
                kõikvõimalikke erinevaid mänge, tegevusi ja lõbusaid
                võistluseid!
              </p>
              <p className="text-[#e5e5e5] mb-4">
                Ja kui Teil pole peokohas muusikat.. saame ka sellega aidata!
                Meil on võimas peokõlar, mis täidab muusikaga terve peomaja!
                Lisaks võime hakata ka &quot;fotograafideks&quot;, kui lubate
                meil pilte ka oma portfoolio täiendamiseks kasutada!
              </p>
              <p className="text-[#e5e5e5] mb-4">
                2023 aasta lõpus pakuti meile ootamatult võimalust viia läbi üks
                juubel.. alguses tundus natuke hirmus, kuid võtsime tellimuse
                vastu ning MEGA ÄGE OLI! Nüüdseks oleme juba saanud päris palju
                üritusi (juubelid, firmapeod, suvepäevad jne) läbi viia. Viime
                üritusi läbi turuhindadest odavamalt :)
              </p>
              <Link
                href="/#form"
                className="inline-block px-6 py-3 bg-[#f5d038] text-[#2c2402] font-semibold rounded hover:bg-[#cca60a] hover:text-white transition-colors"
              >
                KÜSI PAKKUMIST
              </Link>
            </div>

            <div className="bg-[#232323] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-[#fafafa] mb-4">
                Aitame ka peo jäädvustamisega!
              </h3>
              <p className="text-[#e5e5e5] mb-4">
                Kui soovid, et Sinu peost jääksid mälestuseks ka kaunid fotod,
                siis meie andekas fotograaf aitab sellega! Hind: 90€/h. Pärast
                üritust saadetakse Teile kõik väljatulnud pildid juba töödeldud
                kujul!
              </p>
            </div>

            <div className="bg-[#232323] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-[#fafafa] mb-4">
                Pakume ka baariteenust!
              </h3>
              <p className="text-[#e5e5e5] mb-4">
                Tahad oma pidu lihtsalt nautida ning ise mitte millegi pärast
                muretseda? Meie tiimis on neiu, kes on tõeline kokteili-valmistamise
                ekspert!
              </p>
              <p className="text-[#e5e5e5]">
                <strong className="text-[#fafafa]">1.</strong> Sul on endal juba
                koktelili-menüü ja joogid olemas, soovid vaid kedagi baarileti
                taga // Hind: 25€/h
              </p>
              <p className="text-[#e5e5e5] mt-2">
                <strong className="text-[#fafafa]">2.</strong> Soovid, et
                koostame ka ise menüü ning ostame joogid // Hind: 30€/h +
                jookidele kulunud summa
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#fafafa] mb-4">
                Tahaksid peole veidi vürtsi lisada?
              </h3>
              <p className="text-[#e5e5e5] mb-6">
                Meil on selleks mõned lahendused! - programmid madude või
                papagoidega! Programmid ühe maoga kestavad umbes 45min.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            </div>

            <p className="text-[#e5e5e5] text-center">
              Soovid peole ka dekoratsioone?{" "}
              <Link
                href="/ohupallid"
                className="text-[#f5d038] hover:text-[#cca60a] underline"
              >
                Leia sobilikud kaunistused siit! :)
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Räägi meile oma ideest ning teeme Teile pakkumise!
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
