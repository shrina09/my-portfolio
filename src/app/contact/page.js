// src/app/contact/page.js

"use client";

import { useEffect, useState } from "react";
import TerminalWindow from "@/components/TerminalWindow";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [entered, setEntered] = useState(false);
  const [fieldsIn, setFieldsIn] = useState(false);
  const [activeField, setActiveField] = useState(null);

  // terminal load
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 30);
    return () => clearTimeout(t);
  }, []);

  // stagger fields AFTER terminal
  useEffect(() => {
    if (!entered) return;
    const t = setTimeout(() => setFieldsIn(true), 250);
    return () => clearTimeout(t);
  }, [entered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") || "").toString(),
      email: (formData.get("email") || "").toString(),
      message: (formData.get("message") || "").toString(),
      website: (formData.get("website") || "").toString(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      form.reset();
      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "mt-2 w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition-all duration-300";
  const inputFocus =
    "focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(0,255,255,0.4)]";
  const inputAnim =
    "placeholder:transition placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:text-white/40";

  return (
    <div className="mx-auto max-w-6xl px-14 pt-28 pb-16 sm:px-16 lg:px-20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Contact Me
      </h1>

      <p className="mt-3 text-white/60">
      Whether you are looking to hire a passionate software engineer or collaborate on something exciting, let's connect!
      </p>

      {/* TERMINAL */}
      <div
        className={[
          "mt-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          entered
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-8 scale-[0.96] blur-[6px]",
        ].join(" ")}
      >
        <TerminalWindow
          className="relative"
          topBarClassName="px-4"
          contentClassName="px-6 py-8"
          redDotClassName="bg-red-500/70"
          yellowDotClassName="bg-yellow-500/70"
          greenDotClassName="bg-green-500/70"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* NAME */}
            <div
              style={{ transitionDelay: fieldsIn ? "0ms" : "0ms" }}
              className={[
                "rounded-xl transition-all duration-700",
                fieldsIn
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-6 blur-[6px]",
                activeField === "name"
                  ? "ring-1 ring-cyan-300/30 bg-white/[0.02] shadow-[0_0_26px_rgba(34,211,238,0.12)]"
                  : "",
              ].join(" ")}
            >
              <div className="px-1.5 py-1.5">
                <label className="font-mono text-sm text-cyan-300">$ name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  className={[inputBase, inputFocus, inputAnim].join(" ")}
                  placeholder="Enter your name..."
                />
              </div>
            </div>

            {/* EMAIL */}
            <div
              style={{ transitionDelay: fieldsIn ? "120ms" : "0ms" }}
              className={[
                "rounded-xl transition-all duration-700",
                fieldsIn
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-6 blur-[6px]",
                activeField === "email"
                  ? "ring-1 ring-cyan-300/30 bg-white/[0.02] shadow-[0_0_26px_rgba(34,211,238,0.12)]"
                  : "",
              ].join(" ")}
            >
              <div className="px-1.5 py-1.5">
                <label className="font-mono text-sm text-cyan-300">$ email</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  className={[inputBase, inputFocus, inputAnim].join(" ")}
                  placeholder="Enter your email..."
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div
              style={{ transitionDelay: fieldsIn ? "240ms" : "0ms" }}
              className={[
                "rounded-xl transition-all duration-700",
                fieldsIn
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-6 blur-[6px]",
                activeField === "message"
                  ? "ring-1 ring-cyan-300/30 bg-white/[0.02] shadow-[0_0_26px_rgba(34,211,238,0.12)]"
                  : "",
              ].join(" ")}
            >
              <div className="px-1.5 py-1.5">
                <label className="font-mono text-sm text-cyan-300">$ message</label>
                <textarea
                  name="message"
                  autoComplete="off"
                  required
                  rows={5}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  className={[inputBase, inputFocus, inputAnim].join(" ")}
                  placeholder="Type your message..."
                />
              </div>
            </div>

            {/* BUTTON */}
            <div
              style={{ transitionDelay: fieldsIn ? "360ms" : "0ms" }}
              className={[
                "flex items-center gap-4 pt-2 transition-all duration-700",
                fieldsIn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_18px_rgba(0,255,255,0.45)] active:scale-95"
              >
                {isSubmitting ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
              </button>

              {sent && (
                <span className="text-sm text-green-400">
                  Submission successful!
                </span>
              )}
              {error && <span className="text-sm text-red-400">{error}</span>}
            </div>
          </form>
        </TerminalWindow>
      </div>
    </div>
  );
}
