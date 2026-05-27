import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Letakkan data dan varian animasi DI LUAR (di atas) fungsi Home()
const bentoCards = [
  {
    id: 1,
    title: "Semangat Generasi Z",
    description: "Menyeimbangkan etos kerja profesional di dunia digital dengan kedisiplinan dan semangat juang di dunia nyata.",
    image: "/img/upacara-pplg.jpeg",
  },
  {
    id: 2,
    title: "Intensive Blocking",
    description: "Masa pembelajaran intensif dan uji keahlian Rekayasa Perangkat Lunak. Melatih fokus, mental, dan kolaborasi untuk menjadi developer yang tangguh.",
    image: "/img/blocking-pplg.jpeg",
  },
  {
    id: 3,
    title: "Offline Networking",
    description: "Merayakan hangatnya kebersamaan di bulan penuh berkah. Waktu luang yang sangat berharga untuk berbagi cerita dan tawa di luar urusan project.",
    image: "/img/bukber-sekelas-pplg.jpeg",
  },
  {
    id: 4,
    title: "Out of Office",
    description: "Meninggalkan rutinitas coding dan layar monitor sejenak untuk mengeksplorasi dunia nyata. Study tour menjadi momen refreshing sekaligus mempererat kerja sama tim PPLG 1.",
    image: "/img/studytour-pplg.jpeg",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,1),transparent_50%)]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-orange-400 font-medium">
              Premium Class Experience
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              PPLG 1 — <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Pengembangan Perangkat Lunak</span> & Gim.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
              Gabungkan keahlian web, game, hingga produk UI/UX dengan konsep visual kelas studio desain.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                to="/students"
                className="group relative inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:-translate-y-1"
              >
                Meet Our Crew
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-orange-500/50 hover:bg-slate-800 hover:-translate-y-1"
              >
                Tentang Jurusan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM BENTO GRID SECTION (CLASS FOCUS) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
            
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 text-center"
          >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pilar Pembelajaran</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Empat pilar pembelajaran yang mengintegrasikan teknologi terkini.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {bentoCards.map((card) => (
              <motion.article
                key={card.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
              >
                {/* Background Image full bleed */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay with slight orange tint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                  <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 transform transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}