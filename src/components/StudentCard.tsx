import type { Student } from "../types";

interface Props {
  student: Student;
}

export function StudentCard({ student }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square bg-slate-100">
        <img src={student.photo} alt={student.name} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{student.name}</h3>
        <p className="text-sm text-slate-500">PPLG 1 student</p>
      </div>
    </div>
  );
}
