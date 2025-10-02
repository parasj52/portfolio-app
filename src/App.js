import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioApp() {
  const [page, setPage] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-black relative overflow-hidden">
      <AnimatedSpaceBackground />

      <header className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-xl font-bold shadow-xl">PJ</div>
          <div>
            <div className="text-sm opacity-80">Paras Jain</div>
            <div className="text-xs opacity-60">Software Engineer • Backend Engineer</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`text-sm px-3 py-2 rounded-lg transition-all ${page === n.id ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"}`}>
              {n.label}
            </button>
          ))}
          <a href="/portfolio-app/Paras_Jain_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-3 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg"
          >Resume</a>
        </nav>

        <div className="md:hidden">
          <select value={page} onChange={(e) => setPage(e.target.value)} className="bg-white/6 px-3 py-2 rounded-lg">
            {nav.map(n => <option key={n.id} value={n.id}>{n.label}</option> )}
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-10 z-20 relative">
        <motion.div key={page} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          {page === "home" && <Home onCTAClick={() => setPage("projects")} />}
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
          {page === "contact" && <Contact />}
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-white/60 z-20 relative">
        Built with ❤️ — Paras Jain Portfolio • Designed for GitHub Pages / Vercel
      </footer>
    </div>
  );
}

function Home({ onCTAClick }) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Paras Jain — Backend Engineer</h1>
        <p className="mt-4 text-lg text-white/80">Proficient backend engineer with 2+ years of experience designing scalable applications using Java, Python, Spring Boot, Microservices, AWS, and PostgreSQL. Skilled in problem-solving and system design with a knack for building efficient, reliable systems.</p>

        <div className="mt-6 flex gap-4">
          <button onClick={onCTAClick} className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg font-semibold">View Projects</button>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-white/10">Get in touch</a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MiniStat title="Experience" value="2+ yrs" />
          <MiniStat title="Projects" value="10+" />
          <MiniStat title="Awards" value="2" />
          <MiniStat title="Education" value="IIT (BHU)" />
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/6 shadow-2xl">
        <h3 className="text-lg font-semibold">Recent Role</h3>
        <p className="mt-3 text-white/80">Software Engineer at Netradyne (Bangalore). Worked on optimizing large-scale reporting platforms, building scalable Java APIs, and designing serverless workflows with AWS Lambda & SQS.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="prose prose-invert max-w-none">
      <h2 className="text-3xl font-bold">About me</h2>
      <p className="text-lg text-white/80">I am a software engineer passionate about backend systems, distributed architectures, and scalable solutions. I graduated from IIT (BHU), Varanasi with a Bachelor’s in Mechanical Engineering (CGPA 8.87/10). Currently, I work at Netradyne building high-performance backend services.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 bg-white/5 border border-white/6">
          <h4 className="font-semibold">Technical skills</h4>
          <ul className="mt-3 text-white/80 list-disc list-inside">
            <li>Java, Python, C++, SQL</li>
            <li>Spring Boot, Apache Airflow, Node.js</li>
            <li>AWS (S3, Lambda, SQS), PostgreSQL</li>
            <li>System Design, Data Structures & Algorithms</li>
          </ul>
        </div>

        <div className="rounded-xl p-6 bg-white/5 border border-white/6">
          <h4 className="font-semibold">Achievements</h4>
          <p className="mt-3 text-white/80">• Netrastar’s Silent Hero Award & Dream Team Award for performance and collaboration.<br/>• Student Manager at IIT (BHU) Mess, organized campus fest featured in Times of India.</p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    { t: "Reporting Platform Optimization", d: "Reduced report generation time from 1h to 5m with query tuning, indexing, and Airflow refactor.", tags: ["Python", "PostgreSQL", "Airflow", "AWS"] },
    { t: "License Assignment Service", d: "Built scalable Java APIs and serverless workflows with AWS Lambda & SQS for license automation.", tags: ["Java", "Spring Boot", "AWS Lambda"] },
    { t: "Role-Based Auth System", d: "Developed Node.js + MongoDB backend with JWT authentication and modular RBAC.", tags: ["Node.js", "JWT", "MongoDB"] },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <article key={i} className="rounded-2xl p-5 bg-white/4 border border-white/6 hover:scale-[1.01] transform transition">
            <h3 className="font-semibold">{it.t}</h3>
            <p className="mt-2 text-white/80">{it.d}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {it.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/6">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-xl">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-white/80">Want to work together? Send a message.</p>

      <form className="mt-6 grid gap-3">
        <input className="px-4 py-3 rounded-lg bg-white/6 placeholder-white/50" placeholder="Your name" />
        <input className="px-4 py-3 rounded-lg bg-white/6 placeholder-white/50" placeholder="Email" />
        <textarea className="px-4 py-3 rounded-lg bg-white/6 placeholder-white/50" rows={5} placeholder="Tell me about your project"></textarea>
        <div className="flex gap-3">
          <button type="button" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">Send</button>
          <button type="button" className="px-5 py-3 rounded-xl border border-white/10">Clear</button>
        </div>
      </form>

      <div className="mt-6 text-sm text-white/70">Email: <a href="mailto:jainparas7942@gmail.com" className="underline">jainparas7942@gmail.com</a><br/>Phone: <a href="tel:+917665408250" className="underline">+91 7665408250</a><br/>LinkedIn: <a href="https://linkedin.com/in/paras-jain-a8b0a0217" target="_blank" className="underline">paras-jain-a8b0a0217</a></div>
    </section>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="rounded-xl p-3 bg-white/4 border border-white/6">
      <div className="text-sm opacity-80">{title}</div>
      <div className="font-semibold text-xl">{value}</div>
    </div>
  );
}

function AnimatedSpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.18),_transparent_20%),radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.12),_transparent_20%)] animate-fadeBg" />
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => {
          const cx = Math.random() * 100;
          const cy = Math.random() * 100;
          const r = Math.random() * 1.6 + 0.2;
          const opacity = Math.random() * 0.8 + 0.1;
          const dur = 6 + Math.random() * 12;
          return (
            <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r} fill="url(#g1)" opacity={opacity}>
              <animate attributeName="opacity" values={`${opacity};0.1;${opacity}`} dur={`${dur}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[200%] h-[200%] transform -translate-x-20 -translate-y-20 animate-slow-pan" />
      </div>
      <style>{`
        @keyframes slow-pan { 0% { transform: translate(0,0) } 50% { transform: translate(-6%, -4%) } 100% { transform: translate(0,0) } }
        @keyframes fadeBg { 0% { opacity: .95 } 50% { opacity: .98 } 100% { opacity: .95 } }
      `}</style>
    </div>
  );
}
