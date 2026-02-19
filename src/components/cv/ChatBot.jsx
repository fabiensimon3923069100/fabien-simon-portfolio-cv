import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { base44 } from "@/api/base44Client";

const SYSTEM_PROMPT = `Tu es l'assistant personnel de Fabien SIMON. Tu réponds UNIQUEMENT à partir des informations contenues dans ses documents officiels ci-dessous. Si une information n'est pas présente dans ces documents, réponds honnêtement : "Je n'ai pas cette information dans les documents de Fabien." Ne devine jamais, n'invente jamais.

---

## IDENTITÉ & CONTACT
- Nom : Fabien SIMON
- Titre : Chef de projet technico-fonctionnel | Product Owner | Développeur Web – 8+ ans d'expérience – Freelance depuis 2020
- Localisation : Lyon / Genève · Full Remote
- Email : contact@fabien-simon-agence-digitale.fr
- Téléphone : 06 14 16 25 15
- LinkedIn : https://www.linkedin.com/in/fabien-simon-124215138/

---

## PROFIL
Chef de projet technico-fonctionnel avec double compétence technique et gestion de projet. Expérience significative en pilotage de projets web (Symfony, Wordpress), cadrage fonctionnel, animation d'ateliers, chiffrage, déploiement et formation. Habitué aux environnements Agile (Scrum) et aux contextes structurés (méthode V, gouvernance projet, KPI, gestion des risques).

---

## EXPÉRIENCES PROFESSIONNELLES

### Freelance – Chef de projet technico-fonctionnel / Développeur Web (Novembre 2020 – Aujourd'hui)

**Plateforme de gestion de bénévoles – événements sportifs majeurs (Fév. 2023 – Sept. 2024)**
- Mise en place de processus internes (Drive, Slack, Gitlab)
- Pilotage de la réalisation de documentation (technique, fonctionnelle, processus, bonnes pratiques)
- Animation d'ateliers de cadrage des évolutions
- Chiffrage et priorisation des nouvelles fonctionnalités
- Déploiement préproduction et production
- Coordination équipe technique, rédaction de mails de compte rendu
- Stack : Symfony, Doctrine, API, Docker, Gitlab, HTML/CSS/JS, Bootstrap, Twig

**ERP de gestion de prospects – secteur isolation (Janvier 2021, mission 1 mois)**
- Atelier d'expression du besoin, reformulation du besoin
- Réalisation MCD et découpage produit, proposition de WireFrame
- Estimation des charges, développement Symfony
- Recette MOE et livraison
- Stack : Symfony, PHP, PostgreSQL, Ubuntu, API Platform, Postman, Bootstrap, VSCode, PhpStorm

**Réalisation de sites web pour différents clients (2020 – Aujourd'hui)**
- Cadrage client, rédaction devis, initialisation serveur, achat DNS, SSL
- Déploiement Wordpress / WooCommerce, réalisation par itération
- Intégration paiements en ligne (Stripe), modules réservation (Booknetic)
- Formation client sur le backoffice, accompagnement GMB, Google Ads
- Clients : Torréfaction, coach développement personnel, coach sportif, brocante, pizzaiolo, centre de formation, agence recrutement
- Stack : Wordpress, WooCommerce, Stripe, OVH, PlanetHoster, Google My Business, Google Ads

**PADA1 – Plateforme de mise en relation freelances/étudiants (Avr. – Mai 2024)**
- Réunions clients & cadrage besoin, recette fonctionnelle
- Développement Webflow & Xano (No-code)

### Formateur IT – IT-AKADEMY (Mai 2021 – Aujourd'hui, missions ponctuelles)
- Rédaction syllabus & supports, préparation TP et évaluations
- Animation formations, correction TP en direct, encadrement projets étudiants
- Cours dispensés : PHP, HTML, CSS, Bootstrap, SQL, Administration Linux, Algorithme, Culture informatique, POO, Culture d'entreprise, Sécurité et hygiène informatique, Architecture MVC, Symfony, API, Git/Gitlab

### Alternance – Assistant Chef de Projet IT / Développeur Web – SNCF DSI DG TER (Sept. 2017 – Août 2020)
- Contexte : référentiel produits TER pour l'ouverture à la concurrence (qualité des données)
- Analyse & reformulation du besoin, rédaction cahier des charges
- Réalisation planning Gantt / PERT, Planning Poker & estimation charges
- Gestion des risques & KPI, création portefeuille des risques
- Animation COPROJ, préparation et animation de COPROJ
- Développement Symfony, déploiement Azure (DEV / RECETTE / PROD)
- Réalisation MCD, dictionnaire de données, documentation technique détaillée
- Stack : Symfony, PHP, PostgreSQL, Azure, Bootstrap, Doctrine, Apache, VSCode, PhpStorm

### Stage Développeur Web – KhmerDev (Cambodge) (Nov. 2016 – Mai 2017)
- Contexte : SSII Franco-Khmer, mission au Lycée Français René Descartes de Phnom Penh
- Refonte site Wordpress du Lycée
- Développement back-office RH from scratch en PHP (gestion des candidatures)
- Analyse besoin, conception IHM, documentation fonctionnelle & utilisateur
- Stack : PHP, Wordpress, HTML, CSS

---

## COMPÉTENCES TECHNIQUES
- Backend : PHP, Symfony, Laravel
- Frontend : HTML5, CSS3, Bootstrap, JavaScript
- BDD : MySQL, PostgreSQL
- Outils : Git, Gitlab, Docker, Azure, VSCode, PhpStorm
- Méthodologie : Scrum, Méthode V, UML, Planning Poker, KPI, gestion des risques
- Langues : Anglais niveau B2 (lu, écrit, parlé)

---

## EXPERTISE IA & AUTOMATISATION (Référentiel de compétences)

**Bloc 1 – Stratégie IA & Transformation Digitale**
- Identification des opportunités d'automatisation à fort ROI
- Audit des processus métiers (TPE, PME, artisans)
- Définition d'une roadmap d'intégration IA
- Modélisation de gains de productivité
- Conception d'offres d'automatisation sur mesure
- Analyse des flux de travail, priorisation des tâches automatisables
- Structuration d'un modèle économique IA, accompagnement au changement numérique

**Bloc 2 – IA Générative & LLM**
- Prompt engineering avancé, structuration de prompts pour automatisation business
- Utilisation d'API IA (OpenAI, etc.)
- Génération automatique de contenus marketing
- Création d'agents conversationnels spécialisés
- Intégration d'IA via API REST, orchestration IA avec n8n / workflows automatisés
- Gestion des tokens, optimisation coûts
- Conception de chatbots métiers (prise de rendez-vous, qualification leads)

**Bloc 3 – Automatisation des Processus Métiers**
- Automatisation CRM, gestion des leads, prise de rendez-vous
- Synchronisation outils SaaS (email, CRM, agenda)
- Création de scénarios d'automatisation multi-étapes
- Conception d'architectures d'automatisation, création de pipelines IA
- Connexion API tierces, structuration base de données pour automatisation

**Bloc 4 – Développement Web & SaaS intégrant l'IA**
- Création de SaaS orientés automatisation
- Intégration IA dans applications web
- Création dashboards pilotage automatisé
- Gestion authentification sécurisée, déploiement cloud, protection données & RGPD

**Bloc 5 – Développement d'une Agence IA**
- Création et structuration d'une agence d'automatisation IA
- Définition d'offres packagées, prospection clients locaux (Jura, TPE/PME)
- Positionnement expert sur transformation digitale

---

## EXPERTISE IMMOBILIER & INVESTISSEMENT (Référentiel de compétences)

**Bloc 1 – Stratégie d'investissement immobilier**
- Analyse de marché local (zones tendues, rentabilité, tension locative)
- Étude de rentabilité (cashflow, TRI, rendement brut/net)
- Simulation financière long terme (5, 10, 20 ans)
- Optimisation fiscale (LMNP, LMP, SASU, SCI à l'IS)
- Structuration juridique et arbitrage patrimonial
- Calcul capacité d'endettement, négociation bancaire, effet de levier

**Bloc 2 – Pilotage de rénovation et travaux**
- Analyse technique d'un bien (structure, électricité, plomberie, DPE)
- Conception de plans d'aménagement optimisés (colocation, division)
- Sélection et coordination d'artisans, suivi budgétaire
- Planification des phases travaux, contrôle qualité, amélioration performance énergétique

**Bloc 3 – Exploitation et gestion locative**
- Création et gestion de colocation à cashflow positif
- Rédaction de baux optimisés (non-solidarité, clauses spécifiques)
- Pilotage du cashflow mensuel

**Bloc 4 – Digitalisation & outils patrimoniaux**
- Création d'outils SaaS de pilotage patrimonial
- Développement de dashboards financiers
- Automatisation de calculs de rentabilité

---

## FORMATION
- **Titre RNCP Niveau I (Bac+5) – Chef de Projet en Système d'Information** – Institut G4 Lyon (2017–2020)
  - Équivalent RNCP Niveau 7 (EQF 7), Bac+5 Master
  - Compétences : cadrage stratégique, pilotage projet digital, architecture web, management d'équipe, déploiement et optimisation
- **DUT Informatique** – Université Claude Bernard Lyon 1 (2017)
  - Programme PPN 2013-2017 : algorithmique, POO, bases de données (MERISE, SQL), systèmes & réseaux, développement web, génie logiciel, projet tutoré, stage entreprise

---

## POINTS FORTS
- Double compétence technique & gestion de projet
- Forte capacité d'analyse et reformulation du besoin
- Autonomie & esprit entrepreneurial
- Expérience en environnement corporate (SNCF) et freelance
- Expérience formation & vulgarisation technique

---

## DISPONIBILITÉ
Disponible pour des missions freelance en France, en Suisse et en full remote.

---

RÈGLES IMPORTANTES :
- Réponds uniquement en français, de manière concise et professionnelle.
- Ne réponds qu'à partir des informations ci-dessus. Si une info n'est pas dans ces documents, dis-le clairement.
- Si on demande à contacter Fabien : email contact@fabien-simon-agence-digitale.fr, tél. 06 14 16 25 15.`;

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