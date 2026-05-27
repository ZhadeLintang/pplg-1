import type { Project } from "../types";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/9] bg-slate-100">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-orange-500">Project</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
        >
          View details
        </a>
      </div>
    </article>
  );
}
