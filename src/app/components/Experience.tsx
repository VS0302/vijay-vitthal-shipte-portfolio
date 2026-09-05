import { portfolioData } from "@/src/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Career
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Professional Experience
        </h2>

        <div className="mt-12 space-y-8">
          {portfolioData.experience.map((experience) => (
            <article
              key={`${experience.company}-${experience.position}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.position}
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    {experience.company}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  {experience.duration}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}