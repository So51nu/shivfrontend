// 'use client';

// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   ShieldCheck,
//   Building2,
//   ClipboardCheck,
//   Wrench,
//   MapPin,
//   FileText,
//   Users,
//   Phone,
//   MessageSquare,
// } from "lucide-react";

// const THEME = {
//   ink: "#0B1220",
//   dark: "#111111",
//   soft: "#F6F7FB",
//   brand: "#B35900",
// };

// const HERO_IMAGES = [
//   "src/images/back1.jpg",
//   "src/images/back2.jpg",
//   "src/images/back3.jpg",
//   "src/images/back4.jpg",
//   "src/images/back5.jpg",
//   "src/images/back6.jpg",
// ];

// const COMPANY = {
//   name: "SHIV SHAKTI REAL ESTATE PRIVATE LIMITED",
//   cin: "U45200MH1999PTC122379",
//   roc: "ROC Mumbai",
//   email: "secretarial@systematixgroup.in",
//   registeredAddress:
//     "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
//   phone: "+91 99999 99999",
//   whatsapp: "919999999999",
// };

// function Header({
//   menuOpen,
//   setMenuOpen,
// }: {
//   menuOpen: boolean;
//   setMenuOpen: (v: boolean) => void;
// }) {
//   const loc = useLocation();
//   const path = loc.pathname || "";

//   const isActive = (p: string) => {
//     if (p === "/") return path === "/";
//     return path.startsWith(p);
//   };

//   // ✅ scroll lock when drawer open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       <header className="topbar">
//         <div className="topbar-inner">
//           <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
//             <div className="brand-icon" aria-hidden="true">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M16 13H17.8M16 16.5H17.8"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             <div className="brand-text">
//               <div className="brand-title">SHIVSHAKTI REAL ESTATE</div>
//               <div className="brand-sub">PVT LTD</div>
//             </div>
//           </Link>

//           {/* ✅ Desktop nav CENTER */}
//           <nav className="nav nav-center">
//             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>
//               HOME
//             </Link>
//             <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>
//               PROJECTS
//             </Link>
//             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>
//               ABOUT
//             </Link>
//             <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>
//               SERVICES
//             </Link>
//             <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>
//               CONTACT
//             </Link>
//           </nav>

//           {/* right actions */}
//           <div className="right-actions">
//             <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>
//               GET QUOTE
//             </Link>

//             {/* ✅ hamburger ONLY mobile via CSS */}
//             <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ✅ Mobile Drawer */}
//       <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
//       <aside className={menuOpen ? "drawer show" : "drawer"} onClick={(e) => e.stopPropagation()}>
//         <div className="drawer-head">
//           <div className="drawer-title">Menu</div>
//           <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
//             <X size={18} />
//           </button>
//         </div>

//         <div className="drawer-links">
//           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>
//           <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}>
//             Projects
//           </Link>
//           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </Link>
//           <Link className={isActive("/services") ? "dlink active" : "dlink"} to="/services" onClick={() => setMenuOpen(false)}>
//             Services
//           </Link>
//           <Link className={isActive("/contact") ? "dlink active" : "dlink"} to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>

//           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
//             Get Quote
//           </Link>
//         </div>

//         <div className="drawer-foot">
//           <div className="df-muted">Email</div>
//           <a className="df-link" href={`mailto:${COMPANY.email}`}>
//             {COMPANY.email}
//           </a>
//           <div className="df-muted" style={{ marginTop: 10 }}>
//             Registered Address
//           </div>
//           <div className="df-text">{COMPANY.registeredAddress}</div>

//           <div className="df-muted" style={{ marginTop: 10 }}>
//             Quick Actions
//           </div>
//           <a className="df-link" href={`tel:${COMPANY.phone}`}>
//             Call Us
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default function ServicesPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [heroIndex, setHeroIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
//       <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* ✅ HERO */}
//       <section className="hero">
//         <div className="hero-bg">
//           <img src={HERO_IMAGES[heroIndex]} alt="services hero" />
//           <div className="hero-overlay" />
//         </div>

//         <div className="container hero-content">
//           <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <span className="badge">OUR SERVICES</span>
//             <h1>End-to-End Real Estate & Construction Services</h1>
//             <p>
//               From planning to execution — we help you with transparent guidance, quality delivery and dependable
//               support.
//             </p>

//             <div className="hero-cta">
//               <Link className="cta-primary" to="/projects">
//                 Explore Projects <ArrowRight size={18} />
//               </Link>
//               <Link className="cta-ghost" to="/contact">
//                 Get a Quote <ArrowRight size={18} />
//               </Link>
//             </div>

//             <div className="dots">
//               {HERO_IMAGES.map((_, i) => (
//                 <button
//                   key={i}
//                   className={i === heroIndex ? "dot active" : "dot"}
//                   onClick={() => setHeroIndex(i)}
//                   aria-label={`hero-${i}`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ✅ STATS SECTION */}
//       <section className="stats">
//         <div className="container">
//           <div className="stats-card">
//             <StatBox icon={<ShieldCheck size={20} />} value="10+ Years" label="Industry Experience" />
//             <StatBox icon={<Building2 size={20} />} value="100+ Projects" label="Successful Deliveries" />
//             <StatBox icon={<Users size={20} />} value="100+ Clients" label="Happy Clients" />
//           </div>
//         </div>
//       </section>

//       {/* ✅ SERVICES GRID */}
//       <section className="section">
//         <div className="container">
//           <div className="section-head">
//             <h2>What We Do</h2>
//             <p>Services are designed to support both Residential and Commercial requirements.</p>
//           </div>

//           <div className="services-grid">
//             <ServiceCard
//               icon={<ClipboardCheck size={22} />}
//               title="Project Planning & Consultation"
//               desc="Requirement analysis, feasibility, estimation and execution planning with clear timelines."
//               points={["Site assessment", "Budget planning", "Timeline & milestones"]}
//             />
//             <ServiceCard
//               icon={<Building2 size={22} />}
//               title="Construction & Development"
//               desc="Quality-focused execution with experienced teams and strong supervision."
//               points={["Civil & structural work", "Finishing & handover", "Quality checks"]}
//             />
//             <ServiceCard
//               icon={<FileText size={22} />}
//               title="Documentation & Compliance"
//               desc="Support for essential documentation with transparent and responsible handling."
//               points={["Basic compliance support", "Project paperwork", "Client guidance"]}
//             />
//             <ServiceCard
//               icon={<MapPin size={22} />}
//               title="Site Visits & Customer Support"
//               desc="Assistance for visits, walkthroughs and post-visit clarifications."
//               points={["Schedule visits", "Walkthroughs", "Query support"]}
//             />
//             <ServiceCard
//               icon={<Wrench size={22} />}
//               title="Maintenance & After-Sales"
//               desc="Support after handover for coordination and basic issue resolution."
//               points={["Handover support", "Repair coordination", "Service follow-ups"]}
//             />
//             <ServiceCard
//               icon={<ShieldCheck size={22} />}
//               title="Quality & Safety Focus"
//               desc="We follow quality checks and safety practices throughout project execution."
//               points={["Material checks", "Process monitoring", "Safety discipline"]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* ✅ CTA SECTION */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-card">
//             <div>
//               <h2>Need Help Choosing the Right Property?</h2>
//               <p>Talk to our team for project details, pricing and site visit scheduling.</p>
//             </div>

//             <div className="cta-actions">
//               <a className="cta-mini" href={`tel:${COMPANY.phone}`}>
//                 <Phone size={18} /> Call Now
//               </a>
//               <a
//                 className="cta-mini green"
//                 href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <MessageSquare size={18} /> WhatsApp
//               </a>
//               <Link className="cta-main" to="/contact">
//                 Get Quote <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ SAME FOOTER AS HOME/ABOUT */}
//       <footer className="footer">
//         <div className="container footer-grid">
//           <div>
//             <div className="f-brand">{COMPANY.name}</div>
//             <div className="f-muted">CIN: {COMPANY.cin} • {COMPANY.roc}</div>
//             <div className="f-muted" style={{ marginTop: 10 }}>
//               Registered Office: {COMPANY.registeredAddress}
//             </div>
//           </div>

//           <div>
//             <div className="f-title">Quick Links</div>
//             <div className="f-links">
//               <Link to="/">Home</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/about">About</Link>
//               <Link to="/services">Services</Link>
//               <Link to="/contact">Contact</Link>
//               <Link to="/login">Admin Login</Link>
//             </div>
//           </div>

//           <div>
//             <div className="f-title">Contact</div>
//             <div className="f-links">
//               <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
//               <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
//               <a
//                 href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 WhatsApp Chat
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="container f-bottom">
//           <p>© {new Date().getFullYear()} Shiv Shakti Real Estate Private Limited. All rights reserved.</p>
//           <div className="f-mini">
//             <Link to="/privacy">Privacy</Link>
//             <span>•</span>
//             <Link to="/terms">Terms</Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
//   return (
//     <div className="stat">
//       <div className="stat-ic">{icon}</div>
//       <div className="stat-v">{value}</div>
//       <div className="stat-l">{label}</div>
//     </div>
//   );
// }

// function ServiceCard({
//   icon,
//   title,
//   desc,
//   points,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
//   points: string[];
// }) {
//   return (
//     <motion.div
//       className="svc"
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className="svc-ic">{icon}</div>
//       <div className="svc-title">{title}</div>
//       <div className="svc-desc">{desc}</div>
//       <ul className="svc-ul">
//         {points.map((p) => (
//           <li key={p}>{p}</li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }

// function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
//   return (
//     <style
//       dangerouslySetInnerHTML={{
//         __html: `
//       html, body { width:100%; min-height:100%; margin:0; padding:0; overflow-x:hidden; }
//       * { box-sizing:border-box; }
//       .container { width: min(1200px, 94vw); margin: 0 auto; }
//       .row-between{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }

//       /* ✅ HEADER */
//       .topbar{
//         position: fixed;
//         top: 0; left: 0; right: 0;
//         height: 76px;
//         z-index: 3000;
//         background: rgba(10,10,10,0.75);
//         backdrop-filter: blur(10px);
//         border-bottom: 1px solid rgba(255,255,255,0.08);
//       }
//       .topbar-inner{
//         height: 76px;
//         width: min(1200px, 94vw);
//         margin: 0 auto;
//         display:flex;
//         align-items:center;
//         justify-content:space-between;
//         gap: 14px;
//       }
//       .brand{
//         display:flex; align-items:center; gap: 12px;
//         text-decoration:none; color:white;
//         min-width: auto;
//       }
//       .brand-icon{
//         width: 44px; height: 44px; border-radius: 12px;
//         background: ${brand};
//         display:flex; align-items:center; justify-content:center;
//         box-shadow: 0 10px 26px rgba(179,89,0,0.25);
//       }
//       .brand-text{ line-height: 1.05; }
//       .brand-title{ font-weight: 1000; letter-spacing: 0.8px; font-size: 16px; }
//       .brand-sub{ font-weight: 900; font-size: 11px; letter-spacing: 2px; opacity: 0.85; }

//       /* ✅ Center nav */
//       .nav{
//         display:flex;
//         align-items:center;
//         gap: 22px;
//         flex: 1;
//       }
//       .nav-center{ justify-content:center; }
//       .nav-link{
//         color: rgba(255,255,255,0.88);
//         text-decoration:none;
//         font-weight: 900;
//         font-size: 13px;
//         letter-spacing: 1px;
//         white-space: nowrap;
//       }
//       .nav-link:hover{ color: white; }
//       .nav-link.active{ color: white; }

//       .right-actions{
//         display:flex;
//         align-items:center;
//         gap: 10px;
//         min-width: auto;
//         justify-content:flex-end;
//       }
//       .cta{
//         background: ${brand};
//         color: white;
//         text-decoration:none;
//         font-weight: 1000;
//         border-radius: 12px;
//         padding: 12px 18px;
//         letter-spacing: 0.8px;
//         font-size: 13px;
//         box-shadow: 0 12px 26px rgba(179,89,0,0.25);
//         white-space: nowrap;
//       }

//       /* ✅ hamburger hidden on desktop */
//       .hamburger{
//         display:none;
//         border: 1px solid rgba(255,255,255,0.18);
//         background: rgba(255,255,255,0.10);
//         color:white;
//         width: 42px; height: 42px;
//         border-radius: 12px;
//         cursor:pointer;
//         align-items:center;
//         justify-content:center;
//         padding: 0;
//       }

//       /* ✅ drawer */
//       .drawer-overlay{
//         position: fixed;
//         inset:0;
//         background: rgba(0,0,0,0.5);
//         z-index: 2800;
//         opacity:0;
//         pointer-events:none;
//         transition: 0.25s;
//       }
//       .drawer-overlay.show{ opacity:1; pointer-events:auto; }
//       .drawer{
//         position: fixed;
//         top: 0; right: 0;
//         height: 100vh;
//         width: min(360px, 86vw);
//         background: #0e0e0e;
//         z-index: 2900;
//         transform: translateX(110%);
//         transition: transform 0.25s;
//         border-left: 1px solid rgba(255,255,255,0.08);
//         padding: 16px;
//         display:flex;
//         flex-direction:column;
//         gap: 14px;
//       }
//       .drawer.show{ transform: translateX(0); }
//       .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
//       .drawer-title{ color:white; font-weight: 1000; letter-spacing:0.7px; }
//       .drawer-close{
//         border: 1px solid rgba(255,255,255,0.18);
//         background: rgba(255,255,255,0.10);
//         color:white;
//         width: 38px; height: 38px;
//         border-radius: 12px;
//         cursor:pointer;
//         display:flex; align-items:center; justify-content:center;
//       }
//       .drawer-links{ display:flex; flex-direction:column; gap: 10px; margin-top: 4px; }
//       .dlink{
//         color: rgba(255,255,255,0.90);
//         text-decoration:none;
//         padding: 12px 12px;
//         border-radius: 12px;
//         background: rgba(255,255,255,0.06);
//         border: 1px solid rgba(255,255,255,0.08);
//         font-weight: 900;
//       }
//       .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
//       .dcta{
//         margin-top: 6px;
//         background: ${brand};
//         color:white;
//         text-decoration:none;
//         padding: 12px 12px;
//         border-radius: 12px;
//         font-weight: 1000;
//         text-align:center;
//       }
//       .drawer-foot{
//         margin-top:auto;
//         border-top: 1px solid rgba(255,255,255,0.10);
//         padding-top: 12px;
//       }
//       .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 11px; letter-spacing:0.8px; text-transform:uppercase; }
//       .df-link{ color: white; text-decoration:none; font-weight: 900; }
//       .df-text{ color: rgba(255,255,255,0.75); font-weight: 800; line-height: 1.6; font-size: 13px; margin-top: 6px; }

//       /* ✅ HERO */
//       .hero{
//         position: relative;
//         min-height: 520px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         color: white;
//         overflow:hidden;
//         padding-top: 76px;
//       }
//       .hero-bg{ position:absolute; inset:0; }
//       .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
//       .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); }
//       .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 12px; }

//       .badge { background: ${brand}; padding: 6px 16px; border-radius: 999px; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing:1px; display:inline-block; }
//       .hero h1 { font-size: clamp(26px, 4vw, 48px); font-weight: 1000; margin: 18px 0; }
//       .hero p { color: rgba(255,255,255,0.9); max-width: 820px; margin: 0 auto; line-height: 1.7; }

//       .hero-cta{ display:flex; gap: 12px; justify-content:center; flex-wrap:wrap; margin-top: 18px; }
//       .cta-primary{
//         background: ${brand};
//         color: white;
//         text-decoration:none;
//         padding: 12px 16px;
//         border-radius: 14px;
//         font-weight: 1000;
//         display:flex; align-items:center; gap: 10px;
//         box-shadow: 0 14px 30px rgba(179,89,0,0.25);
//       }
//       .cta-ghost{
//         background: rgba(255,255,255,0.12);
//         border: 1px solid rgba(255,255,255,0.35);
//         color: white;
//         text-decoration:none;
//         padding: 12px 16px;
//         border-radius: 14px;
//         font-weight: 1000;
//         display:flex; align-items:center; gap: 10px;
//       }

//       .dots{ display:flex; gap:10px; justify-content:center; margin-top: 18px; }
//       .dot{ width: 44px; height: 12px; border-radius: 999px; border:1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.16); cursor:pointer; }
//       .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

//       /* ✅ STATS */
//       .stats{ padding: 26px 0 10px; }
//       .stats-card{
//         background: white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 18px;
//         display:grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 14px;
//         box-shadow: 0 12px 28px rgba(0,0,0,0.06);
//       }
//       .stat{
//         border: 1px solid #f0f0f0;
//         border-radius: 16px;
//         padding: 16px;
//         text-align:center;
//         background: #fff;
//       }
//       .stat-ic{
//         width: 44px; height: 44px;
//         margin: 0 auto 10px;
//         border-radius: 14px;
//         background: #fff7ed;
//         border: 1px solid #ffedd5;
//         color: ${brand};
//         display:flex; align-items:center; justify-content:center;
//       }
//       .stat-v{ font-weight: 1100; font-size: 20px; color:${ink}; }
//       .stat-l{ margin-top: 6px; color:#667; font-weight: 850; font-size: 13px; }

//       /* ✅ SERVICES */
//       .section{ padding: 56px 0; }
//       .section-head h2{ margin: 0; font-size: 30px; font-weight: 1100; color:${ink}; }
//       .section-head p{ margin-top: 10px; margin-bottom: 0; color:#556; font-weight: 800; }

//       .services-grid{
//         margin-top: 18px;
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
//         gap: 16px;
//       }
//       .svc{
//         background: white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 18px;
//         box-shadow: 0 12px 30px rgba(0,0,0,0.06);
//       }
//       .svc-ic{
//         width: 46px; height: 46px;
//         border-radius: 14px;
//         background: ${ink};
//         color: white;
//         display:flex; align-items:center; justify-content:center;
//         margin-bottom: 12px;
//       }
//       .svc-title{ font-weight: 1100; color:${ink}; font-size: 16px; }
//       .svc-desc{ margin-top: 8px; color:#667; font-weight: 780; line-height: 1.65; font-size: 13px; }
//       .svc-ul{ margin: 12px 0 0; padding-left: 18px; color:#445; line-height: 1.85; font-weight: 800; }

//       /* ✅ CTA */
//       .cta-section{ padding: 10px 0 60px; }
//       .cta-card{
//         background: ${ink};
//         color: white;
//         border-radius: 18px;
//         padding: 22px;
//         display:flex;
//         align-items:center;
//         justify-content:space-between;
//         gap: 16px;
//         flex-wrap:wrap;
//         box-shadow: 0 18px 46px rgba(0,0,0,0.18);
//       }
//       .cta-card h2{ margin: 0; font-size: 22px; font-weight: 1100; }
//       .cta-card p{ margin: 8px 0 0; color: rgba(255,255,255,0.85); font-weight: 780; }

//       .cta-actions{ display:flex; gap: 10px; flex-wrap:wrap; }
//       .cta-mini{
//         border: 1px solid rgba(255,255,255,0.22);
//         background: rgba(255,255,255,0.10);
//         color: white;
//         text-decoration:none;
//         padding: 12px 14px;
//         border-radius: 14px;
//         font-weight: 1000;
//         display:flex; align-items:center; gap: 10px;
//       }
//       .cta-mini.green{ background: #00c853; border-color: #00c853; }
//       .cta-main{
//         background: ${brand};
//         color: white;
//         text-decoration:none;
//         padding: 12px 16px;
//         border-radius: 14px;
//         font-weight: 1000;
//         display:flex; align-items:center; gap: 10px;
//       }

//       /* ✅ footer same as home/about */
//       .footer{
//         background:${dark};
//         color:#c9c9c9;
//         padding: 44px 0 22px;
//         margin-top: 10px;
//       }
//       .footer-grid{
//         display:grid;
//         grid-template-columns: 1.4fr 0.8fr 0.8fr;
//         gap: 16px;
//         padding-bottom: 18px;
//         border-bottom: 1px solid rgba(255,255,255,0.10);
//       }
//       .f-brand{ color:white; font-weight: 1100; font-size: 16px; letter-spacing: 0.7px; }
//       .f-title{ color:white; font-weight: 1000; letter-spacing: 0.8px; font-size: 12px; text-transform:uppercase; }
//       .f-muted{ color: rgba(255,255,255,0.7); font-weight: 780; line-height: 1.65; }
//       .f-links{ display:flex; flex-direction:column; gap: 8px; margin-top: 10px; }
//       .f-links a{ color:#ddd; text-decoration:none; font-weight: 850; }
//       .f-links a:hover{ color:white; }
//       .f-bottom{
//         margin-top: 16px;
//         display:flex;
//         align-items:center;
//         justify-content:space-between;
//         gap: 12px;
//         flex-wrap:wrap;
//         color: rgba(255,255,255,0.7);
//         font-weight: 800;
//         font-size: 13px;
//       }
//       .f-mini{ display:flex; gap: 10px; align-items:center; }
//       .f-mini a{ color:#ddd; text-decoration:none; font-weight: 850; }

//       @media (max-width: 980px){
//         .nav{ display:none; }          /* ✅ hide desktop nav */
//         .hamburger{ display:flex;flex-shrink: 0;   }    /* ✅ show hamburger on mobile */
//         .cta{ display:none; }          /* ✅ clean header mobile */
//         .stats-card{ grid-template-columns: 1fr; }
//         .cta-card{ align-items:flex-start; }
//         .footer-grid{ grid-template-columns: 1fr; }
//       }
//     `,
//       }}
//     />
//   );
// }
'use client';

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  Wrench,
  MapPin,
  FileText,
  Users,
  Phone,
  MessageSquare,
  Home as HomeIcon,
  Sparkles,
  User
} from "lucide-react";

const THEME = {
  ink: "#0B1220",
  dark: "#111111",
  soft: "#F6F7FB",
  brand: "#B35900",
};
const HERO_IMAGES = [
  "/images/back1.jpg",
  "/images/back2.jpg",
  "/images/back3.jpg",
  "/images/back4.jpg",
  "/images/back5.jpg",
  "/images/back6.jpg",
];
const COMPANY = {
  name: "SHIV SHAKTI REAL ESTATE ADVISORY PRIVATE LIMITED",
  cin: "U45200MH1999PTC122379",
  roc: "ROC Mumbai",
  email: "secretarial@systematixgroup.in",
  registeredAddress:
    "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
  phone: "+91 89560 32764",
  whatsapp: "918956032764",
};

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const loc = useLocation();
  const path = loc.pathname || "";

  const isActive = (p: string) => {
    if (p === "/") return path === "/";
    return path.startsWith(p);
  };

  // ✅ scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <div className="brand-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 13H17.8M16 16.5H17.8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="brand-text">
              <div className="brand-title">SHIVSHAKTI REAL ESTATE ADVISORY </div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          {/* ✅ Desktop nav CENTER */}
          <nav className="nav nav-center">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
            <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login" onClick={() => setMenuOpen(false)}>
              ADMIN LOGIN
            </Link>
          </nav>

          {/* right actions */}
          <div className="right-actions">
            <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>
              GET QUOTE
            </Link>

            {/* ✅ hamburger ONLY mobile via CSS */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Drawer */}
      <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
      <aside className={menuOpen ? "drawer show" : "drawer"} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <div className="drawer-title">Menu</div>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-links">
          <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
            <HomeIcon size={20} /> Home
          </Link>
          <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}>
            <Building2 size={20} /> Projects
          </Link>
          <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
            <FileText size={20} /> About
          </Link>
          <Link className={isActive("/services") ? "dlink active" : "dlink"} to="/services" onClick={() => setMenuOpen(false)}>
            <Sparkles size={20} /> Services
          </Link>
          <Link className={isActive("/contact") ? "dlink active" : "dlink"} to="/contact" onClick={() => setMenuOpen(false)}>
            <Phone size={20} /> Contact
          </Link>
          <Link className={isActive("/login") ? "dlink active" : "dlink"} to="/login" onClick={() => setMenuOpen(false)}>
            <User size={20} /> Admin Login
          </Link>

          <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
            Get Quote
          </Link>
        </div>

        <div className="drawer-foot">
          <div className="df-muted">Email</div>
          <a className="df-link" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
          <div className="df-muted" style={{ marginTop: 10 }}>
            Registered Address
          </div>
          <div className="df-text">{COMPANY.registeredAddress}</div>

          <div className="df-muted" style={{ marginTop: 10 }}>
            Quick Actions
          </div>
          <a className="df-link" href={`tel:${COMPANY.phone}`}>
            Call Us
          </a>
        </div>
      </aside>
    </>
  );
}

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ✅ HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src={HERO_IMAGES[heroIndex]} alt="services hero" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">OUR SERVICES</span>
            <h1>End-to-End Real Estate & Construction Services</h1>
            <p>
              From planning to execution — we help you with transparent guidance, quality delivery and dependable
              support.
            </p>

            <div className="hero-cta">
              <Link className="cta-primary" to="/projects">
                Explore Projects <ArrowRight size={20} />
              </Link>
              <Link className="cta-ghost" to="/contact">
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>

            <div className="dots">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={i === heroIndex ? "dot active" : "dot"}
                  onClick={() => setHeroIndex(i)}
                  aria-label={`hero-${i}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ STATS SECTION */}
      <section className="stats">
        <div className="container">
          <div className="stats-card">
            <StatBox icon={<ShieldCheck size={24} />} value="10+ Years" label="Industry Experience" />
            <StatBox icon={<Building2 size={24} />} value="100+ Projects" label="Successful Deliveries" />
            <StatBox icon={<Users size={24} />} value="100+ Clients" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* ✅ SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What We Do</h2>
            <p>Services are designed to support both Residential and Commercial requirements.</p>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={<ClipboardCheck size={24} />}
              title="Project Planning & Consultation"
              desc="Requirement analysis, feasibility, estimation and execution planning with clear timelines."
              points={["Site assessment", "Budget planning", "Timeline & milestones"]}
            />
            <ServiceCard
              icon={<Building2 size={24} />}
              title="Construction & Development"
              desc="Quality-focused execution with experienced teams and strong supervision."
              points={["Civil & structural work", "Finishing & handover", "Quality checks"]}
            />
            <ServiceCard
              icon={<FileText size={24} />}
              title="Documentation & Compliance"
              desc="Support for essential documentation with transparent and responsible handling."
              points={["Basic compliance support", "Project paperwork", "Client guidance"]}
            />
            <ServiceCard
              icon={<MapPin size={24} />}
              title="Site Visits & Customer Support"
              desc="Assistance for visits, walkthroughs and post-visit clarifications."
              points={["Schedule visits", "Walkthroughs", "Query support"]}
            />
            <ServiceCard
              icon={<Wrench size={24} />}
              title="Maintenance & After-Sales"
              desc="Support after handover for coordination and basic issue resolution."
              points={["Handover support", "Repair coordination", "Service follow-ups"]}
            />
            <ServiceCard
              icon={<ShieldCheck size={24} />}
              title="Quality & Safety Focus"
              desc="We follow quality checks and safety practices throughout project execution."
              points={["Material checks", "Process monitoring", "Safety discipline"]}
            />
          </div>
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Need Help Choosing the Right Property?</h2>
              <p>Talk to our team for project details, pricing and site visit scheduling.</p>
            </div>

            <div className="cta-actions">
              <a className="cta-mini" href={`tel:${COMPANY.phone}`}>
                <Phone size={20} /> Call Now
              </a>
              <a
                className="cta-mini green"
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={20} /> WhatsApp
              </a>
              <Link className="cta-main" to="/contact">
                Get Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SAME FOOTER AS HOME/ABOUT */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="f-brand">{COMPANY.name}</div>
            <div className="f-muted">CIN: {COMPANY.cin} • {COMPANY.roc}</div>
            <div className="f-muted" style={{ marginTop: 10 }}>
              Registered Office: {COMPANY.registeredAddress}
            </div>
          </div>

          <div>
            <div className="f-title">Quick Links</div>
            <div className="f-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Admin Login</Link>
            </div>
          </div>

          <div>
            <div className="f-title">Contact</div>
            <div className="f-links">
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div className="container f-bottom">
          <p>© {new Date().getFullYear()} Shiv Shakti Real Estate Advisory Private Limited. All rights reserved.</p>
          <div className="f-mini">
            <Link to="/privacy">Privacy</Link>
            <span>•</span>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat-ic">{icon}</div>
      <div className="stat-v">{value}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <motion.div
      className="svc"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="svc-ic">{icon}</div>
      <div className="svc-title">{title}</div>
      <div className="svc-desc">{desc}</div>
      <ul className="svc-ul">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      html, body { 
        width:100%; 
        min-height:100%; 
        margin:0; 
        padding:0; 
        overflow-x:hidden; 
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      }
      * { box-sizing:border-box; }
      .container { width: min(1200px, 94vw); margin: 0 auto; }
      .row-between{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }

      /* ✅ HEADER */
      .topbar{
        position: fixed;
        top: 0; left: 0; right: 0;
        height: 80px;
        z-index: 3000;
        background: rgba(10,10,10,0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .topbar-inner{
        height: 80px;
        width: min(1200px, 94vw);
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 20px;
      }
      .brand{
        display:flex; align-items:center; gap: 14px;
        text-decoration:none; color:white;
        min-width: 240px;
      }
      .brand-icon{
        width: 48px; height: 48px; border-radius: 12px;
        background: ${brand};
        display:flex; align-items:center; justify-content:center;
        box-shadow: 0 10px 26px rgba(179,89,0,0.25);
      }
      .brand-text{ line-height: 1.1; }
      .brand-title{ 
        font-weight: 1000; 
        letter-spacing: 0.8px; 
        font-size: 18px; 
      }
      .brand-sub{ 
        font-weight: 900; 
        font-size: 12px; 
        letter-spacing: 2px; 
        opacity: 0.85; 
      }

      /* ✅ Center nav */
      .nav{
        display:flex;
        align-items:center;
        gap: 24px;
        flex: 1;
      }
      .nav-center{ justify-content:center; }
      .nav-link{
        color: rgba(255,255,255,0.88);
        text-decoration:none;
        font-weight: 900;
        font-size: 14px;
        letter-spacing: 1px;
        white-space: nowrap;
      }
      .nav-link:hover{ color: white; }
      .nav-link.active{ color: white; }

      .right-actions{
        display:flex;
        align-items:center;
        gap: 12px;
        min-width: 180px;
        justify-content:flex-end;
      }
      .cta{
        background: ${brand};
        color: white;
        text-decoration:none;
        font-weight: 1000;
        border-radius: 12px;
        padding: 14px 20px;
        letter-spacing: 0.8px;
        font-size: 14px;
        box-shadow: 0 12px 26px rgba(179,89,0,0.25);
        white-space: nowrap;
      }

      /* ✅ hamburger hidden on desktop */
      .hamburger{
        display:none;
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.10);
        color:white;
        width: 46px; height: 46px;
        border-radius: 12px;
        cursor:pointer;
        align-items:center;
        justify-content:center;
        padding: 0;
      }

      /* ✅ drawer */
      .drawer-overlay{
        position: fixed;
        inset:0;
        background: rgba(0,0,0,0.5);
        z-index: 2800;
        opacity:0;
        pointer-events:none;
        transition: 0.25s;
      }
      .drawer-overlay.show{ opacity:1; pointer-events:auto; }
      .drawer{
        position: fixed;
        top: 0; right: 0;
        height: 100vh;
        width: min(380px, 86vw);
        background: #0e0e0e;
        z-index: 2900;
        transform: translateX(110%);
        transition: transform 0.25s;
        border-left: 1px solid rgba(255,255,255,0.08);
        padding: 20px;
        display:flex;
        flex-direction:column;
        gap: 16px;
      }
      .drawer.show{ transform: translateX(0); }
      .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
      .drawer-title{ 
        color:white; 
        font-weight: 1000; 
        letter-spacing:0.7px; 
        font-size: 18px; 
      }
      .drawer-close{
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.10);
        color:white;
        width: 42px; height: 42px;
        border-radius: 12px;
        cursor:pointer;
        display:flex; align-items:center; justify-content:center;
      }
      .drawer-links{ 
        display:flex; 
        flex-direction:column; 
        gap: 12px; 
        margin-top: 8px; 
      }
      .dlink{
        color: rgba(255,255,255,0.90);
        text-decoration:none;
        padding: 14px 16px;
        border-radius: 12px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        font-weight: 900;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .dlink.active{ 
        background: rgba(255,255,255,0.12); 
        border-color: rgba(255,255,255,0.16); 
      }
      .dcta{
        margin-top: 10px;
        background: ${brand};
        color:white;
        text-decoration:none;
        padding: 14px 16px;
        border-radius: 12px;
        font-weight: 1000;
        text-align:center;
        font-size: 15px;
      }
      .drawer-foot{
        margin-top:auto;
        border-top: 1px solid rgba(255,255,255,0.10);
        padding-top: 16px;
      }
      .df-muted{ 
        color: rgba(255,255,255,0.55); 
        font-weight: 900; 
        font-size: 12px; 
        letter-spacing:0.8px; 
        text-transform:uppercase; 
      }
      .df-link{ 
        color: white; 
        text-decoration:none; 
        font-weight: 900; 
        font-size: 15px;
      }
      .df-text{ 
        color: rgba(255,255,255,0.75); 
        font-weight: 800; 
        line-height: 1.6; 
        font-size: 14px; 
        margin-top: 6px; 
      }

      /* ✅ HERO */
      .hero{
        position: relative;
        min-height: 700px;
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        overflow:hidden;
        padding-top: 80px;
      }
      .hero-bg{ position:absolute; inset:0; }
      .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
      .hero-overlay{ 
        position:absolute; 
        inset:0; 
        background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); 
      }
      .hero-content{ 
        position:relative; 
        z-index:2; 
        text-align:center; 
        padding: 0 16px; 
      }

      .badge { 
        background: ${brand}; 
        padding: 8px 20px; 
        border-radius: 999px; 
        font-size: 13px; 
        font-weight: 900; 
        text-transform: uppercase; 
        letter-spacing:1px; 
        display:inline-block; 
      }
      .hero h1 { 
        font-size: clamp(40px, 5vw, 68px); 
        font-weight: 1200; 
        margin: 24px 0; 
        line-height: 1.2;
      }
      .hero p { 
        color: rgba(255,255,255,0.9); 
        max-width: 820px; 
        margin: 0 auto; 
        line-height: 1.7; 
        font-size: 18px;
      }

      .hero-cta{ 
        display:flex; 
        gap: 16px; 
        justify-content:center; 
        flex-wrap:wrap; 
        margin-top: 24px; 
      }
      .cta-primary{
        background: ${brand};
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; 
        align-items:center; 
        gap: 12px;
        font-size: 16px;
        box-shadow: 0 14px 30px rgba(179,89,0,0.25);
      }
      .cta-ghost{
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.35);
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; 
        align-items:center; 
        gap: 12px;
        font-size: 16px;
      }

      .dots{ 
        display:flex; 
        gap:12px; 
        justify-content:center; 
        margin-top: 24px; 
      }
      .dot{ 
        width: 50px; 
        height: 14px; 
        border-radius: 999px; 
        border:1px solid rgba(255,255,255,0.6); 
        background: rgba(255,255,255,0.16); 
        cursor:pointer; 
      }
      .dot.active{ 
        background: rgba(255,255,255,0.95); 
        border-color: rgba(255,255,255,0.95); 
      }

      /* ✅ STATS */
      .stats{ 
        padding: 32px 0 20px; 
      }
      .stats-card{
        background: white;
        border: 1px solid #eee;
        border-radius: 20px;
        padding: 24px;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        box-shadow: 0 12px 28px rgba(0,0,0,0.06);
      }
      .stat{
        border: 1px solid #f0f0f0;
        border-radius: 18px;
        padding: 20px;
        text-align:center;
        background: #fff;
      }
      .stat-ic{
        width: 52px; 
        height: 52px;
        margin: 0 auto 12px;
        border-radius: 16px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        color: ${brand};
        display:flex; 
        align-items:center; 
        justify-content:center;
      }
      .stat-v{ 
        font-weight: 1100; 
        font-size: 24px; 
        color:${ink}; 
        margin-bottom: 4px;
      }
      .stat-l{ 
        color:#667; 
        font-weight: 850; 
        font-size: 15px; 
      }

      /* ✅ SERVICES */
      .section{ 
        padding: 72px 0; 
      }
      .section-head h2{ 
        margin: 0; 
        font-size: 42px; 
        font-weight: 1100; 
        color:${ink}; 
        line-height: 1.3;
      }
      .section-head p{ 
        margin-top: 12px; 
        margin-bottom: 0; 
        color:#556; 
        font-weight: 800; 
        font-size: 18px;
        max-width: 800px;
      }

      .services-grid{
        margin-top: 32px;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 24px;
      }
      .svc{
        background: white;
        border: 1px solid #eee;
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 12px 30px rgba(0,0,0,0.06);
      }
      .svc-ic{
        width: 56px; 
        height: 56px;
        border-radius: 16px;
        background: ${ink};
        color: white;
        display:flex; 
        align-items:center; 
        justify-content:center;
        margin-bottom: 16px;
      }
      .svc-title{ 
        font-weight: 1100; 
        color:${ink}; 
        font-size: 20px; 
        margin-bottom: 8px;
      }
      .svc-desc{ 
        margin-top: 8px; 
        color:#667; 
        font-weight: 780; 
        line-height: 1.6; 
        font-size: 15px; 
        margin-bottom: 12px;
      }
      .svc-ul{ 
        margin: 12px 0 0; 
        padding-left: 20px; 
        color:#445; 
        line-height: 1.8; 
        font-weight: 800; 
        font-size: 14px;
      }
      .svc-ul li {
        margin-bottom: 6px;
      }

      /* ✅ CTA */
      .cta-section{ 
        padding: 20px 0 80px; 
      }
      .cta-card{
        background: ${ink};
        color: white;
        border-radius: 20px;
        padding: 32px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 24px;
        flex-wrap:wrap;
        box-shadow: 0 18px 46px rgba(0,0,0,0.18);
      }
      .cta-card h2{ 
        margin: 0; 
        font-size: 28px; 
        font-weight: 1100; 
        line-height: 1.3;
      }
      .cta-card p{ 
        margin: 12px 0 0; 
        color: rgba(255,255,255,0.85); 
        font-weight: 780; 
        font-size: 17px;
      }

      .cta-actions{ 
        display:flex; 
        gap: 14px; 
        flex-wrap:wrap; 
      }
      .cta-mini{
        border: 1px solid rgba(255,255,255,0.22);
        background: rgba(255,255,255,0.10);
        color: white;
        text-decoration:none;
        padding: 14px 18px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; 
        align-items:center; 
        gap: 12px;
        font-size: 15px;
      }
      .cta-mini.green{ 
        background: #00c853; 
        border-color: #00c853; 
      }
      .cta-main{
        background: ${brand};
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; 
        align-items:center; 
        gap: 12px;
        font-size: 16px;
      }

      /* ✅ footer same as home/about */
      .footer{
        background:${dark};
        color:#c9c9c9;
        padding: 60px 0 30px;
        margin-top: 20px;
      }
      .footer-grid{
        display:grid;
        grid-template-columns: 1.4fr 0.8fr 0.8fr;
        gap: 24px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(255,255,255,0.10);
      }
      .f-brand{ 
        color:white; 
        font-weight: 1100; 
        font-size: 20px; 
        letter-spacing: 0.8px; 
        margin-bottom: 12px;
      }
      .f-title{ 
        color:white; 
        font-weight: 1000; 
        letter-spacing: 0.8px; 
        font-size: 14px; 
        text-transform:uppercase; 
        margin-bottom: 12px;
      }
      .f-muted{ 
        color: rgba(255,255,255,0.7); 
        font-weight: 780; 
        line-height: 1.6; 
        font-size: 15px; 
      }
      .f-links{ 
        display:flex; 
        flex-direction:column; 
        gap: 10px; 
        margin-top: 10px; 
      }
      .f-links a{ 
        color:#ddd; 
        text-decoration:none; 
        font-weight: 850; 
        font-size: 15px; 
      }
      .f-links a:hover{ color:white; }

      .f-bottom{
        margin-top: 24px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 16px;
        flex-wrap:wrap;
        color: rgba(255,255,255,0.7);
        font-weight: 800;
        font-size: 14px;
      }
      .f-mini{ 
        display:flex; 
        gap: 12px; 
        align-items:center; 
      }
      .f-mini a{ 
        color:#ddd; 
        text-decoration:none; 
        font-weight: 850; 
        font-size: 14px; 
      }

      /* ✅ RESPONSIVE */
      @media (max-width: 1100px){
        .services-grid{ 
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
        }
        .stats-card{ 
          grid-template-columns: repeat(2, 1fr); 
        }
      }

      @media (max-width: 980px){
        .nav{ display:none; }          /* ✅ hide desktop nav */
        .hamburger{ display:flex; }    /* ✅ show hamburger on mobile */
        .cta{ display:none; }          /* ✅ clean header mobile */
        .stats-card{ grid-template-columns: 1fr; }
        .cta-card{ 
          flex-direction: column; 
          align-items:flex-start; 
          gap: 20px;
        }
        .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
      }

      @media (max-width: 768px){
        .section{ padding: 60px 0; }
        .hero h1{ font-size: 36px; }
        .hero p{ font-size: 17px; }
        .hero-cta{ flex-direction: column; align-items: center; }
        .cta-primary, .cta-ghost{ width: 100%; justify-content: center; }
        .section-head h2{ font-size: 32px; }
        .section-head p{ font-size: 17px; }
        .services-grid{ 
          grid-template-columns: 1fr; 
          gap: 20px; 
        }
        .svc{ padding: 20px; }
        .svc-title{ font-size: 18px; }
        .svc-desc{ font-size: 14px; }
        .cta-card{ padding: 24px; }
        .cta-card h2{ font-size: 24px; }
        .cta-card p{ font-size: 16px; }
        .cta-actions{ flex-direction: column; }
        .cta-mini, .cta-main{ width: 100%; justify-content: center; }
      }

      @media (max-width: 480px){
        .brand{ min-width: 200px; }
        .brand-title{ font-size: 16px; }
        .brand-sub{ font-size: 10px; }
        .hero h1{ font-size: 32px; }
        .hero p{ font-size: 16px; }
        .f-bottom{ flex-direction: column; text-align: center; gap: 12px; }
        .stats-card{ padding: 20px; }
        .stat{ padding: 16px; }
        .stat-v{ font-size: 20px; }
        .stat-l{ font-size: 14px; }
      }
    `,
      }}
    />
  );
}