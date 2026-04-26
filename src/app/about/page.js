// src/app/about/page.js

"use client";

import { useEffect, useRef, useState } from "react";
import TerminalWindow from "@/components/TerminalWindow";
import { SKILLS, WORK } from "@/data/aboutData";

function useInViewToggle({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const elementsRef = useRef([]);
  const setObservedRef = (index) => (el) => {
    elementsRef.current[index] = el;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            entry.target.classList.remove("is-out");
          } else {
            entry.target.classList.add("is-out");
            entry.target.classList.remove("is-in");
          }
        });
      },
      { threshold, rootMargin }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return setObservedRef;
}

function SkillPill({ Icon, name, style = {}, className = "" }) {
  return (
    <span
      className={[
        // CRISPER pills
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-gray-200",
        "transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      ].join(" ")}
      style={style}
    >
      <Icon size={16} style={{ fill: "url(#skillGradient)" }} />
      <span>{name}</span>
    </span>
  );
}

function SkillsTerminalCard({ entered }) {
  const [pillsIn, setPillsIn] = useState(false);

  useEffect(() => {
    if (!entered) return;
    const t = setTimeout(() => setPillsIn(true), 140);
    return () => clearTimeout(t);
  }, [entered]);

  return (
    <TerminalWindow
      contentClassName="p-6 font-mono relative"
      topBarClassName="py-4"
      redDotClassName="bg-red-500/80"
      yellowDotClassName="bg-yellow-500/80"
      greenDotClassName="bg-green-500/80"
    >
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
        </svg>

        <p className="font-mono text-sm text-cyan-300 mb-5">$ ls skills</p>

        <div className="space-y-6">
          {Object.entries(SKILLS).map(([section, arr]) => (
            <div key={section}>
              <p className="text-gray-400 mb-3">
                <span className="font-mono text-sm text-cyan-300">{section}</span>:
              </p>

              <div className="flex flex-wrap gap-2">
                {arr.map((s, i) => (
                  <SkillPill
                    key={s.name}
                    Icon={s.icon}
                    name={s.name}
                    style={{ transitionDelay: pillsIn ? `${i * 28}ms` : "0ms" }}
                    className={
                      pillsIn
                        ? "opacity-100 translate-y-0 scale-100 blur-0"
                        : "opacity-0 translate-y-3 scale-[0.98] blur-[4px]"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </TerminalWindow>
  );
}

export default function AboutPage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 30);
    return () => clearTimeout(t);
  }, []);

  const setTimelineRef = useInViewToggle({
    threshold: 0.22,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <div className="mx-auto max-w-6xl px-14 pt-28 pb-16 sm:px-16 lg:px-20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        About Me
      </h1>

      <p className="mt-3 text-white/60">Hi, I am Shrina Patel! I am a recent graduate in Software Engineering from the University of Guelph. I have experience across full-stack development, DevOps, web development, mobile applications, and AI-driven systems. I have built user-facing applications, improved development workflows, and automated processes. I also enjoy building projects that connect software engineering with data and machine learning. When approaching problems, I first focus on understanding the goal and breaking the work into actionable tasks. I aim to build solutions that are reliable, maintainable, and scalable. I am currently seeking new graduate software engineering opportunities where I can contribute, continue learning, and grow as a developer. Feel free to reach out if you would like to connect or learn more about my work!</p>

      {/* SKILLS */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Skills</h2>

        <div
          className={[
            "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            entered
              ? "opacity-100 translate-y-0 scale-100 blur-0"
              : "opacity-0 translate-y-8 scale-[0.96] blur-[6px]",
          ].join(" ")}
        >
          <SkillsTerminalCard entered={entered} />
        </div>
      </section>

      {/* WORK */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Work Experience
        </h2>

        <div className="relative">
          {/* center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/35 via-cyan-400/10 to-white/0" />

          <div className="space-y-14">
            {WORK.map((job, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={setTimelineRef(i)}
                  className="timeline-anim is-out relative grid grid-cols-[1fr_56px_1fr] items-start gap-x-10"
                >
                  {/* LEFT */}
                  <div className={isLeft ? "flex justify-end" : ""}>
                    {isLeft && (
                      <div className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-black/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] p-6">
                        <div className="flex justify-between gap-6">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <span className="text-sm text-white/50 whitespace-nowrap">
                            {job.date}
                          </span>
                        </div>

                        <p className="font-mono text-sm text-cyan-300 mt-1">{job.company}</p>
                        {job.location && (
                          <p className="font-mono text-xs text-white/50 mt-1">
                            {job.location}
                          </p>
                        )}
                        <ul className="text-white/70 mt-4 list-disc pl-5 space-y-2">
                          {(job.points || []).map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="relative flex justify-center pt-8 z-10">
                    <div className="relative h-10 w-10">
                      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 ring-1 ring-cyan-300/20" />
                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 ring-4 ring-[#0b0f14]" />
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className={!isLeft ? "flex justify-start" : ""}>
                    {!isLeft && (
                      <div className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-black/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] p-6">
                        <div className="flex justify-between gap-6">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <span className="text-sm text-white/50 whitespace-nowrap">
                            {job.date}
                          </span>
                        </div>

                        <p className="text-cyan-300 text-sm mt-1">{job.company}</p>
                        {job.location && (
                          <p className="font-mono text-xs text-white/50 mt-1">
                            {job.location}
                          </p>
                        )}
                        <ul className="text-white/70 mt-4 list-disc pl-5 space-y-2">
                          {(job.points || []).map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
