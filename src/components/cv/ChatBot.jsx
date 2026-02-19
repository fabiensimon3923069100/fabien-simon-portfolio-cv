import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { base44 } from "@/api/base44Client";

const SYSTEM_PROMPT = `Tu es l'assistant personnel de Fabien SIMON, un expert freelance en transformation digitale basé à Lyon / Genève.

Voici son profil complet :

**Identité**
- Nom : Fabien SIMON
- Localisation : Lyon / Genève · Full Remote
- Email : contact@fabien-simon-agence-digitale.fr
- Téléphone : 06 14 16 25 15
- LinkedIn : linkedin.com/in/fabien-simon-124215138

**Titre & Positionnement**
Chef de projet technico-fonctionnel / Product Owner / Consultant IA & Développement Web
Profil hybride alliant cadrage stratégique, architecture technique, automatisation IA et vision business entrepreneuriale.

**Compétences clés**
1. Pilotage de projets digitaux complexes : méthodes Agile & V, KPI, gestion des risques, gouvernance projet
2. Intégration IA & Automatisation : audit process, prompt engineering, orchestration n8n, chatbots métiers, ROI mesurable
3. Développement Web & SaaS : Symfony, API Platform, Docker, déploiement cloud, WordPress, WooCommerce

**Stack technique**
- Backend : PHP, Symfony, API Platform, PostgreSQL, MySQL, Doctrine
- Frontend : HTML, CSS, Bootstrap, JavaScript
- Cloud & DevOps : Docker, Azure, OVH, Git, GitLab
- IA & Automatisation : n8n, prompt engineering, intégration LLM
- No-code : Webflow, Xano, WordPress

**Expériences professionnelles**
- Freelance Chef de projet / Dev Web (Nov. 2020 – Aujourd'hui) : plateforme bénévoles (Symfony, Docker, GitLab), PADA1 startup (Webflow/Xano), ERP gestion prospects, sites WordPress/WooCommerce/Stripe
- Formateur IT – IT-AKADEMY (2021 – Aujourd'hui) : PHP, Symfony, SQL, Git, Linux
- Alternance SNCF (Sept. 2017 – Août 2020) : référentiel produits TER, développement Symfony, déploiement Azure
- Stage KhmerDev Cambodge (Nov. 2016 – Mai 2017) : refonte site WordPress, back-office RH PHP

**Formation**
- Master Chef de Projet Digital – Université Lyon 3 (2017-2020)
- Licence Pro Développement Web – IUT Lyon 1 (2016-2017)
- BTS SIO option SLAM (2014-2016)

**Disponibilité**
Disponible pour des missions freelance en France, en Suisse et en full remote.

Réponds en français, de manière concise et professionnelle. Si on te demande de contacter Fabien, donne l'email contact@fabien-simon-agence-digitale.fr.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour ! Je suis l'assistant de Fabien SIMON. Posez-moi vos questions sur son profil, ses compétences ou sa disponibilité 👋" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const history = [...messages, userMessage]
      .map(m => `${m.role === "user" ? "Utilisateur" : "Assistant"}: ${m.content}`)
      .join("\n");

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `${SYSTEM_PROMPT}\n\nHistorique de la conversation:\n${history}\n\nRéponds à la dernière question de l'utilisateur.`,
    });

    setMessages(prev => [...prev, { role: "assistant", content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Assistant Fabien SIMON</p>
                  <p className="text-blue-100 text-xs">Posez vos questions</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-br-sm"
                      : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white disabled:opacity-40 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full shadow-xl shadow-blue-500/30 flex items-center justify-center text-white hover:shadow-blue-500/50 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}