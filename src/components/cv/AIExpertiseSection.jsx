import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Zap } from "lucide-react";

const blocks = [
  {
    icon: Search,
    title: "Stratégie IA",
    color: "from-blue-500 to-blue-600",
    items: [
      "Audit process & identification ROI",
      "Roadmap intégration IA",
      "Modélisation gains de productivité",
      "Accompagnement au changement numérique",
    ],
  },
  {
    icon: Sparkles,
    title: "IA Générative",
    color: "from-violet-500 to-violet-600",
    items: [
      "Prompt engineering avancé",
      "Intégration API IA (OpenAI, etc.)",
      "Chatbots métiers & agents conversationnels",
      "Orchestration IA avec n8n",
    ],
  },
  {
    icon: Zap,
    title: "Automatisation",
    color: "from-blue-400 to-violet-500",
    items: [
      "CRM automatisé & lead management",
      "Workflows multi-étapes",
      "Synchronisation outils SaaS",
      "Pipelines IA & connexion API tierces",
    ],
  },
];

export default function AIExpertiseSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4 block">Intelligence Artificielle</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Expertise <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">IA & Automatisation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <block.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-5">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}