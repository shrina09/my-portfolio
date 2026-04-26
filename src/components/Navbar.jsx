// src/components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const homeClass =
    "text-white/80 transition-all duration-300 hover:scale-110 hover:text-cyan-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]";

  const navLinkClass =
    "relative text-white/70 transition-all duration-300 hover:text-white hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full";

  const activeNavLinkClass = "text-white after:w-full after:bg-cyan-300";

  const resumeCtaClass =
    "ml-2 inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.55)] active:scale-95";

  const mobileResumeClass =
    "inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300 transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.55)]";

  const burgerClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-300/40 hover:bg-white/10";

  const mobileLinkClass =
    "block rounded-xl px-4 py-3 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-[1.04] hover:text-white";

  const mobileResumeCtaClass =
    "mt-2 block rounded-xl px-4 py-3 text-sm border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 transition-all duration-300 hover:scale-[1.04] hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.55)]";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-14 py-6 sm:px-16 lg:px-20">
        <Link href="/" onClick={closeMenu} className={homeClass} aria-label="Home">
          <FaHome size={20} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${navLinkClass} ${pathname === l.href ? activeNavLinkClass : ""}`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="/shrina_patel_resume.pdf"
            target="_blank"
            className={resumeCtaClass}
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="/shrina_patel_resume.pdf"
            target="_blank"
            className={mobileResumeClass}
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={burgerClass}
          >
            <div className="relative h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-5 bg-white/80 transition",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-0.5 w-5 bg-white/80 transition",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-0.5 w-5 bg-white/80 transition",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-6xl px-14 pb-6 sm:px-16 lg:px-20">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  {l.label}
                </Link>
              ))}

              <a
                href="/shrina_patel_resume.pdf"
                target="_blank"
                onClick={closeMenu}
                className={mobileResumeCtaClass}
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
