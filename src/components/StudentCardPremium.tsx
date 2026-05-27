import type { Student } from "../types";
import { motion } from "framer-motion";

interface Props {
  student: Student;
}

export default function StudentCardPremium({ student }: Props) {
  return (
    <motion.article
      whileHover={{ translateY: -6, scale: 1.02 }}
      transition={{ duration: 0.28 }}
      className="overflow-hidden rounded-2xl border border-white/8 bg-white/3 shadow-soft backdrop-blur-md"
    >
      <div className="aspect-square bg-slate-800">
        <img src={student.photo} alt={student.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-white">{student.name}</h3>
        <p className="mt-1 text-sm text-slate-300">PPLG 1 student</p>
      </div>
    </motion.article>
  );
}
