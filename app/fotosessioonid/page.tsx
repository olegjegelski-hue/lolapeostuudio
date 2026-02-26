import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Fotosessioonid // Lola Peostuudio X Karramel Stuudio",
  description:
    "Fotosessioon maoga või õhupallikoertega – ainulaadne kogemus Karramel Stuudios",
};

export default function FotosessioonidPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-4xl md:text-5xl font-bold text-[#fafafa] mb-4 text-center">
            Lola Peostuudio X Karramel Stuudio
          </h1>

          <div className="space-y-12 mb-16">
            <div className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/screenshot-2025-05-22-at-18.42.25.png"
                  alt="Fotosessioon maoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-dancing text-3xl text-[#fafafa] mb-4">
                  Fotosessioon maoga
                </h2>
                <p className="text-[#e5e5e5] mb-4">
                  Astu välja tavapärasest ja koge midagi tõeliselt erilist! Vali
                  oma lemmik madu – olgu see kuningpüüton, boa või
                  maisi-roninastik – ja lase end jäädvustada ainulaadses
                  fotosessioonis, mis toob esile sinu ilu, jõu ja julguse.
                  Sessioon sobib nii isiklikuks eneseväljenduseks, paaripiltideks
                  kui ka kinkimiseks sõbrale.
                </p>
                <p className="text-[#e5e5e5] mb-4">
                  Pildistamised toimuvad Karramel Stuudios, kus Sind ootavad
                  kogenud fotograafid ja professionaalne stuudiokeskkond.
                </p>
                <p className="text-[#f5d038] font-bold mb-2">
                  30min - 80€ (lisandub fotograafi tasu)
                </p>
                <p className="text-[#f5d038] font-bold mb-4">
                  1h - 125€ (lisandub fotograafi tasu)
                </p>
                <p className="text-[#a0a0a0] text-sm">
                  Fotograaf Helis Künnap. Jumestus: Merike Veide. / Fotograaf ja
                  jumestaja Kairi Raud
                </p>
              </div>
            </div>

            <div className="bg-[#232323] rounded-lg overflow-hidden border border-gray-700">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/screenshot-2025-06-25-at-16.09.55-1-800x1039.png"
                  alt="Sessioon õhupallikoertega"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-dancing text-3xl text-[#fafafa] mb-4">
                  Sessioon õhupallikoertega
                </h2>
                <p className="text-[#e5e5e5] mb-4">
                  Soovid midagi mängulist, omanäolist ja pilkupüüdvat? Õhupallikoertega
                  fotosessioon on suurepärane viis tähistada erilist sündmust,
                  jäädvustada vahvaid hetki või lihtsalt teha midagi teistmoodi.
                </p>
                <p className="text-[#e5e5e5] mb-4">
                  Fotosessioonid toimuvad Karramel Stuudios koostöös
                  professionaalsete fotograafidega. Võimalik on valida erinevas
                  suuruses ja värvitoonis õhupallikoeri. Sessioon sobib nii
                  lastele kui täiskasvanutele – individuaalpildid, sõbrapildid
                  kui ka perefotosessioonid. Soovi korral saab koera pärast
                  sessiooni endaga koju kaasa võtta.
                </p>
                <p className="text-[#a0a0a0] text-sm">
                  Fotograaf Helis Künnap. Jumestus: Merike Veide. / Fotograaf
                  Tatjana Babtsenko
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6 text-center">
            Broneeri aeg fotosessiooniks!
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
