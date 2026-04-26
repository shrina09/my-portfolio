// src/app/projects/page.js
"use client";

import { useEffect, useState } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-14 pt-28 pb-16 sm:px-16 lg:px-20">
      <div
        className={[
          "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          entered
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-8 scale-[0.96] blur-[6px]",
        ].join(" ")}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Projects
        </h1>
        <p className="mt-3 text-white/60">
          Over time, I have developed projects across AI, full-stack, mobile, and data-driven systems, with a focus on building reliable and scalable software. Each project reflects how I break down complex problems, structure solutions, and translate them into software systems.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <TerminalWindow
            key={project.slug}
            className={[
              "group flex h-full flex-col border-white/15",
              "transition-all duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)]",

              // hover: outline first, glow after
              "hover:duration-300",
              "hover:border-cyan-300/60 hover:bg-black/45 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",

              // entry state
              entered
                ? "opacity-100 translate-y-0 scale-100 blur-0"
                : "opacity-0 translate-y-8 scale-[0.96] blur-[6px]",
            ].join(" ")}
            contentClassName="flex-1 p-5"
            redDotClassName="bg-red-500/80"
            yellowDotClassName="bg-yellow-500/80"
            greenDotClassName="bg-green-500/80"
          >
            <div
              className={[
                "flex h-full flex-col",
                "transition-all duration-[760ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-100",
                entered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5",
              ].join(" ")}
            >
              <p className="font-mono text-sm text-cyan-300">$ cd {project.slug}</p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {project.name}
              </h3>

              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/35">
                <ProjectVisual Icon={project.Icon} />
              </div>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-y-2 text-sm font-medium leading-relaxed text-white/80">
                {project.stack.map((tech, index) => (
                  <span key={tech} className="inline-flex items-center whitespace-nowrap">
                    {tech}
                    {index !== project.stack.length - 1 && (
                      <span className="mx-2 text-cyan-400/70">•</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex",
                    "rounded-xl border border-white/25 bg-white/[0.06] px-4 py-2 text-sm text-white/90",

                    // outline first, then glow
                    "transition-transform duration-300",
                    "transition-colors duration-150 ease-out",
                    "transition-shadow duration-300 ease-out delay-150",

                    "hover:scale-105 hover:border-cyan-300/70 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.32)]",
                    "active:scale-95",
                  ].join(" ")}
                >
                  View Repository
                </a>
              </div>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ Icon }) {
  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-cyan-500/22 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/12 via-transparent to-cyan-500/12" />
      </div>

      {/* plate */}
      <div className="absolute aspect-square h-[78%] max-h-48 rotate-12 rounded-[28px] border border-white/10 bg-black/30 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300" />

      {/* icon */}
      <div className="relative flex aspect-square h-[78%] max-h-48 items-center justify-center rounded-[28px]">
        <Icon
          strokeWidth={1.25}
          className="h-[62%] w-[62%] text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,0.35)] transition duration-300 group-hover:scale-[1.05]"
        />
      </div>

      {/* frame */}
      <div className="pointer-events-none absolute aspect-square h-[78%] max-h-48 rounded-[28px] ring-1 ring-white/10" />

      {/* tiny glow */}
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 rounded-full bg-amber-300/20 blur-xl" />
    </div>
  );
}
