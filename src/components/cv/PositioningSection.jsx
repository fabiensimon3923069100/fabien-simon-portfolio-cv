import React from "react";
import { motion } from "framer-motion";
import { Target, Brain, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Pilotage de projets digitaux complexes",
    description: "Cadrage stratégique, gestion de risques, KPI, gouvernance projet. Méthodes Agile & V.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Intégration IA & Automatisation métier",
    description: "Audit process, prompt engineering, orchestration n8n, chatbots métiers, ROI mesurable.",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Code2,
    title: "Développement Web & SaaS orienté ROI",
    description: "Architecture Symfony, API, déploiement cloud, solutions web performantes et scalables.",
    gradient: "from-blue-400 to-violet-500",
  },
];

export default function PositioningSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Positionnement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Un profil <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">hybride</span> & stratégique
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Combinant cadrage stratégique RNCP niveau 7, architecture technique,
            automatisation IA et vision business entrepreneuriale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}