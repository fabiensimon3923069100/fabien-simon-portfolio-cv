import React from "react";
import { motion } from "framer-motion";
import { Users, BarChart3, Shield, TrendingUp, RefreshCw } from "lucide-react";

const skills = [
  { icon: Users, title: "Leadership technique", description: "Encadrement d'équipes pluridisciplinaires, animation COPROJ, sprint review & rétrospective." },
  { icon: BarChart3, title: "KPI & ROI", description: "Définition d'indicateurs de performance, tableaux de bord, pilotage budgétaire et reporting direction." },
  { icon: Shield, title: "Gestion des risques", description: "Création portefeuille des risques, plans de mitigation, anticipation des imprévus." },
  { icon: RefreshCw, title: "Conduite du changement", description: "Accompagnement des équipes, vulgarisation technique, adoption de nouveaux processus." },
  { icon: TrendingUp, title: "Pilotage budgétaire", description: "Estimation des charges, planning Poker, suivi budgétaire, optimisation des ressources." },
];

export default function ManagementSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Management</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Compétences <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">managériales</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center mb-4">
                <skill.icon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}