import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Portfolio
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}