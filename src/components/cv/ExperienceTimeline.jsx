import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Nov. 2020 – Aujourd'hui",
    title: "Freelance – Chef de projet technico-fonctionnel / Développeur Web",
    missions: [
      {
        name: "Plateforme de gestion de bénévoles",
        subtitle: "Événements sportifs majeurs · Fév. 2023 – Sept. 2024",
        tasks: [
          "Pilotage processus internes (Drive, Slack, Gitlab)",
          "Animation d'ateliers de cadrage des évolutions",
          "Chiffrage et priorisation des fonctionnalités",
          "Déploiement préproduction et production",
          "Coordination équipe technique",
        ],
        stack: ["Symfony", "Doctrine", "API", "Docker", "Gitlab", "Bootstrap"],
      },
      {
        name: "ERP gestion de prospects",
        subtitle: "Secteur isolation · Janvier 2021",
        tasks: [
          "Cadrage besoin et MCD",
          "Développement Symfony",
          "Recette MOE et livraison",
        ],
        stack: ["Symfony", "PHP", "PostgreSQL", "API Platform"],
      },
      {
        name: "Création de sites web clients",
        subtitle: "2020 – Aujourd'hui · Missions multiples",
        tasks: [
          "Cadrage client & rédaction devis",
          "Déploiement Wordpress / WooCommerce",
          "Intégration paiements Stripe",
          "Modules réservation, formation client",
        ],
        stack: ["Wordpress", "WooCommerce", "Stripe", "OVH"],
      },
    ],
  },
  {
    period: "Sept. 2017 – Août 2020",
    title: "Alternance – Assistant Chef de Projet IT / Dev Web · SNCF",
    missions: [
      {
        name: "Référentiel produits TER",
        subtitle: "DSI DG TER · Qualité des données – Ouverture à la concurrence",
        tasks: [
          "Analyse & rédaction cahier des charges",
          "Planning Gantt / PERT, estimation charges",
          "Gestion des risques & KPI",
          "Animation COPROJ",
          "Développement Symfony & déploiement Azure",
        ],
        stack: ["Symfony", "PHP", "PostgreSQL", "Azure", "Doctrine"],
      },
    ],
  },
  {
    period: "Nov. 2016 – Mai 2017",
    title: "Stage Développeur Web – KhmerDev (Cambodge)",
    missions: [
      {
        name: "Lycée Français René Descartes",
        subtitle: "Phnom Penh, Cambodge",
        tasks: [
          "Refonte site Wordpress",
          "Développement back-office RH en PHP",
          "Documentation fonctionnelle & utilisateur",
        ],
        stack: ["Wordpress", "PHP", "HTML", "CSS"],
      },
    ],
  },
  {
    period: "2021 – Aujourd'hui",
    title: "Formateur IT – IT-AKADEMY",
    missions: [
      {
        name: "Missions ponctuelles de formation",
        subtitle: "Rédaction, animation, encadrement projets étudiants",
        tasks: [
          "PHP, HTML, CSS, SQL, Linux, POO",
          "Symfony, API, Git/Gitlab, MVC",
        ],
        stack: ["PHP", "Symfony", "SQL", "Git", "Linux"],
      },
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Parcours</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Expériences <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">professionnelles</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-slate-200" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-20 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 w-px h-px">
                <div className="absolute -left-[5px] -top-[5px] w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30" />
                <div className="absolute -left-[9px] -top-[9px] w-5 h-5 rounded-full border-2 border-blue-500/20" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-500">{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{exp.title}</h3>

              <div className="space-y-6">
                {exp.missions.map((mission, mIdx) => (
                  <div key={mIdx} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
                    <h4 className="font-semibold text-slate-800 mb-1">{mission.name}</h4>
                    <p className="text-sm text-slate-400 mb-4">{mission.subtitle}</p>
                    <ul className="space-y-2 mb-4">
                      {mission.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {mission.stack.map((tech, sIdx) => (
                        <Badge key={sIdx} variant="secondary" className="bg-slate-100 text-slate-600 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
                          {tech}
                        </Badge>
                      ))}
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