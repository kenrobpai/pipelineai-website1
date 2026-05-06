"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "services", "about", "founder", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      className={`transition ${
        active === id ? "text-cyan-300" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden scroll-smooth">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center text-cyan-300 text-lg">
              ⚡
            </div>
            <span className="font-bold text-xl">PipelineAI</span>
          </a>

          <nav className="hidden md:flex gap-8 font-medium">
            {navLink("home", "Home")}
            {navLink("services", "Services")}
            {navLink("about", "About")}
            {navLink("contact", "Contact")}
          </nav>

          <a
            href="https://calendly.com/kendallrobinson-pipelineai/30min"
            target="_blank"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-400/30 hover:scale-105 transition"
          >
            Book Strategy Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
          <div>
            <div className="inline-block mb-6 rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm text-cyan-300">
              AI Lead Generation for IT Firms
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Predictable Pipeline Growth for Modern IT Firms
            </h1>

            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              PipelineAI helps IT companies generate qualified meetings,
              automate outbound outreach, and build scalable sales pipelines
              using intelligent AI systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/kendallrobinson-pipelineai/30min"
                target="_blank"
                className="px-7 py-4 rounded-full bg-cyan-400 text-slate-950 font-semibold shadow-xl shadow-cyan-400/30 hover:scale-105 transition"
              >
                Book Strategy Call
              </a>

              <a
                href="#services"
                className="px-7 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right dashboard card */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <div className="text-sm text-cyan-300 mb-3">Performance Snapshot</div>
            <div className="text-4xl font-bold">+327%</div>
            <div className="text-white/60 mt-2">Qualified pipeline growth</div>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <StatCard title="Meetings" value="82+" />
              <StatCard title="Open Rate" value="61%" />
              <StatCard title="Reply Rate" value="19%" />
              <StatCard title="Automation" value="24/7" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center">Services</h2>
        <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
          Built to help IT firms scale intelligently and consistently.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <FeatureCard
            title="AI Prospect Targeting"
            text="Identify the highest-fit decision makers with precision targeting."
          />
          <FeatureCard
            title="Automated Cold Outreach"
            text="Run personalized outbound campaigns at scale with AI systems."
          />
          <FeatureCard
            title="Pipeline Automation"
            text="Turn outreach into booked meetings and predictable revenue flow."
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">About PipelineAI</h2>
        <p className="mt-8 text-white/70 text-lg leading-relaxed">
          PipelineAI helps modern IT firms generate predictable qualified
          meetings through intelligent outbound systems, scalable automation,
          and precision targeting built for growth.
        </p>
      </section>

      {/* Founder */}
      <section id="founder" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[30px] overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/kendall-robinson.jpg"
              alt="Kendall Robinson"
              width={900}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-cyan-300 font-medium mb-4">Leadership</div>
            <h2 className="text-4xl font-bold">Kendall Robinson</h2>
            <p className="mt-2 text-xl text-white/70">
              CEO & Founder, PipelineAI
            </p>

            <p className="mt-8 text-white/70 leading-relaxed text-lg">
              Kendall Robinson founded PipelineAI to help IT firms build modern,
              scalable outbound systems that create predictable pipeline growth
              and consistent qualified meetings.
            </p>

            <div className="grid gap-4 mt-8">
              <Pill text="Data-Driven Targeting" />
              <Pill text="AI-Powered Outreach" />
              <Pill text="Predictable Revenue Pipeline" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
          <h2 className="text-4xl font-bold">Ready to Scale?</h2>
          <p className="mt-5 text-white/70 text-lg">
            Book a strategy call and discover how PipelineAI can accelerate your
            pipeline growth.
          </p>

          <a
            href="https://calendly.com/kendallrobinson-pipelineai/30min"
            target="_blank"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-cyan-400 text-slate-950 font-semibold shadow-xl shadow-cyan-400/30 hover:scale-105 transition"
          >
            Book Strategy Call
          </a>
        </div>
      </section>
    </main>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-white/60 mt-2 text-sm">{title}</div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-1 transition">
      <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-xl mb-5">
        ⚡
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-white/65 mt-4 leading-relaxed">{text}</p>
    </div>
  );
}

function Pill({ text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">
      {text}
    </div>
  );
}
