import {
  Cloud,
  Monitor,
  Network,
  Server,
} from "lucide-react";

import { portfolioData } from "@/src/data/portfolioData";

const icons = {
  Cloud,
  Monitor,
  Network,
  Server,
};

export default function Services() {
  return (
    <section className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          What I Do
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Professional Services
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.services.map((service) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 p-6 transition hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <Icon className="text-cyan-400" size={32} />

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}