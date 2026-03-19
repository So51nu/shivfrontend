'use client';
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "./Api";

type InquiryStatus = "new" | "in_progress" | "done";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

  // ✅ NEW (real-estate optional fields)
  inquiry_type?: string;
  property_type?: string;
  budget_range?: string;
  preferred_area?: string;
  visit_date?: string;
  page?: string;
  pathname?: string;

  status: InquiryStatus;
  admin_notes: string;
  created_at: string;
};

function authHeaders() {
  const token = localStorage.getItem("admin_token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token || ""}`,
  };
}

export default function AdminDashboard() {
  const nav = useNavigate();
  const [me, setMe] = useState<{ username: string; is_superuser?: boolean } | null>(null);

  const [items, setItems] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Record<number, boolean>>({});

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"" | InquiryStatus>("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const selectedIds = useMemo(
    () => Object.keys(selected).filter((k) => selected[Number(k)]).map(Number),
    [selected]
  );

  // ✅ LOGOUT -> HOME
  const logout = () => {
    localStorage.removeItem("admin_token");
    nav("/");
  };

  const loadMe = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/me/`, { headers: authHeaders() });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.ok === false)) {
        logout();
        return;
      }
      setMe(data.user || null);
    } catch {
      logout();
    }
  };

  const loadList = async (pageArg: number = page, statusArg: typeof status = status, qArg: string = q) => {
    setLoading(true);
    setErr(null);

    try {
      const params = new URLSearchParams();
      const qq = qArg.trim();
      if (qq) params.set("q", qq);
      if (statusArg) params.set("status", statusArg);
      params.set("page", String(pageArg));
      params.set("page_size", String(pageSize));

      const res = await fetch(`${API_BASE}/api/admin/inquiries/?${params.toString()}`, {
        headers: authHeaders(),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.ok === false)) throw new Error(data.error || "Failed to load");

      setItems(data.items || []);
      setTotalPages(data.total_pages || 1);
      setTotalItems(data.total_items || 0);
      setSelected({});
    } catch (e: any) {
      setErr(e?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadList(page, status, q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, status]);

  const applySearch = () => {
    setPage(1);
    loadList(1, status, q);
  };

  const toggleAll = (checked: boolean) => {
    const next: Record<number, boolean> = {};
    if (checked) items.forEach((i) => (next[i.id] = true));
    setSelected(next);
  };

  const toggleOne = (id: number, checked: boolean) => {
    setSelected((p) => ({ ...p, [id]: checked }));
  };

  const updateInquiry = async (id: number, patch: Partial<Pick<Inquiry, "status" | "admin_notes">>) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/inquiries/${id}/`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(patch),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.ok === false)) throw new Error(data.error || "Update failed");

      setItems((prev) => prev.map((x) => (x.id === id ? ({ ...x, ...patch } as Inquiry) : x)));
    } catch (e: any) {
      alert(e?.message || "Update failed");
    }
  };

  const download = (type: "excel" | "pdf", selectedOnly: boolean) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (status) params.set("status", status);
    if (selectedOnly && selectedIds.length) params.set("ids", selectedIds.join(","));
    // ✅ hint for backend to include extra fields (optional)
    params.set("include_extra", "1");

    const url = `${API_BASE}/api/admin/inquiries/export/${type}/?${params.toString()}`;

    fetch(url, { headers: authHeaders() })
      .then(async (res) => {
        if (!res.ok) throw new Error("Download failed");
        const blob = await res.blob();
        const a = document.createElement("a");
        const fileExt = type === "excel" ? "xlsx" : "pdf";
        a.href = URL.createObjectURL(blob);
        a.download = `contact_inquiries.${fileExt}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(() => alert("Download failed"));
  };

  const counts = useMemo(() => {
    const c = { new: 0, in_progress: 0, done: 0 };
    items.forEach((x) => (c[x.status] += 1));
    return c;
  }, [items]);

  return (
    <div style={pageWrap}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body { margin:0 !important; padding:0 !important; width:100vw !important; min-height:100vh !important; overflow-x:hidden !important; }
            * { box-sizing:border-box; }
            .admin-container { width: 100%; max-width: 1500px; margin: 0 auto; padding: 16px; }

            .admin-grid { display:grid; grid-template-columns: 1fr; gap: 12px; }
            .admin-filters { display:grid; grid-template-columns: 1fr; gap: 10px; }
            .admin-actions { display:flex; gap:10px; flex-wrap:wrap; }
            .admin-table-wrap { overflow-x:auto; width:100%; border-radius: 12px; border: 1px solid #eee; }
            .admin-table { min-width: 1450px; } /* ✅ to fit new columns */

            .mobile-cards { display:none; }
            @media (min-width: 980px) {
              .admin-filters { grid-template-columns: 1.2fr 0.6fr 0.32fr; }
            }
            @media (max-width: 980px) {
              .admin-table-wrap { display:none; }
              .mobile-cards { display:block; }
            }
          `,
        }}
      />

      <div className="admin-container">
        {/* Top bar */}
        <div style={topbar}>
          <div>
            <div style={{ fontWeight: 1000, fontSize: 18 }}>Admin Inquiries</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
              Total records: <b>{totalItems}</b> • Showing: <b>{items.length}</b>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {me && (
            <div style={{ fontSize: 13, color: "#555" }}>
              Hi, <b>{me.username}</b>
            </div>
          )}

          {/* ✅ NEW BUTTON */}
          <button
            onClick={() => nav("/admin-projects")}
            style={{ ...btnSmall, background: "#111827", color: "white", border: "none" }}
          >
            Manage Projects
          </button>

          <button onClick={logout} style={btnSmall}>Logout</button>
        </div>

        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10, marginBottom: 12 }}>
          <StatCard label="New" value={counts.new} />
          <StatCard label="In Progress" value={counts.in_progress} />
          <StatCard label="Done" value={counts.done} />
          <StatCard label="Selected" value={selectedIds.length} />
        </div>

        {/* Filters */}
        <div style={card}>
          <div className="admin-filters">
            <input
              style={input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name/email/phone/subject/message/preferred_area..."
            />

            <select
              style={input}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as any);
                setPage(1);
              }}
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <button onClick={applySearch} style={btn}>Search</button>
          </div>

          <div style={{ height: 10 }} />

          <div className="admin-actions">
            <button style={btnOutline} onClick={() => download("excel", false)}>Download Excel (All/Filtered)</button>
            <button style={btnOutline} onClick={() => download("pdf", false)}>Download PDF (All/Filtered)</button>
            <button style={btnOutline} disabled={!selectedIds.length} onClick={() => download("excel", true)}>
              Download Excel (Selected)
            </button>
            <button style={btnOutline} disabled={!selectedIds.length} onClick={() => download("pdf", true)}>
              Download PDF (Selected)
            </button>
          </div>

          {err && <div style={errBox}>{err}</div>}

          {/* Desktop Table */}
          <div className="admin-table-wrap">
            <table style={table} className="admin-table">
              <thead>
                <tr>
                  <th style={th}>
                    <input
                      type="checkbox"
                      checked={items.length > 0 && selectedIds.length === items.length}
                      onChange={(e) => toggleAll(e.target.checked)}
                    />
                  </th>

                  <th style={th}>Name</th>
                  <th style={th}>Email</th>
                  <th style={th}>Phone</th>

                  {/* ✅ New fields */}
                  <th style={th}>Inquiry Type</th>
                  <th style={th}>Property</th>
                  <th style={th}>Budget</th>
                  <th style={th}>Preferred Area</th>
                  <th style={th}>Visit Date</th>

                  <th style={th}>Subject</th>
                  <th style={th}>Status</th>
                  <th style={th}>Notes</th>
                  <th style={th}>Created</th>
                  <th style={th}>Message</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr><td style={td} colSpan={14}>Loading...</td></tr>
                ) : items.length === 0 ? (
                  <tr><td style={td} colSpan={14}>No data</td></tr>
                ) : (
                  items.map((it) => {
                    const isExpanded = expandedId === it.id;
                    return (
                      <React.Fragment key={it.id}>
                        <tr>
                          <td style={td}>
                            <input
                              type="checkbox"
                              checked={!!selected[it.id]}
                              onChange={(e) => toggleOne(it.id, e.target.checked)}
                            />
                          </td>

                          <td style={td}><b>{it.name}</b></td>
                          <td style={td}>{it.email}</td>
                          <td style={td}>{it.phone}</td>

                          <td style={td}>{it.inquiry_type || "-"}</td>
                          <td style={td}>{it.property_type || "-"}</td>
                          <td style={td}>{it.budget_range || "-"}</td>
                          <td style={td}>{it.preferred_area || "-"}</td>
                          <td style={td}>{it.visit_date || "-"}</td>

                          <td style={td}>{it.subject}</td>

                          <td style={td}>
                            <select
                              value={it.status}
                              onChange={(e) => updateInquiry(it.id, { status: e.target.value as any })}
                              style={inputSmall}
                            >
                              <option value="new">New</option>
                              <option value="in_progress">In Progress</option>
                              <option value="done">Done</option>
                            </select>
                          </td>

                          <td style={td}>
                            <textarea
                              defaultValue={it.admin_notes || ""}
                              placeholder="Admin notes..."
                              style={textarea}
                              onBlur={(e) => updateInquiry(it.id, { admin_notes: e.target.value })}
                            />
                          </td>

                          <td style={td}>{new Date(it.created_at).toLocaleString()}</td>

                          <td style={td}>
                            <button
                              style={linkBtn}
                              onClick={() => setExpandedId((p) => (p === it.id ? null : it.id))}
                            >
                              {isExpanded ? "Hide" : "View"}
                            </button>
                          </td>
                        </tr>

                        {/* ✅ Expanded row for full details */}
                        {isExpanded && (
                          <tr>
                            <td style={{ ...td, background: "#fafafa" }} colSpan={14}>
                              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 12 }} className="grid-responsive">
                                <div>
                                  <div style={subTitle}>Full Message</div>
                                  <div style={msgBox}>{it.message}</div>

                                  <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    <span style={chip}>Page: {it.page || "-"}</span>
                                    <span style={chip}>Path: {it.pathname || "-"}</span>
                                  </div>
                                </div>

                                <div>
                                  <div style={subTitle}>Quick Summary</div>
                                  <div style={kvWrap}>
                                    <KV k="Name" v={it.name} />
                                    <KV k="Email" v={it.email} />
                                    <KV k="Phone" v={it.phone} />
                                    <KV k="Inquiry Type" v={it.inquiry_type || "-"} />
                                    <KV k="Property Type" v={it.property_type || "-"} />
                                    <KV k="Budget" v={it.budget_range || "-"} />
                                    <KV k="Preferred Area" v={it.preferred_area || "-"} />
                                    <KV k="Visit Date" v={it.visit_date || "-"} />
                                    <KV k="Created" v={new Date(it.created_at).toLocaleString()} />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mobile-cards">
            {loading ? (
              <div style={{ padding: 12, color: "#555" }}>Loading...</div>
            ) : items.length === 0 ? (
              <div style={{ padding: 12, color: "#555" }}>No data</div>
            ) : (
              <div style={{ display: "grid", gap: 10 }}>
                {items.map((it) => (
                  <div key={it.id} style={mobileCard}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div>
                        <div style={{ fontWeight: 1000 }}>{it.name}</div>
                        <div style={{ fontSize: 12, color: "#666" }}>{it.email} • {it.phone}</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={!!selected[it.id]}
                        onChange={(e) => toggleOne(it.id, e.target.checked)}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
                      <MiniKV k="Inquiry" v={it.inquiry_type || "-"} />
                      <MiniKV k="Property" v={it.property_type || "-"} />
                      <MiniKV k="Budget" v={it.budget_range || "-"} />
                      <MiniKV k="Area" v={it.preferred_area || "-"} />
                      <MiniKV k="Visit" v={it.visit_date || "-"} />
                      <MiniKV k="Status" v={it.status} />
                    </div>

                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 12, color: "#666", fontWeight: 900 }}>Subject</div>
                      <div style={{ fontSize: 13 }}>{it.subject}</div>
                    </div>

                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 12, color: "#666", fontWeight: 900 }}>Message</div>
                      <div style={{ whiteSpace: "pre-wrap", fontSize: 13, background: "#fafafa", border: "1px solid #eee", padding: 10, borderRadius: 10 }}>
                        {it.message}
                      </div>
                    </div>

                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 12, color: "#666", fontWeight: 900 }}>Update Status</div>
                      <select
                        value={it.status}
                        onChange={(e) => updateInquiry(it.id, { status: e.target.value as any })}
                        style={{ ...input, marginTop: 6 }}
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                      </select>
                    </div>

                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 12, color: "#666", fontWeight: 900 }}>Admin Notes</div>
                      <textarea
                        defaultValue={it.admin_notes || ""}
                        style={{ ...textarea, minWidth: "100%", marginTop: 6 }}
                        onBlur={(e) => updateInquiry(it.id, { admin_notes: e.target.value })}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pager */}
          <div style={pager}>
            <button style={btnSmall} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
            <div style={{ fontSize: 13, color: "#555" }}>Page {page} / {totalPages}</div>
            <button style={btnSmall} disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── UI helpers ─────────────────────────── */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div style={statCard}>
      <div style={{ fontSize: 12, color: "#666", fontWeight: 900 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 1100, color: "#222" }}>{value}</div>
    </div>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "8px 0", borderBottom: "1px dashed #eee" }}>
      <div style={{ color: "#666", fontSize: 12, fontWeight: 900 }}>{k}</div>
      <div style={{ color: "#222", fontSize: 13, textAlign: "right" }}>{v}</div>
    </div>
  );
}

function MiniKV({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 10, padding: 10 }}>
      <div style={{ color: "#666", fontSize: 11, fontWeight: 900 }}>{k}</div>
      <div style={{ color: "#222", fontSize: 13, fontWeight: 800 }}>{v}</div>
    </div>
  );
}

/* ─────────────────────────── Styles ─────────────────────────── */
const pageWrap: React.CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
  background: "#f6f6f6",
};

const topbar: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: "12px 14px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
  gap: 12,
  flexWrap: "wrap",
};

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 14,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  width: "100%",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  outline: "none",
  fontSize: 14,
  minWidth: 0,
};

const inputSmall: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  border: "1px solid #e8e8e8",
  borderRadius: 8,
  outline: "none",
  fontSize: 13,
  minWidth: 120,
};

const textarea: React.CSSProperties = {
  width: "100%",
  padding: 10,
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  outline: "none",
  fontSize: 13,
  minWidth: 220,
  minHeight: 46,
  resize: "vertical",
};

const btn: React.CSSProperties = {
  padding: "10px 12px",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 1000,
  background: "#111827",
  color: "white",
  width: "100%",
};

const btnOutline: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 900,
  background: "white",
};

const btnSmall: React.CSSProperties = {
  padding: "8px 10px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 900,
  background: "white",
};

const errBox: React.CSSProperties = {
  background: "#ffecec",
  border: "1px solid #ffb7b7",
  color: "#a40000",
  padding: 10,
  borderRadius: 10,
  fontSize: 13,
  marginTop: 12,
};

const table: React.CSSProperties = { width: "100%", borderCollapse: "collapse", background: "white" };

const th: React.CSSProperties = {
  textAlign: "left",
  padding: 10,
  borderBottom: "1px solid #eee",
  fontSize: 13,
  color: "#333",
  whiteSpace: "nowrap",
  position: "sticky",
  top: 0,
  background: "white",
  zIndex: 1,
};

const td: React.CSSProperties = {
  padding: 10,
  borderBottom: "1px solid #f2f2f2",
  verticalAlign: "top",
  fontSize: 13,
  color: "#333",
};

const pager: React.CSSProperties = {
  marginTop: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
};

const linkBtn: React.CSSProperties = {
  border: "1px solid #e8e8e8",
  background: "white",
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 900,
  fontSize: 12,
};

const msgBox: React.CSSProperties = {
  whiteSpace: "pre-wrap",
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 12,
  color: "#222",
  lineHeight: 1.6,
};

const subTitle: React.CSSProperties = {
  fontWeight: 1000,
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "#666",
  marginBottom: 8,
};

const kvWrap: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 12,
};

const chip: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 900,
  color: "#111",
  background: "#fff",
  border: "1px solid #e8e8e8",
  borderRadius: 999,
  padding: "8px 10px",
};

const statCard: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 12,
  boxShadow: "0 8px 22px rgba(0,0,0,0.04)",
};

const mobileCard: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 12,
  boxShadow: "0 8px 22px rgba(0,0,0,0.04)",
};
