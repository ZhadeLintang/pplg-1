import { motion } from "framer-motion";
import { studentsData } from "../data/students";

const getRoleColor = (role: string): string => {
  const roleColors: Record<string, string> = {
    "Frontend Developer": "from-blue-500 to-cyan-500",
    "Backend Developer": "from-purple-500 to-pink-500",
    "Full-stack Developer": "from-orange-500 to-red-500",
    "Game Developer": "from-green-500 to-emerald-500",
    "UI/UX Designer": "from-indigo-500 to-violet-500",
  };
  return roleColors[role] || "from-slate-500 to-slate-700";
};

export default function Students() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-hero-mesh text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-orange-300"></p>
          <h1 className="mt-3 text-5xl font-extrabold leading-tight">Member PPLG 1</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            39 siswa kreatif yang siap membangun produk digital dan gim bersama. Lihat profil singkat tiap anggota kelas berikut.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {studentsData.map((student) => (
            <motion.article
              key={student.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 24px rgba(249, 115, 22, 0.18)",
              }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/6 to-white/2 p-6 shadow-soft backdrop-blur-md transition hover:border-orange-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 opacity-0 transition duration-500 group-hover:opacity-5" />

              <div className="relative space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="h-20 w-20 rounded-full border-2 border-white/20 object-cover shadow-md"
                    />
                    <div className={`absolute -right-1 -top-1 h-5 w-5 rounded-full bg-gradient-to-br ${getRoleColor(student.role)} shadow-lg`} />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{student.name}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-widest bg-gradient-to-r ${getRoleColor(student.role)} bg-clip-text text-transparent`}>
                    {student.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
