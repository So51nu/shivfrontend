// 'use client';

// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import API_BASE from "./Api";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   Building2,
//   ShieldCheck,
//   ClipboardCheck,
//   FileText,
//   Phone,
//   MessageSquare,
//   Download,
//   User,
//   CheckCircle2,
//   Home as HomeIcon,
//   Landmark,
//   Sparkles,
//   MapPin,
//   BadgeCheck,
//   KeyRound,
//   Wallet,
//   CalendarCheck,
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

// type Project = {
//   id: number;
//   title: string;
//   slug: string;
//   category: "residential" | "commercial";
//   location: string;
//   configuration: string;
//   price_label: string;
//   short_description: string;
//   description: string;
//   cover_image_url: string;
//   brochure_url?: string;
//   created_at?: string;
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

//           {/* Desktop nav */}
//           <nav className="nav center">
//             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/">
//               HOME
//             </Link>
//             <Link
//               className={isActive("/projects") ? "nav-link active" : "nav-link"}
//               to="/projects"
//             >
//               PROJECTS
//             </Link>
//             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about">
//               ABOUT
//             </Link>
//             <Link
//               className={isActive("/services") ? "nav-link active" : "nav-link"}
//               to="/services"
//             >
//               SERVICES
//             </Link>
//             <Link
//               className={isActive("/contact") ? "nav-link active" : "nav-link"}
//               to="/contact"
//             >
//               CONTACT
//             </Link>

//             {/* ✅ Admin login */}
//             <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login">
//               ADMIN LOGIN
//             </Link>
//           </nav>

//           <div className="right-actions">
//             <Link className="cta" to="/contact">
//               GET QUOTE
//             </Link>

//             {/* ✅ Mobile menu */}
//             <button
//               className="hamburger"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Menu"
//               aria-expanded={menuOpen}
//             >
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Drawer */}
//       <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
//       <aside className={menuOpen ? "drawer show" : "drawer"}>
//         <div className="drawer-head">
//           <div className="drawer-title">Menu</div>
//           <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
//             <X size={18} />
//           </button>
//         </div>

//         <div className="drawer-links">
//           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
//             <HomeIcon size={18} /> Home
//           </Link>
//           <Link
//             className={isActive("/projects") ? "dlink active" : "dlink"}
//             to="/projects"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Building2 size={18} /> Projects
//           </Link>
//           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
//             <FileText size={18} /> About
//           </Link>
//           <Link
//             className={isActive("/services") ? "dlink active" : "dlink"}
//             to="/services"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Sparkles size={18} /> Services
//           </Link>
//           <Link
//             className={isActive("/contact") ? "dlink active" : "dlink"}
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Phone size={18} /> Contact
//           </Link>

//           <Link
//             className={isActive("/login") ? "dlink active" : "dlink"}
//             to="/login"
//             onClick={() => setMenuOpen(false)}
//           >
//             <User size={18} /> Admin Login
//           </Link>

//           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
//             Get Quote
//           </Link>
//         </div>

//         <div className="drawer-foot">
//           <div className="df-muted">Quick Actions</div>
//           <a className="df-link" href="tel:+919999999999">Call Us</a>
//           <a
//             className="df-link"
//             href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             WhatsApp
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // hero slider
//   const [heroIndex, setHeroIndex] = useState(0);

//   // projects preview
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [pLoading, setPLoading] = useState(false);

//   useEffect(() => {
//     const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
//     return () => clearInterval(t);
//   }, []);

//   const loadProjects = async () => {
//     setPLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/projects/`);
//       const data = await res.json().catch(() => ({} as any));
//       if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to load projects");

//       const items: Project[] = (data?.items || []) as Project[];
//       setProjects(items.slice(0, 3)); // ✅ max 3
//     } catch (e) {
//       console.error(e);
//       setProjects([]);
//     } finally {
//       setPLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const heroBg = HERO_IMAGES[heroIndex];

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
//       <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* ✅ HERO (Company full name shown + NO search) */}
//       <section className="hero">
//         <div className="hero-bg">
//           <img src={heroBg} alt="home hero" />
//           <div className="hero-overlay" />
//         </div>

//         <div className="container hero-content">
//           <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <span className="badge">TRUST • QUALITY • DELIVERY</span>

//             {/* ✅ Company Name Visible */}
//             <div className="company-name">
//               SHIV SHAKTI REAL ESTATE PRIVATE LIMITED
//             </div>

//             <h1>Premium Residential & Commercial Projects</h1>
//             <p>
//               Verified projects, premium locations, and a smooth buying experience — from inquiry to possession.
//             </p>

//             <div className="hero-cta">
//               <Link className="cta-primary" to="/projects">
//                 Explore Projects <ArrowRight size={18} />
//               </Link>
//               <Link className="cta-ghost" to="/contact">
//                 Book Site Visit <CalendarCheck size={18} />
//               </Link>
//             </div>

//             <div className="hero-highlights">
//               <div className="hl">
//                 <BadgeCheck size={18} />
//                 <span>Trusted Builder</span>
//               </div>
//               <div className="hl">
//                 <KeyRound size={18} />
//                 <span>Ready Guidance</span>
//               </div>
//               <div className="hl">
//                 <Wallet size={18} />
//                 <span>Transparent Pricing</span>
//               </div>
//               <div className="hl">
//                 <MapPin size={18} />
//                 <span>Mumbai</span>
//               </div>
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

//       {/* ✅ STATS (separate section) */}
//       <section className="stats">
//         <div className="container">
//           <div className="stats-card">
//             <StatBox icon={<ShieldCheck size={20} />} value="10+ Years" label="Industry Experience" />
//             <StatBox icon={<Building2 size={20} />} value="100+ Projects" label="Successful Deliveries" />
//             <StatBox icon={<ClipboardCheck size={20} />} value="100+ Clients" label="Happy Clients" />
//           </div>
//         </div>
//       </section>

//       {/* ✅ About Preview (Landing section) */}
//       <section className="section soft">
//   <div className="container">
//     <div className="section-head">
//       <div>
//         <div className="section-kicker">ABOUT US</div>
//         <h2 className="section-title">Building Trust Through Real Estate</h2>
//         <p className="section-p">
//           We are a Mumbai-based real estate company focused on quality construction,
//           timely execution, and long-term customer satisfaction.
//         </p>
//       </div>
//       <Link className="btn-ghost" to="/about">
//         Read More <ArrowRight size={18} />
//       </Link>
//     </div>

//     <div className="about-main">
//       {/* LEFT CONTENT */}
//       <div className="about-content">
//         <p className="about-text">
//           With years of experience in residential development, we believe real estate
//           is not just about buildings — it’s about creating spaces where families grow,
//           invest, and feel secure.
//         </p>

//         <ul className="about-points">
//           <li>✔ Transparent dealings with complete documentation</li>
//           <li>✔ Focus on structural quality & legal clarity</li>
//           <li>✔ Timely project delivery with regular updates</li>
//           <li>✔ Dedicated support from site visit to possession</li>
//         </ul>

//         <div className="about-grid">
//           <div className="about-card">
//             <div className="about-ic"><Landmark size={18} /></div>
//             <div className="about-t">Strong Foundation</div>
//             <div className="about-d">Well-planned execution & quality checks.</div>
//           </div>

//           <div className="about-card">
//             <div className="about-ic"><BadgeCheck size={18} /></div>
//             <div className="about-t">Verified Process</div>
//             <div className="about-d">Clear documentation & transparency.</div>
//           </div>

//           <div className="about-card">
//             <div className="about-ic"><MapPin size={18} /></div>
//             <div className="about-t">Prime Locations</div>
//             <div className="about-d">Well-connected growth-driven areas.</div>
//           </div>

//           <div className="about-card">
//             <div className="about-ic"><KeyRound size={18} /></div>
//             <div className="about-t">Buyer Support</div>
//             <div className="about-d">Guidance from visit to possession.</div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="about-image">
//         <img
//           src="src/images/back1.jpg"
//           alt="Real Estate Construction"
//         />
//       </div>
//     </div>
//   </div>
// </section>


//       {/* ✅ SERVICES Preview (Landing section) */}
//      <section className="section">
//   <div className="container">
//     <div className="section-head">
//       <div>
//         <div className="section-kicker">SERVICES</div>
//         <h2 className="section-title">Everything You Need, All in One Place</h2>
//         <p className="section-p">
//           From inquiry to possession — we support you with complete end-to-end services.
//         </p>
//       </div>
//       <Link className="btn-ghost" to="/services">
//         View Services <ArrowRight size={18} />
//       </Link>
//     </div>

//     <div className="services-main">
//       {/* LEFT CONTENT */}
//       <div className="services-content">
//         <p className="services-text">
//           Buying a property can feel complex — our team simplifies every step by guiding
//           you through consultations, site visits, documentation, and post-sale support.
//         </p>

//         <ul className="services-points">
//           <li>✔ Clear project explanation & availability</li>
//           <li>✔ Hassle-free site visit coordination</li>
//           <li>✔ Documentation & legal guidance</li>
//           <li>✔ Support till possession & handover</li>
//         </ul>

//         <div className="service-grid">
//           <ServiceCard
//             title="Project Consultation"
//             desc="Understand project details, options, and availability."
//           />
//           <ServiceCard
//             title="Site Visit Support"
//             desc="Book site visits and guided walkthroughs easily."
//           />
//           <ServiceCard
//             title="Documentation Guidance"
//             desc="Help with required documents & buying checklist."
//           />
//           <ServiceCard
//             title="After-Sales Assistance"
//             desc="Support till possession & handover process."
//           />
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="services-image">
//         <img
//           src="/src/images/back4.jpg"
//           alt="Real Estate Services"
//         />
//       </div>
//     </div>
//   </div>
// </section>


//       {/* ✅ PROJECTS PREVIEW (Dynamic max 3) */}
//       <section className="section soft">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <div className="section-kicker">PROJECTS</div>
//               <h2 className="section-title">Latest Projects</h2>
//               <p className="section-p">Showing latest projects (max 3). Residential + Commercial mix.</p>
//             </div>
//             <Link className="btn-ghost" to="/projects">Explore All <ArrowRight size={18} /></Link>
//           </div>

//           {pLoading ? (
//             <div className="empty">Loading projects...</div>
//           ) : projects.length === 0 ? (
//             <div className="empty">No projects added yet.</div>
//           ) : (
//             <div className="projects-grid">
//               {projects.map((p) => (
//                 <motion.div
//                   key={p.id}
//                   className="p-card"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="p-img">
//                     <img
//                       src={
//                         p.cover_image_url ||
//                         "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
//                       }
//                       alt={p.title}
//                     />
//                     <div className="p-tags">
//                       <span className="tag">{(p.location || "Location").toUpperCase()}</span>
//                       <span className="tag solid">{(p.category || "type").toUpperCase()}</span>
//                     </div>
//                   </div>

//                   <div className="p-body">
//                     <div className="p-title">{p.title}</div>
//                     <div className="p-sub">
//                       {p.configuration || "—"} • <span className="p-price">{p.price_label || "—"}</span>
//                     </div>
//                     <div className="p-desc">
//                       {(p.short_description || p.description || "").slice(0, 110)}...
//                     </div>

//                     <div className="p-actions">
//                       <Link className="btn-dark small" to="/projects">
//                         View Details <ArrowRight size={16} />
//                       </Link>

//                       {p.brochure_url ? (
//                         <a className="btn-ghost small" href={p.brochure_url} target="_blank" rel="noreferrer">
//                           <Download size={16} /> Brochure
//                         </a>
//                       ) : (
//                         <button className="btn-ghost small" disabled>
//                           <Download size={16} /> Brochure
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ✅ Testimonials / Trust section */}
//       <section className="section">
//         <div className="container">
//           <div className="section-head">
//             <div>
//               <div className="section-kicker">TRUST</div>
//               <h2 className="section-title">Why Customers Choose Us</h2>
//               <p className="section-p">Reliable support, verified projects, and clear communication.</p>
//             </div>
//           </div>

//           <div className="trust-grid">
//             <TrustCard title="Transparent Communication" desc="We keep everything clear and documented for buyers." />
//             <TrustCard title="Quality & Timely Delivery" desc="Focused on quality execution & timely handover." />
//             <TrustCard title="End-to-End Support" desc="We help from inquiry, site visit, booking to possession." />
//           </div>
//         </div>
//       </section>

//       {/* ✅ CONTACT CTA */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-card">
//             <div>
//               <h2>Need Pricing, Availability or Site Visit?</h2>
//               <p>Contact our team for best options and walkthrough scheduling.</p>
//             </div>

//             <div className="cta-actions">
//               <a className="cta-mini" href="tel:+919999999999"><Phone size={18} /> Call Now</a>
//               <a
//                 className="cta-mini green"
//                 href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <MessageSquare size={18} /> WhatsApp
//               </a>
//               <Link className="cta-main" to="/contact">Contact Us <ArrowRight size={18} /></Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ FOOTER */}
//       <footer className="footer">
//         <div className="container footer-grid">
//           <div>
//             <div className="f-brand">SHIV SHAKTI REAL ESTATE PRIVATE LIMITED</div>
//             <div className="f-muted">CIN: U45200MH1999PTC122379 • ROC Mumbai</div>
//             <div className="f-muted" style={{ marginTop: 10 }}>
//               Registered Office: The Capital, A Wing, 6th Floor, No.603-606, Plot No. C-70, G-Block,
//               Bandra Kurla Complex, Bandra East, Mumbai 400051.
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
//               <a href="tel:+919999999999">+91 99999 99999</a>
//               <a href="mailto:secretarial@systematixgroup.in">secretarial@systematixgroup.in</a>
//               <a
//                 href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

// function ServiceCard({ title, desc }: { title: string; desc: string }) {
//   return (
//     <motion.div className="svc" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
//       <div className="svc-ic"><Sparkles size={18} /></div>
//       <div className="svc-t">{title}</div>
//       <div className="svc-d">{desc}</div>
//     </motion.div>
//   );
// }

// function TrustCard({ title, desc }: { title: string; desc: string }) {
//   return (
//     <motion.div className="trust" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
//       <div className="trust-ic"><CheckCircle2 size={18} /></div>
//       <div className="trust-t">{title}</div>
//       <div className="trust-d">{desc}</div>
//     </motion.div>
//   );
// }

// function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
//   return (
    
//     <style
    
//       dangerouslySetInnerHTML={{
        
//         __html: `
//        html {
//   font-size: 16px;   /* ❗ base hamesha 16 hi rakho */
// }

// body {
//   font-size: 16px;
//   line-height: 1.75;
// }


      
//       * { box-sizing:border-box; }
//       .container { width: min(1200px, 94vw); margin: 0 auto; }
//       .empty{ background:white; border:1px solid #eee; border-radius:16px; padding: 26px; text-align:center; color:#555; font-weight:900; }

//       /* HEADER */
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
//         min-width: 220px;
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

//       .nav{
//         display:flex; align-items:center; gap: 22px;
//         flex: 1;
//         justify-content:center;
//       }
//       .nav-link{
//         color: rgba(255,255,255,0.88);
//         text-decoration:none;
//         font-weight: 900;
//         font-size: 12px;
//         letter-spacing: 1px;
//         white-space: nowrap;
//       }
//       .nav-link:hover{ color: white; }
//       .nav-link.active{ color: white; }

//       .right-actions{
//         display:flex;
//         align-items:center;
//         gap: 10px;
//         min-width: 160px;
//         justify-content: flex-end;
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
// .hamburger{
//   display:none;
//   border: 1px solid rgba(255,255,255,0.18);
//   background: rgba(255,255,255,0.10);
//   color:white;
//   width: 42px;
//   height: 42px;
//   border-radius: 12px;
//   cursor:pointer;
//   align-items:center;
//   justify-content:center;
//   padding: 0;
// }


//       /* drawer */
//       .drawer-overlay{
//         position: fixed; inset:0;
//         background: rgba(0,0,0,0.5);
//         z-index: 2800;
//         opacity:0; pointer-events:none;
//         transition: 0.25s;
//       }
//       .drawer-overlay.show{ opacity:1; pointer-events:auto; }
//       .drawer{
//         position: fixed; top: 0; right: 0;
//         height: 100vh;
//         width: min(360px, 86vw);
//         background: #0e0e0e;
//         z-index: 2900;
//         transform: translateX(110%);
//         transition: transform 0.25s;
//         border-left: 1px solid rgba(255,255,255,0.08);
//         padding: 16px;
//         display:flex; flex-direction:column; gap: 14px;
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
//         display:flex; align-items:center; gap: 10px;
//         color: rgba(255,255,255,0.92);
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
//         display:flex; flex-direction:column; gap: 8px;
//       }
//       .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 11px; letter-spacing:0.8px; text-transform:uppercase; }
//       .df-link{ color: white; text-decoration:none; font-weight: 900; }

//       /* HERO */
//       .hero{
//         position: relative;
//         min-height: 640px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         color: white;
//         overflow:hidden;
//         padding-top: 76px;
//       }
//       .hero-bg{ position:absolute; inset:0; }
//       .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
//       .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.78)); }
//       .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 12px; }

//       .badge { background: ${brand}; padding: 6px 16px; border-radius: 999px; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing:1px; display:inline-block; }
//       .company-name{
//         margin-top: 14px;
//         font-size: 14px;
//         letter-spacing: 1px;
//         font-weight: 1000;
//         color: rgba(255,255,255,0.95);
//       }
//       .hero h1 {
//   font-size: clamp(32px, 4.5vw, 60px);
//   font-weight: 1200;
// }

//      .hero p {
//   font-size: 17px;
//   line-height: 1.8;
// }


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

//       .hero-highlights{
//         margin-top: 18px;
//         display:flex;
//         justify-content:center;
//         gap: 10px;
//         flex-wrap:wrap;
//       }
//       .hl{
//         display:flex; align-items:center; gap: 8px;
//         background: rgba(255,255,255,0.12);
//         border: 1px solid rgba(255,255,255,0.22);
//         padding: 10px 12px;
//         border-radius: 999px;
//         font-weight: 900;
//         font-size: 12px;
//       }

//       .dots{ display:flex; gap:10px; justify-content:center; margin-top: 18px; }
//       .dot{ width: 44px; height: 12px; border-radius: 999px; border:1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.16); cursor:pointer; }
//       .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

//       /* STATS */
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

//       /* sections */
//       .section{ padding: 56px 0; }
//       .section.soft{ background: #ffffff; border-top:1px solid #eee; border-bottom:1px solid #eee; }
//       .section-kicker{ color:${brand}; font-weight: 1000; letter-spacing: 1px; font-size: 12px; text-transform: uppercase; }
//       .section-title {
//   font-size: 36px;
//   line-height: 1.3;
// }
// .section-p {
//   font-size: 17px;
//   line-height: 1.85;
// }



//       .section-head{
//         display:flex;
//         align-items:flex-end;
//         justify-content:space-between;
//         gap: 14px;
//         flex-wrap:wrap;
//         margin-bottom: 16px;
//       }
//       .btn-ghost{
//         display:inline-flex; align-items:center; gap:10px;
//         background:white;
//         color:${ink};
//         text-decoration:none;
//         padding: 12px 14px;
//         border-radius: 14px;
//         font-weight: 1000;
//         border: 1px solid #eee;
//       }
//       .btn-dark{
//         display:inline-flex; align-items:center; gap:10px;
//         background:${ink};
//         color:white;
//         text-decoration:none;
//         padding: 12px 14px;
//         border-radius: 14px;
//         font-weight: 1000;
//       }
//       .btn-dark.small, .btn-ghost.small{ padding: 10px 12px; border-radius: 12px; }

//       /* about grid */
//       .about-grid{
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//         gap: 14px;
//         margin-top: 14px;
//       }
//         .about-main {
//   display: grid;
//   grid-template-columns: 1.1fr 0.9fr;
//   gap: 48px;
//   align-items: flex-start;   /* 🔴 center se flex-start */
//   margin-top: 32px;
// }

// .services-text {
//   font-size: 17px;
//   line-height: 1.8;
// }


// /* RIGHT IMAGE */
// .about-image {
//   display: flex;
//   align-items: flex-start;   /* 🔴 image top se align */
// }

// .about-image img {
//   width: 100%;
//   max-height: 520px;
//   object-fit: cover;
//   border-radius: 18px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
// }

// /* CARDS spacing thoda tight */
// .about-grid {
//   margin-top: 20px;
// }

// /* RESPONSIVE */
// @media (max-width: 900px) {
//   .about-main {
//     grid-template-columns: 1fr;
//   }

//   .about-image {
//     order: -1;
//     margin-bottom: 24px;
//   }
// }

//       .about-card{
//         background:white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 16px;
//         box-shadow: 0 12px 28px rgba(0,0,0,0.05);
//       }
//       .about-ic{
//         width: 44px; height: 44px;
//         border-radius: 14px;
//         background: #fff7ed;
//         border: 1px solid #ffedd5;
//         color: ${brand};
//         display:flex; align-items:center; justify-content:center;
//         margin-bottom: 10px;
//       }
//       .about-t,
// .svc-t,
// .trust-t {
//   font-size: 16.5px;
// }

//       .about-d,
// .svc-d,
// .trust-d {
//   font-size: 14.5px;
//   line-height: 1.7;
// }


//       /* services */
//       .service-grid{
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//         gap: 14px;
//         margin-top: 14px;
//       }
//       .svc{
//         background:white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 16px;
//         box-shadow: 0 12px 28px rgba(0,0,0,0.05);
//       }
//         .services-main {
//   display: grid;
//   grid-template-columns: 1.1fr 0.9fr;
//   gap: 48px;
//   align-items: flex-start;
//   margin-top: 32px;
// }

// .services-content {
//   display: flex;
//   flex-direction: column;
//   gap: 18px;
// }

// .services-text {
//   font-size: 17px;
//   line-height: 1.7;
//   color: #555;
// }

// .services-points {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }
// .about-points li,
// .services-points li {
//   font-size: 15.5px;
//   line-height: 1.7;
// }


// .services-image {
//   display: flex;
//   align-items: flex-start;
// }

// .services-image img {
//   width: 100%;
//   max-height: 520px;
//   object-fit: cover;
//   border-radius: 18px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
// }

// /* spacing refinement */
// .service-grid {
//   margin-top: 20px;
// }

// /* RESPONSIVE */
// @media (max-width: 900px) {
//   .services-main {
//     grid-template-columns: 1fr;
//   }

//   .services-image {
//     order: -1;
//     margin-bottom: 24px;
//   }
// }

//       .svc-ic{
//         width: 44px; height: 44px;
//         border-radius: 14px;
//         background: #fff7ed;
//         border: 1px solid #ffedd5;
//         color: ${brand};
//         display:flex; align-items:center; justify-content:center;
//         margin-bottom: 10px;
//       }
//       .svc-t{ font-weight: 1100; color:${ink}; }
//       .svc-d{ margin-top: 8px; color:#667; font-weight: 780; line-height: 1.65; font-size: 13px; }

//       /* projects preview */
//       .projects-grid{
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//         gap: 16px;
//         margin-top: 14px;
//       }
//       .p-card{
//         background:white;
//         border: 1px solid #eee;
//         border-radius: 18px;
//         overflow:hidden;
//         box-shadow: 0 12px 32px rgba(0,0,0,0.07);
//       }
//       .p-img{ height: 220px; position:relative; background:#111; }
//       .p-img img{ width:100%; height:100%; object-fit:cover; display:block; }
//       .p-tags{ position:absolute; top: 12px; left: 12px; right: 12px; display:flex; justify-content:space-between; gap: 10px; }
//       .tag{
//         background: rgba(255,255,255,0.92);
//         padding: 6px 10px;
//         border-radius: 999px;
//         font-weight: 1000;
//         font-size: 11px;
//       }
//       .tag.solid{
//         background: ${brand};
//         color:white;
//       }
//       .p-body{ padding: 16px; }
//       .p-title{ font-weight: 1100; color:${ink}; font-size: 16px; }
//       .p-sub{ margin-top: 8px; color:#667; font-weight: 900; font-size: 13px; }
//       .p-price{ color:${brand}; }
//       .p-desc{ margin-top: 10px; color:#556; line-height: 1.7; font-weight: 780; font-size: 13px; }
//       .p-actions{ display:flex; gap: 10px; flex-wrap:wrap; margin-top: 12px; }

//       /* trust */
//       .trust-grid{
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//         gap: 14px;
//         margin-top: 14px;
//       }
//       .trust{
//         background:white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 16px;
//         box-shadow: 0 12px 28px rgba(0,0,0,0.05);
//       }
//       .trust-ic{
//         width: 44px; height: 44px;
//         border-radius: 14px;
//         background: #fff7ed;
//         border: 1px solid #ffedd5;
//         color: ${brand};
//         display:flex; align-items:center; justify-content:center;
//         margin-bottom: 10px;
//       }
//       .trust-t{ font-weight: 1100; color:${ink}; }
//       .trust-d{ margin-top: 8px; color:#667; font-weight: 780; line-height: 1.65; font-size: 13px; }

//       /* CTA section */
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

//       /* Footer */
//       .footer{ background:${dark}; color:#c9c9c9; padding: 44px 0 22px; margin-top: 10px; }
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

//       /* ✅ responsive */
//       @media (max-width: 980px){
//         .nav{ display:none; }
//         .hamburger{ display:flex; }
//         .stats-card{ grid-template-columns: 1fr; }
//         .footer-grid{ grid-template-columns: 1fr; }
//         .cta{ display:none; }
//       }

//       @media (max-width: 420px){
//         .brand{ min-width: 180px; }
//         .brand-title{ font-size: 14px; }
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
import API_BASE from "./Api";
import {
  Menu,
  X,
  ArrowRight,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Phone,
  MessageSquare,
  Download,
  User,
  CheckCircle2,
  Home as HomeIcon,
  Landmark,
  Sparkles,
  MapPin,
  BadgeCheck,
  KeyRound,
  Wallet,
  CalendarCheck,
} from "lucide-react";

const THEME = {
  ink: "#0B1220",
  dark: "#111111",
  soft: "#F6F7FB",
  brand: "#B35900",
};

const HERO_IMAGES = [
  "src/images/back1.jpg",
  "src/images/back2.jpg",
  "src/images/back3.jpg",
  "src/images/back4.jpg",
  "src/images/back5.jpg",
  "src/images/back6.jpg",
];

type Project = {
  id: number;
  title: string;
  slug: string;
  category: "residential" | "commercial";
  location: string;
  configuration: string;
  price_label: string;
  short_description: string;
  description: string;
  cover_image_url: string;
  brochure_url?: string;
  created_at?: string;
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
              <div className="brand-title">SHIVSHAKTI REAL ESTATE</div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav center">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/">
              HOME
            </Link>
            <Link
              className={isActive("/projects") ? "nav-link active" : "nav-link"}
              to="/projects"
            >
              PROJECTS
            </Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about">
              ABOUT
            </Link>
            <Link
              className={isActive("/services") ? "nav-link active" : "nav-link"}
              to="/services"
            >
              SERVICES
            </Link>
            <Link
              className={isActive("/contact") ? "nav-link active" : "nav-link"}
              to="/contact"
            >
              CONTACT
            </Link>

            {/* ✅ Admin login */}
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login">
              ADMIN LOGIN
            </Link>
          </nav>

          <div className="right-actions">
            <Link className="cta" to="/contact">
              GET QUOTE
            </Link>

            {/* ✅ Mobile menu */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
      <aside className={menuOpen ? "drawer show" : "drawer"}>
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
          <Link
            className={isActive("/projects") ? "dlink active" : "dlink"}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            <Building2 size={20} /> Projects
          </Link>
          <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
            <FileText size={20} /> About
          </Link>
          <Link
            className={isActive("/services") ? "dlink active" : "dlink"}
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            <Sparkles size={20} /> Services
          </Link>
          <Link
            className={isActive("/contact") ? "dlink active" : "dlink"}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={20} /> Contact
          </Link>

          <Link
            className={isActive("/login") ? "dlink active" : "dlink"}
            to="/login"
            onClick={() => setMenuOpen(false)}
          >
            <User size={20} /> Admin Login
          </Link>

          <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
            Get Quote
          </Link>
        </div>

        <div className="drawer-foot">
          <div className="df-muted">Quick Actions</div>
          <a className="df-link" href="tel:+919999999999">Call Us</a>
          <a
            className="df-link"
            href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // hero slider
  const [heroIndex, setHeroIndex] = useState(0);

  // projects preview
  const [projects, setProjects] = useState<Project[]>([]);
  const [pLoading, setPLoading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  const loadProjects = async () => {
    setPLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/projects/`);
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to load projects");

      const items: Project[] = (data?.items || []) as Project[];
      setProjects(items.slice(0, 3)); // ✅ max 3
    } catch (e) {
      console.error(e);
      setProjects([]);
    } finally {
      setPLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const heroBg = HERO_IMAGES[heroIndex];

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ✅ HERO (Company full name shown + NO search) */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="home hero" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">TRUST • QUALITY • DELIVERY</span>

            {/* ✅ Company Name Visible */}
            <div className="company-name">
              SHIV SHAKTI REAL ESTATE PRIVATE LIMITED
            </div>

            <h1>Premium Residential & Commercial Projects</h1>
            <p>
              Verified projects, premium locations, and a smooth buying experience — from inquiry to possession.
            </p>

            <div className="hero-cta">
              <Link className="cta-primary" to="/projects">
                Explore Projects <ArrowRight size={20} />
              </Link>
              <Link className="cta-ghost" to="/contact">
                Book Site Visit <CalendarCheck size={20} />
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="hl">
                <BadgeCheck size={20} />
                <span>Trusted Builder</span>
              </div>
              <div className="hl">
                <KeyRound size={20} />
                <span>Ready Guidance</span>
              </div>
              <div className="hl">
                <Wallet size={20} />
                <span>Transparent Pricing</span>
              </div>
              <div className="hl">
                <MapPin size={20} />
                <span>Mumbai</span>
              </div>
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

      {/* ✅ STATS (separate section) */}
      <section className="stats">
        <div className="container">
          <div className="stats-card">
            <StatBox icon={<ShieldCheck size={24} />} value="10+ Years" label="Industry Experience" />
            <StatBox icon={<Building2 size={24} />} value="100+ Projects" label="Successful Deliveries" />
            <StatBox icon={<ClipboardCheck size={24} />} value="100+ Clients" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* ✅ About Preview (Landing section) */}
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">ABOUT US</div>
              <h2 className="section-title">Building Trust Through Real Estate</h2>
              <p className="section-p">
                We are a Mumbai-based real estate company focused on quality construction,
                timely execution, and long-term customer satisfaction.
              </p>
            </div>
            <Link className="btn-ghost" to="/about">
              Read More <ArrowRight size={20} />
            </Link>
          </div>

          <div className="about-main">
            {/* LEFT CONTENT */}
            <div className="about-content">
              <p className="about-text">
                With years of experience in residential development, we believe real estate
                is not just about buildings — it's about creating spaces where families grow,
                invest, and feel secure.
              </p>

              <ul className="about-points">
                <li> Transparent dealings with complete documentation</li>
                <li> Focus on structural quality & legal clarity</li>
                <li> Timely project delivery with regular updates</li>
                <li> Dedicated support from site visit to possession</li>
              </ul>

              <div className="about-grid">
                <div className="about-card">
                  <div className="about-ic"><Landmark size={20} /></div>
                  <div className="about-t">Strong Foundation</div>
                  <div className="about-d">Well-planned execution & quality checks.</div>
                </div>

                <div className="about-card">
                  <div className="about-ic"><BadgeCheck size={20} /></div>
                  <div className="about-t">Verified Process</div>
                  <div className="about-d">Clear documentation & transparency.</div>
                </div>

                <div className="about-card">
                  <div className="about-ic"><MapPin size={20} /></div>
                  <div className="about-t">Prime Locations</div>
                  <div className="about-d">Well-connected growth-driven areas.</div>
                </div>

                <div className="about-card">
                  <div className="about-ic"><KeyRound size={20} /></div>
                  <div className="about-t">Buyer Support</div>
                  <div className="about-d">Guidance from visit to possession.</div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-image">
              <img
                src="src/images/back1.jpg"
                alt="Real Estate Construction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES Preview (Landing section) */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">SERVICES</div>
              <h2 className="section-title">Everything You Need, All in One Place</h2>
              <p className="section-p">
                From inquiry to possession — we support you with complete end-to-end services.
              </p>
            </div>
            <Link className="btn-ghost" to="/services">
              View Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="services-main">
            {/* LEFT CONTENT */}
            <div className="services-content">
              <p className="services-text">
                Buying a property can feel complex — our team simplifies every step by guiding
                you through consultations, site visits, documentation, and post-sale support.
              </p>

              <ul className="services-points">
                <li> Clear project explanation & availability</li>
                <li> Hassle-free site visit coordination</li>
                <li> Documentation & legal guidance</li>
                <li> Support till possession & handover</li>
              </ul>

              <div className="service-grid">
                <ServiceCard
                  title="Project Consultation"
                  desc="Understand project details, options, and availability."
                />
                <ServiceCard
                  title="Site Visit Support"
                  desc="Book site visits and guided walkthroughs easily."
                />
                <ServiceCard
                  title="Documentation Guidance"
                  desc="Help with required documents & buying checklist."
                />
                <ServiceCard
                  title="After-Sales Assistance"
                  desc="Support till possession & handover process."
                />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="services-image">
              <img
                src="/src/images/back4.jpg"
                alt="Real Estate Services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ PROJECTS PREVIEW (Dynamic max 3) */}
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">PROJECTS</div>
              <h2 className="section-title">Latest Projects</h2>
              <p className="section-p">Showing latest projects (max 3). Residential + Commercial mix.</p>
            </div>
            <Link className="btn-ghost" to="/projects">Explore All <ArrowRight size={20} /></Link>
          </div>

          {pLoading ? (
            <div className="empty">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="empty">No projects added yet.</div>
          ) : (
            <div className="projects-grid">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  className="p-card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-img">
                    <img
                      src={
                        p.cover_image_url ||
                        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
                      }
                      alt={p.title}
                    />
                    <div className="p-tags">
                      <span className="tag">{(p.location || "Location").toUpperCase()}</span>
                      <span className="tag solid">{(p.category || "type").toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="p-body">
                    <div className="p-title">{p.title}</div>
                    <div className="p-sub">
                      {p.configuration || "—"} • <span className="p-price">{p.price_label || "—"}</span>
                    </div>
                    <div className="p-desc">
                      {(p.short_description || p.description || "").slice(0, 110)}...
                    </div>

                    <div className="p-actions">
                      <Link className="btn-dark small" to="/projects">
                        View Details <ArrowRight size={18} />
                      </Link>

                      {p.brochure_url ? (
                        <a className="btn-ghost small" href={p.brochure_url} target="_blank" rel="noreferrer">
                          <Download size={18} /> Brochure
                        </a>
                      ) : (
                        <button className="btn-ghost small" disabled>
                          <Download size={18} /> Brochure
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ Testimonials / Trust section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">TRUST</div>
              <h2 className="section-title">Why Customers Choose Us</h2>
              <p className="section-p">Reliable support, verified projects, and clear communication.</p>
            </div>
          </div>

          <div className="trust-grid">
            <TrustCard title="Transparent Communication" desc="We keep everything clear and documented for buyers." />
            <TrustCard title="Quality & Timely Delivery" desc="Focused on quality execution & timely handover." />
            <TrustCard title="End-to-End Support" desc="We help from inquiry, site visit, booking to possession." />
          </div>
        </div>
      </section>

      {/* ✅ CONTACT CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Need Pricing, Availability or Site Visit?</h2>
              <p>Contact our team for best options and walkthrough scheduling.</p>
            </div>

            <div className="cta-actions">
              <a className="cta-mini" href="tel:+919999999999"><Phone size={20} /> Call Now</a>
              <a
                className="cta-mini green"
                href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={20} /> WhatsApp
              </a>
              <Link className="cta-main" to="/contact">Contact Us <ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="f-brand">SHIV SHAKTI REAL ESTATE PRIVATE LIMITED</div>
            <div className="f-muted">CIN: U45200MH1999PTC122379 • ROC Mumbai</div>
            <div className="f-muted" style={{ marginTop: 10 }}>
              Registered Office: The Capital, A Wing, 6th Floor, No.603-606, Plot No. C-70, G-Block,
              Bandra Kurla Complex, Bandra East, Mumbai 400051.
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
              <a href="tel:+919999999999">+91 99999 99999</a>
              <a href="mailto:secretarial@systematixgroup.in">secretarial@systematixgroup.in</a>
              <a
                href={`https://wa.me/919999999999?text=Hi%20I%20want%20details%20about%20your%20projects`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div className="container f-bottom">
          <p>© {new Date().getFullYear()} Shiv Shakti Real Estate Private Limited. All rights reserved.</p>
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

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div className="svc" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <div className="svc-ic"><Sparkles size={20} /></div>
      <div className="svc-t">{title}</div>
      <div className="svc-d">{desc}</div>
    </motion.div>
  );
}

function TrustCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div className="trust" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <div className="trust-ic"><CheckCircle2 size={20} /></div>
      <div className="trust-t">{title}</div>
      <div className="trust-d">{desc}</div>
    </motion.div>
  );
}

function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      * { box-sizing:border-box; margin:0; padding:0; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #333; }
      .container { width: min(1200px, 94vw); margin: 0 auto; }
      .empty{ background:white; border:1px solid #eee; border-radius:16px; padding: 32px; text-align:center; color:#555; font-weight:900; font-size: 16px; }

      /* HEADER */
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
      .brand-title{ font-weight: 1000; letter-spacing: 0.8px; font-size: 18px; }
      .brand-sub{ font-weight: 900; font-size: 12px; letter-spacing: 2px; opacity: 0.85; }

      .nav{
        display:flex; align-items:center; gap: 24px;
        flex: 1;
        justify-content:center;
      }
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
        justify-content: flex-end;
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
      .hamburger{
        display:none;
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.10);
        color:white;
        width: 46px;
        height: 46px;
        border-radius: 12px;
        cursor:pointer;
        align-items:center;
        justify-content:center;
        padding: 0;
      }

      /* drawer */
      .drawer-overlay{
        position: fixed; inset:0;
        background: rgba(0,0,0,0.5);
        z-index: 2800;
        opacity:0; pointer-events:none;
        transition: 0.25s;
      }
      .drawer-overlay.show{ opacity:1; pointer-events:auto; }
      .drawer{
        position: fixed; top: 0; right: 0;
        height: 100dvh;
        max-height: 100vh;
        overflow-y: auto;
        width: min(380px, 86vw);
        background: #0e0e0e;
        z-index: 2900;
        transform: translateX(100%);
        transition: transform 0.25s;
        border-left: 1px solid rgba(255,255,255,0.08);
        padding: 20px;
        display:flex; flex-direction:column; gap: 16px;
      }
      .drawer.show{ transform: translateX(0); }
      .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
      .drawer-title{ color:white; font-weight: 1000; letter-spacing:0.7px; font-size: 18px; }
      .drawer-close{
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.10);
        color:white;
        width: 42px; height: 42px;
        border-radius: 12px;
        cursor:pointer;
        display:flex; align-items:center; justify-content:center;
      }
      .drawer-links{ display:flex; flex-direction:column; gap: 12px; margin-top: 8px; }
      .dlink{
        display:flex; align-items:center; gap: 12px;
        color: rgba(255,255,255,0.92);
        text-decoration:none;
        padding: 14px 16px;
        border-radius: 12px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        font-weight: 900;
        font-size: 15px;
      }
      .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
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
        display:flex; flex-direction:column; gap: 10px;
      }
      .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 12px; letter-spacing:0.8px; text-transform:uppercase; }
      .df-link{ color: white; text-decoration:none; font-weight: 900; font-size: 15px; }

      /* HERO */
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
      .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.78)); }
      .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 16px; }

      .badge { background: ${brand}; padding: 8px 20px; border-radius: 999px; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing:1px; display:inline-block; }
      .company-name{
        margin-top: 18px;
        font-size: 16px;
        letter-spacing: 1.2px;
        font-weight: 1000;
        color: rgba(255,255,255,0.95);
      }
      .hero h1 {
        font-size: clamp(40px, 5vw, 68px);
        font-weight: 1200;
        line-height: 1.2;
        margin: 16px 0;
      }
      .hero p {
        font-size: 18px;
        line-height: 1.7;
        max-width: 800px;
        margin: 0 auto 24px;
        color: rgba(255,255,255,0.9);
      }
      .hero-cta{ display:flex; gap: 16px; justify-content:center; flex-wrap:wrap; margin-top: 24px; }
      .cta-primary{
        background: ${brand};
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; align-items:center; gap: 12px;
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
        display:flex; align-items:center; gap: 12px;
        font-size: 16px;
      }

      .hero-highlights{
        margin-top: 24px;
        display:flex;
        justify-content:center;
        gap: 12px;
        flex-wrap:wrap;
      }
      .hl{
        display:flex; align-items:center; gap: 10px;
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.22);
        padding: 12px 16px;
        border-radius: 999px;
        font-weight: 900;
        font-size: 14px;
      }

      .dots{ display:flex; gap:12px; justify-content:center; margin-top: 24px; }
      .dot{ width: 50px; height: 14px; border-radius: 999px; border:1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.16); cursor:pointer; }
      .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

      /* STATS */
      .stats{ padding: 32px 0 16px; }
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
        width: 52px; height: 52px;
        margin: 0 auto 12px;
        border-radius: 16px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        color: ${brand};
        display:flex; align-items:center; justify-content:center;
      }
      .stat-v{ font-weight: 1100; font-size: 24px; color:${ink}; margin-bottom: 4px; }
      .stat-l{ color:#667; font-weight: 850; font-size: 15px; }

      /* sections */
      .section{ padding: 72px 0; }
      .section.soft{ background: #ffffff; border-top:1px solid #eee; border-bottom:1px solid #eee; }
      .section-kicker{ color:${brand}; font-weight: 1000; letter-spacing: 1.2px; font-size: 14px; text-transform: uppercase; margin-bottom: 8px; }
      .section-title {
        font-size: 42px;
        line-height: 1.3;
        color: ${ink};
        margin-bottom: 16px;
      }
      .section-p {
        font-size: 18px;
        line-height: 1.7;
        color: #555;
        max-width: 800px;
      }

      .section-head{
        display:flex;
        align-items:flex-end;
        justify-content:space-between;
        gap: 20px;
        flex-wrap:wrap;
        margin-bottom: 24px;
      }
      .btn-ghost{
        display:inline-flex; align-items:center; gap:12px;
        background:white;
        color:${ink};
        text-decoration:none;
        padding: 14px 20px;
        border-radius: 14px;
        font-weight: 1000;
        border: 1px solid #eee;
        font-size: 15px;
      }
      .btn-dark{
        display:inline-flex; align-items:center; gap:12px;
        background:${ink};
        color:white;
        text-decoration:none;
        padding: 14px 20px;
        border-radius: 14px;
        font-weight: 1000;
        font-size: 15px;
      }
      .btn-dark.small, .btn-ghost.small{ padding: 12px 16px; border-radius: 12px; font-size: 14px; }

      /* about grid */
      .about-grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .about-main {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 60px;
        align-items: flex-start;
        margin-top: 40px;
      }
      .about-text {
        font-size: 18px;
        line-height: 1.7;
        color: #555;
        margin-bottom: 24px;
      }
      .about-points {
        list-style: none;
        padding: 0;
        margin: 0 0 24px 0;
      }
      .about-points li {
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 10px;
        color: #444;
      }
      .about-points li:before {
        content: "✔";
        color: ${brand};
        font-weight: bold;
        margin-right: 10px;
      }

      /* RIGHT IMAGE */
      .about-image {
        display: flex;
        align-items: flex-start;
      }
      .about-image img {
        width: 100%;
        max-height: 560px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      }

      .about-card{
        background:white;
        border: 1px solid #eee;
        border-radius: 18px;
        padding: 20px;
        box-shadow: 0 12px 28px rgba(0,0,0,0.05);
      }
      .about-ic{
        width: 52px; height: 52px;
        border-radius: 16px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        color: ${brand};
        display:flex; align-items:center; justify-content:center;
        margin-bottom: 14px;
      }
      .about-t{
        font-weight: 1100; 
        color:${ink}; 
        font-size: 18px;
        margin-bottom: 8px;
      }
      .about-d{
        color:#667; 
        font-weight: 780; 
        line-height: 1.6; 
        font-size: 15px;
      }

      /* services */
      .service-grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .svc{
        background:white;
        border: 1px solid #eee;
        border-radius: 18px;
        padding: 20px;
        box-shadow: 0 12px 28px rgba(0,0,0,0.05);
      }
      .services-main {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 60px;
        align-items: flex-start;
        margin-top: 40px;
      }
      .services-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .services-text {
        font-size: 18px;
        line-height: 1.7;
        color: #555;
      }
      .services-points {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .services-points li {
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 10px;
        color: #444;
      }
      .services-points li:before {
        content: "✔";
        color: ${brand};
        font-weight: bold;
        margin-right: 10px;
      }

      .services-image {
        display: flex;
        align-items: flex-start;
      }
      .services-image img {
        width: 100%;
        max-height: 560px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      }

      .svc-ic{
        width: 52px; height: 52px;
        border-radius: 16px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        color: ${brand};
        display:flex; align-items:center; justify-content:center;
        margin-bottom: 14px;
      }
      .svc-t{ 
        font-weight: 1100; 
        color:${ink}; 
        font-size: 18px;
        margin-bottom: 8px;
      }
      .svc-d{ 
        color:#667; 
        font-weight: 780; 
        line-height: 1.6; 
        font-size: 15px; 
      }

      /* projects preview */
      .projects-grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .p-card{
        background:white;
        border: 1px solid #eee;
        border-radius: 20px;
        overflow:hidden;
        box-shadow: 0 12px 32px rgba(0,0,0,0.07);
      }
      .p-img{ height: 240px; position:relative; background:#111; }
      .p-img img{ width:100%; height:100%; object-fit:cover; display:block; }
      .p-tags{ position:absolute; top: 16px; left: 16px; right: 16px; display:flex; justify-content:space-between; gap: 12px; }
      .tag{
        background: rgba(255,255,255,0.92);
        padding: 8px 14px;
        border-radius: 999px;
        font-weight: 1000;
        font-size: 12px;
      }
      .tag.solid{
        background: ${brand};
        color:white;
      }
      .p-body{ padding: 24px; }
      .p-title{ font-weight: 1100; color:${ink}; font-size: 20px; margin-bottom: 8px; }
      .p-sub{ color:#667; font-weight: 900; font-size: 15px; margin-bottom: 12px; }
      .p-price{ color:${brand}; }
      .p-desc{ color:#556; line-height: 1.6; font-weight: 780; font-size: 15px; margin-bottom: 16px; }
      .p-actions{ display:flex; gap: 12px; flex-wrap:wrap; }

      /* trust */
      .trust-grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .trust{
        background:white;
        border: 1px solid #eee;
        border-radius: 18px;
        padding: 20px;
        box-shadow: 0 12px 28px rgba(0,0,0,0.05);
      }
      .trust-ic{
        width: 52px; height: 52px;
        border-radius: 16px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        color: ${brand};
        display:flex; align-items:center; justify-content:center;
        margin-bottom: 14px;
      }
      .trust-t{ 
        font-weight: 1100; 
        color:${ink}; 
        font-size: 18px;
        margin-bottom: 8px;
      }
      .trust-d{ 
        color:#667; 
        font-weight: 780; 
        line-height: 1.6; 
        font-size: 15px; 
      }

      /* CTA section */
      .cta-section{ padding: 16px 0 80px; }
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
      .cta-card h2{ margin: 0; font-size: 28px; font-weight: 1100; line-height: 1.3; }
      .cta-card p{ margin: 12px 0 0; color: rgba(255,255,255,0.85); font-weight: 780; font-size: 17px; }

      .cta-actions{ display:flex; gap: 12px; flex-wrap:wrap; }
      .cta-mini{
        border: 1px solid rgba(255,255,255,0.22);
        background: rgba(255,255,255,0.10);
        color: white;
        text-decoration:none;
        padding: 14px 18px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; align-items:center; gap: 12px;
        font-size: 15px;
      }
      .cta-mini.green{ background: #00c853; border-color: #00c853; }
      .cta-main{
        background: ${brand};
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:flex; align-items:center; gap: 12px;
        font-size: 16px;
      }

      /* Footer */
      .footer{ background:${dark}; color:#c9c9c9; padding: 60px 0 30px; margin-top: 20px; }
      .footer-grid{
        display:grid;
        grid-template-columns: 1.4fr 0.8fr 0.8fr;
        gap: 24px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(255,255,255,0.10);
      }
      .f-brand{ color:white; font-weight: 1100; font-size: 20px; letter-spacing: 0.8px; margin-bottom: 12px; }
      .f-title{ color:white; font-weight: 1000; letter-spacing: 0.8px; font-size: 14px; text-transform:uppercase; margin-bottom: 12px; }
      .f-muted{ color: rgba(255,255,255,0.7); font-weight: 780; line-height: 1.6; font-size: 15px; }
      .f-links{ display:flex; flex-direction:column; gap: 10px; }
      .f-links a{ color:#ddd; text-decoration:none; font-weight: 850; font-size: 15px; }
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
      .f-mini{ display:flex; gap: 12px; align-items:center; }
      .f-mini a{ color:#ddd; text-decoration:none; font-weight: 850; font-size: 14px; }

      /* ✅ responsive */
      @media (max-width: 1100px){
        .about-main,
        .services-main {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .about-image,
        .services-image {
          order: -1;
          margin-bottom: 30px;
        }
        .about-image img,
        .services-image img {
          max-height: 400px;
        }
      }

      @media (max-width: 980px){
        .nav{ display:none; }
        .hamburger{ display:flex; }
        .stats-card{ grid-template-columns: 1fr; }
        .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
        .cta{ display:none; }
        .projects-grid{ grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
      }

      @media (max-width: 768px){
        .section{ padding: 60px 0; }
        .section-title{ font-size: 34px; }
        .section-p{ font-size: 17px; }
        .hero h1{ font-size: 36px; }
        .hero p{ font-size: 17px; }
        .hero-highlights{ justify-content: center; }
        .hl{ font-size: 13px; }
        .cta-card{ padding: 24px; }
        .cta-card h2{ font-size: 24px; }
        .hero-cta{ flex-direction: column; align-items: center; }
        .cta-primary, .cta-ghost{ width: 100%; justify-content: center; }
      }

      @media (max-width: 480px){
        .brand{ min-width: 200px; }
        .brand-title{ font-size: 16px; }
        .brand-sub{ font-size: 10px; }
        .section-title{ font-size: 28px; }
        .hero h1{ font-size: 32px; }
        .hero p{ font-size: 16px; }
        .projects-grid{ grid-template-columns: 1fr; }
        .p-card{ margin-bottom: 20px; }
        .f-bottom{ flex-direction: column; text-align: center; gap: 12px; }
      }
        /* 🔧 FIX: Small mobiles (300px–400px only) */
@media (max-width: 400px) {
  .drawer {
    width: 100vw;          /* full screen */
    max-width: 100vw;
    padding: 14px;         /* reduce padding */
    transform: translateX(100%);
  }

  .dlink {
    font-size: 14px;       /* thoda compact */
    padding: 12px 14px;
  }

  .dcta {
    padding: 12px 14px;
    font-size: 14px;
  }
}

    `,
      }}
    />
  );
}
