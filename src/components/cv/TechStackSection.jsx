import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Backend",
    techs: ["PHP", "Symfony", "Laravel", "API REST"],
  },
  {
    label: "Frontend",
    techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind"],
  },
  {
    label: "Base de données",
    techs: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["Azure", "Docker", "Git / Gitlab", "CI/CD", "Linux", "Apache", "Vercel"],
  },
  {
    label: "Outils",
    techs: ["Postman", "VSCode", "PhpStorm", "Base44", "n8n"],
  },
  {
    label: "Méthodologie",
    techs: ["Scrum", "Méthode V", "UML / MERISE", "KPI / Risques"],
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
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, tIdx) => (
                  <motion.span
                    key={tIdx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + tIdx * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}