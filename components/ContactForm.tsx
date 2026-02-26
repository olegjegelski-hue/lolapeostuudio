"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        Räägi meile oma ideest ning leiame lahenduse!
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nimi
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Sinu nimi"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="sinu@email.ee"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="+372 5xxx xxxx"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Sõnum
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Räägi meile oma sündmusest..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? "Saadan..." : "SAADA ÄRA!"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium text-center">
          Aitäh kirja eest! Võtame Sinuga esimesel võimalusel ühendust! :)
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium text-center">
          Oops...! some problem!
        </p>
      )}
    </div>
  );
}
