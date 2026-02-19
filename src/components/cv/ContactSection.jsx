import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "fabien.simon39@gmail.com",
    href: "mailto:fabien.simon39@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 45 18 90 66",
    href: "tel:+33645189066",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Lyon / Genève · Full Remote",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "fabien-simon-124215138",
    href: "https://www.linkedin.com/in/fabien-simon-124215138/",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Discutons de votre prochain <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">projet digital</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Disponible pour des missions freelance en France, en Suisse et en full remote.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {contacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-blue-500 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-700 font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a href="mailto:fabien.simon39@gmail.com">
            <Button className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white px-10 py-6 text-base rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}