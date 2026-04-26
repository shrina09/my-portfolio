// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b0f14]">
      <div className="mx-auto max-w-6xl px-14 py-5 sm:px-16 lg:px-20">
        <div className="flex items-center justify-between">

          {/* copyright left */}
          <p className="text-xs text-white/40">
            © {year} Shrina Patel
          </p>

          {/* icons right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shrina09"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.55)]"
            >
              <FaGithub size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/shrina359"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.55)]"
            >
              <FaLinkedin size={15} />
            </a>

            <a
              href="mailto:shrina359@gmail.com"
              aria-label="Email"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.55)]"
            >
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
