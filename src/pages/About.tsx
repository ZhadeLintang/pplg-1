import { motion } from "framer-motion";
import { Award, Code, Users } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-hero-mesh text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-orange-300">Tentang Jurusan</p>
              <h1 className="text-4xl font-extrabold leading-tight">Pengembangan Perangkat Lunak & Gim (PPLG)</h1>
              <p className="text-slate-300 max-w-prose text-justify leading-relaxed">
                PPLG adalah program keahlian yang menyiapkan siswa menjadi tenaga profesional di bidang teknologi informasi. Kami berfokus pada penguasaan logika algoritma, desain antarmuka (UI/UX), pengembangan aplikasi web dan <i>mobile</i>, hingga rekayasa interaksi dalam pembuatan gim digital.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-start gap-3 rounded-xl bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="rounded-lg bg-orange-500/10 p-3 text-orange-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Karya Nyata</h4>
                    <p className="mt-1 text-sm text-slate-400">Fokus pada portofolio dan produk digital yang siap bersaing di industri.</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 rounded-xl bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="rounded-lg bg-orange-500/10 p-3 text-orange-400">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Stack Industri</h4>
                    <p className="mt-1 text-sm text-slate-400">Menguasai React, Vite, PHP, Laravel, MySQL, dan Figma.</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 rounded-xl bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="rounded-lg bg-orange-500/10 p-3 text-orange-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Budaya Studio</h4>
                    <p className="mt-1 text-sm text-slate-400">Menerapkan kerja tim berbasis Agile layaknya <i>tech startup</i> profesional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-2">Visi & Misi</h3>
              <p className="text-slate-300 mb-6">
                Mencetak <i>developer</i> dan kreator muda yang inovatif, adaptif terhadap perkembangan teknologi, dan siap memberikan solusi digital terbaik.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <p className="text-slate-300">Membekali siswa dengan fondasi <i>coding</i>, struktur data, dan algoritma yang kuat.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <p className="text-slate-300">Menerapkan pembelajaran <i>Project-Based Learning</i> dari perancangan hingga rilis produk.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <p className="text-slate-300">Mendorong kreativitas dalam merancang UI/UX yang estetis dan interaksi gim yang imersif.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <p className="text-slate-300">Mempersiapkan mental dan <i>hard-skill</i> untuk sertifikasi kompetensi dan dunia kerja nyata.</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}