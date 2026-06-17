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
  FileText,
  Users,
  Phone,
  Home as HomeIcon,
  Sparkles,
  User,
  Target,
  Handshake,
  BarChart3,
  Layers,
  BriefcaseBusiness,
} from "lucide-react";

const THEME = {
  ink: "#0B1220",
  dark: "#111111",
  soft: "#F6F7FB",
  brand: "#4A1D0D",
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
  name: "SHIVSHAKTI REAL ESTATE ADVISORY PRIVATE LIMITED",
  shortName: "SHIVSHAKTI REAL ESTATE ADVISORY",
  
  roc: "ROC Mumbai",
  email: "shivshaktirealestateadvisory@gmail.com",
  registeredAddress:
    "202 2nd Floor Near Teli Gali Andheri East Mumbai 400069",
  phone: "+91 9987281075",
  whatsapp: "91 9987281075",
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
              <img
                src="/images/shivlogo.jpeg"
                alt="Shivshakti Real Estate Advisory Logo"
                className="brand-logo"
              />
            </div>

            <div className="brand-text">
              <div className="brand-title">{COMPANY.shortName}</div>
              <div className="brand-sub">PVT LTD</div>
            </div>
          </Link>

          <nav className="nav center">
            <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/">
              HOME
            </Link>
            <Link className={isActive("/projects") ? "nav-link active" : "nav-link"} to="/projects">
              PROJECTS
            </Link>
            <Link className={isActive("/about") ? "nav-link active" : "nav-link"} to="/about">
              ABOUT
            </Link>
            <Link className={isActive("/services") ? "nav-link active" : "nav-link"} to="/services">
              SERVICES
            </Link>
            <Link className={isActive("/contact") ? "nav-link active" : "nav-link"} to="/contact">
              CONTACT
            </Link>
            <Link className={isActive("/login") ? "nav-link active" : "nav-link"} to="/login">
              ADMIN LOGIN
            </Link>
          </nav>

          <div className="right-actions">
            <Link className="cta" to="/contact">
              GET QUOTE
            </Link>

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
          <a className="df-link" href={`tel:${COMPANY.phone}`}>Call Us</a>
          <a
            className="df-link"
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20to%20discuss%20a%20real%20estate%20mandate`}
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

const foundationItems = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Transparency & Trust",
    desc: "Clear communication, responsible coordination, and reliable reporting across every mandate.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Strategic Insight",
    desc: "Market understanding, pricing study, inventory planning, and positioning guidance for better decisions.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Operational Excellence",
    desc: "Structured execution from project launch, CP outreach, lead movement, follow-ups, and closure support.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Relationship Building",
    desc: "Strong partnerships with developers, channel partners, teams, and customers for sustained growth.",
  },
];

const whyItems = [
  {
    icon: <Target size={24} />,
    title: "Result-Oriented Approach",
    desc: "We focus on visibility, qualified enquiries, site visits, channel partner activation, and consistent sales momentum.",
  },
  {
    icon: <Layers size={24} />,
    title: "Layered Strategy",
    desc: "Each project is handled through multiple layers: market study, brand communication, CP network, and sales process.",
  },
  {
    icon: <BriefcaseBusiness size={24} />,
    title: "Developer-Centric Focus",
    desc: "Mandate strategies are customised according to project location, ticket size, inventory, audience, and launch stage.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity In Execution",
    desc: "We maintain transparent coordination, disciplined follow-ups, and professional conduct with every stakeholder.",
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: THEME.soft, overflowX: "hidden" }}>
      <GlobalStyles brand={THEME.brand} ink={THEME.ink} dark={THEME.dark} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="hero">
        <div className="hero-bg">
          <img src={HERO_IMAGES[heroIndex]} alt="about hero" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge">ABOUT US</span>
            <h1>Your Trusted Partner For Strategic Real Estate Solutions</h1>
            <p>
              A developer-focused real estate mandate advisory company built to support project strategy,
              brand positioning, channel partner outreach, and seamless sales execution.
            </p>

            <div className="hero-cta">
              <Link className="cta-primary" to="/services">
                View Services <ArrowRight size={20} />
              </Link>
              <Link className="cta-ghost" to="/contact">
                Discuss Mandate <ArrowRight size={20} />
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

      <section className="stats">
        <div className="container">
          <div className="stats-card">
            <StatBox icon={<ShieldCheck size={24} />} value="Mandate" label="Marketing Focus" />
            <StatBox icon={<Building2 size={24} />} value="Developer" label="Centric Solutions" />
            <StatBox icon={<Users size={24} />} value="CP Network" label="Outreach & Management" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="about-panel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-grid">
              <div className="about-copy">
                <span className="mini-badge">WHO WE ARE</span>
                <h2>Building Robust Foundations For Every Layer Of Real Estate</h2>
                <p>
                  ShivShakti Real Estate Advisory Private Limited is a mandate-led real estate advisory company
                  created to help developers plan, position, market, and move their projects with clarity.
                  We work across the complete project journey — from strategy and launch preparation to
                  channel partner coordination, enquiry movement, and sustained sales support.
                </p>
                <p>
                  Our approach is layered and practical. We study the project, understand the market, identify
                  positioning gaps, create communication direction, activate the right network, and support the
                  execution team with structured follow-ups and transparent coordination.
                </p>
                <p>
                  We do not look at real estate as a one-time transaction. We aim to create long-term value
                  for developers, channel partners, homebuyers, and every stakeholder involved in the project.
                </p>
              </div>

              <div className="about-highlight">
                <div className="highlight-title">Our Advisory Focus</div>
                <div className="highlight-list">
                  <div><span>01</span> Real Estate Mandate Marketing</div>
                  <div><span>02</span> Exclusive Agency Support</div>
                  <div><span>03</span> Channel Partner Outreach</div>
                  <div><span>04</span> Brand Building & Project Positioning</div>
                  <div><span>05</span> Market Analysis & Sales Strategy</div>
                  <div><span>06</span> Full-Service Real Estate Consultancy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="mini-badge">OUR FOUNDATION</span>
            <h2>What Defines ShivShakti</h2>
            <p>
              Our work is built on trust, insight, execution, and strong relationships — the essentials
              required for successful real estate mandates.
            </p>
          </div>

          <div className="four-grid">
            {foundationItems.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="mini-badge">WHY CHOOSE US</span>
            <h2>Built For Mandate Success</h2>
            <p>
              We help developers create project momentum with strategy, branding, channel strength,
              sales coordination, and execution discipline.
            </p>
          </div>

          <div className="four-grid">
            {whyItems.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className="mini-badge">VISION</span>
              <h2>Our Vision</h2>
              <p>
                To become a trusted real estate mandate partner known for strategic project launches,
                strong market positioning, sustainable sales growth, and long-term value creation.
              </p>
            </motion.div>

            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <span className="mini-badge">MISSION</span>
              <h2>Our Mission</h2>
              <p>
                To provide complete real estate advisory solutions for developers — from mandate planning
                and market strategy to channel partner outreach, brand building, sales execution, and customer conversion.
              </p>
            </motion.div>
          </div>

          <div className="cta-strip">
            <div>
              <h2>Planning A Project Launch Or Mandate?</h2>
              <p>Let our team help you build the right strategy, visibility, and sales movement.</p>
            </div>
            <Link className="cta-main" to="/contact">
              Start A Conversation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="f-brand">{COMPANY.name}</div>
            
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
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20I%20want%20to%20discuss%20a%20real%20estate%20mandate`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat
              </a>
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

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat-ic">{icon}</div>
      <div className="stat-v">{value}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="info-ic">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function GlobalStyles({ brand, ink, dark }: { brand: string; ink: string; dark: string }) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      html, body, #root {
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      }
      * { box-sizing: border-box; }
      body { color: #172033; }
      img { max-width: 100%; display: block; }
      a { color: inherit; }
      .container { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

      .topbar{
        position: fixed;
        top: 0; left: 0; right: 0;
        height: 80px;
        z-index: 3000;
        background:#180704;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .topbar-inner{
        height: 80px;
        width: min(1200px, calc(100% - 40px));
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 20px;
      }
      .brand{
        display:flex; align-items:center; gap: 14px;
        text-decoration:none; color:white;
        min-width: 250px;
        flex-shrink: 0;
      }
      .brand-icon {
        width: 76px;
        height: 76px;
        border-radius: 999px;
        overflow: hidden;
        display:flex;
        align-items:center;
        justify-content:center;
        background: transparent;
        flex-shrink: 0;
      }
      .brand-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .brand-text{ line-height: 1.08; min-width: 0; }
      .brand-title{
        font-weight: 1000;
        letter-spacing: 0.8px;
        font-size: 18px;
        color:#fff;
        max-width: 310px;
      }
      .brand-sub{
        font-weight: 900;
        font-size: 12px;
        letter-spacing: 2px;
        opacity: 0.85;
        color:#fff;
      }

      .nav{
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 24px;
        flex: 1;
        min-width: 0;
      }
      .nav-link{
        color: rgba(255,255,255,0.88);
        text-decoration:none;
        font-weight: 900;
        font-size: 14px;
        letter-spacing: 1px;
        white-space: nowrap;
      }
      .nav-link:hover,
      .nav-link.active{ color: white; }

      .right-actions{
        display:flex;
        align-items:center;
        gap: 12px;
        justify-content:flex-end;
        flex-shrink: 0;
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
        width: min(380px, 86vw);
        background: #0e0e0e;
        z-index: 2900;
        transform: translateX(100%);
        transition: transform 0.25s;
        border-left: 1px solid rgba(255,255,255,0.08);
        padding: 20px;
        display:flex;
        flex-direction:column;
        gap: 16px;
        overflow-y:auto;
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
        color: rgba(255,255,255,0.92);
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
        display:flex;
        flex-direction:column;
        gap: 10px;
      }
      .df-muted{ color: rgba(255,255,255,0.55); font-weight: 900; font-size: 12px; letter-spacing:0.8px; text-transform:uppercase; }
      .df-link{ color: white; text-decoration:none; font-weight: 900; font-size: 15px; }

      .hero{
        position: relative;
        min-height: 650px;
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        overflow:hidden;
        padding-top: 80px;
      }
      .hero-bg{ position:absolute; inset:0; }
      .hero-bg img{ width:100%; height:100%; object-fit:cover; transform: scale(1.04); }
      .hero-overlay{
        position:absolute;
        inset:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.58), rgba(0,0,0,0.80));
      }
      .hero-content{ position:relative; z-index:2; text-align:center; padding: 0 16px; }
      .badge{
        background: ${brand};
        padding: 8px 20px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing:1px;
        display:inline-block;
      }
      .hero h1{
        font-size: clamp(38px, 5vw, 68px);
        font-weight: 1100;
        line-height: 1.13;
        margin: 18px auto 18px;
        max-width: 980px;
      }
      .hero p{
        font-size: 18px;
        line-height: 1.75;
        max-width: 820px;
        margin: 0 auto;
        color: rgba(255,255,255,0.90);
      }
      .hero-cta{ display:flex; gap: 16px; justify-content:center; flex-wrap:wrap; margin-top: 28px; }
      .cta-primary,
      .cta-ghost,
      .cta-main{
        color: white;
        text-decoration:none;
        padding: 16px 24px;
        border-radius: 14px;
        font-weight: 1000;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap: 12px;
        font-size: 16px;
      }
      .cta-primary,
      .cta-main{ background: ${brand}; }
      .cta-ghost{
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.35);
      }
      .dots{ display:flex; gap:12px; justify-content:center; margin-top: 28px; }
      .dot{
        width: 50px;
        height: 14px;
        border-radius: 999px;
        border:1px solid rgba(255,255,255,0.6);
        background: rgba(255,255,255,0.16);
        cursor:pointer;
      }
      .dot.active{ background: rgba(255,255,255,0.95); border-color: rgba(255,255,255,0.95); }

      .stats{ padding: 32px 0 16px; }
      .stats-card{
        background: white;
        border: 1px solid #eee;
        border-radius: 20px;
        padding: 24px;
        display:grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
        box-shadow: 0 12px 28px rgba(0,0,0,0.06);
      }
      .stat{
        border: 1px solid #f0f0f0;
        border-radius: 18px;
        padding: 22px 18px;
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
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .stat-v{ font-weight: 1100; font-size: 24px; color:${ink}; margin-bottom: 4px; }
      .stat-l{ color:#667; font-weight: 850; font-size: 15px; }

      .section{ padding: 72px 0; }
      .section.soft{ background: #ffffff; border-top:1px solid #eee; border-bottom:1px solid #eee; }
      .section-head{
        max-width: 850px;
        margin-bottom: 28px;
      }
      .section-head h2{
        margin: 12px 0 12px;
        font-size: clamp(30px, 3vw, 44px);
        line-height: 1.25;
        color:${ink};
        font-weight: 1100;
      }
      .section-head p{
        margin:0;
        font-size: 17px;
        line-height: 1.75;
        color:#556;
        font-weight: 700;
      }
      .mini-badge{
        display:inline-block;
        background:#fff7ed;
        color:${brand};
        border:1px solid #ffedd5;
        padding:8px 16px;
        border-radius:999px;
        font-weight:1000;
        font-size:12px;
        letter-spacing:1px;
        text-transform: uppercase;
      }

      .about-panel{
        background:white;
        border:1px solid #eee;
        border-radius:24px;
        padding:34px;
        box-shadow: 0 18px 42px rgba(0,0,0,0.07);
      }
      .about-grid{
        display:grid;
        grid-template-columns: 1.12fr 0.88fr;
        gap: 34px;
        align-items: stretch;
      }
      .about-copy h2{
        margin: 16px 0 18px;
        font-size: clamp(30px, 3.5vw, 46px);
        line-height: 1.22;
        color:${ink};
        font-weight:1100;
      }
      .about-copy p{
        color:#556;
        line-height:1.8;
        font-size:16px;
        font-weight:720;
        margin: 0 0 16px;
      }
      .about-highlight{
        background: linear-gradient(135deg, #fff7ed 0%, #ffffff 100%);
        border:1px solid #f0e5dc;
        border-radius:22px;
        padding:24px;
        display:flex;
        flex-direction:column;
        justify-content:center;
      }
      .highlight-title{
        color:${ink};
        font-size:22px;
        font-weight:1100;
        margin-bottom:16px;
      }
      .highlight-list{
        display:flex;
        flex-direction:column;
        gap:12px;
      }
      .highlight-list div{
        background:#fff;
        border:1px solid #f2e8de;
        border-radius:14px;
        padding:14px;
        color:#30384a;
        font-weight:850;
        line-height:1.5;
        display:flex;
        gap:12px;
        align-items:flex-start;
      }
      .highlight-list span{
        color:${brand};
        font-weight:1100;
        flex:0 0 auto;
      }

      .four-grid{
        display:grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:18px;
      }
      .info-card{
        background:white;
        border:1px solid #eee;
        border-radius:20px;
        padding:22px;
        min-height:270px;
        box-shadow:0 14px 34px rgba(0,0,0,0.06);
        display:flex;
        flex-direction:column;
        align-items:flex-start;
      }
      .info-ic{
        width:54px;
        height:54px;
        border-radius:16px;
        background:#fff7ed;
        border:1px solid #ffedd5;
        color:${brand};
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:16px;
      }
      .info-card h3{
        margin:0 0 10px;
        color:${ink};
        font-size:20px;
        line-height:1.35;
        font-weight:1100;
      }
      .info-card p{
        margin:0;
        color:#667;
        line-height:1.72;
        font-size:15px;
        font-weight:760;
      }

      .mission-grid{
        display:grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap:20px;
      }
      .mission-card{
        background:#fff;
        border:1px solid #eee;
        border-radius:22px;
        padding:28px;
        box-shadow:0 14px 34px rgba(0,0,0,0.06);
      }
      .mission-card h2{
        margin:14px 0 12px;
        color:${ink};
        font-size:32px;
        line-height:1.25;
        font-weight:1100;
      }
      .mission-card p{
        margin:0;
        color:#556;
        line-height:1.8;
        font-size:16px;
        font-weight:740;
      }
      .cta-strip{
        margin-top:26px;
        background:${ink};
        color:#fff;
        border-radius:22px;
        padding:28px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:22px;
        flex-wrap:wrap;
        box-shadow:0 18px 42px rgba(0,0,0,0.16);
      }
      .cta-strip h2{
        margin:0;
        font-size:28px;
        line-height:1.3;
        font-weight:1100;
      }
      .cta-strip p{
        margin:10px 0 0;
        color:rgba(255,255,255,0.82);
        font-size:16px;
        line-height:1.7;
      }

      .footer{
        background:${dark};
        color:#c9c9c9;
        padding: 60px 0 30px;
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

      @media (max-width: 1180px){
        .four-grid{
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .info-card{
          min-height:230px;
        }
      }

      @media (max-width: 1024px){
        .nav{ display:none; }
        .hamburger{ display:flex; }
        .cta{ display:none; }
        .about-grid{
          grid-template-columns: 1fr;
        }
        .footer-grid{
          grid-template-columns: 1fr;
          gap:30px;
        }
      }

      @media (max-width: 768px){
        .container,
        .topbar-inner{
          width: min(100% - 28px, 1200px);
        }
        .hero{
          min-height: 590px;
        }
        .hero h1{
          font-size:34px;
        }
        .hero p{
          font-size:16px;
        }
        .hero-cta{
          flex-direction:column;
          align-items:stretch;
        }
        .cta-primary,
        .cta-ghost,
        .cta-main{
          width:100%;
        }
        .stats-card,
        .four-grid,
        .mission-grid{
          grid-template-columns: 1fr;
        }
        .section{
          padding:56px 0;
        }
        .about-panel{
          padding:22px;
          border-radius:20px;
        }
        .info-card{
          min-height:auto;
        }
        .cta-strip{
          padding:24px;
        }
        .cta-strip h2{
          font-size:24px;
        }
      }

      @media (max-width: 480px){
        .brand{
          min-width:0;
          gap:10px;
        }
        .brand-icon{
          width:58px;
          height:58px;
        }
        .brand-title{
          font-size:14px;
          max-width:190px;
        }
        .brand-sub{
          font-size:10px;
        }
        .topbar,
        .topbar-inner{
          height:72px;
        }
        .hero{
          padding-top:72px;
          min-height:560px;
        }
        .hero h1{
          font-size:30px;
        }
        .dot{
          width:38px;
        }
        .drawer{
          width:100vw;
          max-width:100vw;
        }
        .highlight-list div{
          font-size:14px;
        }
        .f-bottom{
          flex-direction:column;
          text-align:center;
        }
      }
    `,
      }}
    />
  );
}
