import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  "Double compétence technique + stratégique",
  "Vision business entrepreneuriale",
  "Forte capacité d'analyse et reformulation du besoin",
  "Expérience corporate + startup + freelance",
  "Orientation résultat et ROI",
  "Expérience formation & vulgarisation technique",
];

export default function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4 block">Valeur ajoutée</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pourquoi travailler <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">avec moi ?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{adv}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}