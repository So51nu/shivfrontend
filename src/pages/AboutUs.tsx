// 'use client';

// import React, { useEffect, useMemo, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Building2,
//   ShieldCheck,
//   MapPin,
//   Mail,
//   CalendarDays,
//   IdCard,
//   ArrowRight,
//   ExternalLink,
//   Menu,
//   X,
// } from "lucide-react";
// import API_BASE from "./Api";

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

// const FALLBACK_PROJECT_IMG =
//   "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400";

// const COMPANY = {
//   name: "SHIV SHAKTI REAL ESTATE PRIVATE LIMITED",
//   cin: "U45200MH1999PTC122379",
//   status: "Active",
//   roc: "ROC Mumbai",
//   companyType: "Private (Non-government) • Company limited by shares",
//   incorporationDate: "26 Dec 1999",
//   nic: "4520 — Building of complete constructions or parts thereof; civil engineering",
//   authorizedCapital: "₹ 70,00,000",
//   paidUpCapital: "₹ 1,00,000",
//   email: "secretarial@systematixgroup.in",
//   registeredAddress:
//     "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
//   directors: ["CHANDRA PRAKASH KHANDELWAL", "ANJU KHANDELWAL", "RAHUL KHANDELWAL"],
//   agmLastHeld: "22 Dec 2023",
//   balanceSheetLastFiled: "31 Mar 2023",
// };

// type Project = {
//   id: number;
//   title: string;
//   slug: string;
//   category: "residential" | "commercial" | string;
//   location: string;
//   configuration: string;
//   price_label: string;
//   short_description?: string;
//   description?: string;
//   cover_image_url?: string;
//   cover_image?: string;
//   cover_image_absolute?: string;
// };

// function safeAbsUrl(u?: string) {
//   if (!u) return "";
//   if (u.startsWith("http://") || u.startsWith("https://")) return u;
//   if (u.startsWith("/")) return `${API_BASE}${u}`;
//   return `${API_BASE}/${u}`;
// }

// function getProjectImage(p: Project) {
//   const candidates = [p.cover_image_url, p.cover_image_absolute, p.cover_image].filter(Boolean) as string[];
//   const url = candidates.length ? safeAbsUrl(candidates[0]) : "";
//   return url || FALLBACK_PROJECT_IMG;
// }

// /** ✅ Header updated: center nav + mobile menu only on mobile */
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

//   // ✅ lock scroll when drawer open
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
//                 <path d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                 <path d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                 <path d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                 <path d="M16 13H17.8M16 16.5H17.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </div>

//             <div className="brand-text">
//               <div className="brand-title">SHIVSHAKTI REAL ESTATE</div>
//               <div className="brand-sub">PVT LTD</div>
//             </div>
//           </Link>

//           {/* ✅ Desktop Nav (centered) */}
//           <nav className="nav nav-center">
//             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
//             <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
//             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
//             <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
//             <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
//           </nav>

//           {/* Right CTA + Mobile Hamburger */}
//           <div className="right-actions">
//             <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>GET QUOTE</Link>

//             {/* ✅ mobile hamburger: ONLY visible in mobile via CSS */}
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
//       <aside className={menuOpen ? "drawer show" : "drawer"} onClick={(e) => e.stopPropagation()}>
//         <div className="drawer-head">
//           <div className="drawer-title">Menu</div>
//           <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
//             <X size={18} />
//           </button>
//         </div>

//         <div className="drawer-links">
//           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
//           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link className={isActive("/services") ? "dlink active" : "dlink"} to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
//           <Link className={isActive("/contact") ? "dlink active" : "dlink"} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

//           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
//             Get Quote
//           </Link>
//         </div>

//         <div className="drawer-foot">
//           <div className="df-muted">Email</div>
//           <a className="df-link" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
//           <div className="df-muted" style={{ marginTop: 10 }}>Registered Address</div>
//           <div className="df-text">{COMPANY.registeredAddress}</div>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default function AboutPage() {
//   const nav = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [heroIndex, setHeroIndex] = useState(0);

//   const [allProjects, setAllProjects] = useState<Project[]>([]);
//   const [pLoading, setPLoading] = useState(false);

//   // hero autoplay
//   useEffect(() => {
//     const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
//     return () => clearInterval(t);
//   }, []);

//   // ✅ close drawer on mount (best effort)
//   useEffect(() => {
//     setMenuOpen(false);
//   }, []);

//   const loadProjects = async () => {
//     setPLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/projects/`);
//       const data = await res.json().catch(() => ({} as any));
//       if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");

//       const items: Project[] = Array.isArray(data.items) ? data.items : [];
//       setAllProjects(items);
//     } catch {
//       setAllProjects([]);
//     } finally {
//       setPLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProjects();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const latestTop3 = useMemo(() => {
//     const sorted = [...allProjects].sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
//     return sorted.slice(0, 3);
//   }, [allProjects]);

//   const goProjects = () => nav("/projects");
//   const goProjectsWithHighlight = (p: Project) => {
//     nav("/projects");
//   };

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
//       <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* ✅ HERO */}
//       <section className="about-hero">
//         <div className="hero-bg">
//           <img src={HERO_IMAGES[heroIndex]} alt="about hero" />
//           <div className="hero-overlay" />
//         </div>

//         <div className="container hero-content">
//           <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <span className="badge">ABOUT THE COMPANY</span>
//             <h1>{COMPANY.name}</h1>
//             <p>
//               A trusted real estate and construction company registered in Mumbai — focused on delivering
//               quality developments with transparent processes.
//             </p>

//             <div className="hero-cta">
//               <Link className="cta-primary" to="/projects">
//                 View Projects <ArrowRight size={18} />
//               </Link>
//               <Link className="cta-ghost" to="/contact">
//                 Contact Us <ArrowRight size={18} />
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

//       {/* ✅ COMPANY HIGHLIGHTS */}
//       <section className="section">
//         <div className="container">
//           <div className="grid-2">
//             <motion.div
//               className="card"
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="section-title">Company Overview</h2>

//               <div className="info-list">
//                 <InfoRow icon={<IdCard size={18} />} label="CIN" value={COMPANY.cin} />
//                 <InfoRow icon={<ShieldCheck size={18} />} label="Status" value={COMPANY.status} />
//                 <InfoRow icon={<Building2 size={18} />} label="ROC" value={COMPANY.roc} />
//                 <InfoRow icon={<CalendarDays size={18} />} label="Incorporation" value={COMPANY.incorporationDate} />
//                 <InfoRow icon={<Building2 size={18} />} label="Type" value={COMPANY.companyType} />
//                 <InfoRow icon={<Building2 size={18} />} label="NIC" value={COMPANY.nic} />
//               </div>
//             </motion.div>

//             <motion.div
//               className="card"
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.05 }}
//             >
//               <h2 className="section-title">Compliance Snapshot</h2>

//               <div className="info-list">
//                 <InfoRow icon={<CalendarDays size={18} />} label="Last AGM Held" value={COMPANY.agmLastHeld} />
//                 <InfoRow icon={<CalendarDays size={18} />} label="Balance Sheet Filed" value={COMPANY.balanceSheetLastFiled} />
//                 <InfoRow icon={<Building2 size={18} />} label="Authorised Capital" value={COMPANY.authorizedCapital} />
//                 <InfoRow icon={<Building2 size={18} />} label="Paid-up Capital" value={COMPANY.paidUpCapital} />
//                 <InfoRow icon={<Mail size={18} />} label="Email" value={COMPANY.email} />
//                 <InfoRow icon={<MapPin size={18} />} label="Registered Address" value={COMPANY.registeredAddress} />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ TOP 3 LATEST (MIX) */}
//       <section className="section soft">
//         <div className="container">
//           <div className="section-head row-between">
//             <div>
//               <h2 style={{ margin: 0, color: THEME.ink }}>Featured Projects</h2>
//               <p style={{ marginTop: 8 }}>Our Top Latest Projects.</p>
//             </div>

//             <button className="viewall-btn" onClick={goProjects}>
//               View All Projects <ExternalLink size={16} />
//             </button>
//           </div>

//           {pLoading ? (
//             <div className="empty">Loading projects...</div>
//           ) : latestTop3.length === 0 ? (
//             <div className="empty">No projects found yet.</div>
//           ) : (
//             <div className="projects-grid">
//               {latestTop3.map((p) => (
//                 <motion.div
//                   key={p.id}
//                   className="project-card"
//                   whileHover={{ y: -8 }}
//                   onClick={() => goProjectsWithHighlight(p)}
//                 >
//                   <div className="pimg">
//                     <img
//                       src={getProjectImage(p)}
//                       alt={p.title}
//                       loading="lazy"
//                       onError={(e) => {
//                         const img = e.currentTarget as HTMLImageElement;
//                         if (img.src !== FALLBACK_PROJECT_IMG) img.src = FALLBACK_PROJECT_IMG;
//                       }}
//                     />
//                     <div className="ptags">
//                       <span className="tag">{(p.location || "LOCATION").toUpperCase()}</span>
//                       <span className="tag2">{(p.category || "TYPE").toUpperCase()}</span>
//                     </div>
//                   </div>

//                   <div className="pbody">
//                     <div className="ptitle">{p.title}</div>
//                     <div className="pdesc">
//                       {(p.short_description || p.description || "").trim()
//                         ? (p.short_description || p.description || "").slice(0, 110) + "..."
//                         : "—"}
//                     </div>

//                     <div className="pmeta">
//                       <div className="mi">
//                         <span>CONFIG</span>
//                         <strong>{p.configuration || "—"}</strong>
//                       </div>
//                       <div className="mi">
//                         <span>STARTING</span>
//                         <strong className="pprice">{p.price_label || "—"}</strong>
//                       </div>
//                     </div>

//                     <button
//                       className="details-btn"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         goProjectsWithHighlight(p);
//                       }}
//                     >
//                       View Details <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ✅ WHY US */}
//       <section className="section">
//         <div className="container">
//           <div className="grid-2">
//             <div className="card">
//               <h2 className="section-title">Why Choose Us</h2>
//               <ul className="bullets">
//                 <li>Transparent customer communication and project updates</li>
//                 <li>Strong focus on construction quality and finishing</li>
//                 <li>Professional documentation and compliance discipline</li>
//                 <li>Customer-first approach for site visits and query handling</li>
//               </ul>

//               <div className="cta-row">
//                 <Link className="cta-primary" to="/contact">
//                   Talk to Our Team <ArrowRight size={18} />
//                 </Link>
//                 <Link className="cta-ghost" to="/projects">
//                   Explore Projects <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>

//             <div className="card">
//               <h2 className="section-title">Our Mission</h2>
//               <p className="para">
//                 Deliver well-planned and well-built developments with an emphasis on trust, transparency,
//                 and customer satisfaction — while following responsible building practices.
//               </p>

//               <h2 className="section-title" style={{ marginTop: 18 }}>Our Vision</h2>
//               <p className="para">
//                 Build a strong real estate brand known for consistent quality, timely execution and
//                 customer confidence across residential and commercial segments.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ SAME FOOTER AS HOME */}
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
//               <a href="tel:+918956032764">+91 89560 32764</a>
//               <a
//                 href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

// function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
//   return (
//     <div className="info-row">
//       <div className="info-ic">{icon}</div>
//       <div className="info-text">
//         <div className="info-label">{label}</div>
//         <div className="info-value">{value}</div>
//       </div>
//     </div>
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

//       /* ✅ center nav */
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
//         min-width: 160px;
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

//       /* ✅ mobile hamburger: default hidden (desktop) */
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
//       .drawer-overlay.show{
//         opacity:1;
//         pointer-events:auto;
//       }
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
//       .about-hero{
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
//       .about-hero h1 { font-size: clamp(26px, 4vw, 48px); font-weight: 1000; margin: 18px 0; }
//       .about-hero p { color: rgba(255,255,255,0.9); max-width: 820px; margin: 0 auto; line-height: 1.7; }

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

//       /* ✅ SECTIONS */
//       .section{ padding: 56px 0; }
//       .section.soft{ background: ${THEME.soft}; }
//       .section-head{ margin-bottom: 18px; }
//       .grid-2{ display:grid; grid-template-columns: 1fr 1fr; gap: 18px; }
//       .card{
//         background: white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         padding: 18px;
//         box-shadow: 0 12px 30px rgba(0,0,0,0.06);
//       }
//       .section-title{
//         font-size: 18px;
//         font-weight: 1100;
//         color: ${ink};
//         margin: 0 0 12px 0;
//       }
//       .info-list{ display:flex; flex-direction:column; gap: 12px; }
//       .info-row{ display:flex; gap: 12px; align-items:flex-start; }
//       .info-ic{
//         width: 40px; height: 40px;
//         border-radius: 12px;
//         background: #fff7ed;
//         border: 1px solid #ffedd5;
//         display:flex; align-items:center; justify-content:center;
//         color: ${brand};
//         flex: 0 0 auto;
//       }
//       .info-label{ font-size: 11px; font-weight: 1000; color:#667; text-transform:uppercase; letter-spacing:0.8px; }
//       .info-value{ font-size: 13px; font-weight: 800; color:#1f2937; line-height: 1.55; margin-top: 2px; }

//       .viewall-btn{
//         border: 1px solid #eee;
//         background: white;
//         border-radius: 12px;
//         padding: 11px 14px;
//         font-weight: 1000;
//         cursor: pointer;
//         display:flex;
//         align-items:center;
//         gap: 10px;
//       }

//       .projects-grid{
//         display:grid;
//         grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
//         gap: 16px;
//         margin-top: 14px;
//       }
//       .project-card{
//         background: white;
//         border: 1px solid #eee;
//         border-radius: 16px;
//         overflow:hidden;
//         box-shadow: 0 12px 28px rgba(0,0,0,0.06);
//         cursor: pointer;
//       }
//       .pimg{
//         position: relative;
//         width: 100%;
//         aspect-ratio: 16 / 10;
//         background: #0b0b0b;
//         overflow:hidden;
//       }
//       .pimg img{
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         display:block;
//         transform: scale(1.01);
//         transition: 0.5s;
//       }
//       .project-card:hover .pimg img{ transform: scale(1.06); }

//       .ptags{
//         position:absolute;
//         top: 12px; left: 12px; right: 12px;
//         display:flex; justify-content:space-between; gap: 10px;
//       }
//       .tag{
//         background: rgba(255,255,255,0.92);
//         padding: 6px 10px;
//         border-radius:999px;
//         font-weight:1000;
//         font-size:11px;
//       }
//       .tag2{
//         background: ${brand};
//         color:white;
//         padding: 6px 10px;
//         border-radius:999px;
//         font-weight:1000;
//         font-size:11px;
//       }
//       .pbody{ padding: 16px; }
//       .ptitle{ font-weight: 1100; color: ${ink}; font-size: 16px; }
//       .pdesc{ color:#667; font-weight: 750; font-size: 13px; line-height: 1.65; margin-top: 8px; min-height: 44px; }

//       .pmeta{ display:flex; gap: 12px; border-top:1px solid #eee; padding-top: 12px; margin-top: 12px; }
//       .mi{ flex:1; }
//       .mi span{ display:block; font-size: 10px; font-weight: 1000; color:#9aa; letter-spacing:0.7px; }
//       .mi strong{ font-size: 13px; color:#222; }
//       .pprice{ color: ${brand}; }

//       .details-btn{
//         width:100%;
//         margin-top: 12px;
//         border: none;
//         background: ${ink};
//         color: white;
//         border-radius: 12px;
//         padding: 12px;
//         font-weight: 1000;
//         cursor:pointer;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         gap: 10px;
//       }

//       .bullets{ padding-left: 18px; margin: 0; color:#445; line-height: 1.9; font-weight: 800; }
//       .para{ color:#556; line-height: 1.85; font-weight: 750; margin: 0; }
//       .cta-row{ display:flex; gap: 12px; flex-wrap:wrap; margin-top: 16px; }

//       .empty{
//         background:white;
//         border:1px solid #eee;
//         border-radius:16px;
//         padding: 20px;
//         text-align:center;
//         color:#555;
//         font-weight: 900;
//         margin-top: 14px;
//       }

//       /* ✅ footer same as home */
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

//      @media (max-width: 980px){
//   .nav{ display:none; }        /* desktop nav hide */
//   .hamburger{ display:flex;  flex-shrink: 0;} /* mobile menu show */
//   .grid-2{ grid-template-columns: 1fr; }
//   .about-hero{ min-height: 440px; }
//   .footer-grid{ grid-template-columns: 1fr; }
//   .cta{ display:none; }
// }

//     `,
//       }}
//     />
//   );
// }

'use client';

import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  MapPin,
  Mail,
  CalendarDays,
  IdCard,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Home as HomeIcon,
  FileText,
  Sparkles,
  Phone,
  User
} from "lucide-react";
import API_BASE from "./Api";

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

const FALLBACK_PROJECT_IMG =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400";

const COMPANY = {
  name: "SHIV SHAKTI REAL ESTATE PRIVATE LIMITED",
  cin: "U45200MH1999PTC122379",
  status: "Active",
  roc: "ROC Mumbai",
  companyType: "Private (Non-government) • Company limited by shares",
  incorporationDate: "26 Dec 1999",
  nic: "4520 — Building of complete constructions or parts thereof; civil engineering",
  authorizedCapital: "₹ 70,00,000",
  paidUpCapital: "₹ 1,00,000",
  email: "secretarial@systematixgroup.in",
  registeredAddress:
    "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
  directors: ["CHANDRA PRAKASH KHANDELWAL", "ANJU KHANDELWAL", "RAHUL KHANDELWAL"],
  agmLastHeld: "22 Dec 2023",
  balanceSheetLastFiled: "31 Mar 2023",
};

type Project = {
  id: number;
  title: string;
  slug: string;
  category: "residential" | "commercial" | string;
  location: string;
  configuration: string;
  price_label: string;
  short_description?: string;
  description?: string;
  cover_image_url?: string;
  cover_image?: string;
  cover_image_absolute?: string;
};

function safeAbsUrl(u?: string) {
  if (!u) return "";
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  if (u.startsWith("/")) return `${API_BASE}${u}`;
  return `${API_BASE}/${u}`;
}

function getProjectImage(p: Project) {
  const candidates = [p.cover_image_url, p.cover_image_absolute, p.cover_image].filter(Boolean) as string[];
  const url = candidates.length ? safeAbsUrl(candidates[0]) : "";
  return url || FALLBACK_PROJECT_IMG;
}

/** ✅ Header updated: center nav + mobile menu only on mobile */
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

  // ✅ lock scroll when drawer open
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
                <path d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 13H17.8M16 16.5H17.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="brand-text">
              <div className="brand-title">SHIVSHAKTI REAL ESTATE</div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          {/* ✅ Desktop Nav (centered) */}
          <nav className="nav nav-center">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
            <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login" onClick={() => setMenuOpen(false)}>ADMIN LOGIN</Link>
          </nav>

          {/* Right CTA + Mobile Hamburger */}
          <div className="right-actions">
            <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>GET QUOTE</Link>

            {/* ✅ mobile hamburger: ONLY visible in mobile via CSS */}
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
          <a className="df-link" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <div className="df-muted" style={{ marginTop: 10 }}>Registered Address</div>
          <div className="df-text">{COMPANY.registeredAddress}</div>
        </div>
      </aside>
    </>
  );
}

export default function AboutPage() {
  const nav = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [pLoading, setPLoading] = useState(false);

  // hero autoplay
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  // ✅ close drawer on mount (best effort)
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const loadProjects = async () => {
    setPLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/projects/`);
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");

      const items: Project[] = Array.isArray(data.items) ? data.items : [];
      setAllProjects(items);
    } catch {
      setAllProjects([]);
    } finally {
      setPLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const latestTop3 = useMemo(() => {
    const sorted = [...allProjects].sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
    return sorted.slice(0, 3);
  }, [allProjects]);

  const goProjects = () => nav("/projects");
  const goProjectsWithHighlight = (p: Project) => {
    nav("/projects");
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ✅ HERO */}
      <section className="about-hero">
        <div className="hero-bg">
          <img src={HERO_IMAGES[heroIndex]} alt="about hero" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">ABOUT THE COMPANY</span>
            <h1>{COMPANY.name}</h1>
            <p>
              A trusted real estate and construction company registered in Mumbai — focused on delivering
              quality developments with transparent processes.
            </p>

            <div className="hero-cta">
              <Link className="cta-primary" to="/projects">
                View Projects <ArrowRight size={20} />
              </Link>
              <Link className="cta-ghost" to="/contact">
                Contact Us <ArrowRight size={20} />
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

      {/* ✅ COMPANY HIGHLIGHTS */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Company Overview</h2>

              <div className="info-list">
                <InfoRow icon={<IdCard size={20} />} label="CIN" value={COMPANY.cin} />
                <InfoRow icon={<ShieldCheck size={20} />} label="Status" value={COMPANY.status} />
                <InfoRow icon={<Building2 size={20} />} label="ROC" value={COMPANY.roc} />
                <InfoRow icon={<CalendarDays size={20} />} label="Incorporation" value={COMPANY.incorporationDate} />
                <InfoRow icon={<Building2 size={20} />} label="Type" value={COMPANY.companyType} />
                <InfoRow icon={<Building2 size={20} />} label="NIC" value={COMPANY.nic} />
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="section-title">Compliance Snapshot</h2>

              <div className="info-list">
                <InfoRow icon={<CalendarDays size={20} />} label="Last AGM Held" value={COMPANY.agmLastHeld} />
                <InfoRow icon={<CalendarDays size={20} />} label="Balance Sheet Filed" value={COMPANY.balanceSheetLastFiled} />
                <InfoRow icon={<Building2 size={20} />} label="Authorised Capital" value={COMPANY.authorizedCapital} />
                <InfoRow icon={<Building2 size={20} />} label="Paid-up Capital" value={COMPANY.paidUpCapital} />
                <InfoRow icon={<Mail size={20} />} label="Email" value={COMPANY.email} />
                <InfoRow icon={<MapPin size={20} />} label="Registered Address" value={COMPANY.registeredAddress} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ TOP 3 LATEST (MIX) */}
      <section className="section soft">
        <div className="container">
          <div className="section-head row-between">
            <div>
              <h2 style={{ margin: 0, color: THEME.ink, fontSize: "32px", fontWeight: "1100" }}>Featured Projects</h2>
              <p style={{ marginTop: "12px", fontSize: "18px", color: "#555" }}>Our Top Latest Projects.</p>
            </div>

            <button className="viewall-btn" onClick={goProjects}>
              View All Projects <ExternalLink size={18} />
            </button>
          </div>

          {pLoading ? (
            <div className="empty">Loading projects...</div>
          ) : latestTop3.length === 0 ? (
            <div className="empty">No projects found yet.</div>
          ) : (
            <div className="projects-grid">
              {latestTop3.map((p) => (
                <motion.div
                  key={p.id}
                  className="project-card"
                  whileHover={{ y: -8 }}
                  onClick={() => goProjectsWithHighlight(p)}
                >
                  <div className="pimg">
                    <img
                      src={getProjectImage(p)}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (img.src !== FALLBACK_PROJECT_IMG) img.src = FALLBACK_PROJECT_IMG;
                      }}
                    />
                    <div className="ptags">
                      <span className="tag">{(p.location || "LOCATION").toUpperCase()}</span>
                      <span className="tag2">{(p.category || "TYPE").toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="pbody">
                    <div className="ptitle">{p.title}</div>
                    <div className="pdesc">
                      {(p.short_description || p.description || "").trim()
                        ? (p.short_description || p.description || "").slice(0, 110) + "..."
                        : "—"}
                    </div>

                    <div className="pmeta">
                      <div className="mi">
                        <span>CONFIG</span>
                        <strong>{p.configuration || "—"}</strong>
                      </div>
                      <div className="mi">
                        <span>STARTING</span>
                        <strong className="pprice">{p.price_label || "—"}</strong>
                      </div>
                    </div>

                    <button
                      className="details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        goProjectsWithHighlight(p);
                      }}
                    >
                      View Details <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ WHY US */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h2 className="section-title">Why Choose Us</h2>
              <ul className="bullets">
                <li>Transparent customer communication and project updates</li>
                <li>Strong focus on construction quality and finishing</li>
                <li>Professional documentation and compliance discipline</li>
                <li>Customer-first approach for site visits and query handling</li>
              </ul>

              <div className="cta-row">
                <Link className="cta-primary" to="/contact">
                  Talk to Our Team <ArrowRight size={20} />
                </Link>
                <Link className="cta-ghost" to="/projects">
                  Explore Projects <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="section-title">Our Mission</h2>
              <p className="para">
                Deliver well-planned and well-built developments with an emphasis on trust, transparency,
                and customer satisfaction — while following responsible building practices.
              </p>

              <h2 className="section-title" style={{ marginTop: "24px" }}>Our Vision</h2>
              <p className="para">
                Build a strong real estate brand known for consistent quality, timely execution and
                customer confidence across residential and commercial segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SAME FOOTER AS HOME */}
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
              <a href="tel:+918956032764">+91 89560 32764</a>
              <a
                href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="info-row">
      <div className="info-ic">{icon}</div>
      <div className="info-text">
        <div className="info-label">{label}</div>
        <div className="info-value">{value}</div>
      </div>
    </div>
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

      /* ✅ center nav */
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

      /* ✅ mobile hamburger: default hidden (desktop) */
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
      .drawer-overlay.show{
        opacity:1;
        pointer-events:auto;
      }
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
      .about-hero{
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
      .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); }
      .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 16px; }

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
      .about-hero h1 { 
        font-size: clamp(40px, 5vw, 68px); 
        font-weight: 1200; 
        margin: 24px 0; 
        line-height: 1.2;
      }
      .about-hero p { 
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
        background: rgba(179,89,0,0.25);
        border: 1px solid rgba(255, 255, 255, 0.94);
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

      /* ✅ SECTIONS */
      .section{ padding: 72px 0; }
      .section.soft{ background: ${THEME.soft}; }
      .section-head{ margin-bottom: 24px; }
      .grid-2{ 
        display:grid; 
        grid-template-columns: 1fr 1fr; 
        gap: 24px; 
      }
      .card{
        background: white;
        border: 1px solid #eee;
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 12px 30px rgba(0,0,0,0.06);
      }
      .section-title{
        font-size: 24px;
        font-weight: 1100;
        color: ${ink};
        margin: 0 0 16px 0;
      }
      .info-list{ 
        display:flex; 
        flex-direction:column; 
        gap: 16px; 
      }
      .info-row{ 
        display:flex; 
        gap: 14px; 
        align-items:flex-start; 
      }
      .info-ic{
        width: 48px; 
        height: 48px;
        border-radius: 14px;
        background: #fff7ed;
        border: 1px solid #ffedd5;
        display:flex; 
        align-items:center; 
        justify-content:center;
        color: ${brand};
        flex: 0 0 auto;
      }
      .info-label{ 
        font-size: 12px; 
        font-weight: 1000; 
        color:#667; 
        text-transform:uppercase; 
        letter-spacing:0.8px; 
        margin-bottom: 4px;
      }
      .info-value{ 
        font-size: 15px; 
        font-weight: 800; 
        color:#1f2937; 
        line-height: 1.55; 
      }

      .viewall-btn{
        border: 1px solid #eee;
        background: white;
        border-radius: 14px;
        padding: 14px 18px;
        font-weight: 1000;
        cursor: pointer;
        display:flex;
        align-items:center;
        gap: 10px;
        font-size: 15px;
      }

      .projects-grid{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .project-card{
        background: white;
        border: 1px solid #eee;
        border-radius: 18px;
        overflow:hidden;
        box-shadow: 0 12px 28px rgba(0,0,0,0.06);
        cursor: pointer;
      }
      .pimg{
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #0b0b0b;
        overflow:hidden;
      }
      .pimg img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display:block;
        transform: scale(1.01);
        transition: 0.5s;
      }
      .project-card:hover .pimg img{ transform: scale(1.06); }

      .ptags{
        position:absolute;
        top: 16px; left: 16px; right: 16px;
        display:flex; justify-content:space-between; gap: 12px;
      }
      .tag{
        background: rgba(255,255,255,0.92);
        padding: 8px 14px;
        border-radius:999px;
        font-weight:1000;
        font-size:12px;
      }
      .tag2{
        background: ${brand};
        color:white;
        padding: 8px 14px;
        border-radius:999px;
        font-weight:1000;
        font-size:12px;
      }
      .pbody{ 
        padding: 20px; 
      }
      .ptitle{ 
        font-weight: 1100; 
        color: ${ink}; 
        font-size: 20px; 
        line-height: 1.3;
        margin-bottom: 8px;
      }
      .pdesc{ 
        color:#667; 
        font-weight: 750; 
        font-size: 15px; 
        line-height: 1.6; 
        min-height: 50px; 
      }

      .pmeta{ 
        display:flex; 
        gap: 16px; 
        border-top:1px solid #eee; 
        padding-top: 16px; 
        margin-top: 16px; 
      }
      .mi{ 
        flex:1; 
      }
      .mi span{ 
        display:block; 
        font-size: 11px; 
        font-weight: 1000; 
        color:#9aa; 
        letter-spacing:0.7px; 
        margin-bottom: 4px;
      }
      .mi strong{ 
        font-size: 15px; 
        color:#222; 
      }
      .pprice{ 
        color: ${brand}; 
        font-size: 16px;
      }

      .details-btn{
        width:100%;
        margin-top: 16px;
        border: none;
        background: ${ink};
        color: white;
        border-radius: 14px;
        padding: 14px;
        font-weight: 1000;
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 12px;
        font-size: 15px;
      }

      .bullets{ 
        padding-left: 20px; 
        margin: 0 0 20px 0; 
        color:#445; 
        line-height: 1.8; 
        font-weight: 800; 
        font-size: 15px;
      }
      .bullets li {
        margin-bottom: 8px;
      }
      .para{ 
        color:#556; 
        line-height: 1.8; 
        font-weight: 750; 
        margin: 0 0 20px 0; 
        font-size: 16px;
      }
      .cta-row{ 
        display:flex; 
        gap: 16px; 
        flex-wrap:wrap; 
        margin-top: 24px; 
      }

      .empty{
        background:white;
        border:1px solid #eee;
        border-radius:18px;
        padding: 40px;
        text-align:center;
        color:#555;
        font-weight: 900;
        font-size: 16px;
        margin-top: 20px;
      }

      /* ✅ footer same as home */
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
        .grid-2{ 
          grid-template-columns: 1fr; 
        }
        .projects-grid{ 
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
        }
      }

      @media (max-width: 980px){
        .nav{ display:none; }        /* desktop nav hide */
        .hamburger{ display:flex; } /* mobile menu show */
        .about-hero{ min-height: 500px; }
        .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
        .cta{ display:none; }
      }

      @media (max-width: 768px){
        .section{ padding: 60px 0; }
        .about-hero h1{ font-size: 36px; }
        .about-hero p{ font-size: 17px; }
        .section-title{ font-size: 22px; }
        .projects-grid{ grid-template-columns: 1fr; }
        .hero-cta{ flex-direction: column; align-items: center; }
        .cta-primary, .cta-ghost{ width: 100%; justify-content: center; }
        .cta-row{ flex-direction: column; }
        .pbody{ padding: 18px; }
        .ptitle{ font-size: 18px; }
        .pdesc{ font-size: 14px; }
        .details-btn{ padding: 12px; }
      }

      @media (max-width: 480px){
        .brand{ min-width: 200px; }
        .brand-title{ font-size: 16px; }
        .brand-sub{ font-size: 10px; }
        .about-hero h1{ font-size: 32px; }
        .about-hero p{ font-size: 16px; }
        .f-bottom{ flex-direction: column; text-align: center; gap: 12px; }
        .card{ padding: 20px; }
        .info-ic{ width: 42px; height: 42px; }
        .info-label{ font-size: 11px; }
        .info-value{ font-size: 14px; }
      }
    `,
      }}
    />
  );
}