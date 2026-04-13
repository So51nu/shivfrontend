// 'use client';

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Building2,
//   Lock,
//   User,
//   ArrowRight,
//   ShieldCheck,
//   Menu,
//   X,
// } from "lucide-react";
// import API_BASE from "./Api";

// // ───────────────────────────────────────────────────────────────────────────────
// // THEME & INTERFACES (Build Error Fix)
// // ───────────────────────────────────────────────────────────────────────────────
// const THEME = {
//   ink: "#0B1220",
//   gold: "#a37f57",
//   dark: "#1a1a1a",
//   white: "#ffffff",
//   soft: "#F6F7FB",
// };

// // ───────────────────────────────────────────────────────────────────────────────
// // MAIN LOGIN COMPONENT
// // ───────────────────────────────────────────────────────────────────────────────
// export default function Login() {
//   const nav = useNavigate();
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [err, setErr] = useState<string | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   // Prevent scroll jumping when menu toggles
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isMenuOpen]);

//   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setErr(null);
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_BASE}/api/admin/login/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json().catch(() => ({}));
//       if (!res.ok || data.ok === false) {
//         throw new Error(data.error || "Invalid Credentials");
//       }

//       localStorage.setItem("admin_token", data.token);
//       nav("/admin-dashboard");
//     } catch (e: any) {
//       setErr(e?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ width: "100%", background: THEME.soft, minHeight: "100vh" }}>
//       <GlobalLayoutFix />

//       {/* TOP HEADER BAR */}
//       <div className="top-header">
//         <div className="re-container row-flex">
//           <div className="contact-meta">
//             <span><MapPin size={12} color={THEME.gold} /> Sector 4, Mumbai</span>
//             <span><Mail size={12} color={THEME.gold} /> info@devplastics.com</span>
//           </div>
//           <div className="social-meta">
//             <Facebook size={12} /><Twitter size={12} /><Instagram size={12} /><Linkedin size={12} />
//           </div>
//         </div>
//       </div>

//       {/* STICKY NAVBAR */}
//       <nav className="main-nav">
//         <div className="re-container row-flex">
//           <div className="brand-stack">
//             <div className="brand-icon"><Building2 size={20} color="white" /></div>
//             <div className="brand-name">DEV<span>PLASTICS</span></div>
//           </div>
          
//           <div className="desktop-nav">
//             <Link to="/">HOME</Link>
//             <Link to="/products">PRODUCTS</Link>
//             <Link to="/about">ABOUT</Link>
//             <Link to="/contact">CONTACT</Link>
//           </div>

//           <div className="nav-end">
//              <Link to="/" className="site-back-btn">Back to Site <ArrowRight size={14}/></Link>
//              <button className="hamb-trigger" onClick={() => setIsMenuOpen(true)}><Menu size={24} /></button>
//           </div>
//         </div>
//       </nav>

//       {/* SPLIT HERO SECTION */}
//       <main className="login-viewport">
//         <div className="split-layout">
//           {/* LEFT CONTENT (Hidden on Mobile) */}
//           <div className="visual-side">
//             <img 
//               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
//               className="bg-visual" 
//               alt="Industrial" 
//             />
//             <div className="visual-mask"></div>
//             <div className="visual-text-box">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
//                 <span className="p-chip">SECURE PORTAL</span>
//                 <h1 className="hero-h1">Admin Dashboard Login</h1>
//                 <p className="hero-p">Welcome back! Manage your inquiries, production status, and industrial data from one secure location.</p>
//                 <div className="trust-badges">
//                    <div className="badge-row"><ShieldCheck size={18} color={THEME.gold}/> End-to-End Encryption</div>
//                    <div className="badge-row"><ShieldCheck size={18} color={THEME.gold}/> Multi-Factor Authentication</div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* RIGHT FORM SIDE */}
//           <div className="form-side">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="login-sheet">
//               <div className="sheet-top">
//                 <h2 className="sheet-h2">Login</h2>
//                 <p className="sheet-p">Please enter your admin credentials.</p>
//               </div>

//               {err && <div className="alert-box">{err}</div>}

//               <form onSubmit={submit} className="form-engine">
//                 <div className="input-wrap">
//                   <label className="input-label"><User size={13} /> Username</label>
//                   <input 
//                     type="text" 
//                     className="form-input"
//                     placeholder="Enter username" 
//                     value={username} 
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} 
//                     required 
//                   />
//                 </div>

//                 <div className="input-wrap">
//                   <label className="input-label"><Lock size={13} /> Password</label>
//                   <input 
//                     type="password" 
//                     className="form-input"
//                     placeholder="••••••••" 
//                     value={password} 
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
//                     required 
//                   />
//                 </div>

//                 <button type="submit" className="login-action-btn" disabled={loading}>
//                   {loading ? "Authenticating..." : "Login to System"}
//                   {!loading && <ArrowRight size={18} />}
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer className="site-footer">
//         <div className="re-container">
//           <div className="f-row">
//             <div className="f-col">
//               <div className="brand-name" style={{ color: 'white' }}>DEV<span style={{ color: THEME.gold }}>PLASTICS</span></div>
//               <p className="f-text">High-performance plastic fabrication solutions for industrial excellence.</p>
//             </div>
//             <div className="f-col">
//               <h3 className="f-h3">Quick Links</h3>
//               <Link to="/" className="f-a">Home</Link>
//               <Link to="/contact" className="f-a">Support</Link>
//             </div>
//             <div className="f-col">
//               <h3 className="f-h3">Office</h3>
//               <p className="f-p"><MapPin size={14} color={THEME.gold}/> Industrial Sector, Mumbai</p>
//               <p className="f-p"><Phone size={14} color={THEME.gold}/> +91 98765 43210</p>
//             </div>
//           </div>
//           <div className="f-bottom-bar">
//             <p>© {new Date().getFullYear()} Dev Plastic Fabrication. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* MOBILE DRAWER */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="drawer-overlay" onClick={() => setIsMenuOpen(false)}>
//             <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="drawer-panel" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
//               <div className="drawer-top">
//                 <div className="brand-name" style={{ fontSize: 18 }}>DEV<span>PLASTICS</span></div>
//                 <button onClick={() => setIsMenuOpen(false)} className="drawer-close"><X size={24}/></button>
//               </div>
//               <div className="drawer-links">
//                 <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
//                 <Link to="/products" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
//                 <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
//                 <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ───────────────────────────────────────────────────────────────────────────────
// // CRITICAL CSS: Fixes Right Side Gap and Build Errors
// // ───────────────────────────────────────────────────────────────────────────────
// function GlobalLayoutFix() {
//   return (
//     <style dangerouslySetInnerHTML={{ __html: `
//       * { box-sizing: border-box; margin: 0; padding: 0; }
      
//       html, body { 
//         width: 100% !important; 
//         max-width: 100% !important;
//         overflow-x: hidden !important; 
//         position: relative;
//         background: ${THEME.soft};
//       }

//       #root { width: 100% !important; overflow-x: hidden; }

//       .re-container { width: min(1200px, 94%); margin: 0 auto; position: relative; }
//       .row-flex { display: flex; align-items: center; justify-content: space-between; }
      
//       .top-header { background: ${THEME.dark}; color: #777; padding: 10px 0; font-size: 11px; width: 100%; }
//       .contact-meta { display: flex; gap: 20px; }
//       .contact-meta span { display: flex; align-items: center; gap: 6px; }
//       .social-meta { display: flex; gap: 15px; }

//       .main-nav { background: white; padding: 15px 0; position: sticky; top: 0; z-index: 999; border-bottom: 1px solid #eee; width: 100%; }
//       .brand-stack { display: flex; align-items: center; gap: 10px; }
//       .brand-icon { background: ${THEME.gold}; padding: 7px; border-radius: 7px; display: flex; }
//       .brand-name { font-size: 20px; font-weight: 900; color: ${THEME.ink}; letter-spacing: -0.5px; }
//       .brand-name span { color: ${THEME.gold}; }
      
//       .desktop-nav { display: flex; gap: 25px; }
//       .desktop-nav a { text-decoration: none; color: ${THEME.ink}; font-weight: 700; font-size: 12px; transition: 0.2s; letter-spacing: 0.5px; }
//       .desktop-nav a:hover { color: ${THEME.gold}; }
      
//       .nav-end { display: flex; align-items: center; gap: 15px; }
//       .site-back-btn { background: #111; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 11px; font-weight: 800; display: flex; align-items: center; gap: 8px; transition: 0.3s; }
//       .site-back-btn:hover { background: ${THEME.gold}; }
//       .hamb-trigger { display: none; background: none; border: none; cursor: pointer; color: ${THEME.ink}; }

//       .login-viewport { width: 100%; position: relative; }
//       .split-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; min-height: calc(100vh - 140px); width: 100%; }
      
//       .visual-side { position: relative; background: #000; display: flex; align-items: center; padding: 0 10%; overflow: hidden; }
//       .bg-visual { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
//       .visual-mask { position: absolute; inset: 0; background: linear-gradient(45deg, ${THEME.ink}, transparent); }
//       .visual-text-box { position: relative; z-index: 5; color: white; }
//       .p-chip { background: ${THEME.gold}; padding: 5px 12px; border-radius: 20px; font-size: 10px; font-weight: 900; letter-spacing: 1px; }
//       .hero-h1 { font-size: clamp(34px, 4vw, 52px); font-weight: 900; margin: 20px 0; line-height: 1.1; }
//       .hero-p { color: rgba(255,255,255,0.8); font-size: 17px; max-width: 500px; line-height: 1.6; }
//       .trust-badges { display: flex; flex-direction: column; gap: 12px; margin-top: 30px; }
//       .badge-row { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 700; }

//       .form-side { display: flex; align-items: center; justify-content: center; padding: 40px; background: ${THEME.soft}; width: 100%; }
//       .login-sheet { background: white; width: 100%; max-width: 420px; padding: 45px; border-radius: 24px; border: 1px solid #eee; box-shadow: 0 15px 50px rgba(0,0,0,0.05); }
//       .sheet-h2 { font-size: 28px; font-weight: 900; color: ${THEME.ink}; }
//       .sheet-p { color: #888; font-size: 14px; margin-top: 5px; }
      
//       .form-engine { display: flex; flex-direction: column; gap: 20px; margin-top: 35px; }
//       .input-wrap { display: flex; flex-direction: column; gap: 8px; }
//       .input-label { font-size: 12px; font-weight: 800; color: ${THEME.ink}; display: flex; align-items: center; gap: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
//       .form-input { width: 100%; padding: 14px 16px; border-radius: 12px; border: 1.5px solid #eee; outline: none; transition: 0.2s; background: #fafafa; font-size: 15px; }
//       .form-input:focus { border-color: ${THEME.gold}; background: white; box-shadow: 0 0 0 4px rgba(163, 127, 87, 0.1); }
      
//       .login-action-btn { background: ${THEME.ink}; color: white; border: none; padding: 16px; border-radius: 12px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }
//       .login-action-btn:hover { background: ${THEME.gold}; transform: translateY(-2px); }
//       .alert-box { background: #fff5f5; border: 1px solid #feb2b2; color: #c53030; padding: 12px; border-radius: 12px; font-size: 13px; text-align: center; font-weight: 700; margin-bottom: 5px; }

//       .site-footer { background: ${THEME.dark}; color: #777; padding: 80px 0 40px; width: 100%; }
//       .f-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 50px; }
//       .f-h3 { color: white; margin-bottom: 25px; font-size: 16px; font-weight: 800; }
//       .f-p, .f-a, .f-text { font-size: 14px; display: flex; align-items: center; gap: 10px; margin-bottom: 12px; color: #888; text-decoration: none; }
//       .f-bottom-bar { border-top: 1px solid #222; padding-top: 30px; font-size: 12px; text-align: center; }

//       .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 2000; }
//       .drawer-panel { position: absolute; right: 0; top: 0; bottom: 0; width: 290px; background: white; padding: 40px; }
//       .drawer-top { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 25px; }
//       .drawer-links { display: flex; flex-direction: column; gap: 30px; margin-top: 40px; }
//       .drawer-links a { color: ${THEME.ink}; text-decoration: none; font-size: 24px; font-weight: 900; }
//       .drawer-close { background: none; border: none; cursor: pointer; color: ${THEME.ink}; }

//       @media (max-width: 968px) {
//         .desktop-nav, .visual-side { display: none; }
//         .hamb-trigger { display: block; }
//         .split-layout { grid-template-columns: 1fr; }
//         .form-side { padding: 40px 20px; min-height: 80vh; }
//         .login-sheet { padding: 35px 25px; }
//       }
//     `}} />
//   );
// }


'use client';

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion} from "framer-motion";
import {
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Menu,
  X,
  Home as HomeIcon,
  Building2,
  FileText,
  Sparkles,
  Phone,
} from "lucide-react";
import API_BASE from "./Api";

// ───────────────────────────────────────────────────────────────────────────────
// THEME
// ───────────────────────────────────────────────────────────────────────────────
const THEME = {
  ink: "#0B1220",
  dark: "#111111",
  soft: "#F6F7FB",
  brand: "#B35900",
};

const COMPANY = {
  name: "SHIV SHAKTI REAL ESTATE PRIVATE LIMITED",
  cin: "U45200MH1999PTC122379",
  roc: "ROC Mumbai",
  email: "secretarial@systematixgroup.in",
  registeredAddress:
    "The Capital, A Wing, 6th Floor, No. 603-606, Plot No. C-70, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra, India - 400051",
  phone: "+918956032764",
  whatsapp: "918956032764",
};

// ───────────────────────────────────────────────────────────────────────────────
// HEADER (Consistent with other pages)
// ───────────────────────────────────────────────────────────────────────────────
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

          {/* ✅ Desktop nav CENTER */}
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

            {/* ✅ hamburger ONLY mobile via CSS */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
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

// ───────────────────────────────────────────────────────────────────────────────
// MAIN LOGIN COMPONENT
// ───────────────────────────────────────────────────────────────────────────────
export default function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/admin/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Invalid Credentials");
      }

      localStorage.setItem("admin_token", data.token);
      nav("/admin-dashboard");
    } catch (e: any) {
      setErr(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      {/* ✅ Consistent Header */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* LOGIN SECTION */}
      <main className="login-main">
        <div className="login-split-layout">
          {/* LEFT SIDE - Brand Info */}
          <div className="login-brand-side">
            <div className="brand-content">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <span className="login-badge">SECURE ADMIN PORTAL</span>
                <h1 className="login-title">Admin Dashboard Login</h1>
                <p className="login-description">
                  Welcome back to the administrative portal. Manage projects, inquiries, and content from a secure, centralized dashboard.
                </p>
                
                <div className="security-features">
                  <div className="feature-item">
                    <ShieldCheck size={20} color={THEME.brand} />
                    <span>End-to-End Encryption</span>
                  </div>
                  <div className="feature-item">
                    <ShieldCheck size={20} color={THEME.brand} />
                    <span>Role-Based Access Control</span>
                  </div>
                  <div className="feature-item">
                    <ShieldCheck size={20} color={THEME.brand} />
                    <span>Activity Logging</span>
                  </div>
                </div>

                <div className="back-to-site">
                  <Link to="/" className="back-link">
                    ← Back to Main Website
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE - Login Form */}
          <div className="login-form-side">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="login-form-container"
            >
              <div className="form-header">
                <h2>Admin Login</h2>
                <p>Enter your credentials to access the dashboard</p>
              </div>

              {err && (
                <div className="error-alert">
                  <ShieldCheck size={16} />
                  <span>{err}</span>
                </div>
              )}

              <form onSubmit={submit} className="login-form">
                <div className="input-group">
                  <label className="input-label">
                    <User size={18} /> Username
                  </label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Enter admin username" 
                    value={username} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} 
                    required 
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">
                    <Lock size={18} /> Password
                  </label>
                  <input 
                    type="password" 
                    className="form-input"
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                    required 
                  />
                </div>

                <button type="submit" className="login-btn" disabled={loading}>
                  {loading ? "Authenticating..." : "Login to Dashboard"}
                  {!loading && <ArrowRight size={20} />}
                </button>

                <div className="form-footer">
                  <p className="note">
                    <ShieldCheck size={14} />
                    For security reasons, please logout after completing your work.
                  </p>
                  <p className="help">
                    Need help? Contact <a href={`mailto:${COMPANY.email}`}>system administrator</a>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ✅ Consistent Footer */}
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

// ───────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES
// ───────────────────────────────────────────────────────────────────────────────
function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
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

      /* ✅ HEADER (Consistent with other pages) */
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

      /* ✅ LOGIN SECTION */
      .login-main {
        padding-top: 80px;
        min-height: calc(100vh - 80px);
        display: flex;
        align-items: center;
      }

      .login-split-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: calc(100vh - 160px);
        width: 100%;
      }

      /* LEFT BRAND SIDE */
      .login-brand-side {
        background: linear-gradient(135deg, ${ink}, #1a2b3c);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .brand-content {
        max-width: 500px;
        width: 100%;
      }

      .login-badge {
        background: ${brand};
        color: white;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 1px;
        text-transform: uppercase;
        display: inline-block;
        margin-bottom: 20px;
      }

      .login-title {
        font-size: 42px;
        font-weight: 1100;
        line-height: 1.2;
        margin-bottom: 16px;
      }

      .login-description {
        font-size: 18px;
        line-height: 1.7;
        color: rgba(255,255,255,0.85);
        margin-bottom: 32px;
      }

      .security-features {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 700;
      }

      .back-to-site {
        margin-top: 32px;
      }

      .back-link {
        color: rgba(255,255,255,0.9);
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: color 0.2s;
      }

      .back-link:hover {
        color: white;
      }

      /* RIGHT FORM SIDE */
      .login-form-side {
        background: ${THEME.soft};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .login-form-container {
        background: white;
        border-radius: 20px;
        padding: 48px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.08);
      }

      .form-header {
        text-align: center;
        margin-bottom: 32px;
      }

      .form-header h2 {
        font-size: 32px;
        font-weight: 1100;
        color: ${ink};
        margin-bottom: 8px;
      }

      .form-header p {
        color: #667;
        font-size: 16px;
        font-weight: 600;
      }

      .error-alert {
        background: #fff5f5;
        border: 1px solid #feb2b2;
        color: #c53030;
        padding: 14px 18px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .input-label {
        font-size: 13px;
        font-weight: 900;
        color: ${ink};
        text-transform: uppercase;
        letter-spacing: 0.8px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .form-input {
        width: 100%;
        padding: 16px 18px;
        border-radius: 12px;
        border: 1.5px solid #e5e7eb;
        outline: none;
        transition: all 0.2s;
        font-size: 15px;
        font-weight: 500;
        background: #f9fafb;
      }

      .form-input:focus {
        border-color: ${brand};
        background: white;
        box-shadow: 0 0 0 4px rgba(179,89,0,0.1);
      }

      .login-btn {
        background: ${ink};
        color: white;
        border: none;
        padding: 18px;
        border-radius: 14px;
        font-weight: 1000;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-top: 10px;
      }

      .login-btn:hover:not(:disabled) {
        background: ${brand};
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(179,89,0,0.2);
      }

      .login-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .form-footer {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid #f0f0f0;
      }

      .note {
        color: #667;
        font-size: 13px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
      }

      .help {
        color: #889;
        font-size: 13px;
        font-weight: 600;
      }

      .help a {
        color: ${brand};
        text-decoration: none;
        font-weight: 700;
      }

      /* ✅ footer (Consistent with other pages) */
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
      @media (max-width: 1100px) {
        .login-split-layout {
          grid-template-columns: 1fr;
        }
        
        .login-brand-side {
          padding: 40px 20px;
          min-height: 400px;
        }
        
        .login-form-side {
          padding: 40px 20px;
        }
        
        .login-form-container {
          padding: 36px;
        }
        
        .login-title {
          font-size: 36px;
        }
      }

      @media (max-width: 980px) {
        .nav { display: none; }
        .hamburger { display: flex; }
        .cta { display: none; }
        .footer-grid { grid-template-columns: 1fr; gap: 30px; }
      }

      @media (max-width: 768px) {
        .login-title {
          font-size: 32px;
        }
        
        .login-description {
          font-size: 17px;
        }
        
        .login-form-container {
          padding: 28px;
        }
        
        .form-header h2 {
          font-size: 28px;
        }
        
        .f-bottom {
          flex-direction: column;
          text-align: center;
          gap: 12px;
        }
      }

      @media (max-width: 480px) {
        .brand { min-width: 200px; }
        .brand-title { font-size: 16px; }
        .brand-sub { font-size: 10px; }
        .login-badge {
          font-size: 11px;
          padding: 6px 16px;
        }
        .login-title {
          font-size: 28px;
        }
        .login-description {
          font-size: 16px;
        }
        .feature-item {
          font-size: 14px;
        }
      }
    `}} />
  );
}

