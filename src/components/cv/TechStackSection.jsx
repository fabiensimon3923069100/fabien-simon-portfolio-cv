import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Backend",
    techs: [
      { name: "PHP", level: 95 },
      { name: "Symfony", level: 90 },
      { name: "Laravel", level: 75 },
      { name: "API REST", level: 85 },
    ],
  },
  {
    label: "Frontend",
    techs: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    label: "Base de données",
    techs: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    label: "Cloud & DevOps",
    techs: [
      { name: "Azure", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Git / Gitlab", level: 90 },
      { name: "CI/CD", level: 70 },
    ],
  },
  {
    label: "Méthodologie",
    techs: [
      { name: "Scrum", level: 90 },
      { name: "Méthode V", level: 85 },
      { name: "UML / MERISE", level: 80 },
      { name: "KPI / Risques", level: 85 },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Technologies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Stack <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">technique</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-5">{cat.label}</h3>
              <div className="space-y-4">
                {cat.techs.map((tech, tIdx) => (
                  <div key={tIdx}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{tech.name}</span>
                      <span className="text-xs text-slate-400">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + tIdx * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}