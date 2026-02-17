.app {
  min-height: 100vh;
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79, 110, 247, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 80%, rgba(167, 139, 250, 0.08), transparent),
    var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 80px;
  gap: 0;
}

/* ── Header ─────────────────────────────────────────────────────────────────── */
.header {
  width: 100%;
  max-width: 860px;
  margin-bottom: 40px;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(79, 110, 247, 0.1);
  border: 1px solid rgba(79, 110, 247, 0.3);
  color: var(--accent);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(30px, 6vw, 52px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #ffffff 30%, rgba(79, 110, 247, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.sub {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
}

/* ── Main content ────────────────────────────────────────────────────────────── */
.main {
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeUp 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}