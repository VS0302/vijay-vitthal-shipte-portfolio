import { portfolioData } from "@/src/data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Expertise
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Technical Skills
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}