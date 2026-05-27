import { motion } from "framer-motion";
import { projects } from "../data/data";
import ProjectCardPremium from "../components/ProjectCardPremium";

export default function Projects() {
  return (
    <main className="min-h-screen bg-hero-mesh text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Project Showcase</p>
          <h1 className="mt-3 text-4xl font-extrabold">Highlighted Web Projects</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Kumpulan karya terbaik PPLG 1 yang dibuat dengan semangat inovasi, kualitas, dan pengalaman pengguna modern.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 xl:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCardPremium key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
