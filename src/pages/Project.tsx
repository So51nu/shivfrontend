// 'use client';

// import React, { useEffect, useMemo, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Download, X, Phone, MessageSquare, ArrowRight, Menu } from "lucide-react";
// import API_BASE from "./Api";

// const THEME = {
//   ink: "#0B1220",
//   dark: "#1a1a1a",
//   soft: "#F6F7FB",
//   brand: "#B35900",
// };

// type Project = {
//   id: number;
//   title: string;
//   slug: string;
//   tagline: string;
//   category: "residential" | "commercial";
//   property_type: string;
//   configuration: string;
//   location: string;
//   price_min: number | null;
//   price_max: number | null;
//   price_label: string;
//   short_description: string;
//   description: string;
//   cover_image_url: string;
//   brochure_url: string;
//   gallery_urls: string[];
//   features: string[];
// };

// type Meta = {
//   property_types: string[];
//   configurations: string[];
//   locations: string[];
//   min_price: number;
//   max_price: number;
// };

// const HERO_IMAGES = [
//   "src/images/back1.jpg",
//   "src/images/back2.jpg",
//   "src/images/back3.jpg",
//   "src/images/back4.jpg",
//   "src/images/back5.jpg",
//   "src/images/back6.jpg",
// ];

// function parseAnyPriceToNumber(label: string): number {
//   const s = (label || "").toLowerCase();
//   const digitMatch = s.match(/[\d,.]+/);
//   const raw = digitMatch ? digitMatch[0].replace(/,/g, "") : "";
//   const base = raw && !isNaN(Number(raw)) ? Number(raw) : 0;
//   if (s.includes("cr") || s.includes("crore")) return base ? base * 10000000 : 0;
//   if (s.includes("lakh") || s.includes("lac")) return base ? base * 100000 : 0;
//   return base;
// }

// /** ✅ Updated Header: center tabs + mobile menu + admin login + same behavior */
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

//   // lock scroll while menu open
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

//           {/* ✅ Center tabs on desktop */}
//           <nav className="nav center">
//             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
//             <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
//             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
//             <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
//             <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
//             <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login" onClick={() => setMenuOpen(false)}>ADMIN LOGIN</Link>
//           </nav>

//           <div className="right-actions">
//             <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>
//               GET QUOTE
//             </Link>

//             {/* ✅ Mobile menu button */}
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

//       {/* ✅ Mobile Drawer (home page jaisa) */}
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
//           <Link className={isActive("/login") ? "dlink active" : "dlink"} to="/login" onClick={() => setMenuOpen(false)}>
//             Admin Login
//           </Link>

//           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
//             Get Quote
//           </Link>
//         </div>

//         <div className="drawer-foot">
//           <div className="df-muted">Quick Actions</div>
//           <a className="df-link" href="tel:+918956032764">Call Us</a>
//           <a
//             className="df-link"
//             href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

// export default function ProjectsPage() {
//   const [items, setItems] = useState<Project[]>([]);
//   const [selected, setSelected] = useState<Project | null>(null);

//   const [meta, setMeta] = useState<Meta | null>(null);
//   const [metaAll, setMetaAll] = useState<Meta | null>(null);

//   const [loading, setLoading] = useState(false);

//   const [category, setCategory] = useState<"residential" | "commercial">("residential");
//   const [q, setQ] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [configuration, setConfiguration] = useState("");
//   const [location, setLocation] = useState("");
//   const [maxPrice, setMaxPrice] = useState<number>(0);

//   const [heroIndex, setHeroIndex] = useState(0);

//   // ✅ NEW: Mobile menu state (added only; nothing removed)
//   const [menuOpen, setMenuOpen] = useState(false);

//   const computedMax = useMemo(() => {
//     const serverMax = Number(meta?.max_price || 0);
//     let fallbackMax = 0;
//     for (const p of items) {
//       fallbackMax = Math.max(
//         fallbackMax,
//         Number(p.price_max || 0),
//         Number(p.price_min || 0),
//         parseAnyPriceToNumber(p.price_label)
//       );
//     }
//     return Math.max(serverMax, fallbackMax, 1000000);
//   }, [meta, items]);

//   const computedMin = useMemo(() => Math.max(0, Number(meta?.min_price || 0)), [meta]);

//   const fetchList = async () => {
//     setLoading(true);
//     try {
//       const params = new URLSearchParams();
//       params.set("category", category);

//       if (q.trim()) params.set("q", q.trim());
//       if (propertyType) params.set("property_type", propertyType);
//       if (configuration) params.set("configuration", configuration);
//       if (location) params.set("location", location);
//       if (maxPrice > 0) params.set("max_price", String(maxPrice));

//       const res = await fetch(`${API_BASE}/api/projects/?${params.toString()}`);
//       const data = await res.json();
//       if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");

//       setItems(data.items || []);
//       setMeta(data.meta || null);
//     } catch (e) {
//       console.error(e);
//       setItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMetaAll = async () => {
//     try {
//       const [r1, r2] = await Promise.all([
//         fetch(`${API_BASE}/api/projects/?category=residential`),
//         fetch(`${API_BASE}/api/projects/?category=commercial`),
//       ]);

//       const d1 = await r1.json().catch(() => ({}));
//       const d2 = await r2.json().catch(() => ({}));

//       const allTypes = new Set<string>();
//       const allConfig = new Set<string>();
//       const allLoc = new Set<string>();

//       const m1: Meta | null = d1?.meta || null;
//       const m2: Meta | null = d2?.meta || null;

//       (m1?.property_types || []).forEach((x) => allTypes.add(x));
//       (m2?.property_types || []).forEach((x) => allTypes.add(x));
//       (m1?.configurations || []).forEach((x) => allConfig.add(x));
//       (m2?.configurations || []).forEach((x) => allConfig.add(x));
//       (m1?.locations || []).forEach((x) => allLoc.add(x));
//       (m2?.locations || []).forEach((x) => allLoc.add(x));

//       const allMax = Math.max(Number(m1?.max_price || 0), Number(m2?.max_price || 0), 1000000);

//       setMetaAll({
//         property_types: Array.from(allTypes).sort(),
//         configurations: Array.from(allConfig).sort(),
//         locations: Array.from(allLoc).sort(),
//         min_price: 0,
//         max_price: allMax,
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const fetchDetail = async (slug: string) => {
//     try {
//       const res = await fetch(`${API_BASE}/api/projects/${slug}/`);
//       const data = await res.json();
//       if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");
//       setSelected(data.item);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
//     return () => clearInterval(t);
//   }, []);

//   useEffect(() => {
//     fetchMetaAll();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     fetchList();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [category]);

//   useEffect(() => {
//     if (!computedMax) return;
//     setMaxPrice((prev) => {
//       if (prev === 0) return computedMax;
//       if (prev > computedMax) return computedMax;
//       return prev;
//     });
//   }, [computedMax]);

//   const applyFilters = () => fetchList();

//   const resetFilters = () => {
//     setQ("");
//     setPropertyType("");
//     setConfiguration("");
//     setLocation("");
//     setMaxPrice(computedMax);
//     setTimeout(fetchList, 0);
//   };

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
//       <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

//       {/* ✅ HEADER (center + mobile menu added) */}
//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* HERO */}
//       <section className="projects-hero">
//         <div className="hero-bg">
//           <img src={HERO_IMAGES[heroIndex]} alt="hero" />
//           <div className="hero-overlay" />
//         </div>

//         <div className="container hero-content">
//           <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <span className="badge">Featured Properties</span>
//             <h1>Explore Our Projects</h1>
//             <p>Admin adds projects → automatically visible here.</p>

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

//       {/* FILTER */}
//       <section className="filter-section">
//         <div className="container">
//           <div className="filter-card">
//             <div className="filter-tabs">
//               <button className={category === "residential" ? "active" : ""} onClick={() => setCategory("residential")}>
//                 RESIDENTIAL
//               </button>
//               <button className={category === "commercial" ? "active" : ""} onClick={() => setCategory("commercial")}>
//                 COMMERCIAL
//               </button>
//             </div>

//             <div className="search-grid">
//               <div className="search-box">
//                 <Search size={16} />
//                 <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search properties..." />
//               </div>

//               <div className="select-real">
//                 <label>Property Type</label>
//                 <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
//                   <option value="">All</option>
//                   {(metaAll?.property_types || meta?.property_types || []).map((x) => (
//                     <option key={x} value={x}>{x}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="select-real">
//                 <label>Configuration</label>
//                 <select value={configuration} onChange={(e) => setConfiguration(e.target.value)}>
//                   <option value="">All</option>
//                   {(metaAll?.configurations || meta?.configurations || []).map((x) => (
//                     <option key={x} value={x}>{x}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="select-real">
//                 <label>Select Location</label>
//                 <select value={location} onChange={(e) => setLocation(e.target.value)}>
//                   <option value="">All</option>
//                   {(metaAll?.locations || meta?.locations || []).map((x) => (
//                     <option key={x} value={x}>{x}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="price-slider">
//                 <div className="row-between">
//                   <span>Max Price</span>
//                   <span className="price-pill">₹ {Number(maxPrice || 0).toLocaleString("en-IN")}</span>
//                 </div>

//                 <input
//                   type="range"
//                   min={computedMin}
//                   max={computedMax}
//                   step={50000}
//                   value={Math.min(maxPrice || computedMax, computedMax)}
//                   onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 />

//                 <div className="range-hint">
//                   Range: ₹ {computedMin.toLocaleString("en-IN")} — ₹ {computedMax.toLocaleString("en-IN")}
//                 </div>
//               </div>

//               <div className="filter-actions">
//                 <button className="btn-apply" onClick={applyFilters}>Apply</button>
//                 <button className="btn-reset" onClick={resetFilters}>Remove Filters</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GRID */}
//       <section className="section-padding">
//         <div className="container">
//           {loading ? (
//             <div className="empty">Loading...</div>
//           ) : items.length === 0 ? (
//             <div className="empty">No projects found.</div>
//           ) : (
//             <div className="projects-grid">
//               {items.map((p) => (
//                 <motion.div
//                   key={p.id}
//                   className="project-card"
//                   whileHover={{ y: -10 }}
//                   onClick={() => fetchDetail(p.slug)}
//                 >
//                   <div className="card-img">
//                     <img src={p.cover_image_url || HERO_IMAGES[0]} alt={p.title} />
//                     <div className="img-tags">
//                       <span className="loc-tag">{(p.location || "LOCATION").toUpperCase()}</span>
//                       <span className="type-tag">{(p.category || "TYPE").toUpperCase()}</span>
//                     </div>
//                   </div>

//                   <div className="card-body">
//                     <h2 className="project-name">
//                       {p.title}{p.tagline ? ` — ${p.tagline.toUpperCase()}` : ""}
//                     </h2>
//                     <p className="project-desc">{(p.short_description || p.description || "").slice(0, 120)}...</p>

//                     <div className="project-meta">
//                       <div className="meta-item">
//                         <span>CONFIGURATION</span>
//                         <strong>{p.configuration || "—"}</strong>
//                       </div>
//                       <div className="meta-item">
//                         <span>START AT</span>
//                         <strong className="price-text">{p.price_label || "—"}</strong>
//                       </div>
//                     </div>

//                     <div className="card-actions" onClick={(e) => e.stopPropagation()}>
//                       <a className="btn-brochure" href={p.brochure_url || "#"} onClick={(e) => !p.brochure_url && e.preventDefault()}>
//                         <Download size={14} /> BROCHURE
//                       </a>
//                       <a
//                         className="btn-whatsapp"
//                         href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20for%20${encodeURIComponent(p.title)}`}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         <MessageSquare size={14} /> WHATSAPP
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* DETAILS MODAL */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <motion.div className="modal-content" initial={{ scale: 0.92, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 20 }}>
//               <button className="close-btn" onClick={() => setSelected(null)}><X size={26} /></button>

//               <div className="modal-grid">
//                 <div className="modal-img-area">
//                   <img src={selected.cover_image_url || HERO_IMAGES[0]} alt={selected.title} />
//                 </div>

//                 <div className="modal-text-area">
//                   <div className="gold-text">
//                     {selected.location || "—"} • {(selected.property_type || "").toUpperCase()} • {(selected.configuration || "").toUpperCase()}
//                   </div>
//                   <h2>{selected.title}</h2>
//                   <h3 className="price-label">{selected.price_label || "—"}</h3>
//                   <p className="long-desc">{selected.description || selected.short_description || ""}</p>

//                   {!!selected.features?.length && (
//                     <div className="features-grid">
//                       {selected.features.map((f) => (
//                         <div className="feat-chip" key={f}>✓ {f}</div>
//                       ))}
//                     </div>
//                   )}

//                   <div className="modal-cta">
//                     <a href="tel:+918956032764" className="cta-call"><Phone size={18} /> Contact Sales</a>
//                     <Link to="/contact" className="cta-visit">Schedule Site Visit <ArrowRight size={18} /></Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ✅ SAME FOOTER AS HOME (full footer) */}
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
//               <a href="tel:+918956032764">+91 89560 32764</a>
//               <a href="mailto:secretarial@systematixgroup.in">secretarial@systematixgroup.in</a>
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

// function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
//   return (
//     <style dangerouslySetInnerHTML={{ __html: `
//       html, body { width:100%; min-height:100%; margin:0; padding:0; overflow-x:hidden; }
//       * { box-sizing:border-box; }
//       .container { width: min(1200px, 94vw); margin: 0 auto; }
//       .row-between{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }

//       /* ✅ HEADER (center nav + mobile menu) */
//       .topbar{
//         position: fixed;
//         top: 0;
//         left: 0;
//         right: 0;
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
//         display:flex;
//         align-items:center;
//         gap: 12px;
//         text-decoration:none;
//         color:white;
//         min-width: 220px;
//       }
//       .brand-icon{
//         width: 44px;
//         height: 44px;
//         border-radius: 12px;
//         background: ${brand};
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         box-shadow: 0 10px 26px rgba(179,89,0,0.25);
//       }
//       .brand-text{ line-height: 1.05; }
//       .brand-title{
//         font-weight: 1000;
//         letter-spacing: 0.8px;
//         font-size: 16px;
//       }
//       .brand-sub{
//         font-weight: 900;
//         font-size: 11px;
//         letter-spacing: 2px;
//         opacity: 0.85;
//       }

//       .nav{
//         display:flex;
//         align-items:center;
//         gap: 22px;
//         flex: 1;
//       }
//       .nav.center{
//         justify-content:center; /* ✅ tabs center */
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
//       .hamburger{
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

//       /* ✅ drawer */
//       .drawer-overlay{
//         position: fixed; inset:0;
//         background: rgba(0,0,0,0.55);
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
//       .projects-hero { 
//         position: relative; 
//         height: 520px; 
//         display:flex; 
//         align-items:center; 
//         justify-content:center; 
//         color: white; 
//         overflow:hidden;
//         padding-top: 76px;
//       }
//       .hero-bg{ position:absolute; inset:0; }
//       .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
//       .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.65)); }
//       .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 12px; }

//       .badge { background: ${brand}; padding: 6px 16px; border-radius: 999px; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing:1px; display:inline-block; }
//       .projects-hero h1 { font-size: clamp(28px, 4vw, 56px); font-weight: 1000; margin: 18px 0; }
//       .projects-hero p { color: rgba(255,255,255,0.9); }

//       .dots{ display:flex; gap:10px; justify-content:center; margin-top: 18px; }
//       .dot{ width: 44px; height: 12px; border-radius: 999px; border:1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.16); cursor:pointer; }
//       .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

//       /* FILTER SECTION */
//       .filter-section { padding: 26px 0 10px; background: #fff; }
//       .filter-card { background: white; padding: 22px; border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.10); border:1px solid #f1f1f1; }

//       .filter-tabs { display:flex; justify-content:center; gap: 10px; margin-bottom: 16px; }
//       .filter-tabs button{ padding: 10px 22px; border: 1px solid #eee; background: #f6f6f6; font-weight: 900; border-radius: 10px; cursor:pointer; }
//       .filter-tabs button.active{ background: ${ink}; color:white; border-color:${ink}; }

//       .search-grid { display:grid; grid-template-columns: repeat(12, 1fr); gap: 12px; align-items:end; }
//       .search-box { grid-column: span 3; background:#f9f9f9; border:1px solid #eee; padding: 12px; border-radius: 12px; display:flex; align-items:center; gap:10px; color:#777; }
//       .search-box input{ border:none; background:transparent; outline:none; width:100%; font-size:14px; }

//       .select-real { grid-column: span 2; background:#fff; border:1px solid #eee; border-radius:12px; padding: 10px 12px; }
//       .select-real label{ font-size:11px; font-weight:900; color:#111; text-transform:uppercase; letter-spacing:0.8px; display:block; margin-bottom:6px; }
//       .select-real select{ width:100%; border:1px solid #eee; background:#fafafa; border-radius:10px; padding:10px; outline:none; font-weight:700; }

//       .price-slider{ grid-column: span 3; background:#fff; border:1px solid #eee; border-radius:12px; padding: 12px; }
//       .price-slider input{ width:100%; margin-top:10px; accent-color:${brand}; }
//       .price-pill{ font-weight: 1000; color: ${brand}; }
//       .range-hint{ font-size: 11px; color:#777; margin-top: 6px; }

//       .filter-actions{ grid-column: span 2; display:flex; gap:10px; }
//       .btn-apply{ width:100%; padding:12px; border:none; border-radius:12px; background:${ink}; color:white; font-weight:1000; cursor:pointer; }
//       .btn-reset{ width:100%; padding:12px; border:1px solid #eee; border-radius:12px; background:white; font-weight:1000; cursor:pointer; }

//       /* GRID */
//       .section-padding { padding: 40px 0 70px; background: ${THEME.soft}; }
//       .projects-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 18px; }

//       .project-card{ background:white; border-radius:16px; overflow:hidden; border:1px solid #f0f0f0; box-shadow: 0 10px 30px rgba(0,0,0,0.06); cursor:pointer; }
//       .card-img { height: 230px; position:relative; overflow:hidden; }
//       .card-img img{ width:100%; height:100%; object-fit:cover; transition: 0.5s; }
//       .project-card:hover .card-img img{ transform: scale(1.08); }
//       .img-tags { position:absolute; top:14px; left:14px; right:14px; display:flex; justify-content:space-between; gap:10px; }
//       .loc-tag{ background: rgba(255,255,255,0.92); padding: 6px 10px; border-radius:999px; font-weight:1000; font-size:11px; }
//       .type-tag{ background: ${brand}; color:white; padding: 6px 10px; border-radius:999px; font-weight:1000; font-size:11px; }

//       .card-body{ padding: 18px; }
//       .project-name{ font-size: 16px; font-weight: 1000; color:${ink}; margin-bottom: 8px; }
//       .project-desc{ font-size: 13px; color:#666; line-height: 1.65; margin-bottom: 14px; }

//       .project-meta{ display:flex; gap:14px; border-top:1px solid #eee; padding-top:12px; margin-bottom: 14px; }
//       .meta-item{ flex:1; }
//       .meta-item span{ display:block; font-size:10px; font-weight:900; color:#9a9a9a; letter-spacing:0.6px; }
//       .meta-item strong{ font-size: 13px; color:#222; }
//       .price-text{ color:${brand}; }

//       .card-actions{ display:flex; gap:10px; }
//       .btn-brochure, .btn-whatsapp{ flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding: 10px; border-radius: 12px; text-decoration:none; font-weight: 1000; font-size: 12px; }
//       .btn-brochure{ background:#111; color:white; }
//       .btn-whatsapp{ background:#00c853; color:white; }

//       .empty{ background:white; border:1px solid #eee; border-radius:16px; padding: 30px; text-align:center; color:#555; font-weight:900; }

//       /* MODAL */
//       .modal-overlay { position:fixed; inset:0; background: rgba(0,0,0,0.86); display:flex; align-items:center; justify-content:center; z-index:4000; padding: 16px; }
//       .modal-content{ background:white; width: min(1100px, 96vw); border-radius: 18px; overflow:hidden; position:relative; }
//       .close-btn{ position:absolute; top:14px; right:14px; border:none; background:white; width:42px; height:42px; border-radius: 12px; cursor:pointer; box-shadow:0 10px 30px rgba(0,0,0,0.18); z-index:10; }

//       .modal-grid{ display:grid; grid-template-columns: 1.05fr 0.95fr; }
//       .modal-img-area{ background:#000; }
//       .modal-img-area img{ width:100%; height:100%; min-height: 520px; object-fit:cover; display:block; }
//       .modal-text-area{ padding: 28px; }
//       .gold-text{ color:${brand}; font-weight:1000; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; }
//       .modal-text-area h2{ font-size: 30px; font-weight: 1100; margin: 10px 0; color:${ink}; }
//       .price-label{ font-size: 20px; font-weight: 1100; color:${brand}; margin-bottom: 14px; }
//       .long-desc{ color:#555; line-height: 1.8; font-size: 14px; margin-bottom: 16px; }

//       .features-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; }
//       .feat-chip{ background:#f4f4f4; border:1px solid #eee; border-radius: 12px; padding: 10px 12px; font-weight: 900; font-size: 13px; }

//       .modal-cta{ display:flex; gap: 12px; flex-wrap:wrap; }
//       .cta-call{ background:#f0f0f0; color:${ink}; text-decoration:none; padding: 12px 14px; border-radius: 14px; font-weight: 1000; display:flex; align-items:center; gap: 10px; }
//       .cta-visit{ background:${ink}; color:white; text-decoration:none; padding: 12px 14px; border-radius: 14px; font-weight: 1000; display:flex; align-items:center; gap: 10px; }

//       /* ✅ footer (same as home) */
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
//         .nav{ display:none; }        /* hide desktop tabs */
//         .hamburger{ display:flex; }  /* show mobile button */
//         .search-grid{ grid-template-columns: 1fr; }
//         .search-box, .select-real, .price-slider, .filter-actions{ grid-column: auto; }
//         .modal-grid{ grid-template-columns: 1fr; }
//         .modal-img-area img{ min-height: 260px; }
//         .features-grid{ grid-template-columns: 1fr; }
//         .projects-hero{ height: 420px; padding-top: 76px; }
//         .footer-grid{ grid-template-columns: 1fr; }
//         .cta{ display:none; } /* optional: keep header cleaner on mobile */
//       }
//     `}} />
//   );
// }

'use client';

import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, X, Phone, MessageSquare, ArrowRight, Menu, Building2, FileText, Sparkles, Home as HomeIcon, User } from "lucide-react";
import API_BASE from "./Api";

const THEME = {
  ink: "#0B1220",
  dark: "#1a1a1a",
  soft: "#F6F7FB",
  brand: "#B35900",
};

type Project = {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  category: "residential" | "commercial";
  property_type: string;
  configuration: string;
  location: string;
  price_min: number | null;
  price_max: number | null;
  price_label: string;
  short_description: string;
  description: string;
  cover_image_url: string;
  brochure_url: string;
  gallery_urls: string[];
  features: string[];
};

type Meta = {
  property_types: string[];
  configurations: string[];
  locations: string[];
  min_price: number;
  max_price: number;
};
const HERO_IMAGES = [
  "/images/back1.jpg",
  "/images/back2.jpg",
  "/images/back3.jpg",
  "/images/back4.jpg",
  "/images/back5.jpg",
  "/images/back6.jpg",
];
function parseAnyPriceToNumber(label: string): number {
  const s = (label || "").toLowerCase();
  const digitMatch = s.match(/[\d,.]+/);
  const raw = digitMatch ? digitMatch[0].replace(/,/g, "") : "";
  const base = raw && !isNaN(Number(raw)) ? Number(raw) : 0;
  if (s.includes("cr") || s.includes("crore")) return base ? base * 10000000 : 0;
  if (s.includes("lakh") || s.includes("lac")) return base ? base * 100000 : 0;
  return base;
}

/** ✅ Updated Header: center tabs + mobile menu + admin login + same behavior */
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

  // lock scroll while menu open
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
              <div className="brand-title">SHIVSHAKTI REAL ESTATE ADVISORY </div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          {/* ✅ Center tabs on desktop */}
          <nav className="nav center">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
            <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login" onClick={() => setMenuOpen(false)}>ADMIN LOGIN</Link>
          </nav>

          <div className="right-actions">
            <Link className="cta" to="/contact" onClick={() => setMenuOpen(false)}>
              GET QUOTE
            </Link>

            {/* ✅ Mobile menu button */}
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

      {/* ✅ Mobile Drawer (home page jaisa) */}
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
          <div className="df-muted">Quick Actions</div>
          <a className="df-link" href="tel:+918956032764">Call Us</a>
          <a
            className="df-link"
            href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  const [meta, setMeta] = useState<Meta | null>(null);
  const [metaAll, setMetaAll] = useState<Meta | null>(null);

  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState<"residential" | "commercial">("residential");
  const [q, setQ] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const [heroIndex, setHeroIndex] = useState(0);

  // ✅ NEW: Mobile menu state (added only; nothing removed)
  const [menuOpen, setMenuOpen] = useState(false);

  const computedMax = useMemo(() => {
    const serverMax = Number(meta?.max_price || 0);
    let fallbackMax = 0;
    for (const p of items) {
      fallbackMax = Math.max(
        fallbackMax,
        Number(p.price_max || 0),
        Number(p.price_min || 0),
        parseAnyPriceToNumber(p.price_label)
      );
    }
    return Math.max(serverMax, fallbackMax, 1000000);
  }, [meta, items]);

  const computedMin = useMemo(() => Math.max(0, Number(meta?.min_price || 0)), [meta]);

  const fetchList = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("category", category);

      if (q.trim()) params.set("q", q.trim());
      if (propertyType) params.set("property_type", propertyType);
      if (configuration) params.set("configuration", configuration);
      if (location) params.set("location", location);
      if (maxPrice > 0) params.set("max_price", String(maxPrice));

      const res = await fetch(`${API_BASE}/api/projects/?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");

      setItems(data.items || []);
      setMeta(data.meta || null);
    } catch (e) {
      console.error(e);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMetaAll = async () => {
    try {
      const [r1, r2] = await Promise.all([
        fetch(`${API_BASE}/api/projects/?category=residential`),
        fetch(`${API_BASE}/api/projects/?category=commercial`),
      ]);

      const d1 = await r1.json().catch(() => ({}));
      const d2 = await r2.json().catch(() => ({}));

      const allTypes = new Set<string>();
      const allConfig = new Set<string>();
      const allLoc = new Set<string>();

      const m1: Meta | null = d1?.meta || null;
      const m2: Meta | null = d2?.meta || null;

      (m1?.property_types || []).forEach((x) => allTypes.add(x));
      (m2?.property_types || []).forEach((x) => allTypes.add(x));
      (m1?.configurations || []).forEach((x) => allConfig.add(x));
      (m2?.configurations || []).forEach((x) => allConfig.add(x));
      (m1?.locations || []).forEach((x) => allLoc.add(x));
      (m2?.locations || []).forEach((x) => allLoc.add(x));

      const allMax = Math.max(Number(m1?.max_price || 0), Number(m2?.max_price || 0), 1000000);

      setMetaAll({
        property_types: Array.from(allTypes).sort(),
        configurations: Array.from(allConfig).sort(),
        locations: Array.from(allLoc).sort(),
        min_price: 0,
        max_price: allMax,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchDetail = async (slug: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/projects/${slug}/`);
      const data = await res.json();
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed");
      setSelected(data.item);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetchMetaAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (!computedMax) return;
    setMaxPrice((prev) => {
      if (prev === 0) return computedMax;
      if (prev > computedMax) return computedMax;
      return prev;
    });
  }, [computedMax]);

  const applyFilters = () => fetchList();

  const resetFilters = () => {
    setQ("");
    setPropertyType("");
    setConfiguration("");
    setLocation("");
    setMaxPrice(computedMax);
    setTimeout(fetchList, 0);
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      {/* ✅ HEADER (center + mobile menu added) */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* HERO */}
      <section className="projects-hero">
        <div className="hero-bg">
          <img src={HERO_IMAGES[heroIndex]} alt="hero" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">Featured Properties</span>
            <h1>Explore Our Projects</h1>
            <p>Admin adds projects → automatically visible here.</p>

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

      {/* FILTER */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <div className="filter-tabs">
              <button className={category === "residential" ? "active" : ""} onClick={() => setCategory("residential")}>
                RESIDENTIAL
              </button>
              <button className={category === "commercial" ? "active" : ""} onClick={() => setCategory("commercial")}>
                COMMERCIAL
              </button>
            </div>

            <div className="search-grid">
              <div className="search-box">
                <Search size={18} />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search properties..." />
              </div>

              <div className="select-real">
                <label>Property Type</label>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                  <option value="">All</option>
                  {(metaAll?.property_types || meta?.property_types || []).map((x) => (
                    <option key={x} value={x}>{x}</option>
                  ))}
                </select>
              </div>

              <div className="select-real">
                <label>Configuration</label>
                <select value={configuration} onChange={(e) => setConfiguration(e.target.value)}>
                  <option value="">All</option>
                  {(metaAll?.configurations || meta?.configurations || []).map((x) => (
                    <option key={x} value={x}>{x}</option>
                  ))}
                </select>
              </div>

              <div className="select-real">
                <label>Select Location</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="">All</option>
                  {(metaAll?.locations || meta?.locations || []).map((x) => (
                    <option key={x} value={x}>{x}</option>
                  ))}
                </select>
              </div>

              <div className="price-slider">
                <div className="row-between">
                  <span>Max Price</span>
                  <span className="price-pill">₹ {Number(maxPrice || 0).toLocaleString("en-IN")}</span>
                </div>

                <input
                  type="range"
                  min={computedMin}
                  max={computedMax}
                  step={50000}
                  value={Math.min(maxPrice || computedMax, computedMax)}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />

                <div className="range-hint">
                  Range: ₹ {computedMin.toLocaleString("en-IN")} — ₹ {computedMax.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="filter-actions">
                <button className="btn-apply" onClick={applyFilters}>Apply</button>
                <button className="btn-reset" onClick={resetFilters}>Remove Filters</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div className="empty">Loading...</div>
          ) : items.length === 0 ? (
            <div className="empty">No projects found.</div>
          ) : (
            <div className="projects-grid">
              {items.map((p) => (
                <motion.div
                  key={p.id}
                  className="project-card"
                  whileHover={{ y: -10 }}
                  onClick={() => fetchDetail(p.slug)}
                >
                  <div className="card-img">
                    <img src={p.cover_image_url || HERO_IMAGES[0]} alt={p.title} />
                    <div className="img-tags">
                      <span className="loc-tag">{(p.location || "LOCATION").toUpperCase()}</span>
                      <span className="type-tag">{(p.category || "TYPE").toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h2 className="project-name">
                      {p.title}{p.tagline ? ` — ${p.tagline.toUpperCase()}` : ""}
                    </h2>
                    <p className="project-desc">{(p.short_description || p.description || "").slice(0, 120)}...</p>

                    <div className="project-meta">
                      <div className="meta-item">
                        <span>CONFIGURATION</span>
                        <strong>{p.configuration || "—"}</strong>
                      </div>
                      <div className="meta-item">
                        <span>START AT</span>
                        <strong className="price-text">{p.price_label || "—"}</strong>
                      </div>
                    </div>

                    <div className="card-actions" onClick={(e) => e.stopPropagation()}>
                      <a className="btn-brochure" href={p.brochure_url || "#"} onClick={(e) => !p.brochure_url && e.preventDefault()}>
                        <Download size={16} /> BROCHURE
                      </a>
                      <a
                        className="btn-whatsapp"
                        href={`https://wa.me/918956032764?text=Hi%20I%20want%20details%20for%20${encodeURIComponent(p.title)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageSquare size={16} /> WHATSAPP
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-content" initial={{ scale: 0.92, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 20 }}>
              <button className="close-btn" onClick={() => setSelected(null)}><X size={28} /></button>

              <div className="modal-grid">
                <div className="modal-img-area">
                  <img src={selected.cover_image_url || HERO_IMAGES[0]} alt={selected.title} />
                </div>

                <div className="modal-text-area">
                  <div className="gold-text">
                    {selected.location || "—"} • {(selected.property_type || "").toUpperCase()} • {(selected.configuration || "").toUpperCase()}
                  </div>
                  <h2>{selected.title}</h2>
                  <h3 className="price-label">{selected.price_label || "—"}</h3>
                  <p className="long-desc">{selected.description || selected.short_description || ""}</p>

                  {!!selected.features?.length && (
                    <div className="features-grid">
                      {selected.features.map((f) => (
                        <div className="feat-chip" key={f}>✓ {f}</div>
                      ))}
                    </div>
                  )}

                  <div className="modal-cta">
                    <a href="tel:+918956032764" className="cta-call"><Phone size={20} /> Contact Sales</a>
                    <Link to="/contact" className="cta-visit">Schedule Site Visit <ArrowRight size={20} /></Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ SAME FOOTER AS HOME (full footer) */}
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
              <a href="tel:+918956032764">+91 89560 32764</a>
              <a href="mailto:secretarial@systematixgroup.in">secretarial@systematixgroup.in</a>
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

function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { width:100%; min-height:100%; margin:0; padding:0; overflow-x:hidden; font-size: 16px; }
      * { box-sizing:border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; }
      .container { width: min(1200px, 94vw); margin: 0 auto; }
      .row-between{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }

      /* ✅ HEADER (center nav + mobile menu) */
      .topbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
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
        display:flex;
        align-items:center;
        gap: 14px;
        text-decoration:none;
        color:white;
        min-width: 240px;
      }
      .brand-icon{
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: ${brand};
        display:flex;
        align-items:center;
        justify-content:center;
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

      .nav{
        display:flex;
        align-items:center;
        gap: 24px;
        flex: 1;
      }
      .nav.center{
        justify-content:center; /* ✅ tabs center */
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

      /* ✅ drawer */
      .drawer-overlay{
        position: fixed; inset:0;
        background: rgba(0,0,0,0.55);
        z-index: 2800;
        opacity:0; pointer-events:none;
        transition: 0.25s;
      }
      .drawer-overlay.show{ opacity:1; pointer-events:auto; }
      .drawer{
        position: fixed; top: 0; right: 0;
        height: 100vh;
        width: min(380px, 86vw);
        background: #0e0e0e;
        z-index: 2900;
        transform: translateX(110%);
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
      .projects-hero { 
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
      .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.65)); }
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
      .projects-hero h1 { 
        font-size: clamp(40px, 5vw, 68px); 
        font-weight: 1200; 
        line-height: 1.2;
        margin: 18px 0; 
      }
      .projects-hero p { 
        color: rgba(255,255,255,0.9); 
        font-size: 18px;
        line-height: 1.7;
        max-width: 800px;
        margin: 0 auto;
      }

      .dots{ display:flex; gap:12px; justify-content:center; margin-top: 24px; }
      .dot{ width: 50px; height: 14px; border-radius: 999px; border:1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.16); cursor:pointer; }
      .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

      /* FILTER SECTION */
      .filter-section { padding: 32px 0 20px; background: #fff; }
      .filter-card { 
        background: white; 
        padding: 28px; 
        border-radius: 18px; 
        box-shadow: 0 12px 40px rgba(0,0,0,0.10); 
        border:1px solid #f1f1f1; 
      }

      .filter-tabs { display:flex; justify-content:center; gap: 12px; margin-bottom: 20px; }
      .filter-tabs button{ 
        padding: 12px 26px; 
        border: 1px solid #eee; 
        background: #f6f6f6; 
        font-weight: 900; 
        border-radius: 12px; 
        cursor:pointer; 
        font-size: 14px;
      }
      .filter-tabs button.active{ background: ${ink}; color:white; border-color:${ink}; }

      .search-grid { 
        display:grid; 
        grid-template-columns: repeat(12, 1fr); 
        gap: 16px; 
        align-items:end; 
      }
      .search-box { 
        grid-column: span 3; 
        background:#f9f9f9; 
        border:1px solid #eee; 
        padding: 14px; 
        border-radius: 14px; 
        display:flex; 
        align-items:center; 
        gap:12px; 
        color:#777; 
      }
      .search-box input{ 
        border:none; 
        background:transparent; 
        outline:none; 
        width:100%; 
        font-size:15px; 
        font-weight: 500;
      }

      .select-real { 
        grid-column: span 2; 
        background:#fff; 
        border:1px solid #eee; 
        border-radius:14px; 
        padding: 12px 14px; 
      }
      .select-real label{ 
        font-size:12px; 
        font-weight:900; 
        color:#111; 
        text-transform:uppercase; 
        letter-spacing:0.8px; 
        display:block; 
        margin-bottom:8px; 
      }
      .select-real select{ 
        width:100%; 
        border:1px solid #eee; 
        background:#fafafa; 
        border-radius:12px; 
        padding:12px; 
        outline:none; 
        font-weight:700; 
        font-size: 14px;
      }

      .price-slider{ 
        grid-column: span 3; 
        background:#fff; 
        border:1px solid #eee; 
        border-radius:14px; 
        padding: 16px; 
      }
      .price-slider input{ 
        width:100%; 
        margin-top:12px; 
        accent-color:${brand}; 
      }
      .price-pill{ 
        font-weight: 1000; 
        color: ${brand}; 
        font-size: 15px;
      }
      .range-hint{ 
        font-size: 12px; 
        color:#777; 
        margin-top: 8px; 
      }

      .filter-actions{ 
        grid-column: span 2; 
        display:flex; 
        gap:12px; 
      }
      .btn-apply{ 
        width:100%; 
        padding:14px; 
        border:none; 
        border-radius:14px; 
        background:${ink}; 
        color:white; 
        font-weight:1000; 
        cursor:pointer; 
        font-size: 15px;
      }
      .btn-reset{ 
        width:100%; 
        padding:14px; 
        border:1px solid #eee; 
        border-radius:14px; 
        background:white; 
        font-weight:1000; 
        cursor:pointer; 
        font-size: 15px;
      }

      /* GRID */
      .section-padding { 
        padding: 60px 0 80px; 
        background: ${THEME.soft}; 
      }
      .projects-grid { 
        display:grid; 
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); 
        gap: 24px; 
      }

      .project-card{ 
        background:white; 
        border-radius:18px; 
        overflow:hidden; 
        border:1px solid #f0f0f0; 
        box-shadow: 0 10px 30px rgba(0,0,0,0.06); 
        cursor:pointer; 
      }
      .card-img { 
        height: 260px; 
        position:relative; 
        overflow:hidden; 
      }
      .card-img img{ 
        width:100%; 
        height:100%; 
        object-fit:cover; 
        transition: 0.5s; 
      }
      .project-card:hover .card-img img{ 
        transform: scale(1.08); 
      }
      .img-tags { 
        position:absolute; 
        top:16px; 
        left:16px; 
        right:16px; 
        display:flex; 
        justify-content:space-between; 
        gap:12px; 
      }
      .loc-tag{ 
        background: rgba(255,255,255,0.92); 
        padding: 8px 14px; 
        border-radius:999px; 
        font-weight:1000; 
        font-size:12px; 
      }
      .type-tag{ 
        background: ${brand}; 
        color:white; 
        padding: 8px 14px; 
        border-radius:999px; 
        font-weight:1000; 
        font-size:12px; 
      }

      .card-body{ 
        padding: 22px; 
      }
      .project-name{ 
        font-size: 20px; 
        font-weight: 1100; 
        color:${ink}; 
        margin-bottom: 12px; 
        line-height: 1.3;
      }
      .project-desc{ 
        font-size: 15px; 
        color:#666; 
        line-height: 1.6; 
        margin-bottom: 18px; 
      }

      .project-meta{ 
        display:flex; 
        gap:16px; 
        border-top:1px solid #eee; 
        padding-top:16px; 
        margin-bottom: 18px; 
      }
      .meta-item{ 
        flex:1; 
      }
      .meta-item span{ 
        display:block; 
        font-size:11px; 
        font-weight:900; 
        color:#9a9a9a; 
        letter-spacing:0.6px; 
        margin-bottom: 4px;
      }
      .meta-item strong{ 
        font-size: 15px; 
        color:#222; 
      }
      .price-text{ 
        color:${brand}; 
        font-size: 16px;
      }

      .card-actions{ 
        display:flex; 
        gap:12px; 
      }
      .btn-brochure, .btn-whatsapp{ 
        flex:1; 
        display:flex; 
        align-items:center; 
        justify-content:center; 
        gap:10px; 
        padding: 12px; 
        border-radius: 14px; 
        text-decoration:none; 
        font-weight: 1000; 
        font-size: 13px; 
      }
      .btn-brochure{ 
        background:#111; 
        color:white; 
      }
      .btn-whatsapp{ 
        background:#00c853; 
        color:white; 
      }

      .empty{ 
        background:white; 
        border:1px solid #eee; 
        border-radius:18px; 
        padding: 40px; 
        text-align:center; 
        color:#555; 
        font-weight:900; 
        font-size: 16px;
      }

      /* MODAL */
      .modal-overlay { 
        position:fixed; 
        inset:0; 
        background: rgba(0,0,0,0.86); 
        display:flex; 
        align-items:center; 
        justify-content:center; 
        z-index:4000; 
        padding: 20px; 
      }
      .modal-content{ 
        background:white; 
        width: min(1200px, 96vw); 
        border-radius: 20px; 
        overflow:hidden; 
        position:relative; 
      }
      .close-btn{ 
        position:absolute; 
        top:18px; 
        right:18px; 
        border:none; 
        background:white; 
        width:46px; 
        height:46px; 
        border-radius: 14px; 
        cursor:pointer; 
        box-shadow:0 10px 30px rgba(0,0,0,0.18); 
        z-index:10; 
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal-grid{ 
        display:grid; 
        grid-template-columns: 1.05fr 0.95fr; 
      }
      .modal-img-area{ 
        background:#000; 
      }
      .modal-img-area img{ 
        width:100%; 
        height:100%; 
        min-height: 580px; 
        object-fit:cover; 
        display:block; 
      }
      .modal-text-area{ 
        padding: 32px; 
      }
      .gold-text{ 
        color:${brand}; 
        font-weight:1000; 
        font-size: 13px; 
        letter-spacing: 1px; 
        text-transform: uppercase; 
      }
      .modal-text-area h2{ 
        font-size: 34px; 
        font-weight: 1100; 
        margin: 12px 0; 
        color:${ink}; 
        line-height: 1.3;
      }
      .price-label{ 
        font-size: 24px; 
        font-weight: 1100; 
        color:${brand}; 
        margin-bottom: 18px; 
      }
      .long-desc{ 
        color:#555; 
        line-height: 1.8; 
        font-size: 16px; 
        margin-bottom: 20px; 
      }

      .features-grid{ 
        display:grid; 
        grid-template-columns: 1fr 1fr; 
        gap: 12px; 
        margin-bottom: 24px; 
      }
      .feat-chip{ 
        background:#f4f4f4; 
        border:1px solid #eee; 
        border-radius: 14px; 
        padding: 12px 14px; 
        font-weight: 900; 
        font-size: 14px; 
      }

      .modal-cta{ 
        display:flex; 
        gap: 14px; 
        flex-wrap:wrap; 
      }
      .cta-call{ 
        background:#f0f0f0; 
        color:${ink}; 
        text-decoration:none; 
        padding: 14px 18px; 
        border-radius: 14px; 
        font-weight: 1000; 
        display:flex; 
        align-items:center; 
        gap: 10px; 
        font-size: 15px;
      }
      .cta-visit{ 
        background:${ink}; 
        color:white; 
        text-decoration:none; 
        padding: 14px 18px; 
        border-radius: 14px; 
        font-weight: 1000; 
        display:flex; 
        align-items:center; 
        gap: 10px; 
        font-size: 15px;
      }

      /* ✅ footer (same as home) */
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
      .f-links a:hover{ 
        color:white; 
      }

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

      /* ✅ responsive */
      @media (max-width: 1100px){
        .search-grid{ 
          grid-template-columns: repeat(6, 1fr); 
        }
        .search-box{ grid-column: span 3; }
        .select-real{ grid-column: span 2; }
        .price-slider{ grid-column: span 3; }
        .filter-actions{ grid-column: span 3; }
        .modal-grid{ grid-template-columns: 1fr; }
        .modal-img-area img{ min-height: 300px; }
        .features-grid{ grid-template-columns: 1fr; }
      }

      @media (max-width: 980px){
        .nav{ display:none; }        /* hide desktop tabs */
        .hamburger{ display:flex; }  /* show mobile button */
        .search-grid{ grid-template-columns: 1fr; }
        .search-box, .select-real, .price-slider, .filter-actions{ grid-column: auto; }
        .projects-hero{ min-height: 500px; }
        .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
        .cta{ display:none; } /* optional: keep header cleaner on mobile */
        .projects-grid{ grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
      }

      @media (max-width: 768px){
        .section-padding{ padding: 50px 0 60px; }
        .projects-hero h1{ font-size: 36px; }
        .projects-hero p{ font-size: 17px; }
        .filter-card{ padding: 22px; }
        .filter-tabs{ flex-direction: column; }
        .filter-tabs button{ width: 100%; }
        .projects-grid{ grid-template-columns: 1fr; }
        .modal-content{ width: 98vw; }
        .modal-text-area{ padding: 24px; }
        .modal-text-area h2{ font-size: 28px; }
        .price-label{ font-size: 20px; }
      }

      @media (max-width: 480px){
        .brand{ min-width: 200px; }
        .brand-title{ font-size: 16px; }
        .brand-sub{ font-size: 10px; }
        .projects-hero h1{ font-size: 32px; }
        .projects-hero p{ font-size: 16px; }
        .f-bottom{ flex-direction: column; text-align: center; gap: 12px; }
        .project-name{ font-size: 18px; }
        .project-desc{ font-size: 14px; }
        .card-actions{ flex-direction: column; }
        .btn-brochure, .btn-whatsapp{ width: 100%; }
      }
    `}} />
  );
}