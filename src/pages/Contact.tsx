// // // 'use client';

// // // import React, { useEffect, useMemo, useState } from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   Phone,
// // //   Mail,
// // //   MapPin,
// // //   CalendarDays,
// // //   Building2,
// // //   IndianRupee,
// // //   Users,
// // //   ShieldCheck,
// // //   MessageSquare,
// // //   Send,
// // //   X,
// // //   ChevronRight,
// // //   CheckCircle2,
// // //   Clock,
// // //   Menu,
// // // } from "lucide-react";

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // TYPES
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // interface FormData {
// // //   full_name: string;
// // //   email: string;
// // //   phone: string;
// // //   inquiry_type: string;
// // //   property_type: string;
// // //   budget_range: string;
// // //   preferred_area: string;
// // //   visit_date: string;
// // //   message: string;
// // // }

// // // interface SelectOption {
// // //   v: string;
// // //   l: string;
// // // }

// // // type InputGroupProps = {
// // //   label: string;
// // //   icon: React.ReactNode;
// // //   value: string;
// // //   onChange: (v: string) => void;
// // //   type?: React.HTMLInputTypeAttribute;
// // //   placeholder?: string;
// // //   required?: boolean;
// // // };

// // // type SectionTitleProps = { title: string; subtitle: string };

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // THEME
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // const THEME = {
// // //   ink: "#0B1220",
// // //   text: "#1F2A37",
// // //   sub: "#6B7280",
// // //   line: "rgba(15, 23, 42, 0.10)",
// // //   surface: "#FFFFFF",
// // //   soft: "#F6F7FB",
// // //   brand: "#B35900",
// // //   dark: "#111111",
// // // };

// // // const heroImages = [
// // //   "src/images/back1.jpg",
// // //   "src/images/back2.jpg",
// // //   "src/images/back3.jpg",
// // //   "src/images/back4.jpg",
// // //   "src/images/back5.jpg",
// // //   "src/images/back6.jpg",
// // // ];

// // // const COMPANY = {
// // //   name: "SHIV SHAKTI REAL ESTATE PRIVATE LIMITED",
// // //   
// // //   roc: "ROC Mumbai",
// // //   email: "shivshaktirealestateadvisory@gmail.com",
// // //   registeredAddress:
// // //     "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
// // //   phone: "+919987281075",
// // //   whatsapp: "919987281075",
// // // };

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // HEADER (same as About/Services)
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // function Header({
// // //   menuOpen,
// // //   setMenuOpen,
// // // }: {
// // //   menuOpen: boolean;
// // //   setMenuOpen: (v: boolean) => void;
// // // }) {
// // //   const loc = useLocation();
// // //   const path = loc.pathname || "";

// // //   const isActive = (p: string) => {
// // //     if (p === "/") return path === "/";
// // //     return path.startsWith(p);
// // //   };

// // //   // ✅ scroll lock when drawer open
// // //   useEffect(() => {
// // //     document.body.style.overflow = menuOpen ? "hidden" : "";
// // //     return () => {
// // //       document.body.style.overflow = "";
// // //     };
// // //   }, [menuOpen]);

// // //   return (
// // //     <>
// // //       <header className="topbar">
// // //         <div className="topbar-inner">
// // //           <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
// // //             <div className="brand-icon" aria-hidden="true">
// // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
// // //                 <path
// // //                   d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20"
// // //                   stroke="white"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                 />
// // //                 <path
// // //                   d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20"
// // //                   stroke="white"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                 />
// // //                 <path
// // //                   d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8"
// // //                   stroke="white"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                 />
// // //                 <path
// // //                   d="M16 13H17.8M16 16.5H17.8"
// // //                   stroke="white"
// // //                   strokeWidth="2"
// // //                   strokeLinecap="round"
// // //                 />
// // //               </svg>
// // //             </div>

// // //             <div className="brand-text">
// // //               <div className="brand-title">SHIVSHAKTI REAL ESTATE</div>
// // //               <div className="brand-sub">PVT LTD</div>
// // //             </div>
// // //           </Link>

// // //           {/* ✅ Desktop nav CENTER */}
// // //           <nav className="nav nav-center">
// // //             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>
// // //               HOME
// // //             </Link>
// // //             <Link
// // //               className={isActive("/projects") ? "nav-link active" : "nav-link"}
// // //               to="/projects"
// // //               onClick={() => setMenuOpen(false)}
// // //             >
// // //               PROJECTS
// // //             </Link>
// // //             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>
// // //               ABOUT
// // //             </Link>
// // //             <Link
// // //               className={isActive("/services") ? "nav-link active" : "nav-link"}
// // //               to="/services"
// // //               onClick={() => setMenuOpen(false)}
// // //             >
// // //               SERVICES
// // //             </Link>
// // //             <Link
// // //               className={isActive("/contact") ? "nav-link active" : "nav-link"}
// // //               to="/contact"
// // //               onClick={() => setMenuOpen(false)}
// // //             >
// // //               CONTACT
// // //             </Link>
// // //           </nav>

// // //           <div className="right-actions">
// // //             {/* ✅ keep quote on desktop */}
// // //             <a className="cta" href="#lead-form" onClick={() => setMenuOpen(false)}>
// // //               GET QUOTE
// // //             </a>

// // //             {/* ✅ hamburger ONLY mobile via CSS */}
// // //             <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
// // //               {menuOpen ? <X size={20} /> : <Menu size={20} />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* ✅ Mobile Drawer */}
// // //       <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
// // //       <aside className={menuOpen ? "drawer show" : "drawer"} onClick={(e) => e.stopPropagation()}>
// // //         <div className="drawer-head">
// // //           <div className="drawer-title">Menu</div>
// // //           <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
// // //             <X size={18} />
// // //           </button>
// // //         </div>

// // //         <div className="drawer-links">
// // //           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
// // //             Home
// // //           </Link>
// // //           <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}>
// // //             Projects
// // //           </Link>
// // //           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
// // //             About
// // //           </Link>
// // //           <Link
// // //             className={isActive("/services") ? "dlink active" : "dlink"}
// // //             to="/services"
// // //             onClick={() => setMenuOpen(false)}
// // //           >
// // //             Services
// // //           </Link>
// // //           <a className="dlink" href="#lead-form" onClick={() => setMenuOpen(false)}>
// // //             Get Quote
// // //           </a>

// // //           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
// // //             Contact
// // //           </Link>
// // //         </div>

// // //         <div className="drawer-foot">
// // //           <div className="df-muted">Email</div>
// // //           <a className="df-link" href={`mailto:${COMPANY.email}`}>
// // //             {COMPANY.email}
// // //           </a>
// // //           <div className="df-muted" style={{ marginTop: 10 }}>
// // //             Registered Address
// // //           </div>
// // //           <div className="df-text">{COMPANY.registeredAddress}</div>

// // //           <div className="df-muted" style={{ marginTop: 10 }}>
// // //             Quick Actions
// // //           </div>
// // //           <a className="df-link" href={`tel:${COMPANY.phone}`}>
// // //             Call Us
// // //           </a>
// // //         </div>
// // //       </aside>
// // //     </>
// // //   );
// // // }

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // PAGE
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // export default function ContactUsRealEstate() {
// // //   const location = useLocation();

// // //   // ✅ remove trailing slash to avoid //api/...
// // //   const API_BASE_RAW = (import.meta as any)?.env?.VITE_API_BASE || "http://127.0.0.1:8000";
// // //   const API_BASE = useMemo(() => String(API_BASE_RAW).replace(/\/+$/, ""), [API_BASE_RAW]);

// // //   const [form, setForm] = useState<FormData>({
// // //     full_name: "",
// // //     email: "",
// // //     phone: "",
// // //     inquiry_type: "site_visit",
// // //     property_type: "apartment",
// // //     budget_range: "50L-1Cr",
// // //     preferred_area: "",
// // //     visit_date: "",
// // //     message: "",
// // //   });

// // //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
// // //   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

// // //   // ✅ unified header menu
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const [currentImage, setCurrentImage] = useState(0);

// // //   // hero autoplay (same style as others)
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentImage((prev) => (prev + 1) % heroImages.length);
// // //     }, 4500);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   const onChange = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

// // //   const submit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsSubmitted(false);
// // //     setIsSubmitting(true);

// // //     try {
// // //       const payload = {
// // //         ...form,
// // //         name: form.full_name,
// // //         subject: `Real Estate Inquiry: ${form.inquiry_type}`,
// // //         page: "contact_prudent",
// // //         pathname: location?.pathname || "/contact",
// // //       };

// // //       const res = await fetch(`${API_BASE}/api/contact/`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(payload),
// // //       });

// // //       const data = await res.json().catch(() => ({} as any));
// // //       if (!res.ok || (data && data.ok === false)) throw new Error(data?.error || "Submit failed");

// // //       setIsSubmitted(true);
// // //       setForm({
// // //         full_name: "",
// // //         email: "",
// // //         phone: "",
// // //         inquiry_type: "site_visit",
// // //         property_type: "apartment",
// // //         budget_range: "50L-1Cr",
// // //         preferred_area: "",
// // //         visit_date: "",
// // //         message: "",
// // //       });
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Submit failed. Please try again.");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
// // //       <GlobalFixStyles />

// // //       {/* ✅ SAME HEADER */}
// // //       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

// // //       {/* ✅ HERO (same height/design as other pages) */}
// // //       <section className="hero">
// // //         <div className="hero-bg">
// // //           <AnimatePresence mode="wait">
// // //             <motion.img
// // //               key={currentImage}
// // //               src={heroImages[currentImage]}
// // //               alt="Hero"
// // //               initial={{ opacity: 0, scale: 1.08 }}
// // //               animate={{ opacity: 1, scale: 1.05 }}
// // //               exit={{ opacity: 0, scale: 1.03 }}
// // //               transition={{ duration: 1.1, ease: "easeInOut" }}
// // //             />
// // //           </AnimatePresence>
// // //           <div className="hero-overlay" />
// // //         </div>

// // //         <div className="container hero-content">
// // //           <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
// // //             <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}>
// // //               <HeroChip icon={<ShieldCheck size={14} />} text="RERA GUIDANCE" />
// // //               <HeroChip icon={<Users size={14} />} text="EXPERT CONSULTATION" />
// // //               <HeroChip icon={<Clock size={14} />} text="FAST RESPONSE" />
// // //             </div>

// // //             <h1 className="hero-title">
// // //               Let’s find your next address <br /> with Prudent Consulting
// // //             </h1>

// // //             <p className="hero-subtitle">
// // //               Buying, selling or investing in Pune? Share your preferences — we’ll shortlist options & schedule a guided
// // //               visit.
// // //             </p>

// // //             <div className="hero-cta">
// // //               <a href="#lead-form" className="cta-primary">
// // //                 Start Inquiry <ChevronRight size={16} />
// // //               </a>
// // //               <a href={`tel:${COMPANY.phone}`} className="cta-ghost">
// // //                 Call Sales <Phone size={16} />
// // //               </a>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* FORM */}
// // //       <section id="lead-form" className="section-padding">
// // //         <div className="re-container narrow-container">
// // //           <SectionTitle title="Send us a Message" subtitle="Tell us what you're looking for and we’ll handle the rest." />
// // //           <div className="re-card">
// // //             {isSubmitted && <SuccessAlert />}
// // //             <form onSubmit={submit}>
// // //               <div className="form-grid-stack">
// // //                 <div className="form-grid-2">
// // //                   <InputGroup
// // //                     label="Full Name"
// // //                     icon={<Users size={14} />}
// // //                     value={form.full_name}
// // //                     onChange={(v) => onChange("full_name", v)}
// // //                     required
// // //                   />
// // //                   <InputGroup
// // //                     label="Email Address"
// // //                     icon={<Mail size={14} />}
// // //                     type="email"
// // //                     value={form.email}
// // //                     onChange={(v) => onChange("email", v)}
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="form-grid-2">
// // //                   <InputGroup
// // //                     label="Phone Number"
// // //                     icon={<Phone size={14} />}
// // //                     value={form.phone}
// // //                     onChange={(v) => onChange("phone", v)}
// // //                     required
// // //                   />
// // //                   <SelectGroup
// // //                     label="Inquiry Type"
// // //                     icon={<MessageSquare size={14} />}
// // //                     value={form.inquiry_type}
// // //                     onChange={(v) => onChange("inquiry_type", v)}
// // //                     options={[
// // //                       { v: "site_visit", l: "Site Visit" },
// // //                       { v: "pricing", l: "Pricing" },
// // //                       { v: "partnership", l: "Partnership" },
// // //                     ]}
// // //                   />
// // //                 </div>

// // //                 <div className="form-grid-2">
// // //                   <SelectGroup
// // //                     label="Property Type"
// // //                     icon={<Building2 size={14} />}
// // //                     value={form.property_type}
// // //                     onChange={(v) => onChange("property_type", v)}
// // //                     options={[
// // //                       { v: "apartment", l: "Apartment" },
// // //                       { v: "villa", l: "Villa" },
// // //                       { v: "plot", l: "Plot" },
// // //                     ]}
// // //                   />
// // //                   <SelectGroup
// // //                     label="Budget Range"
// // //                     icon={<IndianRupee size={14} />}
// // //                     value={form.budget_range}
// // //                     onChange={(v) => onChange("budget_range", v)}
// // //                     options={[
// // //                       { v: "20L-50L", l: "₹20L – ₹50L" },
// // //                       { v: "50L-1Cr", l: "₹50L – ₹1Cr" },
// // //                       { v: "1Cr-2Cr", l: "₹1Cr – ₹2Cr" },
// // //                     ]}
// // //                   />
// // //                 </div>

// // //                 <div className="form-grid-2">
// // //                   <InputGroup
// // //                     label="Preferred Area"
// // //                     icon={<MapPin size={14} />}
// // //                     value={form.preferred_area}
// // //                     onChange={(v) => onChange("preferred_area", v)}
// // //                     placeholder="e.g. Wakad, Baner, Hinjewadi"
// // //                   />
// // //                   <InputGroup
// // //                     label="Visit Date"
// // //                     icon={<CalendarDays size={14} />}
// // //                     type="date"
// // //                     value={form.visit_date}
// // //                     onChange={(v) => onChange("visit_date", v)}
// // //                   />
// // //                 </div>

// // //                 <div className="input-field">
// // //                   <label className="re-label">
// // //                     <MessageSquare size={14} /> Message
// // //                   </label>
// // //                   <textarea
// // //                     className="re-input"
// // //                     rows={5}
// // //                     value={form.message}
// // //                     onChange={(e) => onChange("message", e.target.value)}
// // //                     placeholder="Tell us your locality, budget, move-in timeline, and any special requirements..."
// // //                     required
// // //                     style={{ resize: "vertical" }}
// // //                   />
// // //                 </div>

// // //                 <button type="submit" className="submit-btn" disabled={isSubmitting}>
// // //                   {isSubmitting ? "Submitting..." : "Submit Inquiry"} <Send size={18} />
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* OFFICE DETAILS */}
// // //       <section className="section-padding" style={{ background: THEME.surface }}>
// // //         <div className="re-container narrow-container">
// // //           <SectionTitle title="Head Office" subtitle="Direct contact information for our main branch." />
// // //           <div className="re-card address-grid">
// // //             <AddressItem
// // //               icon={<MapPin color={THEME.brand} />}
// // //               title="Address"
// // //               text="6thFloor,No.603-606,PlotNo.C-70,G-Block,BandraKurlaComplex,B andra East , Mumbai, Maharashtra, India - 400051"
// // //             />
// // //             <AddressItem icon={<Mail color={THEME.brand} />} title="Email Support" text="shivshaktirealstatepvtlts.in@gmail.com" />
// // //             <AddressItem icon={<Phone color={THEME.brand} />} title="Let’s Talk" text="+91 9987281075 / +91 8956062764" />
// // //             <AddressItem icon={<Clock color={THEME.brand} />} title="Office Hour" text="Monday - Saturday: 10:00 - 17:00" />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* MAP */}
// // //       <section className="section-padding">
// // //         <div className="re-container narrow-container">
// // //           <SectionTitle title="Locate Us" subtitle="Find our physical office on the map." />
// // //           <div className="re-card" style={{ padding: 0, overflow: "hidden", height: 420 }}>
// // //             <iframe
// // //               title="Sales Office"
// // //               src="https://www.google.com/maps?q=Wakad%20Pune&output=embed"
// // //               style={{ border: 0, width: "100%", height: "100%" }}
// // //               loading="lazy"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ✅ SAME FOOTER AS HOME/ABOUT/SERVICES */}
// // //       <footer className="footer">
// // //         <div className="container footer-grid">
// // //           <div>
// // //             <div className="f-brand">{COMPANY.name}</div>
// // //             <div className="f-muted">
// // //               CIN: {COMPANY.cin} • {COMPANY.roc}
// // //             </div>
// // //             <div className="f-muted" style={{ marginTop: 10 }}>
// // //               Registered Office: {COMPANY.registeredAddress}
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <div className="f-title">Quick Links</div>
// // //             <div className="f-links">
// // //               <Link to="/">Home</Link>
// // //               <Link to="/projects">Projects</Link>
// // //               <Link to="/about">About</Link>
// // //               <Link to="/services">Services</Link>
// // //               <Link to="/contact">Contact</Link>
// // //               <Link to="/login">Admin Login</Link>
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <div className="f-title">Contact</div>
// // //             <div className="f-links">
// // //               <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
// // //               <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
// // //               <a
// // //                 href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //               >
// // //                 WhatsApp Chat
// // //               </a>
// // //               <a href="#lead-form">Get Quote</a>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="container f-bottom">
// // //           <p>© {new Date().getFullYear()} Shiv Shakti Real Estate Private Limited. All rights reserved.</p>
// // //           <div className="f-mini">
// // //             <Link to="/privacy">Privacy</Link>
// // //             <span>•</span>
// // //             <Link to="/terms">Terms</Link>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // GLOBAL CSS (merged: your old + unified header/footer + hero same)
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // function GlobalFixStyles() {
// // //   return (
// // //     <style
// // //       dangerouslySetInnerHTML={{
// // //         __html: `
// // //           html, body { width:100%; min-height:100%; margin:0; padding:0; overflow-x:hidden; }
// // //           * { box-sizing: border-box; }
// // //           body { background: ${THEME.soft}; }
// // //           img { max-width: 100%; display: block; }

// // //           .container { width: min(1200px, 94vw); margin: 0 auto; }
// // //           .re-container { width: min(1200px, 94vw); margin: 0 auto; }
// // //           .narrow-container { max-width: 850px; }

// // //           /* ✅ HEADER (same as About/Services) */
// // //           .topbar{
// // //             position: fixed;
// // //             top: 0; left: 0; right: 0;
// // //             height: 76px;
// // //             z-index: 3000;
// // //             background: rgba(10,10,10,0.75);
// // //             backdrop-filter: blur(10px);
// // //             border-bottom: 1px solid rgba(255,255,255,0.08);
// // //           }
// // //           .topbar-inner{
// // //             height: 76px;
// // //             width: min(1200px, 94vw);
// // //             margin: 0 auto;
// // //             display:flex;
// // //             align-items:center;
// // //             justify-content:space-between;
// // //             gap: 14px;
// // //           }
// // //           .brand{
// // //             display:flex; align-items:center; gap: 12px;
// // //             text-decoration:none; color:white;
// // //             min-width: auto;
// // //           }
// // //           .brand-icon{
// // //             width: 44px; height: 44px; border-radius: 12px;
// // //             background: ${THEME.brand};
// // //             display:flex; align-items:center; justify-content:center;
// // //             box-shadow: 0 10px 26px rgba(179,89,0,0.25);
// // //           }
// // //           .brand-text{ line-height: 1.05; }
// // //           .brand-title{ font-weight: 1000; letter-spacing: 0.8px; font-size: 16px; }
// // //           .brand-sub{ font-weight: 900; font-size: 11px; letter-spacing: 2px; opacity: 0.85; }

// // //           .nav{
// // //             display:flex;
// // //             align-items:center;
// // //             gap: 22px;
// // //             flex: 1;
// // //           }
// // //           .nav-center{ justify-content:center; }
// // //           .nav-link{
// // //             color: rgba(255,255,255,0.88);
// // //             text-decoration:none;
// // //             font-weight: 900;
// // //             font-size: 13px;
// // //             letter-spacing: 1px;
// // //             white-space: nowrap;
// // //           }
// // //           .nav-link:hover{ color: white; }
// // //           .nav-link.active{ color: white; }

// // //           .right-actions{
// // //             display:flex;
// // //             align-items:center;
// // //             gap: 10px;
// // //             min-width: auto;
// // //             justify-content:flex-end;
// // //           }
// // //           .cta{
// // //             background: ${THEME.brand};
// // //             color: white;
// // //             text-decoration:none;
// // //             font-weight: 1000;
// // //             border-radius: 12px;
// // //             padding: 12px 18px;
// // //             letter-spacing: 0.8px;
// // //             font-size: 13px;
// // //             box-shadow: 0 12px 26px rgba(179,89,0,0.25);
// // //             white-space: nowrap;
// // //           }

// // //           .hamburger{
// // //             display:none;
// // //             border: 1px solid rgba(255,255,255,0.18);
// // //             background: rgba(255,255,255,0.10);
// // //             color:white;
// // //             width: 42px; height: 42px;
// // //             border-radius: 12px;
// // //             cursor:pointer;
// // //             align-items:center;
// // //             justify-content:center;
// // //             padding: 0;
// // //           }

// // //           /* ✅ drawer */
// // //           .drawer-overlay{
// // //             position: fixed;
// // //             inset:0;
// // //             background: rgba(0,0,0,0.5);
// // //             z-index: 2800;
// // //             opacity:0;
// // //             pointer-events:none;
// // //             transition: 0.25s;
// // //           }
// // //           .drawer-overlay.show{ opacity:1; pointer-events:auto; }
// // //           .drawer{
// // //             position: fixed;
// // //             top: 0; right: 0;
// // //             height: 100vh;
// // //             width: min(360px, 86vw);
// // //             background: #0e0e0e;
// // //             z-index: 2900;
// // //             transform: translateX(110%);
// // //             transition: transform 0.25s;
// // //             border-left: 1px solid rgba(255,255,255,0.08);
// // //             padding: 16px;
// // //             display:flex;
// // //             flex-direction:column;
// // //             gap: 14px;
// // //           }
// // //           .drawer.show{ transform: translateX(0); }
// // //           .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
// // //           .drawer-title{ color:white; font-weight: 1000; letter-spacing:0.7px; }
// // //           .drawer-close{
// // //             border: 1px solid rgba(255,255,255,0.18);
// // //             background: rgba(255,255,255,0.10);
// // //             color:white;
// // //             width: 38px; height: 38px;
// // //             border-radius: 12px;
// // //             cursor:pointer;
// // //             display:flex; align-items:center; justify-content:center;
// // //           }
// // //           .drawer-links{ display:flex; flex-direction:column; gap: 10px; margin-top: 4px; }
// // //           .dlink{
// // //             color: rgba(255,255,255,0.90);
// // //             text-decoration:none;
// // //             padding: 12px 12px;
// // //             border-radius: 12px;
// // //             background: rgba(255,255,255,0.06);
// // //             border: 1px solid rgba(255,255,255,0.08);
// // //             font-weight: 900;
// // //           }
// // //           .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
// // //           .dcta{
// // //             margin-top: 6px;
// // //             background: ${THEME.brand};
// // //             color:white;
// // //             text-decoration:none;
// // //             padding: 12px 12px;
// // //             border-radius: 12px;
// // //             font-weight: 1000;
// // //             text-align:center;
// // //           }
// // //           .drawer-foot{
// // //             margin-top:auto;
// // //             border-top: 1px solid rgba(255,255,255,0.10);
// // //             padding-top: 12px;
// // //           }
// // //           .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 11px; letter-spacing:0.8px; text-transform:uppercase; }
// // //           .df-link{ color: white; text-decoration:none; font-weight: 900; }
// // //           .df-text{ color: rgba(255,255,255,0.75); font-weight: 800; line-height: 1.6; font-size: 13px; margin-top: 6px; }

// // //           /* ✅ HERO (same as About/Services) */
// // //           .hero{
// // //             position: relative;
// // //             min-height: 520px;
// // //             display:flex;
// // //             align-items:center;
// // //             justify-content:center;
// // //             color: white;
// // //             overflow:hidden;
// // //             padding-top: 76px;
// // //           }
// // //           .hero-bg{ position:absolute; inset:0; }
// // //           .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
// // //           .hero-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); }

// // //           .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 12px; }
// // //           .hero-title { font-size: clamp(26px, 4vw, 52px); font-weight: 1000; margin: 18px 0; line-height:1.08; }
// // //           .hero-subtitle { color: rgba(255,255,255,0.9); max-width: 820px; margin: 0 auto; line-height: 1.7; font-size: 16px; }

// // //           .hero-cta{ display:flex; gap: 12px; justify-content:center; flex-wrap:wrap; margin-top: 18px; }
// // //           .cta-primary{
// // //             background: ${THEME.brand};
// // //             color: white;
// // //             text-decoration:none;
// // //             padding: 12px 16px;
// // //             border-radius: 14px;
// // //             font-weight: 1000;
// // //             display:flex; align-items:center; gap: 10px;
// // //             box-shadow: 0 14px 30px rgba(179,89,0,0.25);
// // //           }
// // //           .cta-ghost{
// // //             background: rgba(255,255,255,0.12);
// // //             border: 1px solid rgba(255,255,255,0.35);
// // //             color: white;
// // //             text-decoration:none;
// // //             padding: 12px 16px;
// // //             border-radius: 14px;
// // //             font-weight: 1000;
// // //             display:flex; align-items:center; gap: 10px;
// // //           }

// // //           /* your original sections */
// // //           .section-padding { padding: 86px 0; }

// // //           .re-card {
// // //             background: white; border-radius: 22px; padding: 42px;
// // //             border: 1px solid ${THEME.line};
// // //             box-shadow: 0 18px 44px rgba(0,0,0,0.05);
// // //           }

// // //           .form-grid-stack { display: flex; flex-direction: column; gap: 18px; }
// // //           .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

// // //           .re-label {
// // //             font-size: 12px; font-weight: 1000; text-transform: uppercase;
// // //             color: ${THEME.sub}; display: flex; align-items: center; gap: 8px;
// // //             margin-bottom: 8px; letter-spacing: 0.7px;
// // //           }
// // //           .re-input {
// // //             width: 100%;
// // //             padding: 12px 14px;
// // //             border-radius: 12px;
// // //             border: 1px solid #E5E7EB;
// // //             outline: none;
// // //             transition: 0.2s;
// // //             font-size: 14px;
// // //             background: white;
// // //           }
// // //           .re-input:focus { border-color: ${THEME.brand}; box-shadow: 0 0 0 4px rgba(179,89,0,0.10); }

// // //           .submit-btn {
// // //             background: ${THEME.brand};
// // //             color: white;
// // //             border: none;
// // //             padding: 16px;
// // //             border-radius: 12px;
// // //             font-weight: 1000;
// // //             cursor: pointer;
// // //             display: flex; align-items: center; justify-content: center; gap: 10px;
// // //             transition: 0.25s;
// // //             text-transform: uppercase;
// // //             font-size: 14px;
// // //             letter-spacing: 1px;
// // //           }
// // //           .submit-btn:hover { transform: translateY(-2px); opacity: 0.98; }

// // //           .address-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }

// // //           /* ✅ FOOTER (same as home/about/services) */
// // //           .footer{
// // //             background:${THEME.dark};
// // //             color:#c9c9c9;
// // //             padding: 44px 0 22px;
// // //             margin-top: 10px;
// // //           }
// // //           .footer-grid{
// // //             display:grid;
// // //             grid-template-columns: 1.4fr 0.8fr 0.8fr;
// // //             gap: 16px;
// // //             padding-bottom: 18px;
// // //             border-bottom: 1px solid rgba(255,255,255,0.10);
// // //           }
// // //           .f-brand{ color:white; font-weight: 1100; font-size: 16px; letter-spacing: 0.7px; }
// // //           .f-title{ color:white; font-weight: 1000; letter-spacing: 0.8px; font-size: 12px; text-transform:uppercase; }
// // //           .f-muted{ color: rgba(255,255,255,0.7); font-weight: 780; line-height: 1.65; }
// // //           .f-links{ display:flex; flex-direction:column; gap: 8px; margin-top: 10px; }
// // //           .f-links a{ color:#ddd; text-decoration:none; font-weight: 850; }
// // //           .f-links a:hover{ color:white; }
// // //           .f-bottom{
// // //             margin-top: 16px;
// // //             display:flex;
// // //             align-items:center;
// // //             justify-content:space-between;
// // //             gap: 12px;
// // //             flex-wrap:wrap;
// // //             color: rgba(255,255,255,0.7);
// // //             font-weight: 800;
// // //             font-size: 13px;
// // //           }
// // //           .f-mini{ display:flex; gap: 10px; align-items:center; }
// // //           .f-mini a{ color:#ddd; text-decoration:none; font-weight: 850; }

// // //           @media (max-width: 980px){
// // //             .nav{ display:none; }
// // //             .hamburger{ display:flex;flex-shrink: 0;}
// // //             .cta{ display:none; }  /* keep header clean on mobile */
// // //           }

// // //           @media (max-width: 900px) {
// // //             .form-grid-2, .address-grid { grid-template-columns: 1fr; }
// // //             .re-card { padding: 22px; }
// // //             .hero { min-height: 440px; }
// // //             .section-padding { padding: 70px 0; }
// // //             .footer-grid{ grid-template-columns: 1fr; }
// // //           }
// // //         `,
// // //       }}
// // //     />
// // //   );
// // // }

// // // // ───────────────────────────────────────────────────────────────────────────────
// // // // HELPERS
// // // // ───────────────────────────────────────────────────────────────────────────────
// // // function SectionTitle({ title, subtitle }: SectionTitleProps) {
// // //   return (
// // //     <div style={{ textAlign: "center", marginBottom: 46 }}>
// // //       <h2 style={{ fontSize: 32, fontWeight: 1000, color: THEME.ink }}>{title}</h2>
// // //       <div style={{ width: 52, height: 4, background: THEME.brand, margin: "18px auto", borderRadius: 2 }} />
// // //       <p style={{ color: THEME.sub, fontSize: 16, lineHeight: 1.6 }}>{subtitle}</p>
// // //     </div>
// // //   );
// // // }

// // // function HeroChip({ icon, text }: { icon: React.ReactNode; text: string }) {
// // //   return (
// // //     <span
// // //       style={{
// // //         display: "inline-flex",
// // //         alignItems: "center",
// // //         gap: 8,
// // //         borderRadius: 999,
// // //         padding: "8px 16px",
// // //         background: "rgba(255,255,255,0.10)",
// // //         color: "white",
// // //         fontSize: 11,
// // //         fontWeight: 1000,
// // //         border: "1px solid rgba(255,255,255,0.16)",
// // //       }}
// // //     >
// // //       {icon} {text}
// // //     </span>
// // //   );
// // // }

// // // function InputGroup({ label, icon, value, onChange, type = "text", placeholder, required }: InputGroupProps) {
// // //   return (
// // //     <div className="input-field">
// // //       <label className="re-label">
// // //         {icon} {label}
// // //       </label>
// // //       <input
// // //         className="re-input"
// // //         type={type}
// // //         value={value}
// // //         placeholder={placeholder}
// // //         required={required}
// // //         onChange={(e) => onChange(e.target.value)}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // function SelectGroup({
// // //   label,
// // //   icon,
// // //   value,
// // //   onChange,
// // //   options,
// // // }: {
// // //   label: string;
// // //   icon: React.ReactNode;
// // //   value: string;
// // //   onChange: (v: string) => void;
// // //   options: SelectOption[];
// // // }) {
// // //   return (
// // //     <div className="input-field">
// // //       <label className="re-label">
// // //         {icon} {label}
// // //       </label>
// // //       <select className="re-input" value={value} onChange={(e) => onChange(e.target.value)}>
// // //         {options.map((o) => (
// // //           <option key={o.v} value={o.v}>
// // //             {o.l}
// // //           </option>
// // //         ))}
// // //       </select>
// // //     </div>
// // //   );
// // // }

// // // function AddressItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
// // //   return (
// // //     <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
// // //       <div
// // //         style={{
// // //           width: 48,
// // //           height: 48,
// // //           borderRadius: 14,
// // //           background: "#FFF7ED",
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: "center",
// // //           flexShrink: 0,
// // //           border: "1px solid #FFEDD5",
// // //         }}
// // //       >
// // //         {icon}
// // //       </div>
// // //       <div>
// // //         <div style={{ fontSize: 12, fontWeight: 1000, textTransform: "uppercase", color: THEME.sub, letterSpacing: 0.6 }}>
// // //           {title}
// // //         </div>
// // //         <div style={{ fontSize: 15, fontWeight: 800, marginTop: 4, color: THEME.ink, lineHeight: 1.55 }}>{text}</div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SuccessAlert() {
// // //   return (
// // //     <div
// // //       style={{
// // //         background: "#ECFDF5",
// // //         border: "1px solid #10B981",
// // //         padding: 18,
// // //         borderRadius: 14,
// // //         display: "flex",
// // //         gap: 12,
// // //         marginBottom: 22,
// // //         color: "#065F46",
// // //         alignItems: "center",
// // //       }}
// // //     >
// // //       <CheckCircle2 size={20} />
// // //       <span style={{ fontWeight: 800 }}>Request received! We will contact you shortly.</span>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import React, { useEffect, useMemo, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Phone,
// //   Mail,
// //   MapPin,
// //   CalendarDays,
// //   Building2,
// //   IndianRupee,
// //   Users,
// //   ShieldCheck,
// //   MessageSquare,
// //   Send,
// //   X,
// //   ChevronRight,
// //   CheckCircle2,
// //   Clock,
// //   Menu,
// //   Home as HomeIcon,
// //   FileText,
// //   Sparkles,
// //   User
// // } from "lucide-react";

// // // ───────────────────────────────────────────────────────────────────────────────
// // // TYPES
// // // ───────────────────────────────────────────────────────────────────────────────
// // interface FormData {
// //   full_name: string;
// //   email: string;
// //   phone: string;
// //   inquiry_type: string;
// //   property_type: string;
// //   budget_range: string;
// //   preferred_area: string;
// //   visit_date: string;
// //   message: string;
// // }

// // interface SelectOption {
// //   v: string;
// //   l: string;
// // }

// // type InputGroupProps = {
// //   label: string;
// //   icon: React.ReactNode;
// //   value: string;
// //   onChange: (v: string) => void;
// //   type?: React.HTMLInputTypeAttribute;
// //   placeholder?: string;
// //   required?: boolean;
// // };

// // type SectionTitleProps = { title: string; subtitle: string };

// // // ───────────────────────────────────────────────────────────────────────────────
// // // THEME
// // // ───────────────────────────────────────────────────────────────────────────────
// // const THEME = {
// //   ink: "#0B1220",
// //   text: "#1F2A37",
// //   sub: "#6B7280",
// //   line: "rgba(15, 23, 42, 0.10)",
// //   surface: "#FFFFFF",
// //   soft: "#F6F7FB",
// //   brand: "#B35900",
// //   dark: "#111111",
// // };
// // const heroImages = [
// //   "/images/back1.jpg",
// //   "/images/back2.jpg",
// //   "/images/back3.jpg",
// //   "/images/back4.jpg",
// //   "/images/back5.jpg",
// //   "/images/back6.jpg",
// // ];

// // const COMPANY = {
// //   name: "SHIV SHAKTI REAL ESTATE ADVISORY PRIVATE LIMITED",
// //   
// //   roc: "ROC Mumbai",
// //   email: "shivshaktirealestateadvisory@gmail.com",
// //   registeredAddress:
// //     "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
// //   phone: "+919987281075",
// //   whatsapp: "919987281075",
// // };

// // // ───────────────────────────────────────────────────────────────────────────────
// // // HEADER (same as About/Services)
// // // ───────────────────────────────────────────────────────────────────────────────
// // function Header({
// //   menuOpen,
// //   setMenuOpen,
// // }: {
// //   menuOpen: boolean;
// //   setMenuOpen: (v: boolean) => void;
// // }) {
// //   const loc = useLocation();
// //   const path = loc.pathname || "";

// //   const isActive = (p: string) => {
// //     if (p === "/") return path === "/";
// //     return path.startsWith(p);
// //   };

// //   // ✅ scroll lock when drawer open
// //   useEffect(() => {
// //     document.body.style.overflow = menuOpen ? "hidden" : "";
// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [menuOpen]);

// //   return (
// //     <>
// //       <header className="topbar">
// //         <div className="topbar-inner">
// //           <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
// //             <div className="brand-icon" aria-hidden="true">
// //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
// //                 <path
// //                   d="M4 20V6.5C4 5.67 4.67 5 5.5 5H13V20"
// //                   stroke="white"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                 />
// //                 <path
// //                   d="M13 9H18.5C19.33 9 20 9.67 20 10.5V20"
// //                   stroke="white"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                 />
// //                 <path
// //                   d="M8 9.5H9.8M8 13H9.8M8 16.5H9.8"
// //                   stroke="white"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                 />
// //                 <path
// //                   d="M16 13H17.8M16 16.5H17.8"
// //                   stroke="white"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                 />
// //               </svg>
// //             </div>

// //             <div className="brand-text">
// //               <div className="brand-title">SHIVSHAKTI REAL ESTATE ADVISORY </div>
// //               <div className="brand-sub">PVT LTD</div>
// //             </div>
// //           </Link>

// //           {/* ✅ Desktop nav CENTER */}
// //           <nav className="nav nav-center">
// //             <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/" onClick={() => setMenuOpen(false)}>
// //               HOME
// //             </Link>
// //             <Link
// //               className={isActive("/projects") ? "nav-link active" : "nav-link"}
// //               to="/projects"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               PROJECTS
// //             </Link>
// //             <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about" onClick={() => setMenuOpen(false)}>
// //               ABOUT
// //             </Link>
// //             <Link
// //               className={isActive("/services") ? "nav-link active" : "nav-link"}
// //               to="/services"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               SERVICES
// //             </Link>
// //             <Link
// //               className={isActive("/contact") ? "nav-link active" : "nav-link"}
// //               to="/contact"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               CONTACT
// //             </Link>
// //             <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login" onClick={() => setMenuOpen(false)}>
// //               ADMIN LOGIN
// //             </Link>
// //           </nav>

// //           <div className="right-actions">
// //             {/* ✅ keep quote on desktop */}
// //             <a className="cta" href="#lead-form" onClick={() => setMenuOpen(false)}>
// //               GET QUOTE
// //             </a>

// //             {/* ✅ hamburger ONLY mobile via CSS */}
// //             <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
// //               {menuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* ✅ Mobile Drawer */}
// //       <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
// //       <aside className={menuOpen ? "drawer show" : "drawer"} onClick={(e) => e.stopPropagation()}>
// //         <div className="drawer-head">
// //           <div className="drawer-title">Menu</div>
// //           <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
// //             <X size={20} />
// //           </button>
// //         </div>

// //         <div className="drawer-links">
// //           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
// //             <HomeIcon size={20} /> Home
// //           </Link>
// //           <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}>
// //             <Building2 size={20} /> Projects
// //           </Link>
// //           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
// //             <FileText size={20} /> About
// //           </Link>
// //           <Link
// //             className={isActive("/services") ? "dlink active" : "dlink"}
// //             to="/services"
// //             onClick={() => setMenuOpen(false)}
// //           >
// //             <Sparkles size={20} /> Services
// //           </Link>
// //           <Link className={isActive("/contact") ? "dlink active" : "dlink"} to="/contact" onClick={() => setMenuOpen(false)}>
// //             <Phone size={20} /> Contact
// //           </Link>
// //           <Link className={isActive("/login") ? "dlink active" : "dlink"} to="/login" onClick={() => setMenuOpen(false)}>
// //             <User size={20} /> Admin Login
// //           </Link>

// //           <a className="dcta" href="#lead-form" onClick={() => setMenuOpen(false)}>
// //             Get Quote
// //           </a>
// //         </div>

// //         <div className="drawer-foot">
// //           <div className="df-muted">Email</div>
// //           <a className="df-link" href={`mailto:${COMPANY.email}`}>
// //             {COMPANY.email}
// //           </a>
// //           <div className="df-muted" style={{ marginTop: 10 }}>
// //             Registered Address
// //           </div>
// //           <div className="df-text">{COMPANY.registeredAddress}</div>

// //           <div className="df-muted" style={{ marginTop: 10 }}>
// //             Quick Actions
// //           </div>
// //           <a className="df-link" href={`tel:${COMPANY.phone}`}>
// //             Call Us
// //           </a>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // }

// // // ───────────────────────────────────────────────────────────────────────────────
// // // PAGE
// // // ───────────────────────────────────────────────────────────────────────────────
// // export default function ContactUsRealEstate() {
// //   const location = useLocation();

// //   // ✅ remove trailing slash to avoid //api/...
// //   const API_BASE_RAW = (import.meta as any)?.env?.VITE_API_BASE || "https://shivbackend.clickconnectmedia.cloud";
// //   const API_BASE = useMemo(() => String(API_BASE_RAW).replace(/\/+$/, ""), [API_BASE_RAW]);

// //   const [form, setForm] = useState<FormData>({
// //     full_name: "",
// //     email: "",
// //     phone: "",
// //     inquiry_type: "site_visit",
// //     property_type: "apartment",
// //     budget_range: "50L-1Cr",
// //     preferred_area: "",
// //     visit_date: "",
// //     message: "",
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
// //   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

// //   // ✅ unified header menu
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const [currentImage, setCurrentImage] = useState(0);

// //   // hero autoplay (same style as others)
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImage((prev) => (prev + 1) % heroImages.length);
// //     }, 4500);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const onChange = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

// //   const submit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitted(false);
// //     setIsSubmitting(true);

// //     try {
// //       const payload = {
// //         ...form,
// //         name: form.full_name,
// //         subject: `Real Estate Inquiry: ${form.inquiry_type}`,
// //         page: "contact_prudent",
// //         pathname: location?.pathname || "/contact",
// //       };

// //       const res = await fetch(`${API_BASE}/api/contact/`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(payload),
// //       });

// //       const data = await res.json().catch(() => ({} as any));
// //       if (!res.ok || (data && data.ok === false)) throw new Error(data?.error || "Submit failed");

// //       setIsSubmitted(true);
// //       setForm({
// //         full_name: "",
// //         email: "",
// //         phone: "",
// //         inquiry_type: "site_visit",
// //         property_type: "apartment",
// //         budget_range: "50L-1Cr",
// //         preferred_area: "",
// //         visit_date: "",
// //         message: "",
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       alert("Submit failed. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
// //       <GlobalFixStyles />

// //       {/* ✅ SAME HEADER */}
// //       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

// //       {/* ✅ HERO (same height/design as other pages) */}
// //       <section className="hero">
// //         <div className="hero-bg">
// //           <AnimatePresence mode="wait">
// //             <motion.img
// //               key={currentImage}
// //               src={heroImages[currentImage]}
// //               alt="Hero"
// //               initial={{ opacity: 0, scale: 1.08 }}
// //               animate={{ opacity: 1, scale: 1.05 }}
// //               exit={{ opacity: 0, scale: 1.03 }}
// //               transition={{ duration: 1.1, ease: "easeInOut" }}
// //             />
// //           </AnimatePresence>
// //           <div className="hero-overlay" />
// //         </div>

// //         <div className="container hero-content">
// //           <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
// //             <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
// //               <HeroChip icon={<ShieldCheck size={16} />} text="RERA GUIDANCE" />
// //               <HeroChip icon={<Users size={16} />} text="EXPERT CONSULTATION" />
// //               <HeroChip icon={<Clock size={16} />} text="FAST RESPONSE" />
// //             </div>

// //             <h1 className="hero-title">
// //               Let's Find Your Perfect Property <br /> With Expert Guidance
// //             </h1>

// //             <p className="hero-subtitle">
// //               Looking to buy, sell or invest in property? Share your preferences — we'll help you find the best options
// //               and schedule guided site visits.
// //             </p>

// //             <div className="hero-cta">
// //               <a href="#lead-form" className="cta-primary">
// //                 Start Inquiry <ChevronRight size={20} />
// //               </a>
// //               <a href={`tel:${COMPANY.phone}`} className="cta-ghost">
// //                 Call Sales <Phone size={20} />
// //               </a>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FORM */}
// //       <section id="lead-form" className="section-padding">
// //         <div className="re-container narrow-container">
// //           <SectionTitle 
// //             title="Send Us Your Requirements" 
// //             subtitle="Tell us what you're looking for and our team will provide personalized assistance." 
// //           />
// //           <div className="re-card">
// //             {isSubmitted && <SuccessAlert />}
// //             <form onSubmit={submit}>
// //               <div className="form-grid-stack">
// //                 <div className="form-grid-2">
// //                   <InputGroup
// //                     label="Full Name"
// //                     icon={<Users size={18} />}
// //                     value={form.full_name}
// //                     onChange={(v) => onChange("full_name", v)}
// //                     required
// //                   />
// //                   <InputGroup
// //                     label="Email Address"
// //                     icon={<Mail size={18} />}
// //                     type="email"
// //                     value={form.email}
// //                     onChange={(v) => onChange("email", v)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-grid-2">
// //                   <InputGroup
// //                     label="Phone Number"
// //                     icon={<Phone size={18} />}
// //                     value={form.phone}
// //                     onChange={(v) => onChange("phone", v)}
// //                     required
// //                   />
// //                   <SelectGroup
// //                     label="Inquiry Type"
// //                     icon={<MessageSquare size={18} />}
// //                     value={form.inquiry_type}
// //                     onChange={(v) => onChange("inquiry_type", v)}
// //                     options={[
// //                       { v: "site_visit", l: "Site Visit" },
// //                       { v: "pricing", l: "Pricing & Availability" },
// //                       { v: "partnership", l: "Business Partnership" },
// //                     ]}
// //                   />
// //                 </div>

// //                 <div className="form-grid-2">
// //                   <SelectGroup
// //                     label="Property Type"
// //                     icon={<Building2 size={18} />}
// //                     value={form.property_type}
// //                     onChange={(v) => onChange("property_type", v)}
// //                     options={[
// //                       { v: "apartment", l: "Apartment" },
// //                       { v: "villa", l: "Villa" },
// //                       { v: "plot", l: "Plot" },
// //                       { v: "commercial", l: "Commercial" },
// //                     ]}
// //                   />
// //                   <SelectGroup
// //                     label="Budget Range"
// //                     icon={<IndianRupee size={18} />}
// //                     value={form.budget_range}
// //                     onChange={(v) => onChange("budget_range", v)}
// //                     options={[
// //                       { v: "20L-50L", l: "₹20L – ₹50L" },
// //                       { v: "50L-1Cr", l: "₹50L – ₹1Cr" },
// //                       { v: "1Cr-2Cr", l: "₹1Cr – ₹2Cr" },
// //                       { v: "2Cr+", l: "Above ₹2Cr" },
// //                     ]}
// //                   />
// //                 </div>

// //                 <div className="form-grid-2">
// //                   <InputGroup
// //                     label="Preferred Area"
// //                     icon={<MapPin size={18} />}
// //                     value={form.preferred_area}
// //                     onChange={(v) => onChange("preferred_area", v)}
// //                     placeholder="e.g. Bandra, Andheri, Powai"
// //                   />
// //                   <InputGroup
// //                     label="Preferred Visit Date"
// //                     icon={<CalendarDays size={18} />}
// //                     type="date"
// //                     value={form.visit_date}
// //                     onChange={(v) => onChange("visit_date", v)}
// //                   />
// //                 </div>

// //                 <div className="input-field">
// //                   <label className="re-label">
// //                     <MessageSquare size={18} /> Additional Details
// //                   </label>
// //                   <textarea
// //                     className="re-input"
// //                     rows={5}
// //                     value={form.message}
// //                     onChange={(e) => onChange("message", e.target.value)}
// //                     placeholder="Tell us about your specific requirements, timeline, and any special needs..."
// //                     required
// //                     style={{ resize: "vertical" }}
// //                   />
// //                 </div>

// //                 <button type="submit" className="submit-btn" disabled={isSubmitting}>
// //                   {isSubmitting ? "Submitting..." : "Submit Your Inquiry"} <Send size={20} />
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* OFFICE DETAILS */}
// //       <section className="section-padding" style={{ background: THEME.surface }}>
// //         <div className="re-container narrow-container">
// //           <SectionTitle 
// //             title="Our Office Details" 
// //             subtitle="Contact us directly at our registered office for any queries." 
// //           />
// //           <div className="re-card address-grid">
// //             <AddressItem
// //               icon={<MapPin color={THEME.brand} />}
// //               title="Registered Address"
// //               text="The Capital, A Wing, 6th Floor, No.603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051"
// //             />
// //             <AddressItem icon={<Mail color={THEME.brand} />} title="Email Support" text="shivshaktirealestateadvisory@gmail.com" />
// //             <AddressItem icon={<Phone color={THEME.brand} />} title="Phone Number" text="+91 9987281075 / +91 89560 62764" />
// //             <AddressItem icon={<Clock color={THEME.brand} />} title="Office Hours" text="Monday - Saturday: 10:00 AM - 6:00 PM" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* MAP */}
// //       <section className="section-padding">
// //         <div
// //   className="re-card"
// //   style={{
// //     padding: 0,
// //     overflow: "hidden",
// //     height: 480,
// //     position: "relative",
// //     cursor: "pointer",
// //   }}
// // >
// //   <a
// //     href="https://www.bing.com/maps/search?mepi=0%7ELocal%7EEmbedded%7ELargeMapLink&ty=17&poicount=18&usebfpr=true&v=2&sV=1&FORM=MPSRPL&q=Shivshakti+Real+Estate+Advisory+pvt+ltd+ke+latest+projects+office+location"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     style={{ display: "block", width: "100%", height: "100%" }}
// //   >
// //     <img
// //       src="/images/image.png"
// //       alt="Office Location Map"
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         objectFit: "cover",
// //         display: "block",
// //       }}
// //     />
// //   </a>

// //   {/* Overlay text */}
// //   <div
// //     style={{
// //       position: "absolute",
// //       bottom: 16,
// //       left: 16,
// //       background: "rgba(0,0,0,0.6)",
// //       color: "#fff",
// //       padding: "8px 12px",
// //       borderRadius: 8,
// //       fontSize: 14,
// //       pointerEvents: "none",
// //     }}
// //   >
// //     Click to open in Bing Maps
// //   </div>
// // </div>

// //       </section>

// //       {/* ✅ SAME FOOTER AS HOME/ABOUT/SERVICES */}
// //       <footer className="footer">
// //         <div className="container footer-grid">
// //           <div>
// //             <div className="f-brand">{COMPANY.name}</div>
// //             <div className="f-muted">
// //               CIN: {COMPANY.cin} • {COMPANY.roc}
// //             </div>
// //             <div className="f-muted" style={{ marginTop: 10 }}>
// //               Registered Office: {COMPANY.registeredAddress}
// //             </div>
// //           </div>

// //           <div>
// //             <div className="f-title">Quick Links</div>
// //             <div className="f-links">
// //               <Link to="/">Home</Link>
// //               <Link to="/projects">Projects</Link>
// //               <Link to="/about">About</Link>
// //               <Link to="/services">Services</Link>
// //               <Link to="/contact">Contact</Link>
// //               <Link to="/login">Admin Login</Link>
// //             </div>
// //           </div>

// //           <div>
// //             <div className="f-title">Contact</div>
// //             <div className="f-links">
// //               <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
// //               <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
// //               <a
// //                 href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20details%20about%20your%20projects`}
// //                 target="_blank"
// //                 rel="noreferrer"
// //               >
// //                 WhatsApp Chat
// //               </a>
// //               <a href="#lead-form">Get Quote</a>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="container f-bottom">
// //           <p>© {new Date().getFullYear()} Shiv Shakti Real Estate Advisory Private Limited. All rights reserved.</p>
// //           <div className="f-mini">
// //             <Link to="/privacy">Privacy</Link>
// //             <span>•</span>
// //             <Link to="/terms">Terms</Link>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // // ───────────────────────────────────────────────────────────────────────────────
// // // GLOBAL CSS (merged: your old + unified header/footer + hero same)
// // // ───────────────────────────────────────────────────────────────────────────────
// // function GlobalFixStyles() {
// //   return (
// //     <style
// //       dangerouslySetInnerHTML={{
// //         __html: `
// //           html, body { 
// //             width:100%; 
// //             min-height:100%; 
// //             margin:0; 
// //             padding:0; 
// //             overflow-x:hidden; 
// //             font-size: 16px;
// //             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
// //           }
// //           * { box-sizing: border-box; }
// //           body { background: ${THEME.soft}; }
// //           img { max-width: 100%; display: block; }

// //           .container { width: min(1200px, 94vw); margin: 0 auto; }
// //           .re-container { width: min(1200px, 94vw); margin: 0 auto; }
// //           .narrow-container { max-width: 900px; }

// //           /* ✅ HEADER (same as About/Services) */
// //           .topbar{
// //             position: fixed;
// //             top: 0; left: 0; right: 0;
// //             height: 80px;
// //             z-index: 3000;
// //             background: rgba(10,10,10,0.85);
// //             backdrop-filter: blur(10px);
// //             border-bottom: 1px solid rgba(255,255,255,0.08);
// //           }
// //           .topbar-inner{
// //             height: 80px;
// //             width: min(1200px, 94vw);
// //             margin: 0 auto;
// //             display:flex;
// //             align-items:center;
// //             justify-content:space-between;
// //             gap: 20px;
// //           }
// //           .brand{
// //             display:flex; align-items:center; gap: 14px;
// //             text-decoration:none; color:white;
// //             min-width: 240px;
// //           }
// //           .brand-icon{
// //             width: 48px; height: 48px; border-radius: 12px;
// //             background: ${THEME.brand};
// //             display:flex; align-items:center; justify-content:center;
// //             box-shadow: 0 10px 26px rgba(179,89,0,0.25);
// //           }
// //           .brand-text{ line-height: 1.1; }
// //           .brand-title{ 
// //             font-weight: 1000; 
// //             letter-spacing: 0.8px; 
// //             font-size: 18px; 
// //           }
// //           .brand-sub{ 
// //             font-weight: 900; 
// //             font-size: 12px; 
// //             letter-spacing: 2px; 
// //             opacity: 0.85; 
// //           }

// //           .nav{
// //             display:flex;
// //             align-items:center;
// //             gap: 24px;
// //             flex: 1;
// //           }
// //           .nav-center{ justify-content:center; }
// //           .nav-link{
// //             color: rgba(255,255,255,0.88);
// //             text-decoration:none;
// //             font-weight: 900;
// //             font-size: 14px;
// //             letter-spacing: 1px;
// //             white-space: nowrap;
// //           }
// //           .nav-link:hover{ color: white; }
// //           .nav-link.active{ color: white; }

// //           .right-actions{
// //             display:flex;
// //             align-items:center;
// //             gap: 12px;
// //             min-width: 180px;
// //             justify-content:flex-end;
// //           }
// //           .cta{
// //             background: ${THEME.brand};
// //             color: white;
// //             text-decoration:none;
// //             font-weight: 1000;
// //             border-radius: 12px;
// //             padding: 14px 20px;
// //             letter-spacing: 0.8px;
// //             font-size: 14px;
// //             box-shadow: 0 12px 26px rgba(179,89,0,0.25);
// //             white-space: nowrap;
// //           }

// //           .hamburger{
// //             display:none;
// //             border: 1px solid rgba(255,255,255,0.18);
// //             background: rgba(255,255,255,0.10);
// //             color:white;
// //             width: 46px; height: 46px;
// //             border-radius: 12px;
// //             cursor:pointer;
// //             align-items:center;
// //             justify-content:center;
// //             padding: 0;
// //           }

// //           /* ✅ drawer */
// //           .drawer-overlay{
// //             position: fixed;
// //             inset:0;
// //             background: rgba(0,0,0,0.5);
// //             z-index: 2800;
// //             opacity:0;
// //             pointer-events:none;
// //             transition: 0.25s;
// //           }
// //           .drawer-overlay.show{ opacity:1; pointer-events:auto; }
// //           .drawer{
// //             position: fixed;
// //             top: 0; right: 0;
// //             height: 100vh;
// //             width: min(380px, 86vw);
// //             background: #0e0e0e;
// //             z-index: 2900;
// //             transform: translateX(110%);
// //             transition: transform 0.25s;
// //             border-left: 1px solid rgba(255,255,255,0.08);
// //             padding: 20px;
// //             display:flex;
// //             flex-direction:column;
// //             gap: 16px;
// //           }
// //           .drawer.show{ transform: translateX(0); }
// //           .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
// //           .drawer-title{ 
// //             color:white; 
// //             font-weight: 1000; 
// //             letter-spacing:0.7px; 
// //             font-size: 18px; 
// //           }
// //           .drawer-close{
// //             border: 1px solid rgba(255,255,255,0.18);
// //             background: rgba(255,255,255,0.10);
// //             color:white;
// //             width: 42px; height: 42px;
// //             border-radius: 12px;
// //             cursor:pointer;
// //             display:flex; align-items:center; justify-content:center;
// //           }
// //           .drawer-links{ 
// //             display:flex; 
// //             flex-direction:column; 
// //             gap: 12px; 
// //             margin-top: 8px; 
// //           }
// //           .dlink{
// //             color: rgba(255,255,255,0.90);
// //             text-decoration:none;
// //             padding: 14px 16px;
// //             border-radius: 12px;
// //             background: rgba(255,255,255,0.06);
// //             border: 1px solid rgba(255,255,255,0.08);
// //             font-weight: 900;
// //             font-size: 15px;
// //             display: flex;
// //             align-items: center;
// //             gap: 12px;
// //           }
// //           .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
// //           .dcta{
// //             margin-top: 10px;
// //             background: ${THEME.brand};
// //             color:white;
// //             text-decoration:none;
// //             padding: 14px 16px;
// //             border-radius: 12px;
// //             font-weight: 1000;
// //             text-align:center;
// //             font-size: 15px;
// //           }
// //           .drawer-foot{
// //             margin-top:auto;
// //             border-top: 1px solid rgba(255,255,255,0.10);
// //             padding-top: 16px;
// //           }
// //           .df-muted{ 
// //             color: rgba(255,255,255,0.55); 
// //             font-weight: 900; 
// //             font-size: 12px; 
// //             letter-spacing:0.8px; 
// //             text-transform:uppercase; 
// //           }
// //           .df-link{ 
// //             color: white; 
// //             text-decoration:none; 
// //             font-weight: 900; 
// //             font-size: 15px;
// //           }
// //           .df-text{ 
// //             color: rgba(255,255,255,0.75); 
// //             font-weight: 800; 
// //             line-height: 1.6; 
// //             font-size: 14px; 
// //             margin-top: 6px; 
// //           }

// //           /* ✅ HERO (same as About/Services) */
// //           .hero{
// //             position: relative;
// //             min-height: 700px;
// //             display:flex;
// //             align-items:center;
// //             justify-content:center;
// //             color: white;
// //             overflow:hidden;
// //             padding-top: 80px;
// //           }
// //           .hero-bg{ position:absolute; inset:0; }
// //           .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
// //           .hero-overlay{ 
// //             position:absolute; 
// //             inset:0; 
// //             background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); 
// //           }

// //           .hero-content{ 
// //             position:relative; 
// //             z-index:2; 
// //             text-align:center; 
// //             padding: 0 16px; 
// //           }
// //           .hero-title { 
// //             font-size: clamp(40px, 5vw, 68px); 
// //             font-weight: 1200; 
// //             margin: 24px 0; 
// //             line-height:1.2;
// //           }
// //           .hero-subtitle { 
// //             color: rgba(255,255,255,0.9); 
// //             max-width: 820px; 
// //             margin: 0 auto; 
// //             line-height: 1.7; 
// //             font-size: 18px;
// //           }

// //           .hero-cta{ 
// //             display:flex; 
// //             gap: 16px; 
// //             justify-content:center; 
// //             flex-wrap:wrap; 
// //             margin-top: 24px; 
// //           }
// //           .cta-primary{
// //             background: ${THEME.brand};
// //             color: white;
// //             text-decoration:none;
// //             padding: 16px 24px;
// //             border-radius: 14px;
// //             font-weight: 1000;
// //             display:flex; 
// //             align-items:center; 
// //             gap: 12px;
// //             font-size: 16px;
// //             box-shadow: 0 14px 30px rgba(179,89,0,0.25);
// //           }
// //           .cta-ghost{
// //             background: rgba(255,255,255,0.12);
// //             border: 1px solid rgba(255,255,255,0.35);
// //             color: white;
// //             text-decoration:none;
// //             padding: 16px 24px;
// //             border-radius: 14px;
// //             font-weight: 1000;
// //             display:flex; 
// //             align-items:center; 
// //             gap: 12px;
// //             font-size: 16px;
// //           }

// //           /* your original sections */
// //           .section-padding { 
// //             padding: 80px 0; 
// //           }

// //           .re-card {
// //             background: white; 
// //             border-radius: 20px; 
// //             padding: 40px;
// //             border: 1px solid ${THEME.line};
// //             box-shadow: 0 18px 44px rgba(0,0,0,0.05);
// //           }

// //           .form-grid-stack { 
// //             display: flex; 
// //             flex-direction: column; 
// //             gap: 24px; 
// //           }
// //           .form-grid-2 { 
// //             display: grid; 
// //             grid-template-columns: 1fr 1fr; 
// //             gap: 24px; 
// //           }

// //           .re-label {
// //             font-size: 13px; 
// //             font-weight: 1000; 
// //             text-transform: uppercase;
// //             color: ${THEME.ink}; 
// //             display: flex; 
// //             align-items: center; 
// //             gap: 10px;
// //             margin-bottom: 10px; 
// //             letter-spacing: 0.7px;
// //           }
// //           .re-input {
// //             width: 100%;
// //             padding: 14px 16px;
// //             border-radius: 12px;
// //             border: 1px solid #E5E7EB;
// //             outline: none;
// //             transition: 0.2s;
// //             font-size: 15px;
// //             background: white;
// //             font-weight: 500;
// //           }
// //           .re-input:focus { 
// //             border-color: ${THEME.brand}; 
// //             box-shadow: 0 0 0 4px rgba(179,89,0,0.10); 
// //           }

// //           .submit-btn {
// //             background: ${THEME.brand};
// //             color: white;
// //             border: none;
// //             padding: 18px;
// //             border-radius: 14px;
// //             font-weight: 1000;
// //             cursor: pointer;
// //             display: flex; 
// //             align-items: center; 
// //             justify-content: center; 
// //             gap: 12px;
// //             transition: 0.25s;
// //             text-transform: uppercase;
// //             font-size: 16px;
// //             letter-spacing: 1px;
// //             margin-top: 10px;
// //           }
// //           .submit-btn:hover { 
// //             transform: translateY(-2px); 
// //             opacity: 0.98; 
// //             box-shadow: 0 12px 24px rgba(179,89,0,0.25);
// //           }
// //           .submit-btn:disabled {
// //             opacity: 0.7;
// //             cursor: not-allowed;
// //           }

// //           .address-grid { 
// //             display: grid; 
// //             grid-template-columns: 1fr 1fr; 
// //             gap: 32px; 
// //           }

// //           /* ✅ FOOTER (same as home/about/services) */
// //           .footer{
// //             background:${THEME.dark};
// //             color:#c9c9c9;
// //             padding: 60px 0 30px;
// //             margin-top: 20px;
// //           }
// //           .footer-grid{
// //             display:grid;
// //             grid-template-columns: 1.4fr 0.8fr 0.8fr;
// //             gap: 24px;
// //             padding-bottom: 30px;
// //             border-bottom: 1px solid rgba(255,255,255,0.10);
// //           }
// //           .f-brand{ 
// //             color:white; 
// //             font-weight: 1100; 
// //             font-size: 20px; 
// //             letter-spacing: 0.8px; 
// //             margin-bottom: 12px;
// //           }
// //           .f-title{ 
// //             color:white; 
// //             font-weight: 1000; 
// //             letter-spacing: 0.8px; 
// //             font-size: 14px; 
// //             text-transform:uppercase; 
// //             margin-bottom: 12px;
// //           }
// //           .f-muted{ 
// //             color: rgba(255,255,255,0.7); 
// //             font-weight: 780; 
// //             line-height: 1.6; 
// //             font-size: 15px; 
// //           }
// //           .f-links{ 
// //             display:flex; 
// //             flex-direction:column; 
// //             gap: 10px; 
// //             margin-top: 10px; 
// //           }
// //           .f-links a{ 
// //             color:#ddd; 
// //             text-decoration:none; 
// //             font-weight: 850; 
// //             font-size: 15px; 
// //           }
// //           .f-links a:hover{ color:white; }

// //           .f-bottom{
// //             margin-top: 24px;
// //             display:flex;
// //             align-items:center;
// //             justify-content:space-between;
// //             gap: 16px;
// //             flex-wrap:wrap;
// //             color: rgba(255,255,255,0.7);
// //             font-weight: 800;
// //             font-size: 14px;
// //           }
// //           .f-mini{ 
// //             display:flex; 
// //             gap: 12px; 
// //             align-items:center; 
// //           }
// //           .f-mini a{ 
// //             color:#ddd; 
// //             text-decoration:none; 
// //             font-weight: 850; 
// //             font-size: 14px; 
// //           }

// //           @media (max-width: 980px){
// //             .nav{ display:none; }
// //             .hamburger{ display:flex; }
// //             .cta{ display:none; }
// //           }

// //           @media (max-width: 900px) {
// //             .form-grid-2, .address-grid { grid-template-columns: 1fr; }
// //             .re-card { padding: 28px; }
// //             .hero { min-height: 500px; }
// //             .section-padding { padding: 60px 0; }
// //             .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
// //           }

// //           @media (max-width: 768px) {
// //             .hero-title { font-size: 36px; }
// //             .hero-subtitle { font-size: 17px; }
// //             .hero-cta { flex-direction: column; align-items: center; }
// //             .cta-primary, .cta-ghost { width: 100%; justify-content: center; }
// //             .re-card { padding: 24px; }
// //             .section-padding { padding: 50px 0; }
// //           }

// //           @media (max-width: 480px) {
// //             .brand { min-width: 200px; }
// //             .brand-title { font-size: 16px; }
// //             .brand-sub { font-size: 10px; }
// //             .hero-title { font-size: 32px; }
// //             .hero-subtitle { font-size: 16px; }
// //             .f-bottom { flex-direction: column; text-align: center; gap: 12px; }
// //           }
// //         `,
// //       }}
// //     />
// //   );
// // }

// // // ───────────────────────────────────────────────────────────────────────────────
// // // HELPERS
// // // ───────────────────────────────────────────────────────────────────────────────
// // function SectionTitle({ title, subtitle }: SectionTitleProps) {
// //   return (
// //     <div style={{ textAlign: "center", marginBottom: 48 }}>
// //       <h2 style={{ fontSize: 42, fontWeight: 1100, color: THEME.ink, lineHeight: 1.3 }}>{title}</h2>
// //       <div style={{ width: 60, height: 4, background: THEME.brand, margin: "20px auto", borderRadius: 2 }} />
// //       <p style={{ color: THEME.sub, fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>{subtitle}</p>
// //     </div>
// //   );
// // }

// // function HeroChip({ icon, text }: { icon: React.ReactNode; text: string }) {
// //   return (
// //     <span
// //       style={{
// //         display: "inline-flex",
// //         alignItems: "center",
// //         gap: 8,
// //         borderRadius: 999,
// //         padding: "10px 18px",
// //         background: "rgba(255,255,255,0.10)",
// //         color: "white",
// //         fontSize: 12,
// //         fontWeight: 1000,
// //         border: "1px solid rgba(255,255,255,0.16)",
// //       }}
// //     >
// //       {icon} {text}
// //     </span>
// //   );
// // }

// // function InputGroup({ label, icon, value, onChange, type = "text", placeholder, required }: InputGroupProps) {
// //   return (
// //     <div className="input-field">
// //       <label className="re-label">
// //         {icon} {label}
// //       </label>
// //       <input
// //         className="re-input"
// //         type={type}
// //         value={value}
// //         placeholder={placeholder}
// //         required={required}
// //         onChange={(e) => onChange(e.target.value)}
// //       />
// //     </div>
// //   );
// // }

// // function SelectGroup({
// //   label,
// //   icon,
// //   value,
// //   onChange,
// //   options,
// // }: {
// //   label: string;
// //   icon: React.ReactNode;
// //   value: string;
// //   onChange: (v: string) => void;
// //   options: SelectOption[];
// // }) {
// //   return (
// //     <div className="input-field">
// //       <label className="re-label">
// //         {icon} {label}
// //       </label>
// //       <select className="re-input" value={value} onChange={(e) => onChange(e.target.value)}>
// //         {options.map((o) => (
// //           <option key={o.v} value={o.v}>
// //             {o.l}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // }

// // function AddressItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
// //   return (
// //     <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
// //       <div
// //         style={{
// //           width: 52,
// //           height: 52,
// //           borderRadius: 14,
// //           background: "#FFF7ED",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           flexShrink: 0,
// //           border: "1px solid #FFEDD5",
// //         }}
// //       >
// //         {icon}
// //       </div>
// //       <div>
// //         <div style={{ fontSize: 13, fontWeight: 1000, textTransform: "uppercase", color: THEME.sub, letterSpacing: 0.6 }}>
// //           {title}
// //         </div>
// //         <div style={{ fontSize: 15, fontWeight: 800, marginTop: 6, color: THEME.ink, lineHeight: 1.6 }}>{text}</div>
// //       </div>
// //     </div>
// //   );
// // }

// // function SuccessAlert() {
// //   return (
// //     <div
// //       style={{
// //         background: "#ECFDF5",
// //         border: "1px solid #10B981",
// //         padding: 20,
// //         borderRadius: 14,
// //         display: "flex",
// //         gap: 12,
// //         marginBottom: 28,
// //         color: "#065F46",
// //         alignItems: "center",
// //         fontSize: 15,
// //         fontWeight: 800,
// //       }}
// //     >
// //       <CheckCircle2 size={22} />
// //       <span>Thank you! Your inquiry has been received. We will contact you shortly.</span>
// //     </div>
// //   );
// // }




// 'use client';

// import React, { useEffect, useMemo, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   CalendarDays,
//   Building2,
//   IndianRupee,
//   Users,
//   ShieldCheck,
//   MessageSquare,
//   Send,
//   X,
//   ChevronRight,
//   CheckCircle2,
//   Clock,
//   Menu,
//   Home as HomeIcon,
//   FileText,
//   Sparkles,
//   User
// } from "lucide-react";

// // ───────────────────────────────────────────────────────────────────────────────
// // TYPES
// // ───────────────────────────────────────────────────────────────────────────────
// interface FormData {
//   full_name: string;
//   email: string;
//   phone: string;
//   inquiry_type: string;
//   property_type: string;
//   budget_range: string;
//   preferred_area: string;
//   visit_date: string;
//   message: string;
// }

// interface SelectOption {
//   v: string;
//   l: string;
// }

// type InputGroupProps = {
//   label: string;
//   icon: React.ReactNode;
//   value: string;
//   onChange: (v: string) => void;
//   type?: React.HTMLInputTypeAttribute;
//   placeholder?: string;
//   required?: boolean;
// };

// type SectionTitleProps = { title: string; subtitle: string };

// // ───────────────────────────────────────────────────────────────────────────────
// // THEME
// // ───────────────────────────────────────────────────────────────────────────────
// const THEME = {
//   ink: "#0B1220",
//   text: "#1F2A37",
//   sub: "#6B7280",
//   line: "rgba(15, 23, 42, 0.10)",
//   surface: "#FFFFFF",
//   soft: "#F6F7FB",
//   brand: "#4A1D0D",
//   dark: "#111111",
// };
// const heroImages = [
//   "/images/back1.jpg",
//   "/images/back2.jpg",
//   "/images/back3.jpg",
//   "/images/back4.jpg",
//   "/images/back5.jpg",
//   "/images/back6.jpg",
// ];

// const COMPANY = {
//   name: "SHIVSHAKTI REAL ESTATE ADVISORY PRIVATE LIMITED",
//   
//   roc: "ROC Mumbai",
//   email: "shivshaktirealestateadvisory@gmail.com",
//   registeredAddress:
//     "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
//   phone: "+919987281075",
//   whatsapp: "919987281075",
// };

// // ───────────────────────────────────────────────────────────────────────────────
// // HEADER (same as About/Services)
// // ───────────────────────────────────────────────────────────────────────────────
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
//   <div className="brand-icon" aria-hidden="true">
//     <img
//       src="/images/shivlogo.jpeg"
//       alt="Shivshakti Real Estate Advisory Logo"
//       className="brand-logo"
//     />
//   </div>

//   <div className="brand-text">
//     <div className="brand-title">SHIVSHAKTI REAL ESTATE ADVISORY</div>
//     <div className="brand-sub">PVT LTD</div>
//   </div>
// </Link>

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
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
//             <X size={20} />
//           </button>
//         </div>

//         <div className="drawer-links">
//           <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}>
//             <HomeIcon size={20} /> Home
//           </Link>
//           <Link
//             className={isActive("/projects") ? "dlink active" : "dlink"}
//             to="/projects"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Building2 size={20} /> Projects
//           </Link>
//           <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}>
//             <FileText size={20} /> About
//           </Link>
//           <Link
//             className={isActive("/services") ? "dlink active" : "dlink"}
//             to="/services"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Sparkles size={20} /> Services
//           </Link>
//           <Link
//             className={isActive("/contact") ? "dlink active" : "dlink"}
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Phone size={20} /> Contact
//           </Link>

//           <Link
//             className={isActive("/login") ? "dlink active" : "dlink"}
//             to="/login"
//             onClick={() => setMenuOpen(false)}
//           >
//             <User size={20} /> Admin Login
//           </Link>

//           <Link className="dcta" to="/contact" onClick={() => setMenuOpen(false)}>
//             Get Quote
//           </Link>
//         </div>

//         <div className="drawer-foot">
//           <div className="df-muted">Quick Actions</div>
//           <a className="df-link" href="tel:+919987281075">Call Us</a>
//           <a
//             className="df-link"
//             href={`https://wa.me/919987281075?text=Hi%20I%20want%20details%20about%20your%20projects`}
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

// // ───────────────────────────────────────────────────────────────────────────────
// // PAGE
// // ───────────────────────────────────────────────────────────────────────────────
// export default function ContactUsRealEstate() {
//   const location = useLocation();

//   // ✅ remove trailing slash to avoid //api/...
//   const API_BASE_RAW = (import.meta as any)?.env?.VITE_API_BASE || "https://shivbackend.clickconnectmedia.cloud";
//   const API_BASE = useMemo(() => String(API_BASE_RAW).replace(/\/+$/, ""), [API_BASE_RAW]);

//   const [form, setForm] = useState<FormData>({
//     full_name: "",
//     email: "",
//     phone: "",
//     inquiry_type: "site_visit",
//     property_type: "apartment",
//     budget_range: "50L-1Cr",
//     preferred_area: "",
//     visit_date: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

//   // ✅ unified header menu
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [currentImage, setCurrentImage] = useState(0);

//   // hero autoplay (same style as others)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length);
//     }, 4500);
//     return () => clearInterval(interval);
//   }, []);

//   const onChange = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(false);
//     setIsSubmitting(true);

//     try {
//       const payload = {
//         ...form,
//         name: form.full_name,
//         subject: `Real Estate Inquiry: ${form.inquiry_type}`,
//         page: "contact_prudent",
//         pathname: location?.pathname || "/contact",
//       };

//       const res = await fetch(`${API_BASE}/api/contact/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json().catch(() => ({} as any));
//       if (!res.ok || (data && data.ok === false)) throw new Error(data?.error || "Submit failed");

//       setIsSubmitted(true);
//       setForm({
//         full_name: "",
//         email: "",
//         phone: "",
//         inquiry_type: "site_visit",
//         property_type: "apartment",
//         budget_range: "50L-1Cr",
//         preferred_area: "",
//         visit_date: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Submit failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
//       <GlobalFixStyles />

//       {/* ✅ SAME HEADER */}
//       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//       {/* ✅ HERO (same height/design as other pages) */}
//       <section className="hero">
//         <div className="hero-bg">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={currentImage}
//               src={heroImages[currentImage]}
//               alt="Hero"
//               initial={{ opacity: 0, scale: 1.08 }}
//               animate={{ opacity: 1, scale: 1.05 }}
//               exit={{ opacity: 0, scale: 1.03 }}
//               transition={{ duration: 1.1, ease: "easeInOut" }}
//             />
//           </AnimatePresence>
//           <div className="hero-overlay" />
//         </div>

//         <div className="container hero-content">
//           <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
//               <HeroChip icon={<ShieldCheck size={16} />} text="RERA GUIDANCE" />
//               <HeroChip icon={<Users size={16} />} text="EXPERT CONSULTATION" />
//               <HeroChip icon={<Clock size={16} />} text="FAST RESPONSE" />
//             </div>

//             <h1 className="hero-title">
//               Let's Find Your Perfect Property <br /> With Expert Guidance
//             </h1>

//             <p className="hero-subtitle">
//               Looking to buy, sell or invest in property? Share your preferences — we'll help you find the best options
//               and schedule guided site visits.
//             </p>

//             <div className="hero-cta">
//               <a href="#lead-form" className="cta-primary">
//                 Start Inquiry <ChevronRight size={20} />
//               </a>
//               <a href={`tel:${COMPANY.phone}`} className="cta-ghost">
//                 Call Sales <Phone size={20} />
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FORM */}
//       <section id="lead-form" className="section-padding">
//         <div className="re-container narrow-container">
//           <SectionTitle 
//             title="Send Us Your Requirements" 
//             subtitle="Tell us what you're looking for and our team will provide personalized assistance." 
//           />
//           <div className="re-card">
//             {isSubmitted && <SuccessAlert />}
//             <form onSubmit={submit}>
//               <div className="form-grid-stack">
//                 <div className="form-grid-2">
//                   <InputGroup
//                     label="Full Name"
//                     icon={<Users size={18} />}
//                     value={form.full_name}
//                     onChange={(v) => onChange("full_name", v)}
//                     required
//                   />
//                   <InputGroup
//                     label="Email Address"
//                     icon={<Mail size={18} />}
//                     type="email"
//                     value={form.email}
//                     onChange={(v) => onChange("email", v)}
//                     required
//                   />
//                 </div>

//                 <div className="form-grid-2">
//                   <InputGroup
//                     label="Phone Number"
//                     icon={<Phone size={18} />}
//                     value={form.phone}
//                     onChange={(v) => onChange("phone", v)}
//                     required
//                   />
//                   <SelectGroup
//                     label="Inquiry Type"
//                     icon={<MessageSquare size={18} />}
//                     value={form.inquiry_type}
//                     onChange={(v) => onChange("inquiry_type", v)}
//                     options={[
//                       { v: "site_visit", l: "Site Visit" },
//                       { v: "pricing", l: "Pricing & Availability" },
//                       { v: "partnership", l: "Business Partnership" },
//                     ]}
//                   />
//                 </div>

//                 <div className="form-grid-2">
//                   <SelectGroup
//                     label="Property Type"
//                     icon={<Building2 size={18} />}
//                     value={form.property_type}
//                     onChange={(v) => onChange("property_type", v)}
//                     options={[
//                       { v: "apartment", l: "Apartment" },
//                       { v: "villa", l: "Villa" },
//                       { v: "plot", l: "Plot" },
//                       { v: "commercial", l: "Commercial" },
//                     ]}
//                   />
//                   <SelectGroup
//                     label="Budget Range"
//                     icon={<IndianRupee size={18} />}
//                     value={form.budget_range}
//                     onChange={(v) => onChange("budget_range", v)}
//                     options={[
//                       { v: "20L-50L", l: "₹20L – ₹50L" },
//                       { v: "50L-1Cr", l: "₹50L – ₹1Cr" },
//                       { v: "1Cr-2Cr", l: "₹1Cr – ₹2Cr" },
//                       { v: "2Cr+", l: "Above ₹2Cr" },
//                     ]}
//                   />
//                 </div>

//                 <div className="form-grid-2">
//                   <InputGroup
//                     label="Preferred Area"
//                     icon={<MapPin size={18} />}
//                     value={form.preferred_area}
//                     onChange={(v) => onChange("preferred_area", v)}
//                     placeholder="e.g. Bandra, Andheri, Powai"
//                   />
//                   <InputGroup
//                     label="Preferred Visit Date"
//                     icon={<CalendarDays size={18} />}
//                     type="date"
//                     value={form.visit_date}
//                     onChange={(v) => onChange("visit_date", v)}
//                   />
//                 </div>

//                 <div className="input-field">
//                   <label className="re-label">
//                     <MessageSquare size={18} /> Additional Details
//                   </label>
//                   <textarea
//                     className="re-input"
//                     rows={5}
//                     value={form.message}
//                     onChange={(e) => onChange("message", e.target.value)}
//                     placeholder="Tell us about your specific requirements, timeline, and any special needs..."
//                     required
//                     style={{ resize: "vertical" }}
//                   />
//                 </div>

//                 <button type="submit" className="submit-btn" disabled={isSubmitting}>
//                   {isSubmitting ? "Submitting..." : "Submit Your Inquiry"} <Send size={20} />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* OFFICE DETAILS */}
//       <section className="section-padding" style={{ background: THEME.surface }}>
//         <div className="re-container narrow-container">
//           <SectionTitle 
//             title="Our Office Details" 
//             subtitle="Contact us directly at our registered office for any queries." 
//           />
//           <div className="re-card address-grid">
//             <AddressItem
//               icon={<MapPin color={THEME.brand} />}
//               title="Registered Address"
//               text="The Capital, A Wing, 6th Floor, No.603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051"
//             />
//             <AddressItem icon={<Mail color={THEME.brand} />} title="Email Support" text="shivshaktirealestateadvisory@gmail.com" />
//             <AddressItem icon={<Phone color={THEME.brand} />} title="Phone Number" text="+91 9987281075 / +91 89560 62764" />
//             <AddressItem icon={<Clock color={THEME.brand} />} title="Office Hours" text="Monday - Saturday: 10:00 AM - 6:00 PM" />
//           </div>
//         </div>
//       </section>

//       {/* MAP */}
//       <section className="section-padding">
//         <div
//   className="re-card"
//   style={{
//     padding: 0,
//     overflow: "hidden",
//     height: 480,
//     position: "relative",
//     cursor: "pointer",
//   }}
// >
//   <a
//     href="https://www.bing.com/maps/search?mepi=0%7ELocal%7EEmbedded%7ELargeMapLink&ty=17&poicount=18&usebfpr=true&v=2&sV=1&FORM=MPSRPL&q=Shivshakti+Real+Estate+Advisory+pvt+ltd+ke+latest+projects+office+location"
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{ display: "block", width: "100%", height: "100%" }}
//   >
//     <img
//       src="/images/image.png"
//       alt="Office Location Map"
//       style={{
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//         display: "block",
//       }}
//     />
//   </a>

//   {/* Overlay text */}
//   <div
//     style={{
//       position: "absolute",
//       bottom: 16,
//       left: 16,
//       background: "rgba(0,0,0,0.6)",
//       color: "#fff",
//       padding: "8px 12px",
//       borderRadius: 8,
//       fontSize: 14,
//       pointerEvents: "none",
//     }}
//   >
//     Click to open in Bing Maps
//   </div>
// </div>

//       </section>

//       {/* ✅ SAME FOOTER AS HOME/ABOUT/SERVICES */}
//       <footer className="footer">
//         <div className="container footer-grid">
//           <div>
//             <div className="f-brand">{COMPANY.name}</div>
//             <div className="f-muted">
//               CIN: {COMPANY.cin} • {COMPANY.roc}
//             </div>
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
//               <a href="#lead-form">Get Quote</a>
//             </div>
//           </div>
//         </div>

//         <div className="container f-bottom">
//           <p>© {new Date().getFullYear()} ShivShakti Real Estate Advisory Private Limited. All rights reserved.</p>
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

// // ───────────────────────────────────────────────────────────────────────────────
// // GLOBAL CSS (merged: your old + unified header/footer + hero same)
// // ───────────────────────────────────────────────────────────────────────────────
// function GlobalFixStyles() {
//   return (
//     <style
//       dangerouslySetInnerHTML={{
//         __html: `
//           html, body { 
//             width:100%; 
//             min-height:100%; 
//             margin:0; 
//             padding:0; 
//             overflow-x:hidden; 
//             font-size: 16px;
//             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
//           }
//           * { box-sizing: border-box; }
//           body { background: ${THEME.soft}; }
//           img { max-width: 100%; display: block; }

//           .container { width: min(1200px, 94vw); margin: 0 auto; }
//           .re-container { width: min(1200px, 94vw); margin: 0 auto; }
//           .narrow-container { max-width: 900px; }

//           /* ✅ HEADER (same as About/Services) */
//           .topbar{
//             position: fixed;
//             top: 0; left: 0; right: 0;
//             height: 80px;
//             z-index: 3000;
//             background:#180704;
//             backdrop-filter: blur(10px);
//             border-bottom: 1px solid rgba(255,255,255,0.08);
//           }
//           .topbar-inner{
//             height: 80px;
//             width: min(1200px, 94vw);
//             margin: 0 auto;
//             display:flex;
//             align-items:center;
//             justify-content:space-between;
//             gap: 20px;
//           }
//           .brand{
//             display:flex; align-items:center; gap: 14px;
//             text-decoration:none; color:white;
//             min-width: 240px;
//           }
//           .brand-icon{
//             width: 48px; height: 48px; border-radius: 12px;
//             background: ${THEME.brand};
//             display:flex; align-items:center; justify-content:center;
//             box-shadow: 0 10px 26px rgba(179,89,0,0.25);
//           }
//           .brand-text{ line-height: 1.1; }
//           .brand-title{ 
//             font-weight: 1000; 
//             letter-spacing: 0.8px; 
//             font-size: 18px; 
//           }
//           .brand-sub{ 
//             font-weight: 900; 
//             font-size: 12px; 
//             letter-spacing: 2px; 
//             opacity: 0.85; 
//           }

//           .nav{
//             display:flex;
//             align-items:center;
//             gap: 24px;
//             flex: 1;
//           }
//           .nav-center{ justify-content:center; }
//           .nav-link{
//             color: rgba(255,255,255,0.88);
//             text-decoration:none;
//             font-weight: 900;
//             font-size: 14px;
//             letter-spacing: 1px;
//             white-space: nowrap;
//           }
//           .nav-link:hover{ color: white; }
//           .nav-link.active{ color: white; }

//           .right-actions{
//             display:flex;
//             align-items:center;
//             gap: 12px;
//             min-width: 180px;
//             justify-content:flex-end;
//           }
//           .cta{
//             background: ${THEME.brand};
//             color: white;
//             text-decoration:none;
//             font-weight: 1000;
//             border-radius: 12px;
//             padding: 14px 20px;
//             letter-spacing: 0.8px;
//             font-size: 14px;
//             box-shadow: 0 12px 26px rgba(179,89,0,0.25);
//             white-space: nowrap;
//           }

//           .hamburger{
//             display:none;
//             border: 1px solid rgba(255,255,255,0.18);
//             background: rgba(255,255,255,0.10);
//             color:white;
//             width: 46px; height: 46px;
//             border-radius: 12px;
//             cursor:pointer;
//             align-items:center;
//             justify-content:center;
//             padding: 0;
//           }

//           /* ✅ drawer */
//           .drawer-overlay{
//             position: fixed;
//             inset:0;
//             background: rgba(0,0,0,0.5);
//             z-index: 2800;
//             opacity:0;
//             pointer-events:none;
//             transition: 0.25s;
//           }
//           .drawer-overlay.show{ opacity:1; pointer-events:auto; }
//           .drawer{
//             position: fixed;
//             top: 0; right: 0;
//             height: 100vh;
//             width: min(380px, 86vw);
//             background: #0e0e0e;
//             z-index: 2900;
//             transform: translateX(110%);
//             transition: transform 0.25s;
//             border-left: 1px solid rgba(255,255,255,0.08);
//             padding: 20px;
//             display:flex;
//             flex-direction:column;
//             gap: 16px;
//           }
//           .drawer.show{ transform: translateX(0); }
//           .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
//           .drawer-title{ 
//             color:white; 
//             font-weight: 1000; 
//             letter-spacing:0.7px; 
//             font-size: 18px; 
//           }
//           .drawer-close{
//             border: 1px solid rgba(255,255,255,0.18);
//             background: rgba(255,255,255,0.10);
//             color:white;
//             width: 42px; height: 42px;
//             border-radius: 12px;
//             cursor:pointer;
//             display:flex; align-items:center; justify-content:center;
//           }
//           .drawer-links{ 
//             display:flex; 
//             flex-direction:column; 
//             gap: 12px; 
//             margin-top: 8px; 
//           }
//           .dlink{
//             color: rgba(255,255,255,0.90);
//             text-decoration:none;
//             padding: 14px 16px;
//             border-radius: 12px;
//             background: rgba(255,255,255,0.06);
//             border: 1px solid rgba(255,255,255,0.08);
//             font-weight: 900;
//             font-size: 15px;
//             display: flex;
//             align-items: center;
//             gap: 12px;
//           }
//           .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
//           .dcta{
//             margin-top: 10px;
//             background: ${THEME.brand};
//             color:white;
//             text-decoration:none;
//             padding: 14px 16px;
//             border-radius: 12px;
//             font-weight: 1000;
//             text-align:center;
//             font-size: 15px;
//           }
//           .drawer-foot{
//             margin-top:auto;
//             border-top: 1px solid rgba(255,255,255,0.10);
//             padding-top: 16px;
//           }
//           .df-muted{ 
//             color: rgba(255,255,255,0.55); 
//             font-weight: 900; 
//             font-size: 12px; 
//             letter-spacing:0.8px; 
//             text-transform:uppercase; 
//           }
//           .df-link{ 
//             color: white; 
//             text-decoration:none; 
//             font-weight: 900; 
//             font-size: 15px;
//           }
//           .df-text{ 
//             color: rgba(255,255,255,0.75); 
//             font-weight: 800; 
//             line-height: 1.6; 
//             font-size: 14px; 
//             margin-top: 6px; 
//           }

//           /* ✅ HERO (same as About/Services) */
//           .hero{
//             position: relative;
//             min-height: 700px;
//             display:flex;
//             align-items:center;
//             justify-content:center;
//             color: white;
//             overflow:hidden;
//             padding-top: 80px;
//           }
//           .hero-bg{ position:absolute; inset:0; }
//           .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.05); }
//           .hero-overlay{ 
//             position:absolute; 
//             inset:0; 
//             background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.72)); 
//           }

//           .hero-content{ 
//             position:relative; 
//             z-index:2; 
//             text-align:center; 
//             padding: 0 16px; 
//           }
//           .hero-title { 
//             font-size: clamp(40px, 5vw, 68px); 
//             font-weight: 1200; 
//             margin: 24px 0; 
//             line-height:1.2;
//           }
//           .hero-subtitle { 
//             color: rgba(255,255,255,0.9); 
//             max-width: 820px; 
//             margin: 0 auto; 
//             line-height: 1.7; 
//             font-size: 18px;
//           }

//           .hero-cta{ 
//             display:flex; 
//             gap: 16px; 
//             justify-content:center; 
//             flex-wrap:wrap; 
//             margin-top: 24px; 
//           }
//           .cta-primary{
//             background: ${THEME.brand};
//             color: white;
//             text-decoration:none;
//             padding: 16px 24px;
//             border-radius: 14px;
//             font-weight: 1000;
//             display:flex; 
//             align-items:center; 
//             gap: 12px;
//             font-size: 16px;
//             box-shadow: 0 14px 30px rgba(179,89,0,0.25);
//           }
//           .cta-ghost{
//             background: rgba(255,255,255,0.12);
//             border: 1px solid rgba(255,255,255,0.35);
//             color: white;
//             text-decoration:none;
//             padding: 16px 24px;
//             border-radius: 14px;
//             font-weight: 1000;
//             display:flex; 
//             align-items:center; 
//             gap: 12px;
//             font-size: 16px;
//           }

//           /* your original sections */
//           .section-padding { 
//             padding: 80px 0; 
//           }

//           .re-card {
//             background: white; 
//             border-radius: 20px; 
//             padding: 40px;
//             border: 1px solid ${THEME.line};
//             box-shadow: 0 18px 44px rgba(0,0,0,0.05);
//           }

//           .form-grid-stack { 
//             display: flex; 
//             flex-direction: column; 
//             gap: 24px; 
//           }
//           .form-grid-2 { 
//             display: grid; 
//             grid-template-columns: 1fr 1fr; 
//             gap: 24px; 
//           }

//           .re-label {
//             font-size: 13px; 
//             font-weight: 1000; 
//             text-transform: uppercase;
//             color: ${THEME.ink}; 
//             display: flex; 
//             align-items: center; 
//             gap: 10px;
//             margin-bottom: 10px; 
//             letter-spacing: 0.7px;
//           }
//           .re-input {
//             width: 100%;
//             padding: 14px 16px;
//             border-radius: 12px;
//             border: 1px solid #E5E7EB;
//             outline: none;
//             transition: 0.2s;
//             font-size: 15px;
//             background: white;
//             font-weight: 500;
//           }
//           .re-input:focus { 
//             border-color: ${THEME.brand}; 
//             box-shadow: 0 0 0 4px rgba(179,89,0,0.10); 
//           }

//           .submit-btn {
//             background: ${THEME.brand};
//             color: white;
//             border: none;
//             padding: 18px;
//             border-radius: 14px;
//             font-weight: 1000;
//             cursor: pointer;
//             display: flex; 
//             align-items: center; 
//             justify-content: center; 
//             gap: 12px;
//             transition: 0.25s;
//             text-transform: uppercase;
//             font-size: 16px;
//             letter-spacing: 1px;
//             margin-top: 10px;
//           }
//           .submit-btn:hover { 
//             transform: translateY(-2px); 
//             opacity: 0.98; 
//             box-shadow: 0 12px 24px rgba(179,89,0,0.25);
//           }
//           .submit-btn:disabled {
//             opacity: 0.7;
//             cursor: not-allowed;
//           }

//           .address-grid { 
//             display: grid; 
//             grid-template-columns: 1fr 1fr; 
//             gap: 32px; 
//           }

//           /* ✅ FOOTER (same as home/about/services) */
//           .footer{
//             background:${THEME.dark};
//             color:#c9c9c9;
//             padding: 60px 0 30px;
//             margin-top: 20px;
//           }
//           .footer-grid{
//             display:grid;
//             grid-template-columns: 1.4fr 0.8fr 0.8fr;
//             gap: 24px;
//             padding-bottom: 30px;
//             border-bottom: 1px solid rgba(255,255,255,0.10);
//           }
//           .f-brand{ 
//             color:white; 
//             font-weight: 1100; 
//             font-size: 20px; 
//             letter-spacing: 0.8px; 
//             margin-bottom: 12px;
//           }
//           .f-title{ 
//             color:white; 
//             font-weight: 1000; 
//             letter-spacing: 0.8px; 
//             font-size: 14px; 
//             text-transform:uppercase; 
//             margin-bottom: 12px;
//           }
//           .f-muted{ 
//             color: rgba(255,255,255,0.7); 
//             font-weight: 780; 
//             line-height: 1.6; 
//             font-size: 15px; 
//           }
//           .f-links{ 
//             display:flex; 
//             flex-direction:column; 
//             gap: 10px; 
//             margin-top: 10px; 
//           }
//           .f-links a{ 
//             color:#ddd; 
//             text-decoration:none; 
//             font-weight: 850; 
//             font-size: 15px; 
//           }
//           .f-links a:hover{ color:white; }

//           .f-bottom{
//             margin-top: 24px;
//             display:flex;
//             align-items:center;
//             justify-content:space-between;
//             gap: 16px;
//             flex-wrap:wrap;
//             color: rgba(255,255,255,0.7);
//             font-weight: 800;
//             font-size: 14px;
//           }
//           .f-mini{ 
//             display:flex; 
//             gap: 12px; 
//             align-items:center; 
//           }
//           .f-mini a{ 
//             color:#ddd; 
//             text-decoration:none; 
//             font-weight: 850; 
//             font-size: 14px; 
//           }

//           @media (max-width: 980px){
//             .nav{ display:none; }
//             .hamburger{ display:flex; }
//             .cta{ display:none; }
//           }

//           @media (max-width: 900px) {
//             .form-grid-2, .address-grid { grid-template-columns: 1fr; }
//             .re-card { padding: 28px; }
//             .hero { min-height: 500px; }
//             .section-padding { padding: 60px 0; }
//             .footer-grid{ grid-template-columns: 1fr; gap: 30px; }
//           }

//           @media (max-width: 768px) {
//             .hero-title { font-size: 36px; }
//             .hero-subtitle { font-size: 17px; }
//             .hero-cta { flex-direction: column; align-items: center; }
//             .cta-primary, .cta-ghost { width: 100%; justify-content: center; }
//             .re-card { padding: 24px; }
//             .section-padding { padding: 50px 0; }
//           }

//           @media (max-width: 480px) {
//             .brand { min-width: 200px; }
//             .brand-title { font-size: 16px; }
//             .brand-sub { font-size: 10px; }
//             .hero-title { font-size: 32px; }
//             .hero-subtitle { font-size: 16px; }
//             .f-bottom { flex-direction: column; text-align: center; gap: 12px; }
//           }
    
// /* HEADER */
//       .topbar{
//         position: fixed;
//         top: 0; left: 0; right: 0;
//         height: 80px;
//         z-index: 3000;
//         background: rgba(10,10,10,0.85);
//         backdrop-filter: blur(10px);
//         border-bottom: 1px solid rgba(255,255,255,0.08);
//       }
//       .topbar-inner{
//         height: 80px;
//         width: min(1200px, 94vw);
//         margin: 0 auto;
//         display:flex;
//         align-items:center;
//         justify-content:space-between;
//         gap: 20px;
//       }
//       .brand{
//         display:flex; align-items:center; gap: 14px;
//         text-decoration:none; color:white;
//         min-width: 240px;
//       }
//      .brand-icon {
//   width: 80px;
//   height: 80px;
//   border-radius: 88px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   flex-shrink: 0;
// }

// .brand-logo {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   display: block;
// }
//       .brand-text{ line-height: 1.1; }
//       .brand-title{ font-weight: 1000; letter-spacing: 0.8px; font-size: 18px; }
//       .brand-sub{ font-weight: 900; font-size: 12px; letter-spacing: 2px; opacity: 0.85; }

//       .nav{
//         display:flex; align-items:center; gap: 24px;
//         flex: 1;
//         justify-content:center;
//       }
//       .nav-link{
//         color: rgba(255,255,255,0.88);
//         text-decoration:none;
//         font-weight: 900;
//         font-size: 14px;
//         letter-spacing: 1px;
//         white-space: nowrap;
//       }
//       .nav-link:hover{ color: white; }
//       .nav-link.active{ color: white; }

//       .right-actions{
//         display:flex;
//         align-items:center;
//         gap: 12px;
//         min-width: 180px;
//         justify-content: flex-end;
//       }
//       .cta{
//         background: #B35900;
//         color: white;
//         text-decoration:none;
//         font-weight: 1000;
//         border-radius: 12px;
//         padding: 14px 20px;
//         letter-spacing: 0.8px;
//         font-size: 14px;
//         box-shadow: 0 12px 26px rgba(179,89,0,0.25);
//         white-space: nowrap;
//       }
//       .hamburger{
//         display:none;
//         border: 1px solid rgba(255,255,255,0.18);
//         background: rgba(255,255,255,0.10);
//         color:white;
//         width: 46px;
//         height: 46px;
//         border-radius: 12px;
//         cursor:pointer;
//         align-items:center;
//         justify-content:center;
//         padding: 0;
//       }

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
//         height: 100dvh;
//         max-height: 100vh;
//         overflow-y: auto;
//         width: min(380px, 86vw);
//         background: #0e0e0e;
//         z-index: 2900;
//         transform: translateX(100%);
//         transition: transform 0.25s;
//         border-left: 1px solid rgba(255,255,255,0.08);
//         padding: 20px;
//         display:flex; flex-direction:column; gap: 16px;
//       }
//       .drawer.show{ transform: translateX(0); }
//       .drawer-head{ display:flex; align-items:center; justify-content:space-between; }
//       .drawer-title{ color:white; font-weight: 1000; letter-spacing:0.7px; font-size: 18px; }
//       .drawer-close{
//         border: 1px solid rgba(255,255,255,0.18);
//         background: rgba(255,255,255,0.10);
//         color:white;
//         width: 42px; height: 42px;
//         border-radius: 12px;
//         cursor:pointer;
//         display:flex; align-items:center; justify-content:center;
//       }
//       .drawer-links{ display:flex; flex-direction:column; gap: 12px; margin-top: 8px; }
//       .dlink{
//         display:flex; align-items:center; gap: 12px;
//         color: rgba(255,255,255,0.92);
//         text-decoration:none;
//         padding: 14px 16px;
//         border-radius: 12px;
//         background: rgba(255,255,255,0.06);
//         border: 1px solid rgba(255,255,255,0.08);
//         font-weight: 900;
//         font-size: 15px;
//       }
//       .dlink.active{ background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
//       .dcta{
//         margin-top: 10px;
//         background: #B35900;
//         color:white;
//         text-decoration:none;
//         padding: 14px 16px;
//         border-radius: 12px;
//         font-weight: 1000;
//         text-align:center;
//         font-size: 15px;
//       }
//       .drawer-foot{
//         margin-top:auto;
//         border-top: 1px solid rgba(255,255,255,0.10);
//         padding-top: 16px;
//         display:flex; flex-direction:column; gap: 10px;
//       }
//       .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 12px; letter-spacing:0.8px; text-transform:uppercase; }
//       .df-link{ color: white; text-decoration:none; font-weight: 900; font-size: 15px; }

      
//       /* SAME HOME HEADER OVERRIDE */
//       .topbar{ position:fixed; top:0; left:0; right:0; height:80px; z-index:3000; background:#180704; backdrop-filter:blur(10px); border-bottom:1px solid rgba(255,255,255,0.08); }
//       .topbar-inner{ height:80px; width:min(1200px,94vw); margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:20px; }
//       .brand{ display:flex; align-items:center; gap:14px; text-decoration:none; color:white; min-width:240px; }
//       .brand-icon{ width:80px; height:80px; border-radius:88px; overflow:hidden; display:flex; align-items:center; justify-content:center; background:transparent; flex-shrink:0; }
//       .brand-logo{ width:100%; height:100%; object-fit:contain; display:block; }
//       .brand-text{ line-height:1.1; }
//       .brand-title{ font-weight:1000; letter-spacing:.8px; font-size:18px; color:white; }
//       .brand-sub{ font-weight:900; font-size:12px; letter-spacing:2px; opacity:.85; color:white; }
//       .nav{ display:flex; align-items:center; gap:24px; flex:1; justify-content:center; }
//       .nav-link{ color:rgba(255,255,255,.88); text-decoration:none; font-weight:900; font-size:14px; letter-spacing:1px; white-space:nowrap; }
//       .nav-link:hover,.nav-link.active{ color:white; }
//       .right-actions{ display:flex; align-items:center; gap:12px; min-width:180px; justify-content:flex-end; }
//       .cta{ background:#4A1D0D; color:white; text-decoration:none; font-weight:1000; border-radius:12px; padding:14px 20px; letter-spacing:.8px; font-size:14px; box-shadow:0 12px 26px rgba(179,89,0,.25); white-space:nowrap; border:0; }
//       .hamburger{ display:none; border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.10); color:white; width:46px; height:46px; border-radius:12px; cursor:pointer; align-items:center; justify-content:center; padding:0; }
//       @media (max-width:980px){ .nav{display:none!important;} .hamburger{display:flex!important;} .cta{display:none!important;} }
//       @media (max-width:480px){ .brand{min-width:200px;} .brand-title{font-size:16px;} .brand-sub{font-size:10px;} }
//       @media (max-width:400px){ .drawer{width:100vw; max-width:100vw; padding:14px;} .dlink{font-size:14px; padding:12px 14px;} .dcta{padding:12px 14px; font-size:14px;} }

//     `,
//       }}
//     />
//   );
// }

// // ───────────────────────────────────────────────────────────────────────────────
// // HELPERS
// // ───────────────────────────────────────────────────────────────────────────────
// function SectionTitle({ title, subtitle }: SectionTitleProps) {
//   return (
//     <div style={{ textAlign: "center", marginBottom: 48 }}>
//       <h2 style={{ fontSize: 42, fontWeight: 1100, color: THEME.ink, lineHeight: 1.3 }}>{title}</h2>
//       <div style={{ width: 60, height: 4, background: THEME.brand, margin: "20px auto", borderRadius: 2 }} />
//       <p style={{ color: THEME.sub, fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>{subtitle}</p>
//     </div>
//   );
// }

// function HeroChip({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <span
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 8,
//         borderRadius: 999,
//         padding: "10px 18px",
//         background: "rgba(255,255,255,0.10)",
//         color: "white",
//         fontSize: 12,
//         fontWeight: 1000,
//         border: "1px solid rgba(255,255,255,0.16)",
//       }}
//     >
//       {icon} {text}
//     </span>
//   );
// }

// function InputGroup({ label, icon, value, onChange, type = "text", placeholder, required }: InputGroupProps) {
//   return (
//     <div className="input-field">
//       <label className="re-label">
//         {icon} {label}
//       </label>
//       <input
//         className="re-input"
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         required={required}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// }

// function SelectGroup({
//   label,
//   icon,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   icon: React.ReactNode;
//   value: string;
//   onChange: (v: string) => void;
//   options: SelectOption[];
// }) {
//   return (
//     <div className="input-field">
//       <label className="re-label">
//         {icon} {label}
//       </label>
//       <select className="re-input" value={value} onChange={(e) => onChange(e.target.value)}>
//         {options.map((o) => (
//           <option key={o.v} value={o.v}>
//             {o.l}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function AddressItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
//   return (
//     <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
//       <div
//         style={{
//           width: 52,
//           height: 52,
//           borderRadius: 14,
//           background: "#FFF7ED",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//           border: "1px solid #FFEDD5",
//         }}
//       >
//         {icon}
//       </div>
//       <div>
//         <div style={{ fontSize: 13, fontWeight: 1000, textTransform: "uppercase", color: THEME.sub, letterSpacing: 0.6 }}>
//           {title}
//         </div>
//         <div style={{ fontSize: 15, fontWeight: 800, marginTop: 6, color: THEME.ink, lineHeight: 1.6 }}>{text}</div>
//       </div>
//     </div>
//   );
// }

// function SuccessAlert() {
//   return (
//     <div
//       style={{
//         background: "#ECFDF5",
//         border: "1px solid #10B981",
//         padding: 20,
//         borderRadius: 14,
//         display: "flex",
//         gap: 12,
//         marginBottom: 28,
//         color: "#065F46",
//         alignItems: "center",
//         fontSize: 15,
//         fontWeight: 800,
//       }}
//     >
//       <CheckCircle2 size={22} />
//       <span>Thank you! Your inquiry has been received. We will contact you shortly.</span>
//     </div>
//   );
// }


'use client';

import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Building2,
  Users,
  ShieldCheck,
  MessageSquare,
  Send,
  X,
  ChevronRight,
  CheckCircle2,
  Clock,
  Menu,
  Home as HomeIcon,
  FileText,
  Sparkles,
  User,
  BarChart3,
  Handshake,
  Target,
} from "lucide-react";

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  project_type: string;
  project_stage: string;
  project_location: string;
  meeting_date: string;
  message: string;
}

interface SelectOption {
  v: string;
  l: string;
}

type InputGroupProps = {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
};

type SectionTitleProps = { title: string; subtitle: string };

const THEME = {
  ink: "#0B1220",
  text: "#1F2A37",
  sub: "#6B7280",
  line: "rgba(15, 23, 42, 0.10)",
  surface: "#FFFFFF",
  soft: "#F6F7FB",
  brand: "#4A1D0D",
  dark: "#111111",
};

const heroImages = [
  "/images/back1.jpg",
  "/images/back2.jpg",
  "/images/back3.jpg",
  "/images/back4.jpg",
  "/images/back5.jpg",
  "/images/back6.jpg",
];

const COMPANY = {
  name: "SHIVSHAKTI REAL ESTATE ADVISORY PRIVATE LIMITED",
  
  roc: "ROC Mumbai",
  email: "shivshaktirealestateadvisory@gmail.com",
  registeredAddress:
    "Sakinaka Andheri East Mumbai 400072",
  phone: "+91 9987281075",
  phoneLabel: "+91 9987281075 ",
  whatsapp: "919987281075",
};

const CONTACT_HIGHLIGHTS = [
  {
    icon: <Target size={22} />,
    title: "Mandate Marketing",
    desc: "End-to-end launch, sales strategy and developer-focused execution support.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Exclusive Agreements",
    desc: "Focused advisory for exclusive agency, sales partnerships and project growth.",
  },
  {
    icon: <Users size={22} />,
    title: "Channel Partner Network",
    desc: "Structured CP outreach and relationship-led visibility for real estate projects.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Market Strategy",
    desc: "Data-backed positioning, pricing insights and solutions for complex projects.",
  },
];

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
              <img
                src="/images/shivlogo.jpeg"
                alt="Shivshakti Real Estate Advisory Logo"
                className="brand-logo"
              />
            </div>

            <div className="brand-text">
              <div className="brand-title">SHIVSHAKTI REAL ESTATE ADVISORY</div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          <nav className="nav">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/">HOME</Link>
            <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects">PROJECTS</Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about">ABOUT</Link>
            <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services">SERVICES</Link>
            <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact">CONTACT</Link>
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login">ADMIN LOGIN</Link>
          </nav>

          <div className="right-actions">
            <a className="cta" href="#lead-form">GET QUOTE</a>
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

      <div className={menuOpen ? "drawer-overlay show" : "drawer-overlay"} onClick={() => setMenuOpen(false)} />
      <aside className={menuOpen ? "drawer show" : "drawer"}>
        <div className="drawer-head">
          <div className="drawer-title">Menu</div>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-links">
          <Link className={isActive("/") ? "dlink active" : "dlink"} to="/" onClick={() => setMenuOpen(false)}><HomeIcon size={20} /> Home</Link>
          <Link className={isActive("/projects") ? "dlink active" : "dlink"} to="/projects" onClick={() => setMenuOpen(false)}><Building2 size={20} /> Projects</Link>
          <Link className={isActive("/about") ? "dlink active" : "dlink"} to="/about" onClick={() => setMenuOpen(false)}><FileText size={20} /> About</Link>
          <Link className={isActive("/services") ? "dlink active" : "dlink"} to="/services" onClick={() => setMenuOpen(false)}><Sparkles size={20} /> Services</Link>
          <Link className={isActive("/contact") ? "dlink active" : "dlink"} to="/contact" onClick={() => setMenuOpen(false)}><Phone size={20} /> Contact</Link>
          <Link className={isActive("/login") ? "dlink active" : "dlink"} to="/login" onClick={() => setMenuOpen(false)}><User size={20} /> Admin Login</Link>
          <a className="dcta" href="#lead-form" onClick={() => setMenuOpen(false)}>Get Quote</a>
        </div>

        <div className="drawer-foot">
          <div className="df-muted">Quick Actions</div>
          <a className="df-link" href={`tel:${COMPANY.phone}`}>Call Us</a>
          <a
            className="df-link"
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20to%20discuss%20real%20estate%20advisory%20services`}
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

export default function ContactUsRealEstate() {
  const location = useLocation();
  const API_BASE_RAW = (import.meta as any)?.env?.VITE_API_BASE || "https://shivbackend.clickconnectmedia.cloud";
  const API_BASE = useMemo(() => String(API_BASE_RAW).replace(/\/+$/, ""), [API_BASE_RAW]);

  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: "mandate_marketing",
    project_type: "residential",
    project_stage: "pre_launch",
    project_location: "",
    meeting_date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const onChange = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setIsSubmitting(true);

    try {
      const payload = {
        ...form,
        name: form.full_name,
        subject: `Real Estate Advisory Inquiry: ${form.inquiry_type}`,
        page: "contact_advisory",
        pathname: location?.pathname || "/contact",
      };

      const res = await fetch(`${API_BASE}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.ok === false)) throw new Error(data?.error || "Submit failed");

      setIsSubmitted(true);
      setForm({
        full_name: "",
        email: "",
        phone: "",
        inquiry_type: "mandate_marketing",
        project_type: "residential",
        project_stage: "pre_launch",
        project_location: "",
        meeting_date: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submit failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-root">
      <GlobalFixStyles />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="hero">
        <div className="hero-bg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Real estate advisory contact hero"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-chips">
              <HeroChip icon={<ShieldCheck size={16} />} text="STRATEGIC INSIGHTS" />
              <HeroChip icon={<Users size={16} />} text="SEAMLESS EXECUTION" />
              <HeroChip icon={<Clock size={16} />} text="FAST RESPONSE" />
            </div>

            <h1 className="hero-title">
              Let’s Build Robust Foundations <br /> For Your Real Estate Growth
            </h1>

            <p className="hero-subtitle">
              Connect with Shivshakti for mandate marketing, exclusive agency support, channel partner outreach,
              brand building, market strategy and full-service real estate consultancy.
            </p>

            <div className="hero-cta">
              <a href="#lead-form" className="cta-primary">
                Start Consultation <ChevronRight size={20} />
              </a>
              <a href={`tel:${COMPANY.phone}`} className="cta-ghost">
                Call Advisory Team <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding intro-section">
        <div className="re-container">
          <SectionTitle
            title="Real Estate Advisory Built Around Your Project"
            subtitle="Share your project details and our team will help you plan the right sales, marketing and execution strategy."
          />

          <div className="highlight-grid">
            {CONTACT_HIGHLIGHTS.map((item) => (
              <motion.div
                className="highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="section-padding form-section">
        <div className="re-container form-layout">
          <div className="form-copy">
            <div className="section-kicker">GET IN TOUCH</div>
            <h2>Discuss Your Real Estate Requirements</h2>
            <p>
              Tell us about your project, location, sales stage and objectives. Our advisory team will connect with you
              to understand the opportunity and suggest the right way forward.
            </p>

            <div className="form-benefits">
              <Benefit icon={<CheckCircle2 size={18} />} text="Focused strategy for developers and projects" />
              <Benefit icon={<CheckCircle2 size={18} />} text="Support for sales, marketing and CP outreach" />
              <Benefit icon={<CheckCircle2 size={18} />} text="Guidance for launch, repositioning and closures" />
            </div>
          </div>

          <div className="re-card form-card">
            {isSubmitted && <SuccessAlert />}
            <form onSubmit={submit}>
              <div className="form-grid-stack">
                <div className="form-grid-2">
                  <InputGroup
                    label="Full Name"
                    icon={<Users size={18} />}
                    value={form.full_name}
                    onChange={(v) => onChange("full_name", v)}
                    required
                  />
                  <InputGroup
                    label="Email Address"
                    icon={<Mail size={18} />}
                    type="email"
                    value={form.email}
                    onChange={(v) => onChange("email", v)}
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <InputGroup
                    label="Phone Number"
                    icon={<Phone size={18} />}
                    value={form.phone}
                    onChange={(v) => onChange("phone", v)}
                    required
                  />
                  <SelectGroup
                    label="Service Requirement"
                    icon={<MessageSquare size={18} />}
                    value={form.inquiry_type}
                    onChange={(v) => onChange("inquiry_type", v)}
                    options={[
                      { v: "mandate_marketing", l: "Real Estate Mandate Marketing" },
                      { v: "exclusive_agency", l: "Exclusive Agency Agreement" },
                      { v: "cp_outreach", l: "Channel Partner Outreach" },
                      { v: "brand_building", l: "Marketing & Brand Building" },
                      { v: "market_strategy", l: "Market Analysis & Strategy" },
                      { v: "consultancy", l: "Full-Service Consultancy" },
                    ]}
                  />
                </div>

                <div className="form-grid-2">
                  <SelectGroup
                    label="Project Type"
                    icon={<Building2 size={18} />}
                    value={form.project_type}
                    onChange={(v) => onChange("project_type", v)}
                    options={[
                      { v: "residential", l: "Residential Project" },
                      { v: "commercial", l: "Commercial Project" },
                      { v: "retail", l: "Retail Project" },
                      { v: "mixed_use", l: "Mixed-Use Project" },
                      { v: "redevelopment", l: "Redevelopment Project" },
                    ]}
                  />
                  <SelectGroup
                    label="Project Stage"
                    icon={<BarChart3 size={18} />}
                    value={form.project_stage}
                    onChange={(v) => onChange("project_stage", v)}
                    options={[
                      { v: "pre_launch", l: "Pre-Launch Planning" },
                      { v: "launch", l: "Launch Stage" },
                      { v: "active_sales", l: "Active Sales" },
                      { v: "repositioning", l: "Repositioning Required" },
                      { v: "closing_support", l: "Closing Support" },
                    ]}
                  />
                </div>

                <div className="form-grid-2">
                  <InputGroup
                    label="Project Location"
                    icon={<MapPin size={18} />}
                    value={form.project_location}
                    onChange={(v) => onChange("project_location", v)}
                    placeholder="e.g. Andheri, Borivali, BKC, Thane"
                  />
                  <InputGroup
                    label="Preferred Meeting Date"
                    icon={<CalendarDays size={18} />}
                    type="date"
                    value={form.meeting_date}
                    onChange={(v) => onChange("meeting_date", v)}
                  />
                </div>

                <div className="input-field">
                  <label className="re-label">
                    <MessageSquare size={18} /> Project Brief / Message
                  </label>
                  <textarea
                    className="re-input"
                    rows={5}
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Share your project size, current sales status, challenges, expected support and timeline..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Requirement"} <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section-padding office-section">
        <div className="re-container">
          <SectionTitle
            title="Our Office Details"
            subtitle="Your trusted real estate advisory partner for insights, solutions and project-focused execution."
          />
          <div className="re-card address-grid">
            <AddressItem icon={<MapPin color={THEME.brand} />} title="Registered Address" text={COMPANY.registeredAddress} />
            <AddressItem icon={<Mail color={THEME.brand} />} title="Email Support" text={COMPANY.email} />
            <AddressItem icon={<Phone color={THEME.brand} />} title="Phone Number" text={COMPANY.phoneLabel} />
            <AddressItem icon={<Clock color={THEME.brand} />} title="Office Hours" text="Monday - Saturday: 10:00 AM - 6:00 PM" />
          </div>
        </div>
      </section>

      <section className="section-padding map-section">
        <div className="re-container">
          <div className="map-card">
            <a
              href="https://www.bing.com/maps/search?mepi=0%7ELocal%7EEmbedded%7ELargeMapLink&ty=17&poicount=18&usebfpr=true&v=2&sV=1&FORM=MPSRPL&q=Shivshakti+Real+Estate+Advisory+pvt+ltd+office+location"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <img src="/images/image.png" alt="Office Location Map" />
              <span className="map-overlay">Click to open office location</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="f-brand">{COMPANY.name}</div>
            
            <div className="f-muted" style={{ marginTop: 10 }}>Registered Office: {COMPANY.registeredAddress}</div>
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
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneLabel}</a>
              <a href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20to%20discuss%20real%20estate%20advisory%20services`} target="_blank" rel="noreferrer">WhatsApp Chat</a>
              <a href="#lead-form">Get Quote</a>
            </div>
          </div>
        </div>

        <div className="container f-bottom">
          <p>© {new Date().getFullYear()} ShivShakti Real Estate Advisory Private Limited. All rights reserved.</p>
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

function GlobalFixStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          html, body, #root {
            width: 100%;
            min-height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          }
          * { box-sizing: border-box; }
          body { background: ${THEME.soft}; color: ${THEME.text}; }
          img { max-width: 100%; display: block; }
          button, input, select, textarea { font: inherit; }
          .page-root { width: 100%; min-height: 100vh; background: ${THEME.soft}; overflow-x: hidden; }
          .container, .re-container { width: min(1200px, 94vw); margin: 0 auto; }

          .topbar {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 80px;
            z-index: 3000;
            background: #180704;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .topbar-inner {
            height: 80px;
            width: min(1200px, 94vw);
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }
          .brand { display: flex; align-items: center; gap: 14px; text-decoration: none; color: white; min-width: 240px; }
          .brand-icon { width: 80px; height: 80px; border-radius: 88px; overflow: hidden; display: flex; align-items: center; justify-content: center; background: transparent; flex-shrink: 0; }
          .brand-logo { width: 100%; height: 100%; object-fit: contain; display: block; }
          .brand-text { line-height: 1.1; }
          .brand-title { font-weight: 1000; letter-spacing: 0.8px; font-size: 18px; color: white; }
          .brand-sub { font-weight: 900; font-size: 12px; letter-spacing: 2px; opacity: 0.85; color: white; }
          .nav { display: flex; align-items: center; gap: 24px; flex: 1; justify-content: center; }
          .nav-link { color: rgba(255,255,255,0.88); text-decoration: none; font-weight: 900; font-size: 14px; letter-spacing: 1px; white-space: nowrap; }
          .nav-link:hover, .nav-link.active { color: white; }
          .right-actions { display: flex; align-items: center; gap: 12px; min-width: 180px; justify-content: flex-end; }
          .cta { background: ${THEME.brand}; color: white; text-decoration: none; font-weight: 1000; border-radius: 12px; padding: 14px 20px; letter-spacing: 0.8px; font-size: 14px; box-shadow: 0 12px 26px rgba(74,29,13,0.25); white-space: nowrap; border: 0; }
          .hamburger { display: none; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.10); color: white; width: 46px; height: 46px; border-radius: 12px; cursor: pointer; align-items: center; justify-content: center; padding: 0; }

          .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 2800; opacity: 0; pointer-events: none; transition: 0.25s; }
          .drawer-overlay.show { opacity: 1; pointer-events: auto; }
          .drawer { position: fixed; top: 0; right: 0; height: 100dvh; max-height: 100vh; overflow-y: auto; width: min(380px, 86vw); background: #0e0e0e; z-index: 2900; transform: translateX(100%); transition: transform 0.25s; border-left: 1px solid rgba(255,255,255,0.08); padding: 20px; display: flex; flex-direction: column; gap: 16px; }
          .drawer.show { transform: translateX(0); }
          .drawer-head { display: flex; align-items: center; justify-content: space-between; }
          .drawer-title { color: white; font-weight: 1000; letter-spacing: 0.7px; font-size: 18px; }
          .drawer-close { border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.10); color: white; width: 42px; height: 42px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
          .drawer-links { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
          .dlink { display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,0.92); text-decoration: none; padding: 14px 16px; border-radius: 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); font-weight: 900; font-size: 15px; }
          .dlink.active { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
          .dcta { margin-top: 10px; background: ${THEME.brand}; color: white; text-decoration: none; padding: 14px 16px; border-radius: 12px; font-weight: 1000; text-align: center; font-size: 15px; }
          .drawer-foot { margin-top: auto; border-top: 1px solid rgba(255,255,255,0.10); padding-top: 16px; display: flex; flex-direction: column; gap: 10px; }
          .df-muted { color: rgba(255,255,255,0.55); font-weight: 900; font-size: 12px; letter-spacing: 0.8px; text-transform: uppercase; }
          .df-link { color: white; text-decoration: none; font-weight: 900; font-size: 15px; }

          .hero { position: relative; min-height: 700px; display: flex; align-items: center; justify-content: center; color: white; overflow: hidden; padding-top: 80px; }
          .hero-bg { position: absolute; inset: 0; }
          .hero-bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); }
          .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.58), rgba(0,0,0,0.74)); }
          .hero-content { position: relative; z-index: 2; text-align: center; padding: 0 16px; }
          .hero-chips { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 24px; }
          .hero-title { font-size: clamp(40px, 5vw, 68px); font-weight: 1200; margin: 24px 0; line-height: 1.2; }
          .hero-subtitle { color: rgba(255,255,255,0.9); max-width: 880px; margin: 0 auto; line-height: 1.7; font-size: 18px; }
          .hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
          .cta-primary, .cta-ghost { color: white; text-decoration: none; padding: 16px 24px; border-radius: 14px; font-weight: 1000; display: flex; align-items: center; gap: 12px; font-size: 16px; }
          .cta-primary { background: ${THEME.brand}; box-shadow: 0 14px 30px rgba(74,29,13,0.25); }
          .cta-ghost { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.35); }

          .section-padding { padding: 78px 0; }
          .intro-section { background: ${THEME.soft}; }
          .form-section { background: white; }
          .office-section { background: ${THEME.soft}; }
          .map-section { background: white; padding-top: 0; }
          .section-title-block { text-align: center; margin-bottom: 44px; }
          .section-title-block h2 { font-size: clamp(30px, 3vw, 42px); font-weight: 1100; color: ${THEME.ink}; line-height: 1.25; margin: 0; }
          .title-line { width: 64px; height: 4px; background: ${THEME.brand}; margin: 20px auto; border-radius: 2px; }
          .section-title-block p { color: ${THEME.sub}; font-size: 18px; line-height: 1.65; max-width: 760px; margin: 0 auto; }
          .section-kicker { color: ${THEME.brand}; font-weight: 1000; letter-spacing: 1.2px; font-size: 14px; text-transform: uppercase; margin-bottom: 10px; }

          .highlight-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; align-items: stretch; }
          .highlight-card { background: white; border: 1px solid ${THEME.line}; border-radius: 20px; padding: 24px; min-height: 100%; box-shadow: 0 18px 44px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
          .highlight-icon { width: 56px; height: 56px; border-radius: 16px; background: #FFF7ED; border: 1px solid #FFEDD5; color: ${THEME.brand}; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
          .highlight-card h3 { font-size: 19px; line-height: 1.35; color: ${THEME.ink}; margin: 0 0 10px; font-weight: 1000; }
          .highlight-card p { font-size: 15px; line-height: 1.65; color: ${THEME.sub}; margin: 0; font-weight: 700; }

          .form-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 40px; align-items: start; }
          .form-copy { position: sticky; top: 110px; }
          .form-copy h2 { font-size: clamp(30px, 3vw, 42px); line-height: 1.25; color: ${THEME.ink}; margin: 0 0 16px; font-weight: 1100; }
          .form-copy p { color: ${THEME.sub}; font-size: 18px; line-height: 1.7; margin: 0 0 22px; }
          .form-benefits { display: grid; gap: 12px; }
          .benefit { display: flex; align-items: center; gap: 10px; color: ${THEME.ink}; font-weight: 900; background: ${THEME.soft}; border: 1px solid ${THEME.line}; border-radius: 14px; padding: 14px; }
          .benefit svg { color: ${THEME.brand}; flex-shrink: 0; }
          .re-card { background: white; border-radius: 22px; padding: 34px; border: 1px solid ${THEME.line}; box-shadow: 0 18px 44px rgba(0,0,0,0.05); }
          .form-card { width: 100%; }
          .form-grid-stack { display: flex; flex-direction: column; gap: 22px; }
          .form-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
          .input-field { min-width: 0; }
          .re-label { font-size: 13px; font-weight: 1000; text-transform: uppercase; color: ${THEME.ink}; display: flex; align-items: center; gap: 10px; margin-bottom: 10px; letter-spacing: 0.7px; }
          .re-label svg { color: ${THEME.brand}; flex-shrink: 0; }
          .re-input { width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid #E5E7EB; outline: none; transition: 0.2s; font-size: 15px; background: white; font-weight: 600; color: ${THEME.text}; }
          textarea.re-input { resize: vertical; min-height: 132px; }
          .re-input:focus { border-color: ${THEME.brand}; box-shadow: 0 0 0 4px rgba(74,29,13,0.10); }
          .submit-btn { background: ${THEME.brand}; color: white; border: none; padding: 18px; border-radius: 14px; font-weight: 1000; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; transition: 0.25s; text-transform: uppercase; font-size: 16px; letter-spacing: 1px; margin-top: 4px; }
          .submit-btn:hover { transform: translateY(-2px); opacity: 0.98; box-shadow: 0 12px 24px rgba(74,29,13,0.25); }
          .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

          .address-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
          .address-item { display: flex; gap: 18px; align-items: flex-start; min-width: 0; }
          .address-icon { width: 52px; height: 52px; border-radius: 14px; background: #FFF7ED; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid #FFEDD5; }
          .address-kicker { font-size: 13px; font-weight: 1000; text-transform: uppercase; color: ${THEME.sub}; letter-spacing: 0.6px; }
          .address-text { font-size: 15px; font-weight: 800; margin-top: 6px; color: ${THEME.ink}; line-height: 1.6; overflow-wrap: anywhere; }
          .map-card { border-radius: 22px; overflow: hidden; height: 460px; border: 1px solid ${THEME.line}; box-shadow: 0 18px 44px rgba(0,0,0,0.05); background: white; }
          .map-link { display: block; width: 100%; height: 100%; position: relative; color: white; text-decoration: none; }
          .map-link img { width: 100%; height: 100%; object-fit: cover; }
          .map-overlay { position: absolute; left: 18px; bottom: 18px; background: rgba(0,0,0,0.68); color: white; padding: 10px 14px; border-radius: 10px; font-size: 14px; font-weight: 900; }

          .footer { background: ${THEME.dark}; color: #c9c9c9; padding: 60px 0 30px; }
          .footer-grid { display: grid; grid-template-columns: 1.4fr 0.8fr 0.8fr; gap: 24px; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.10); }
          .f-brand { color: white; font-weight: 1100; font-size: 20px; letter-spacing: 0.8px; margin-bottom: 12px; }
          .f-title { color: white; font-weight: 1000; letter-spacing: 0.8px; font-size: 14px; text-transform: uppercase; margin-bottom: 12px; }
          .f-muted { color: rgba(255,255,255,0.7); font-weight: 780; line-height: 1.6; font-size: 15px; }
          .f-links { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
          .f-links a { color: #ddd; text-decoration: none; font-weight: 850; font-size: 15px; overflow-wrap: anywhere; }
          .f-links a:hover { color: white; }
          .f-bottom { margin-top: 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; color: rgba(255,255,255,0.7); font-weight: 800; font-size: 14px; }
          .f-mini { display: flex; gap: 12px; align-items: center; }
          .f-mini a { color: #ddd; text-decoration: none; font-weight: 850; font-size: 14px; }

          @media (max-width: 1100px) {
            .highlight-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .form-layout { grid-template-columns: 1fr; gap: 28px; }
            .form-copy { position: static; }
          }
          @media (max-width: 980px) {
            .nav { display: none; }
            .hamburger { display: flex; }
            .cta { display: none; }
            .footer-grid { grid-template-columns: 1fr; gap: 30px; }
          }
          @media (max-width: 760px) {
            .hero { min-height: 560px; }
            .hero-title { font-size: 36px; }
            .hero-subtitle { font-size: 16px; }
            .hero-cta { flex-direction: column; align-items: stretch; }
            .cta-primary, .cta-ghost { width: 100%; justify-content: center; }
            .section-padding { padding: 56px 0; }
            .highlight-grid, .form-grid-2, .address-grid { grid-template-columns: 1fr; }
            .re-card { padding: 24px; }
            .map-card { height: 360px; }
          }
          @media (max-width: 480px) {
            .brand { min-width: 0; gap: 10px; }
            .brand-icon { width: 62px; height: 62px; }
            .brand-title { font-size: 14px; line-height: 1.1; }
            .brand-sub { font-size: 10px; }
            .topbar, .topbar-inner { height: 72px; }
            .hero { padding-top: 72px; min-height: 540px; }
            .hero-title { font-size: 31px; }
            .section-title-block p, .form-copy p { font-size: 16px; }
            .drawer { width: 100vw; max-width: 100vw; padding: 14px; }
            .dlink { font-size: 14px; padding: 12px 14px; }
            .dcta { padding: 12px 14px; font-size: 14px; }
            .f-bottom { flex-direction: column; text-align: center; gap: 12px; }
          }
        `,
      }}
    />
  );
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title-block">
      <h2>{title}</h2>
      <div className="title-line" />
      <p>{subtitle}</p>
    </div>
  );
}

function HeroChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 999,
        padding: "10px 18px",
        background: "rgba(255,255,255,0.10)",
        color: "white",
        fontSize: 12,
        fontWeight: 1000,
        border: "1px solid rgba(255,255,255,0.16)",
      }}
    >
      {icon} {text}
    </span>
  );
}

function InputGroup({ label, icon, value, onChange, type = "text", placeholder, required }: InputGroupProps) {
  return (
    <div className="input-field">
      <label className="re-label">{icon} {label}</label>
      <input
        className="re-input"
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function SelectGroup({
  label,
  icon,
  value,
  onChange,
  options,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
}) {
  return (
    <div className="input-field">
      <label className="re-label">{icon} {label}</label>
      <select className="re-input" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.v} value={o.v}>{o.l}</option>
        ))}
      </select>
    </div>
  );
}

function Benefit({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="benefit">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function AddressItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="address-item">
      <div className="address-icon">{icon}</div>
      <div>
        <div className="address-kicker">{title}</div>
        <div className="address-text">{text}</div>
      </div>
    </div>
  );
}

function SuccessAlert() {
  return (
    <div
      style={{
        background: "#ECFDF5",
        border: "1px solid #10B981",
        padding: 18,
        borderRadius: 14,
        display: "flex",
        gap: 12,
        marginBottom: 24,
        color: "#065F46",
        alignItems: "center",
        fontSize: 15,
        fontWeight: 800,
      }}
    >
      <CheckCircle2 size={22} />
      <span>Thank you! Your requirement has been received. Our team will contact you shortly.</span>
    </div>
  );
}
