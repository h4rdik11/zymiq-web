import { Logo, LogoMark } from "./components/LogoMark";
import { SiteInteractions } from "./components/SiteInteractions";
import { LIMS_SIGN_IN_URL } from "../site.config";

const arrowIcon = (
  <svg
    className="arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const crossIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const plusIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function Home() {
  return (
    <>
      <SiteInteractions />

      {/* Scroll progress */}
      <div className="scroll-progress" />

      {/* Navigation */}
      <header className="nav" data-screen-label="Nav">
        <div className="container nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Primary">
            <div className="nav-item">
              <button className="nav-link" aria-haspopup="true">
                Features
                <svg
                  className="chev"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-dd" role="menu">
                <a href="#features-iso">TRF Management</a>
                <a href="#features-cal">Equipment &amp; Calibration</a>
                <a href="#features-iso">ISO 17025 Compliance</a>
                <a href="#features-portal">Client Portal</a>
                <a href="#features-iso">Document Control</a>
                <a href="#features-iso">Audit Log</a>
              </div>
            </div>

            <div className="nav-item">
              <button className="nav-link" aria-haspopup="true">
                Solutions
                <svg
                  className="chev"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-dd" role="menu">
                <a href="#">For NABL Labs</a>
                <a href="#">For Testing Labs</a>
                <a href="#">For Calibration Labs</a>
                <div className="dd-divider" />
                <a href="#comparison">Compare: vs Legacy LIMS</a>
                <a href="#comparison">Compare: vs Excel</a>
              </div>
            </div>

            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#blog">
              Blog
            </a>
          </nav>

          <div className="nav-cta-group">
            <a className="nav-signin" href={LIMS_SIGN_IN_URL}>
              Sign in
            </a>
            <span className="nav-divider" />
            <a className="btn btn-primary" href="#">
              Start free trial
              {arrowIcon}
            </a>
            <button className="hamburger" aria-label="Open menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className="mobile-drawer-overlay" />
      <aside className="mobile-drawer" aria-label="Mobile menu">
        <div className="drawer-head">
          <a href="#top" className="logo">
            <LogoMark />
            <span className="logo-word">zymiq</span>
          </a>
          <button className="drawer-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-group">
          <p className="drawer-label">Features</p>
          <a className="drawer-link" href="#features-iso">
            ISO 17025 Compliance
          </a>
          <a className="drawer-link" href="#features-cal">
            Equipment &amp; Calibration
          </a>
          <a className="drawer-link" href="#features-portal">
            Client Portal
          </a>
          <a className="drawer-link" href="#solution">
            TRF Management
          </a>
          <a className="drawer-link" href="#solution">
            Document Control
          </a>
        </div>
        <div className="drawer-group">
          <p className="drawer-label">Solutions</p>
          <a className="drawer-link" href="#">
            For NABL Labs
          </a>
          <a className="drawer-link" href="#">
            For Testing Labs
          </a>
          <a className="drawer-link" href="#">
            For Calibration Labs
          </a>
        </div>
        <div className="drawer-group">
          <p className="drawer-label">Company</p>
          <a className="drawer-link" href="#">
            Pricing
          </a>
          <a className="drawer-link" href="#blog">
            Blog
          </a>
          <a className="drawer-link" href={LIMS_SIGN_IN_URL}>
            Sign in
          </a>
        </div>

        <div className="drawer-cta">
          <a className="btn btn-primary btn-lg" href="#">
            Start free trial
          </a>
          <a className="btn btn-ghost-light btn-lg" href="#">
            Watch 3-min demo
          </a>
        </div>
      </aside>

      {/* HERO */}
      <section className="hero" id="top" data-screen-label="01 Hero">
        <div className="hero-mesh" />
        <div className="hero-grain" />
        <div className="grid-overlay" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow fade-up" style={{ animationDelay: "100ms" }}>
              ISO/IEC 17025:2017 · NABL · A2LA · UKAS · NATA
            </p>
            <h1>
              <span className="word-stagger" data-text="The LIMS Built for" />
              <br />
              <span className="gradient-text word-stagger" data-text="ISO 17025" />
              <br />
              <span className="word-stagger" data-text="Certified Labs." />
            </h1>
            <p
              className="hero-sub fade-up"
              style={{ animationDelay: "900ms", animationFillMode: "both" }}
            >
              Zymiq manages your TRFs, equipment calibration, ISO clause compliance, and client
              requests — fully traceable, always audit-ready.
            </p>
            <div
              className="hero-cta-row fade-up"
              style={{ animationDelay: "1200ms", animationFillMode: "both" }}
            >
              <a className="btn btn-primary btn-lg" href="#">
                Start free trial
                {arrowIcon}
              </a>
              <a className="btn btn-ghost-light btn-lg" href="#">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch 3-min demo
              </a>
            </div>
            <div
              className="hero-trust fade-up"
              style={{ animationDelay: "1500ms", animationFillMode: "both" }}
            >
              <span>
                <span className="sparkle">✦</span> No credit card required
              </span>
              <span>
                <span className="sparkle">✦</span> Live in under 4 days
              </span>
              <span>
                <span className="sparkle">✦</span> Indian data residency
              </span>
            </div>
          </div>

          <div
            className="hero-mockup fade-up"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            <div className="mockup">
              <div className="mockup-bar">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="url">app.zymiq.io/dashboard</span>
              </div>
              <div className="dash">
                <aside className="dash-side">
                  <div className="logo-mini">
                    <LogoMark />
                    <span className="logo-word">zymiq</span>
                  </div>
                  <div className="dash-side-item active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="9" />
                      <rect x="14" y="3" width="7" height="5" />
                      <rect x="14" y="12" width="7" height="9" />
                      <rect x="3" y="16" width="7" height="5" />
                    </svg>
                    Dashboard
                  </div>
                  <div className="dash-side-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    TRFs
                  </div>
                  <div className="dash-side-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Equipment
                  </div>
                  <div className="dash-side-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Compliance
                  </div>
                  <div className="dash-side-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                    </svg>
                    Clients
                  </div>
                </aside>

                <div className="dash-main">
                  <div className="dash-banner">
                    <span className="ok-dot" />
                    <b>15 / 17 clauses</b> ISO 17025 current
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono-stack)",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "11px",
                      }}
                    >
                      Last audit · 03 Mar 2026
                    </span>
                  </div>

                  <div className="dash-kpi">
                    <div className="dash-kpi-card">
                      <div className="label">TRFs this month</div>
                      <div className="val">142</div>
                    </div>
                    <div className="dash-kpi-card">
                      <div className="label">Cal due 30d</div>
                      <div className="val amber">7</div>
                    </div>
                    <div className="dash-kpi-card">
                      <div className="label">Open findings</div>
                      <div className="val red">3</div>
                    </div>
                  </div>

                  <div className="dash-table">
                    <div className="dash-table-head">
                      <div>TRF</div>
                      <div>Client</div>
                      <div>Status</div>
                      <div>Due</div>
                    </div>
                    <div className="dash-row">
                      <div className="id">TRF-2026-05-0034</div>
                      <div>Veridian Power · Dallas</div>
                      <div>
                        <span className="badge badge-progress">
                          <span className="b-dot" />
                          In Progress
                        </span>
                      </div>
                      <div className="due">28 May</div>
                    </div>
                    <div className="dash-row">
                      <div className="id">TRF-2026-05-0033</div>
                      <div>Arclight Utilities</div>
                      <div>
                        <span className="badge badge-ready">
                          <span className="b-dot" />
                          Report Ready
                        </span>
                      </div>
                      <div className="due">26 May</div>
                    </div>
                    <div className="dash-row">
                      <div className="id">TRF-2026-05-0031</div>
                      <div>Tridev Manufacturing · Mumbai</div>
                      <div>
                        <span className="badge badge-review">
                          <span className="b-dot" />
                          In Review
                        </span>
                      </div>
                      <div className="due">30 May</div>
                    </div>
                    <div className="dash-row">
                      <div className="id">TRF-2026-05-0028</div>
                      <div>Solanki Auto Works</div>
                      <div>
                        <span className="badge badge-progress">
                          <span className="b-dot" />
                          In Progress
                        </span>
                      </div>
                      <div className="due">02 Jun</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-proof" data-screen-label="02 Social proof">
        <div className="container">
          <p className="social-label reveal">Trusted by labs accredited under</p>
          <div className="logo-row reveal">
            {["NABL", "A2LA", "UKAS", "NATA", "EIAC", "ILAC"].map((c) => (
              <span className="cert-logo" key={c}>
                <span className="swatch" />
                {c}
              </span>
            ))}
          </div>

          <div className="stat-row">
            <div className="stat reveal">
              <div className="stat-val mono" data-target="17">
                0
              </div>
              <div className="stat-label">
                ISO clauses
                <br />
                covered end-to-end
              </div>
            </div>
            <div className="stat reveal">
              <div className="stat-val mono" data-target="4" data-prefix="< ">
                0
              </div>
              <div className="stat-label">
                Days from sign-up
                <br />
                to your first TRF
              </div>
            </div>
            <div className="stat reveal">
              <div className="stat-val mono" data-target="100" data-suffix="%">
                0%
              </div>
              <div className="stat-label">
                Traceability
                <br />
                chain coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-light section-pad problem" data-screen-label="03 Problem">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow reveal">The problem</p>
            <h2 className="reveal">
              Most labs are one audit
              <br />
              away from a crisis.
            </h2>
            <p className="lede reveal">
              Calibration logs live in spreadsheets. TRF status updates happen over WhatsApp. ISO
              clause reviews are tracked in a Word document nobody opens. When the NABL assessor
              walks in, everyone scrambles.
            </p>
          </div>

          <div className="pain-grid stagger">
            <div className="pain-card reveal-left">
              <div className="accent" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3>Calibration lapsed. Scope flagged.</h3>
              <p>
                One missed due date puts every result from that instrument out of scope.
                Retroactively.
              </p>
            </div>

            <div className="pain-card warn reveal-left">
              <div className="accent" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Findings from last year. Still open.</h3>
              <p>No systematic follow-up. Repeat observations. NABL assessors notice patterns.</p>
            </div>

            <div className="pain-card warn reveal-left">
              <div className="accent" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M10 14 a2 2 0 1 1 4 0 c0 1-1 1.5-2 2.5" />
                  <line x1="12" y1="19" x2="12.01" y2="19" />
                </svg>
              </div>
              <h3>No record of who approved what.</h3>
              <p>
                ISO 17025 cl. 7.5 requires attributed, immutable technical records. &quot;I think it
                was Ramesh&quot; doesn&apos;t count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — pillars */}
      <section className="section-tint section-pad" id="solution" data-screen-label="04 Solution">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow reveal">The solution</p>
            <h2 className="reveal">
              Zymiq is the catalyst
              <br />
              your lab was missing.
            </h2>
            <p className="lede reveal">
              One platform connecting your instruments, your team, your clients, and your ISO
              compliance — without the enterprise price tag or the six-month implementation.
            </p>
          </div>

          <div className="pillar-grid stagger">
            <div className="pillar reveal">
              <div className="pillar-glow" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 2v6L3 21h18L15 8V2" />
                  <line x1="9" y1="2" x2="15" y2="2" />
                  <line x1="8" y1="14" x2="16" y2="14" />
                </svg>
              </div>
              <h3>TRF &amp; Sample Management</h3>
              <p>From client request to certified report, every step logged and traceable.</p>
              <a className="link" href="#features-iso">
                Explore {arrowIcon}
              </a>
            </div>

            <div className="pillar reveal">
              <div className="pillar-glow" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 14l4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <h3>Equipment &amp; Calibration</h3>
              <p>Every instrument tracked. Cal due dates surfaced. Overdue assets flagged automatically.</p>
              <a className="link" href="#features-cal">
                Explore {arrowIcon}
              </a>
            </div>

            <div className="pillar reveal">
              <div className="pillar-glow" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h3>ISO 17025 Compliance</h3>
              <p>Clause-by-clause readiness visible at a glance. Findings tracked. Internal reviews signed off.</p>
              <a className="link" href="#features-iso">
                Explore {arrowIcon}
              </a>
            </div>

            <div className="pillar reveal">
              <div className="pillar-glow" />
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Client Portal</h3>
              <p>Clients submit requests, track progress, and download reports — no phone calls, no email chains.</p>
              <a className="link" href="#features-portal">
                Explore {arrowIcon}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1 — ISO COMPLIANCE [DARK] */}
      <section className="section-dark section-pad" id="features-iso" data-screen-label="05 ISO compliance">
        <div className="grid-overlay" />
        <div className="container">
          <div className="feature-deep">
            <div className="mockup-col">
              <div className="mockup mock-compliance reveal-clip">
                <div className="mockup-bar">
                  <span className="dot r" />
                  <span className="dot y" />
                  <span className="dot g" />
                  <span className="url">app.zymiq.io/compliance</span>
                </div>
                <div className="mockup-body">
                  <div className="compliance-banner">
                    <div className="left">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        <b>15 / 17 clauses current</b> · ISO 17025:2017
                      </span>
                    </div>
                    <div className="progress">88%</div>
                  </div>
                  <div className="compliance-bar">
                    <div className="fill" data-fill="88" />
                  </div>

                  <div className="clause-grid">
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">4.1</span> Impartiality
                    </div>
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">4.2</span> Confidentiality
                    </div>
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">6.2</span> Personnel
                    </div>
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">6.3</span> Facilities
                    </div>
                    <div className="clause amber">
                      <span className="status-dot" />
                      <span className="num">6.4</span> Equipment
                    </div>
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">6.5</span> Metrological traceability
                    </div>
                    <div className="clause">
                      <span className="status-dot" />
                      <span className="num">7.2</span> Method selection
                    </div>
                    <div className="clause red">
                      <span className="status-dot" />
                      <span className="num">7.10</span> Nonconforming work
                    </div>
                  </div>

                  <div className="finding-row">
                    <div className="ft">
                      <span className="tag">F-2026-008</span>
                      <span>Cal certificate expired — Tensile UTM</span>
                    </div>
                    <span className="badge badge-overdue">
                      <span className="b-dot" />
                      Open · 12d
                    </span>
                  </div>
                  <div className="finding-row">
                    <div className="ft">
                      <span className="tag">F-2026-007</span>
                      <span>Internal review pending sign-off · cl. 8.8</span>
                    </div>
                    <span className="badge badge-review">
                      <span className="b-dot" />
                      In Review
                    </span>
                  </div>
                  <div className="finding-row">
                    <div className="ft">
                      <span className="tag">F-2026-006</span>
                      <span>Method validation log updated</span>
                    </div>
                    <span className="badge badge-ready">
                      <span className="b-dot" />
                      Resolved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="copy reveal">
              <p className="eyebrow">ISO 17025 Compliance</p>
              <h2>
                Audit-ready.
                <br />
                Every day, not just
                <br />
                assessment week.
              </h2>
              <p className="lede">
                Zymiq maps your lab against every clause of ISO/IEC 17025:2017. Each clause carries a
                live status. Findings are logged, assigned, and tracked to closure. Internal audit
                reviews collect structured evidence and require sign-off from the right roles before
                a clause can be marked resolved.
              </p>

              <ul className="feature-bullets">
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </span>
                  <div>
                    <h4>Clause-by-clause coverage</h4>
                    <p>All 17025 clauses, status live in your dashboard.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <polyline points="9 15 11 17 15 13" />
                    </svg>
                  </span>
                  <div>
                    <h4>Finding lifecycle</h4>
                    <p>Open → assigned → evidence → closed. Full audit trail.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <div>
                    <h4>Internal review sign-off</h4>
                    <p>Owner + Technical Manager sign-off chain. cl. 8.8 ready.</p>
                  </div>
                </li>
              </ul>

              <a className="btn btn-ghost-light btn-lg" href="#">
                See compliance features
                {arrowIcon}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2 — CALIBRATION [LIGHT] */}
      <section className="section-light section-pad" id="features-cal" data-screen-label="06 Calibration">
        <div className="container">
          <div className="feature-deep copy-right">
            <div className="copy reveal">
              <p className="eyebrow">Equipment &amp; Calibration</p>
              <h2>
                Your calibration register.
                <br />
                Automated.
              </h2>
              <p className="lede">
                Every instrument has a calibration history, a due date, and a traceability
                certificate attached. When a calibration lapses, Zymiq flags it — and marks every
                test result that used that instrument out-of-scope. No manual cross-referencing. No
                back-of-envelope recalls.
              </p>

              <ul className="feature-bullets">
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </span>
                  <div>
                    <h4>Due date alerts</h4>
                    <p>30 / 60 / 90-day advance warnings, configurable per instrument.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </span>
                  <div>
                    <h4>Traceability chain</h4>
                    <p>Certificates attached to every event. cl. 6.4 / 6.5 ready.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </span>
                  <div>
                    <h4>Auto out-of-scope flagging</h4>
                    <p>Lapsed cal → affected results flagged automatically.</p>
                  </div>
                </li>
              </ul>

              <a className="btn btn-ghost-dark btn-lg" href="#">
                See calibration features
                {arrowIcon}
              </a>
            </div>

            <div className="mockup-col">
              <div className="mockup mock-equipment reveal-clip">
                <div className="mockup-bar" style={{ background: "#fff", borderBottom: "1px solid #ECECF1" }}>
                  <span className="dot r" />
                  <span className="dot y" />
                  <span className="dot g" />
                  <span className="url" style={{ color: "#9B9AAB", background: "#F7F4FA" }}>
                    app.zymiq.io/equipment
                  </span>
                </div>
                <div className="mockup-body">
                  <div className="eq-table">
                    <div className="eq-head">
                      <div>Equipment ID</div>
                      <div>Instrument</div>
                      <div>Cal due</div>
                      <div>Status</div>
                    </div>
                    <div className="eq-row">
                      <div className="eq-id">EQ-MILLI-007</div>
                      <div>Digital multimeter · Fluke 87V</div>
                      <div className="eq-due">14 Jul 2026</div>
                      <div>
                        <span className="badge badge-ready">
                          <span className="b-dot" />
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="eq-row">
                      <div className="eq-id">EQ-TENS-012</div>
                      <div>Tensile UTM · Instron 5982</div>
                      <div className="eq-due">22 May 2026</div>
                      <div>
                        <span className="badge badge-review">
                          <span className="b-dot" />
                          At Cal
                        </span>
                      </div>
                    </div>
                    <div className="eq-row overdue">
                      <div className="eq-id">EQ-OSC-003</div>
                      <div>Oscilloscope · Tektronix MSO64</div>
                      <div className="eq-due">02 May 2026</div>
                      <div>
                        <span className="badge badge-overdue">
                          <span className="b-dot" />
                          Overdue
                        </span>
                      </div>
                    </div>
                    <div className="eq-row">
                      <div className="eq-id">EQ-BAL-019</div>
                      <div>Analytical balance · Sartorius</div>
                      <div className="eq-due">09 Aug 2026</div>
                      <div>
                        <span className="badge badge-ready">
                          <span className="b-dot" />
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="eq-row">
                      <div className="eq-id">EQ-HARD-005</div>
                      <div>Hardness tester · Vickers</div>
                      <div className="eq-due">28 Jun 2026</div>
                      <div>
                        <span className="badge badge-ready">
                          <span className="b-dot" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3 — CLIENT PORTAL [DARK, reversed gradient] */}
      <section
        className="section-dark section-pad"
        id="features-portal"
        style={{ background: "linear-gradient(135deg,#2A1F3D 0%,#1A1428 100%)" }}
        data-screen-label="07 Client portal"
      >
        <div className="grid-overlay" />
        <div className="container">
          <div className="feature-deep">
            <div className="mockup-col">
              <div className="mockup mock-portal reveal-clip">
                <div className="mockup-bar">
                  <span className="dot r" />
                  <span className="dot y" />
                  <span className="dot g" />
                  <span className="url">portal.zymiq.io · Boston Electrical Lab</span>
                </div>
                <div className="mockup-body">
                  <div className="portal-split">
                    <div className="portal-pane">
                      <div className="pane-label">
                        Client view <span className="tag">VERIDIAN POWER · DALLAS</span>
                      </div>
                      <div
                        style={{
                          color: "#fff",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        Transformer oil — dielectric strength
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono-stack)",
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "11px",
                        }}
                      >
                        TRF-2026-05-0034 · IS 1866
                      </div>
                      <div className="tracker">
                        {["Submitted", "Approved", "In Progress", "Ready"].map((label, i) => (
                          <span key={label} style={{ display: "contents" }}>
                            {i > 0 && <div className="line done" />}
                            <div className="track-step done">
                              <div className="bubble">{checkIcon}</div>
                              {label}
                            </div>
                          </span>
                        ))}
                      </div>
                      <div className="report-row">
                        <div className="left">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Certified Report · v2 · 24 May 2026
                        </div>
                        <button className="dl">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="12"
                            height="12"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>

                    <div className="portal-divider" />

                    <div className="portal-pane">
                      <div className="pane-label">
                        Lab view <span className="tag">INTAKE QUEUE</span>
                      </div>
                      <div className="incoming">
                        <div className="meta">
                          <b>Arclight Utilities · Cable insulation test</b>
                          <span className="sub">REQ-IN-2026-0421 · IS 7098-2</span>
                        </div>
                        <div className="actions">
                          <button className="approve">Approve</button>
                          <button className="decline">Decline</button>
                        </div>
                      </div>
                      <div
                        className="incoming"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          borderColor: "rgba(141,87,192,0.15)",
                        }}
                      >
                        <div className="meta">
                          <b>Tridev Manufacturing · Earth resistance survey</b>
                          <span className="sub">REQ-IN-2026-0420 · IS 3043</span>
                        </div>
                        <div className="actions">
                          <button className="approve">Approve</button>
                          <button className="decline">Decline</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="copy reveal">
              <p className="eyebrow">Client Portal</p>
              <h2>
                Give your clients
                <br />
                visibility.
                <br />
                Win repeat business.
              </h2>
              <p className="lede">
                Your clients are businesses — utilities, refineries, OEMs, local manufacturers. They
                need progress visibility, not phone calls. Zymiq&apos;s client marketplace gives them
                a branded portal to submit requests, track TRFs in real time, and download certified
                reports digitally.
              </p>

              <ul className="feature-bullets">
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <div>
                    <h4>Request marketplace</h4>
                    <p>Clients discover your lab, submit TRFs, get live updates.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </span>
                  <div>
                    <h4>Real-time progress tracking</h4>
                    <p>Live status from intake to report ready.</p>
                  </div>
                </li>
                <li className="feature-bullet">
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </span>
                  <div>
                    <h4>Digital report delivery</h4>
                    <p>Certified reports delivered instantly. No courier. No delay.</p>
                  </div>
                </li>
              </ul>

              <a className="btn btn-ghost-light btn-lg" href="#">
                See client portal
                {arrowIcon}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-grey section-pad comparison" id="comparison" data-screen-label="08 Comparison">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow reveal">Why Zymiq</p>
            <h2 className="reveal">
              Built for labs.
              <br />
              Not for IT departments.
            </h2>
            <p className="lede reveal">
              Legacy enterprise LIMS were built for pharmaceutical giants with dedicated IT teams and
              year-long implementation budgets. Zymiq is built for the lab manager who needs to pass
              the NABL assessment next quarter.
            </p>
          </div>

          <div className="comp-wrap reveal">
            <table className="comp-table">
              <thead>
                <tr>
                  <th />
                  <th className="zymiq-col">Zymiq</th>
                  <th>Legacy enterprise LIMS</th>
                  <th>Excel + email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time to go live</td>
                  <td className="zymiq-cell">
                    <span className="check">Days</span>
                  </td>
                  <td>6 – 18 months</td>
                  <td>Instant (chaos)</td>
                </tr>
                <tr>
                  <td>ISO 17025 built in</td>
                  <td className="zymiq-cell">
                    <span className="check">{checkIcon}</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon} Configured</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon} Manual</span>
                  </td>
                </tr>
                <tr>
                  <td>Calibration tracking</td>
                  <td className="zymiq-cell">
                    <span className="check">{checkIcon} Automated</span>
                  </td>
                  <td>
                    <span className="plus">{plusIcon} Module add-on</span>
                  </td>
                  <td>Spreadsheet</td>
                </tr>
                <tr>
                  <td>Findings management</td>
                  <td className="zymiq-cell">
                    <span className="check">{checkIcon} Included</span>
                  </td>
                  <td>
                    <span className="plus">{plusIcon} Add-on</span>
                  </td>
                  <td>Word document</td>
                </tr>
                <tr>
                  <td>Client portal</td>
                  <td className="zymiq-cell">
                    <span className="check">{checkIcon} Included</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon} Not available</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon}</span>
                  </td>
                </tr>
                <tr>
                  <td>Multi-lab support</td>
                  <td className="zymiq-cell">
                    <span className="check">{checkIcon} Native</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon} Enterprise tier</span>
                  </td>
                  <td>
                    <span className="cross">{crossIcon}</span>
                  </td>
                </tr>
                <tr>
                  <td>Pricing</td>
                  <td className="zymiq-cell">Per lab, SaaS</td>
                  <td>Enterprise quote</td>
                  <td>&quot;Free&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-light section-pad" data-screen-label="09 Testimonials">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow reveal">Customer stories</p>
            <h2 className="reveal">
              Labs that stopped dreading
              <br />
              audit week.
            </h2>
          </div>

          <div className="test-grid stagger">
            <article className="test-card reveal">
              <span className="qmark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                We used to spend two weeks before every NABL surveillance scrambling for calibration
                records. Zymiq turned that into a 20-minute dashboard check.
              </blockquote>
              <div className="who">
                <div className="ava">RK</div>
                <div className="who-meta">
                  <div className="role">Technical Manager</div>
                  <div className="lab">Electrical Testing Lab · Boston</div>
                </div>
              </div>
            </article>

            <article className="test-card reveal">
              <span className="qmark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                The client portal alone justified the switch. Our customers can track their TRFs
                without calling us six times a day.
              </blockquote>
              <div className="who">
                <div className="ava">SM</div>
                <div className="who-meta">
                  <div className="role">Lab Owner</div>
                  <div className="lab">Materials Testing Lab · New Delhi</div>
                </div>
              </div>
            </article>

            <article className="test-card reveal">
              <span className="qmark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                We were managing ISO clause reviews in a shared Word doc with seventeen comment
                threads. Zymiq made that embarrassing to think about.
              </blockquote>
              <div className="who">
                <div className="ava">AP</div>
                <div className="who-meta">
                  <div className="role">Technical Manager</div>
                  <div className="lab">Chemical Testing Lab · Mumbai</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BLOG TEASERS */}
      <section className="section-tint section-pad" id="blog" data-screen-label="10 Blog">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow reveal">From the blog</p>
            <h2 className="reveal">
              Everything your lab needs
              <br />
              to know about ISO 17025.
            </h2>
          </div>

          <div className="blog-grid stagger">
            <article className="blog-card reveal">
              <div className="blog-thumb">
                <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="hex1" x="0" y="0" width="40" height="46" patternUnits="userSpaceOnUse">
                      <polygon
                        points="20,2 38,12 38,34 20,44 2,34 2,12"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="225" fill="url(#hex1)" />
                  <circle cx="320" cy="60" r="50" fill="rgba(232,105,26,0.25)" />
                  <circle cx="100" cy="170" r="70" fill="rgba(192,132,252,0.20)" />
                </svg>
              </div>
              <div className="blog-body">
                <span className="chip">NABL</span>
                <h3>NABL Accreditation Checklist: What Your LIMS Must Do for ISO 17025</h3>
                <p className="excerpt">
                  Clause-by-clause breakdown of what the NABL assessor checks — and how your software
                  can prove compliance.
                </p>
                <div className="footer-row">
                  <span className="read-time">8 min read</span>
                  <a className="read-link" href="#">
                    Read {arrowIcon}
                  </a>
                </div>
              </div>
            </article>

            <article className="blog-card reveal">
              <div
                className="blog-thumb"
                style={{ background: "linear-gradient(135deg,#1A1428 0%,#5C2E8C 50%,#E8691A 130%)" }}
              >
                <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
                  <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none">
                    <line x1="0" y1="56" x2="400" y2="56" />
                    <line x1="0" y1="112" x2="400" y2="112" />
                    <line x1="0" y1="168" x2="400" y2="168" />
                    <line x1="80" y1="0" x2="80" y2="225" />
                    <line x1="160" y1="0" x2="160" y2="225" />
                    <line x1="240" y1="0" x2="240" y2="225" />
                    <line x1="320" y1="0" x2="320" y2="225" />
                  </g>
                  <polyline
                    points="20,180 80,140 160,150 240,90 320,110 380,40"
                    fill="none"
                    stroke="#C084FC"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="380" cy="40" r="6" fill="#E8691A" />
                </svg>
              </div>
              <div className="blog-body">
                <span className="chip">Migration</span>
                <h3>How to Replace Excel for Calibration Tracking in an Accredited Lab</h3>
                <p className="excerpt">
                  The real cost of managing a calibration register in a spreadsheet — and a practical
                  migration plan.
                </p>
                <div className="footer-row">
                  <span className="read-time">6 min read</span>
                  <a className="read-link" href="#">
                    Read {arrowIcon}
                  </a>
                </div>
              </div>
            </article>

            <article className="blog-card reveal">
              <div
                className="blog-thumb"
                style={{ background: "linear-gradient(135deg,#2A1F3D 0%,#8D57C0 100%)" }}
              >
                <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
                  <g fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5">
                    <polygon points="200,40 280,85 280,175 200,220 120,175 120,85" />
                    <polygon points="200,75 250,103 250,158 200,185 150,158 150,103" />
                    <polygon points="200,110 220,121 220,143 200,154 180,143 180,121" />
                  </g>
                  <circle cx="200" cy="132" r="6" fill="#E8691A" />
                  <circle cx="120" cy="85" r="4" fill="#C084FC" />
                  <circle cx="280" cy="175" r="4" fill="#C084FC" />
                </svg>
              </div>
              <div className="blog-body">
                <span className="chip">ISO 17025</span>
                <h3>ISO 17025 Clause-by-Clause: Which Parts Your LIMS Should Automate</h3>
                <p className="excerpt">
                  Not all clauses are equal. Here&apos;s where software makes the difference — and
                  where you still need people.
                </p>
                <div className="footer-row">
                  <span className="read-time">10 min read</span>
                  <a className="read-link" href="#">
                    Read {arrowIcon}
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="blog-cta-row reveal">
            <a className="btn btn-ghost-dark btn-lg" href="#">
              See all articles
              {arrowIcon}
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta section-pad-lg" data-screen-label="11 Final CTA">
        <div className="hex-overlay">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <pattern id="hex2" x="0" y="0" width="100" height="115" patternUnits="userSpaceOnUse">
                <polygon
                  points="50,5 95,30 95,85 50,110 5,85 5,30"
                  fill="none"
                  stroke="#8D57C0"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex2)" />
          </svg>
        </div>
        <div className="molecular-ring">
          <svg viewBox="0 0 200 200" fill="none" stroke="#8D57C0" strokeWidth="0.6">
            <g>
              <circle cx="100" cy="20" r="5" />
              <circle cx="170" cy="60" r="5" />
              <circle cx="170" cy="140" r="5" />
              <circle cx="100" cy="180" r="5" />
              <circle cx="30" cy="140" r="5" />
              <circle cx="30" cy="60" r="5" />
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" />
              <line x1="100" y1="20" x2="100" y2="180" />
              <line x1="170" y1="60" x2="30" y2="140" />
              <line x1="30" y1="60" x2="170" y2="140" />
            </g>
          </svg>
        </div>

        <div className="container">
          <h2 className="reveal">
            Your next NABL assessment
            <br />
            starts today.
          </h2>
          <p className="reveal">
            Set up your lab in minutes. Import your equipment register. Invite your team. Zymiq
            handles the rest.
          </p>
          <a className="btn btn-primary btn-xl cta-pulse reveal" href="#">
            Start free trial — no credit card required
            {arrowIcon}
          </a>
          <div className="final-trust reveal">
            <span>ISO 17025 ready</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" data-screen-label="12 Footer">
        <div className="container">
          <div className="footer-top">
            <div className="brand-block">
              <a href="#top" className="logo">
                <LogoMark />
                <span className="logo-word">zymiq</span>
              </a>
              <span className="tag">The catalyst for certified labs.</span>
            </div>
            <div className="social-row">
              <a href="#" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">TRF Management</a>
                </li>
                <li>
                  <a href="#">Calibration</a>
                </li>
                <li>
                  <a href="#">ISO Compliance</a>
                </li>
                <li>
                  <a href="#">Client Portal</a>
                </li>
                <li>
                  <a href="#">Document Control</a>
                </li>
                <li>
                  <a href="#">Audit Log</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <a href="#">NABL Labs</a>
                </li>
                <li>
                  <a href="#">Testing Labs</a>
                </li>
                <li>
                  <a href="#">Calibration Labs</a>
                </li>
                <li>
                  <a href="#">Multi-Lab Management</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Compare</h4>
              <ul>
                <li>
                  <a href="#">vs Legacy LIMS</a>
                </li>
                <li>
                  <a href="#">vs Excel</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bot">
            <div>© 2026 Zymiq. All rights reserved.</div>
            <div className="right">Built for labs that ISO 17025 demands.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
