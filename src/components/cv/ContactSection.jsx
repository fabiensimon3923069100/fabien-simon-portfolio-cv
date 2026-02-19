import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact CV Web – ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:fabien.simon39@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Discutons de votre prochain <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">projet digital</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Disponible pour des missions freelance en France et en Suisse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">Email</p>
                <a href="mailto:fabien.simon39@gmail.com" className="text-slate-500 text-sm hover:text-blue-500 transition-colors">
                  fabien.simon39@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">Téléphone</p>
                <a href="tel:+33645189066" className="text-slate-500 text-sm hover:text-blue-500 transition-colors">
                  06 45 18 90 66
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">Localisation</p>
                <p className="text-slate-500 text-sm">Lyon / Genève</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 text-sm">Nom</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Votre nom"
                  className="border-slate-200 focus:border-blue-500 rounded-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre@email.com"
                  className="border-slate-200 focus:border-blue-500 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-700 text-sm">Entreprise</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Votre entreprise"
                className="border-slate-200 focus:border-blue-500 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 text-sm">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez votre projet..."
                rows={5}
                className="border-slate-200 focus:border-blue-500 rounded-lg resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white py-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {submitted ? (
                "Client email ouvert !"
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}