import { portfolioData } from "@/src/data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          About
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          {portfolioData.about.title}
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          {portfolioData.about.description}
        </p>
      </div>
    </section>
  );
}