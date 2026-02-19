import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const formations = [
  {
    icon: Award,
    title: "Titre RNCP Niveau 7 (Bac+5)",
    subtitle: "Chef de Projet en Système d'Information",
    school: "Institut G4 Lyon",
    period: "2017 – 2020",
    details: "Double compétence informatique et management. Pilotage stratégique, architecture technique, déploiement.",
    level: "Master",
  },
  {
    icon: GraduationCap,
    title: "DUT Informatique",
    subtitle: "Programme National",
    school: "Université Claude Bernard Lyon 1",
    period: "2015 – 2017",
    details: "Algorithmique, POO, bases de données, développement web, génie logiciel, systèmes & réseaux.",
    level: "Bac+2",
  },
];

export default function EducationSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Formation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Parcours <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">académique</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {formations.map((formation, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                    <formation.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit">{formation.level}</span>
                      <span className="text-sm text-slate-400">{formation.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{formation.title}</h3>
                    <p className="text-blue-500 font-medium mb-1">{formation.subtitle}</p>
                    <p className="text-slate-500 text-sm mb-3">{formation.school}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{formation.details}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}