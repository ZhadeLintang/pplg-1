import type { Project } from "../types";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCardPremium({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.28 }}
      className="overflow-hidden rounded-2xl border border-white/8 bg-white/3 shadow-soft backdrop-blur-md"
    >
      <div className="aspect-[16/9] bg-slate-800">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-orange-300">Project</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow"
        >
          View details
        </a>
      </div>
    </motion.article>
  );
}
