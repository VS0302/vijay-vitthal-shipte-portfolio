import { Award } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export default function Certifications() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Credentials
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Certifications & Achievements
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolioData.certifications.map((certificate) => (
            <div
              key={certificate.name}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Award className="mt-1 text-cyan-400" />

              <div>
                <h3 className="font-semibold text-white">
                  {certificate.name}
                </h3>

                <p className="mt-1 text-gray-400">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {certificate.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}