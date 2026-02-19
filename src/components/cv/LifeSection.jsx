import React from "react";
import { motion } from "framer-motion";
import { Mountain, Plane, Home, Beer } from "lucide-react";

const categories = [
  {
    icon: "🏃",
    title: "Sport & Outdoor",
    color: "from-orange-400 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    items: [
      { emoji: "🏃", label: "Course à pied" },
      { emoji: "🥾", label: "Randonnée" },
      { emoji: "🧗", label: "Escalade" },
      { emoji: "🏍️", label: "Motocross" },
    ],
  },
  {
    icon: "✈️",
    title: "Voyages",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: [
      { emoji: "🌍", label: "Exploration de nouveaux pays" },
      { emoji: "📸", label: "Immersion culturelle" },
      { emoji: "🗺️", label: "Voyages en solo & en groupe" },
      { emoji: "🎒", label: "Backpacking & aventure" },
    ],
  },
  {
    icon: "🍻",
    title: "Apéros Voyage",
    color: "from-yellow-400 to-amber-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    items: [
      { emoji: "🍻", label: "Organisation d'apéros thématiques" },
      { emoji: "🌐", label: "Rencontres de voyageurs" },
      { emoji: "💬", label: "Partage d'expériences & bons plans" },
      { emoji: "📍", label: "Événements réguliers à Lyon" },
    ],
  },
  {
    icon: "🏠",
    title: "Investissement immobilier",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: [
      { emoji: "🏠", label: "Achat & gestion de biens" },
      { emoji: "📊", label: "Analyse de rentabilité" },
      { emoji: "🔑", label: "Location courte & longue durée" },
      { emoji: "📈", label: "Constitution d'un patrimoine" },
    ],
  },
];

export default function LifeSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4 block">En dehors du boulot</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ce qui me{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">fait vibrer</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            La curiosité, le dépassement de soi et les rencontres — en dehors du clavier comme devant.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 text-2xl shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                    <span className="text-base">{item.emoji}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}