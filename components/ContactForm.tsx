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
    <div className="bg-[#232323] rounded-lg shadow-md p-8 border border-gray-700">
      <h3 className="text-2xl font-bold text-[#fafafa] mb-2">
        Räägi meile oma ideest ning leiame lahenduse!
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Nimi"
              className="w-full px-4 py-3 border border-gray-600 rounded bg-[#1a1a1a] text-[#fafafa] placeholder-gray-500 focus:ring-2 focus:ring-[#f5d038] focus:border-[#f5d038]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-600 rounded bg-[#1a1a1a] text-[#fafafa] placeholder-gray-500 focus:ring-2 focus:ring-[#f5d038] focus:border-[#f5d038]"
            />
          </div>
        </div>
        <div>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Sõnum"
            className="w-full px-4 py-3 border border-gray-600 rounded bg-[#1a1a1a] text-[#fafafa] placeholder-gray-500 focus:ring-2 focus:ring-[#f5d038] focus:border-[#f5d038]"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-[#f5d038] text-[#2c2402] font-semibold rounded hover:bg-[#cca60a] hover:text-white transition-colors disabled:opacity-50 shadow-md"
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
