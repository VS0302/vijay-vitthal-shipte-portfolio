import { portfolioData } from "@/src/data/portfolioData";

export default function Education() {
  return (
    <section className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Education
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Academic Background
        </h2>

        <div className="mt-10 space-y-5">
          {portfolioData.education.map((education) => (
            <div
              key={education.degree}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {education.degree}
              </h3>

              <p className="mt-2 text-cyan-400">
                {education.institution}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {education.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}