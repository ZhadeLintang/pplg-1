import { motion } from "framer-motion";
import { gallery } from "../data/data";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-hero-mesh text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Class Gallery</p>
          <h1 className="mt-3 text-4xl font-extrabold">Documentation of our class journey</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Koleksi dokumentasi kegiatan kelas, workshop, dan showcase yang menunjukkan proses kreatif PPLG 1.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.28 }}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 shadow-soft backdrop-blur-md"
            >
              <div className="aspect-[4/3] bg-slate-800">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
