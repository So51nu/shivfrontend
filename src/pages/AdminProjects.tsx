'use client';

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "./Api";
import { Plus, X, Trash2, Pencil, ArrowUp, ArrowDown } from "lucide-react";

type ProjectCategory = "Residential" | "Commercial";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  property_type: string;
  configuration: string;
  location: string;
  price_label: string;

  // ✅ backend returns URLs for preview
  cover_image_url?: string;
  brochure_url?: string;
  gallery: { id: number; image_url: string; sort_order: number }[];

  short_description: string;
  description: string;
  features: string[];
  is_active: boolean;
  sort_order: number;
};

function authHeadersOnlyAuth() {
  const token = localStorage.getItem("admin_token");
  return {
    Authorization: `Bearer ${token || ""}`,
  };
}

const THEME = {
  bg: "#f6f6f6",
  card: "#ffffff",
  ink: "#111827",
  sub: "#6B7280",
  line: "#eaeaea",
  brand: "#B35900",
};

function splitComma(s: string) {
  return (s || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

export default function AdminProjects() {
  const nav = useNavigate();
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);

  // ✅ Text fields
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("New Launch / Coming Soon");
  const [category, setCategory] = useState<ProjectCategory>("Residential");
  const [propertyType, setPropertyType] = useState("Apartment / Villa / Plot / Office");
  const [configuration, setConfiguration] = useState("2BHK / 3BHK");
  const [location, setLocation] = useState("Wakad / Hinjewadi");
  const [priceLabel, setPriceLabel] = useState("65 Lakhs Onwards");
  const [isActive, setIsActive] = useState(true);
  const [shortDesc, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");

  // ✅ COMMA fix: keep a text box + parsed features array
  const [featuresText, setFeaturesText] = useState("");
  const featuresArr = useMemo(() => splitComma(featuresText), [featuresText]);

  // ✅ Uploads
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");

  const [brochureFile, setBrochureFile] = useState<File | null>(null);

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  const logout = () => {
    localStorage.removeItem("admin_token");
    nav("/");
  };

  const goInquiries = () => nav("/admin-dashboard");

  const resetForm = () => {
    setTitle("");
    setSubtitle("New Launch / Coming Soon");
    setCategory("Residential");
    setPropertyType("Apartment / Villa / Plot / Office");
    setConfiguration("2BHK / 3BHK");
    setLocation("Wakad / Hinjewadi");
    setPriceLabel("65 Lakhs Onwards");
    setIsActive(true);
    setShortDesc("");
    setDesc("");
    setFeaturesText("");

    setCoverFile(null);
    setCoverPreview("");
    setBrochureFile(null);

    setGalleryFiles([]);
    setGalleryPreviews([]);
  };

  const close = () => {
    setOpen(false);
    setEditing(null);
    resetForm();
  };

  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`${API_BASE}/api/admin/projects/`, {
        headers: { ...authHeadersOnlyAuth() },
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Failed to load projects");
      setItems(data.items || []);
    } catch (e: any) {
      setErr(e?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCreate = () => {
    setEditing(null);
    resetForm();
    setOpen(true);
  };

  const openEdit = (p: Project) => {
    setEditing(p);

    setTitle(p.title || "");
    setSubtitle(p.subtitle || "");
    setCategory(p.category || "Residential");
    setPropertyType(p.property_type || "");
    setConfiguration(p.configuration || "");
    setLocation(p.location || "");
    setPriceLabel(p.price_label || "");
    setIsActive(!!p.is_active);
    setShortDesc(p.short_description || "");
    setDesc(p.description || "");

    // ✅ show comma string in input
    setFeaturesText((p.features || []).join(", "));

    // previews from backend
    setCoverFile(null);
    setCoverPreview(p.cover_image_url || "");

    setBrochureFile(null);

    setGalleryFiles([]);
    setGalleryPreviews((p.gallery || []).map((g) => g.image_url));

    setOpen(true);
  };

  const remove = async (p: Project) => {
    if (!confirm(`Delete project "${p.title}"?`)) return;
    try {
      const res = await fetch(`${API_BASE}/api/admin/projects/${p.id}/`, {
        method: "DELETE",
        headers: { ...authHeadersOnlyAuth() },
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Delete failed");
      await load();
    } catch (e: any) {
      alert(e?.message || "Delete failed");
    }
  };

  const move = async (p: Project, dir: "up" | "down") => {
    const idx = items.findIndex((x) => x.id === p.id);
    const swapWith = dir === "up" ? idx - 1 : idx + 1;
    if (idx < 0 || swapWith < 0 || swapWith >= items.length) return;

    const next = [...items];
    [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
    setItems(next);

    try {
      const orderedIds = next.map((x) => x.id);
      const res = await fetch(`${API_BASE}/api/admin/projects/reorder/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeadersOnlyAuth() },
        body: JSON.stringify({ ordered_ids: orderedIds }),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Reorder failed");
      await load();
    } catch (e: any) {
      alert(e?.message || "Reorder failed");
      await load();
    }
  };

  const onPickCover = (file: File | null) => {
    setCoverFile(file);
    if (!file) {
      setCoverPreview("");
      return;
    }
    const url = URL.createObjectURL(file);
    setCoverPreview(url);
  };

  const onPickGallery = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const arr = Array.from(files);
    setGalleryFiles(arr);
    setGalleryPreviews(arr.map((f) => URL.createObjectURL(f)));
  };

  const save = async () => {
    setErr(null);

    if (!title.trim()) {
      setErr("Title is required");
      return;
    }

    const fd = new FormData();
    fd.append("title", title.trim());
    fd.append("subtitle", subtitle.trim());
    fd.append("category", category);
    fd.append("property_type", propertyType.trim());
    fd.append("configuration", configuration.trim());
    fd.append("location", location.trim());
    fd.append("price_label", priceLabel.trim());
    fd.append("is_active", isActive ? "true" : "false");
    fd.append("short_description", shortDesc.trim());
    fd.append("description", desc.trim());

    // ✅ COMMA fix: send JSON array (server reads it)
    fd.append("features_json", JSON.stringify(featuresArr));

    // uploads
    if (coverFile) fd.append("cover_image", coverFile);
    if (brochureFile) fd.append("brochure_file", brochureFile);

    // gallery multi upload
    galleryFiles.forEach((f) => fd.append("gallery_images", f));

    try {
      const url = editing
        ? `${API_BASE}/api/admin/projects/${editing.id}/`
        : `${API_BASE}/api/admin/projects/`;

      const method = editing ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { ...authHeadersOnlyAuth() }, // ❗don't set Content-Type for FormData
        body: fd,
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || data?.ok === false) throw new Error(data?.error || "Save failed");

      await load();
      close();
    } catch (e: any) {
      setErr(e?.message || "Save failed");
    }
  };

  return (
    <div style={styles.page}>
      <GlobalFixStyles />

      <div style={styles.container}>
        <div style={styles.topbar}>
          <div>
            <div style={styles.title}>Admin Projects</div>
            <div style={styles.subtitle}>Upload images (no links) • Features comma fixed ✅</div>
          </div>

          <div style={styles.topbarActions}>
            <button style={styles.btnGhost} onClick={goInquiries}>Inquiries</button>
            <button style={styles.btnPrimary} onClick={openCreate}><Plus size={16} /> Add Project</button>
            <button style={styles.btnGhost} onClick={logout}>Logout</button>
          </div>
        </div>

        {err && <div style={styles.err}>{err}</div>}

        <div style={styles.card}>
          {loading ? (
            <div style={styles.empty}>Loading...</div>
          ) : items.length === 0 ? (
            <div style={styles.empty}>No projects yet. Click “Add Project”.</div>
          ) : (
            <div style={styles.list}>
              {items.map((p, i) => (
                <div key={p.id} style={styles.row}>
                  <div style={styles.thumbWrap}>
                    <img
                      src={p.cover_image_url || "https://via.placeholder.com/160x120?text=No+Image"}
                      alt={p.title}
                      style={styles.thumb}
                    />
                  </div>

                  <div style={styles.main}>
                    <div style={styles.rowTop}>
                      <div style={{ minWidth: 0 }}>
                        <div style={styles.pTitle}>
                          {p.title}
                          <span style={styles.badge}>{p.category}</span>
                          {!p.is_active && <span style={styles.badgeOff}>Inactive</span>}
                        </div>
                        <div style={styles.pSub}>
                          {p.subtitle} • {p.location} • {p.configuration} •{" "}
                          <b style={{ color: THEME.brand }}>{p.price_label}</b>
                        </div>
                      </div>

                      <div style={styles.actions}>
                        <button style={styles.iconBtn} onClick={() => move(p, "up")} disabled={i === 0} title="Move up">
                          <ArrowUp size={16} />
                        </button>
                        <button style={styles.iconBtn} onClick={() => move(p, "down")} disabled={i === items.length - 1} title="Move down">
                          <ArrowDown size={16} />
                        </button>
                        <button style={styles.iconBtn} onClick={() => openEdit(p)} title="Edit">
                          <Pencil size={16} />
                        </button>
                        <button style={{ ...styles.iconBtn, borderColor: "#ffd7d7" }} onClick={() => remove(p)} title="Delete">
                          <Trash2 size={16} color="#b91c1c" />
                        </button>
                      </div>
                    </div>

                    <div style={styles.desc}>{p.short_description || p.description || "-"}</div>

                    <div style={styles.metaGrid}>
                      <Meta k="Property Type" v={p.property_type} />
                      <Meta k="Brochure" v={p.brochure_url ? "Available" : "—"} />
                      <Meta k="Features" v={(p.features || []).length ? `${p.features.length}` : "—"} />
                      <Meta k="Gallery" v={(p.gallery || []).length ? `${p.gallery.length}` : "—"} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Modal: no cut + scroll body */}
      {open && (
        <div style={styles.modalOverlay} onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <div style={{ fontWeight: 1000, fontSize: 16 }}>
                {editing ? "Edit Project" : "Add Project"}
              </div>
              <button style={styles.closeBtn} onClick={close}><X size={20} /></button>
            </div>

            <div style={styles.modalBody}>
              <div style={styles.formGrid}>
                <Field label="Title">
                  <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </Field>

                <Field label="Subtitle (Launch/Coming Soon)">
                  <input style={styles.input} value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                </Field>

                <Field label="Category">
                  <select style={styles.input} value={category} onChange={(e) => setCategory(e.target.value as any)}>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </Field>

                <Field label="Property Type">
                  <input style={styles.input} value={propertyType} onChange={(e) => setPropertyType(e.target.value)} />
                </Field>

                <Field label="Configuration">
                  <input style={styles.input} value={configuration} onChange={(e) => setConfiguration(e.target.value)} />
                </Field>

                <Field label="Location">
                  <input style={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
                </Field>

                <Field label="Price Label">
                  <input style={styles.input} value={priceLabel} onChange={(e) => setPriceLabel(e.target.value)} />
                </Field>

                <Field label="Active">
                  <select style={styles.input} value={isActive ? "1" : "0"} onChange={(e) => setIsActive(e.target.value === "1")}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </Field>

                {/* ✅ Upload cover */}
                <Field label="Cover Image (Upload)">
                  <input
                    style={styles.file}
                    type="file"
                    accept="image/*"
                    onChange={(e) => onPickCover(e.target.files?.[0] || null)}
                  />
                  {!!coverPreview && (
                    <img src={coverPreview} alt="cover preview" style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, border: `1px solid ${THEME.line}` }} />
                  )}
                </Field>

                {/* ✅ Upload brochure */}
                <Field label="Brochure (Upload)">
                  <input
                    style={styles.file}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setBrochureFile(e.target.files?.[0] || null)}
                  />
                </Field>

                <Field label="Short Description" full>
                  <input style={styles.input} value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
                </Field>

                <Field label="Description" full>
                  <textarea style={styles.textarea} rows={6} value={desc} onChange={(e) => setDesc(e.target.value)} />
                </Field>

                {/* ✅ FEATURES comma fix */}
                <Field label="Features (comma separated)" full>
                  <input
                    style={styles.input}
                    value={featuresText}
                    onChange={(e) => setFeaturesText(e.target.value)}
                    placeholder="RERA Approved, Clubhouse, Gym"
                  />
                  <div style={{ fontSize: 12, color: THEME.sub }}>
                    Parsed: <b>{featuresArr.length}</b> feature(s)
                  </div>
                </Field>

                {/* ✅ Gallery upload */}
                <Field label="Gallery Images (Upload multiple)" full>
                  <input
                    style={styles.file}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => onPickGallery(e.target.files)}
                  />
                  {galleryPreviews.length > 0 && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginTop: 10 }}>
                      {galleryPreviews.map((src, idx) => (
                        <img key={idx} src={src} alt={`gallery-${idx}`} style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 12, border: `1px solid ${THEME.line}` }} />
                      ))}
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: THEME.sub, marginTop: 6 }}>
                    Note: Edit mode me agar tum gallery images re-upload karoge to backend new images add karega.
                  </div>
                </Field>
              </div>
            </div>

            <div style={styles.modalFooter}>
              <button style={styles.btnGhost} onClick={close}>Cancel</button>
              <button style={styles.btnPrimary} onClick={save}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: full ? "1 / -1" : undefined, minWidth: 0 }}>
      <div style={styles.label}>{label}</div>
      {children}
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div style={styles.meta}>
      <div style={styles.metaK}>{k}</div>
      <div style={styles.metaV}>{v}</div>
    </div>
  );
}
function GlobalFixStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            min-height: 100%;
            overflow-x: hidden !important;
            background: ${THEME.bg};
          }
          * { box-sizing: border-box; }

          /* ✅ make page use full width always */
          #root { width: 100%; min-height: 100vh; }

          /* ✅ Admin rows responsive */
          @media (max-width: 820px){
            .__adminRow{
              grid-template-columns: 1fr !important;
            }
            .__thumbWrap{
              height: 190px !important;
            }
            .__thumbImg{
              height: 190px !important;
            }
          }

          @media (max-width: 860px){
            .__adminProjectsFormGrid{
              grid-template-columns: 1fr !important;
            }
          }
        `,
      }}
    />
  );
}


const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", width: "100%", background: THEME.bg },
  container: { maxWidth: 1200, margin: "0 auto", padding: "16px" },
  topbar: {
    background: THEME.card, border: `1px solid ${THEME.line}`, borderRadius: 14, padding: "14px",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12,
  },
  title: { fontWeight: 1100, fontSize: 18, color: THEME.ink },
  subtitle: { fontSize: 12, color: THEME.sub, marginTop: 2 },
  topbarActions: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },

  card: { background: THEME.card, border: `1px solid ${THEME.line}`, borderRadius: 14, padding: 14, boxShadow: "0 10px 28px rgba(0,0,0,0.05)" },
  err: { background: "#ffecec", border: "1px solid #ffb7b7", color: "#a40000", padding: 10, borderRadius: 12, fontSize: 13, marginBottom: 12 },
  empty: { padding: 12, color: THEME.sub, fontWeight: 700 },

  list: { display: "grid", gap: 12 },
  row: {
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    gap: 12,
    border: `1px solid ${THEME.line}`,
    borderRadius: 14,
    padding: 12,
    background: "#fff",
  },
  thumbWrap: { width: "100%", overflow: "hidden", borderRadius: 12, border: `1px solid ${THEME.line}` },
  thumb: { width: "100%", height: 120, objectFit: "cover", display: "block" },

  main: { minWidth: 0, display: "flex", flexDirection: "column", gap: 10 },
  rowTop: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", flexWrap: "wrap" },
  actions: { display: "flex", gap: 8, flexWrap: "wrap" },

  pTitle: { fontWeight: 1100, fontSize: 16, color: THEME.ink, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" },
  pSub: { color: THEME.sub, fontSize: 13, lineHeight: 1.4, marginTop: 4 },

  badge: { fontSize: 11, fontWeight: 900, color: "#111", background: "#fff7ed", border: "1px solid #ffedd5", padding: "6px 10px", borderRadius: 999 },
  badgeOff: { fontSize: 11, fontWeight: 900, color: "#7f1d1d", background: "#fff1f2", border: "1px solid #fecdd3", padding: "6px 10px", borderRadius: 999 },

  desc: { color: "#374151", fontSize: 13, lineHeight: 1.6 },

  metaGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 },
  meta: { background: "#fafafa", border: `1px solid ${THEME.line}`, borderRadius: 12, padding: 10 },
  metaK: { fontSize: 11, fontWeight: 1000, color: THEME.sub, textTransform: "uppercase", letterSpacing: 0.5 },
  metaV: { fontSize: 13, fontWeight: 800, color: THEME.ink, marginTop: 4 },

  label: { fontSize: 12, fontWeight: 1000, color: THEME.sub, textTransform: "uppercase", letterSpacing: 0.6 },

  input: { width: "100%", padding: "12px", borderRadius: 12, border: `1px solid ${THEME.line}`, outline: "none", fontSize: 14, background: "#fff" },
  textarea: { width: "100%", padding: "12px", borderRadius: 12, border: `1px solid ${THEME.line}`, outline: "none", fontSize: 14, background: "#fff", resize: "vertical" },
  file: { width: "100%", padding: "10px", borderRadius: 12, border: `1px solid ${THEME.line}`, background: "#fff" },

  btnPrimary: { border: "none", background: THEME.brand, color: "white", borderRadius: 12, padding: "10px 12px", fontWeight: 1000, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 },
  btnGhost: { border: `1px solid ${THEME.line}`, background: "#fff", color: THEME.ink, borderRadius: 12, padding: "10px 12px", fontWeight: 1000, cursor: "pointer" },
  iconBtn: { border: `1px solid ${THEME.line}`, background: "#fff", borderRadius: 12, padding: "10px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" },

  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 14, zIndex: 5000 },
  modal: {
    width: "min(980px, 96vw)",
    maxHeight: "92vh",
    background: "#fff",
    borderRadius: 16,
    border: `1px solid ${THEME.line}`,
    boxShadow: "0 30px 80px rgba(0,0,0,0.30)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  modalHeader: { padding: 14, borderBottom: `1px solid ${THEME.line}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff" },
  closeBtn: { border: `1px solid ${THEME.line}`, background: "#fff", borderRadius: 12, padding: 8, cursor: "pointer", display: "inline-flex" },
  modalBody: { padding: 14, overflow: "auto", WebkitOverflowScrolling: "touch" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  modalFooter: { padding: 14, borderTop: `1px solid ${THEME.line}`, display: "flex", justifyContent: "flex-end", gap: 10, background: "#fff" },
};
