import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/students", label: "Students" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between rounded-[2rem] border border-white/10 bg-slate-950/40 px-5 py-4 shadow-soft shadow-slate-950/40 backdrop-blur-xl"
    >
      <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-orange-300">
        PPLG 1
      </Link>

      <nav className="hidden items-center gap-3 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-orange-500/15 text-orange-200 backdrop-blur-sm"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>


    </motion.header>
  );
}