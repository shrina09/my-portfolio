"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TerminalWindow from "@/components/TerminalWindow";

export default function HomePage() {
  return (
    <div className="home-grid relative min-h-screen overflow-hidden pt-16 sm:pt-20">
      {/* dim/bright pulsing overlay */}
      <div className="bg-pulse pointer-events-none absolute inset-0 bg-black" />

      {/* vignette */}
      <div className="home-vignette pointer-events-none absolute inset-0" />

      {/* drifting glow blobs */}
      <div className="bg-drift pointer-events-none absolute left-[-150px] top-[-140px] h-[420px] w-[420px] rounded-full bg-amber-400" />
      <div className="bg-drift pointer-events-none absolute right-[-160px] bottom-[-160px] h-[460px] w-[460px] rounded-full bg-cyan-500" />

      {/* center card */}
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl items-center justify-center px-14 py-14 sm:px-16 lg:px-20">
        <div className="w-full max-w-4xl">
          <div className="on-load-card">
            <TerminalWindow
              className="terminal-float bg-black/45 shadow-[0_25px_90px_rgba(0,0,0,0.65)] backdrop-blur"
              topBarClassName="on-load-topbar"
              contentClassName="on-load-content px-6 py-8 sm:px-10"
            >
                <p className="font-mono text-sm text-cyan-300">$ cat profile.txt</p>

                <h1 className="mt-2 font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Shrina Patel
                </h1>

                <p className="mt-3 text-lg text-white/60">Software Engineer</p>

                {/* one line */}
                <p className="mt-4 max-w-3xl font-mono text-sm text-white/50">
                I am a new graduate software engineer with experience in mobile, full-stack, and AI-driven application development. I also have hands-on DevOps experience and enjoy building user-focused software that is reliable, maintainable, and scalable.                </p>

                {/* ICON LINKS */}
                <div className="mt-6 flex items-center gap-4">

                  {/* GitHub */}
                  <a
                    href="https://github.com/shrina09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] active:scale-95"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/shrina359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] active:scale-95"
                  >
                    <FaLinkedin size={16} />
                    LinkedIn
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:shrina359@gmail.com"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-all duration-300 hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] active:scale-95"
                  >
                    <FaEnvelope size={16} />
                    Email
                  </a>

                  

                </div>
            </TerminalWindow>
          </div>

          <p className="mt-6 text-center text-sm text-white/40">
            Projects • About Me • Contact
          </p>
        </div>
      </div>
    </div>
  );
}
