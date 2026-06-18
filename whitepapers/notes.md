# Issue Nº2 — Google × Kaggle "Vibe Coding" Whitepaper Series (digest notes)

The papers are part of **Kaggle's 5-Day AI Agents: Intensive Vibe Coding Course with Google**.
Each Kaggle whitepaper page embeds a Google-Drive PDF inside a viewer under the heading
"Read the whitepaper below." 7 papers expected.

---

## Paper 1 — "The New SDLC With Vibe Coding: From ad-hoc prompting to Agentic Engineering"
**Authors:** Addy Osmani, Shubham Saboo, Sokratis Kartakis · Google · May 2026 · 49 pp
**PDF:** whitepapers/paper-1-new-sdlc.pdf (downloaded from the embedded Drive file). FULLY DIGESTED.

Core arc & key points:
- **Shift from syntax to intent.** Programming was translation (problem→design→syntax); that friction
  is collapsing. Early 2026: **85%** of pro devs use AI coding agents, **51%** daily, **~41% of new
  code is AI-generated**. Ladder: autocomplete → inline → chat → coding agents → autonomous agents.
- **Agent refresher.** An agent perceives a goal, plans, acts via tools, observes, iterates. Five
  parts: model, tools, memory, orchestration, deployment.
- **Vibe coding → agentic engineering is a spectrum.** Karpathy coined "vibe coding" (Feb 2025), then
  "agentic engineering" (early 2026). Differentiator = how outputs get **verified** (tests for
  deterministic parts, evals for non-deterministic). Without both, it's vibe coding.
- **Context engineering is the real skill.** 6 context types (instructions, knowledge, memory,
  examples, tools, guardrails). Static vs dynamic context trade-off. **Agent Skills** = portable,
  progressive-disclosure packages. Rule files: `AGENTS.md` / `CLAUDE.md` / `GEMINI.md`.
- **The new SDLC.** Implementation compresses from weeks→hours; requirements/architecture stay
  human-paced. 25–39% productivity gains (Deloitte) — but METR found experienced devs took **19%
  longer** on some tasks (verifying/correcting). **The 80% problem**: AI nails ~80%, the last 20%
  (edge cases, integration, subtle correctness) needs human context.
- **The Factory Model.** Developer's output isn't code — it's the system that produces code.
  **Agent = Model + Harness** (~10% model, ~90% harness: prompts, tools, sandboxes, orchestration,
  hooks, observability). Terminal-Bench 2.0: a team moved an agent from outside Top 30 to Top 5 by
  changing only the harness. "Most agent failures are configuration failures."
- **Conductor vs Orchestrator.** Conductor = real-time, in-IDE, fine-grained (Copilot, Gemini Code
  Assist, Cursor, Windsurf). Orchestrator = async, multi-agent delegation (Jules, Cursor bg agents,
  Claude Code). Coding agents live in the editor / terminal / background.
- **Production agents.** The same terminal workflow that makes a prototype makes a production agent.
  **Google Agents CLI** adds 7 skills to your coding agent covering the full ADK lifecycle
  (scaffold→code→eval→deploy→observe); works with Claude Code, Codex, etc. MCP + A2A for coordination.
- **Economics.** Vibe coding = low CapEx, **high OpEx** (token burn, prompting tax, maintenance tax,
  security remediation). Agentic engineering = high CapEx, **low OpEx**. Context engineering is a
  financial lever; intelligent **model routing** (big models for hard tasks, cheap for the rest).
- **Where to start** — individuals (set up `AGENTS.md`, install skills, build one agent end-to-end,
  write tests/evals first, review every shipped line, keep your skills sharp); leaders (treat the
  harness as code, "set the bar at the eval, not the demo," reshape code review); orgs (engineering
  investment not a feature; build the production substrate before scale; adopt MCP/A2A; hybrid
  human+agent teams; hire for judgment).
- **Conclusion — Intent as the new interface.** Three durable principles: *Structure scales, vibes
  don't*; *AI amplifies your engineering culture*; *the human role is evolving, not diminishing.*
  Closing line: **"Generation is solved. Verification, judgment, and direction are the new craft."**

Great pull-quotes: "Agent = Model + Harness" · "Structure scales, vibes don't." · "AI amplifies your
engineering culture." · "Generation is solved. Verification, judgment, and direction are the new craft."

---

## Paper 2 — "Vibe Coding AI Agents: Managing the Agent Lifecycle with Agents CLI & ADK 2.0" (Google Codelabs, hands-on)
**URL:** https://codelabs.developers.google.com/agents-cli-adk-lifecycle
- Manage the full **local dev lifecycle** of agents with **Agents CLI** + **ADK 2.0**.
- `uvx google-agents-cli setup` installs the CLI + **7 domain-specific coding skills** to
  `~/.agents/skills/`. Auth via Gemini API key or Google Cloud ADC (Vertex AI).
- Build agents as a **graph** (`Workflow` + edges, `LlmAgent` nodes, `@node` decorators, conditional
  routing). Local **playground**: chat with the agent, inspect tool calls live, auto code-reload.
- Stack: Python 3.11+, Node 18+, `uv`, Gemini (`gemini-3.1-flash-lite`), Antigravity IDE.
- Next: evaluation, cloud deploy, observability (Cloud Trace, BigQuery).

> This is the hands-on companion to the series, not a 22+ page whitepaper.

## Companion papers referenced by Paper 1 (likely part of the 7)
- **Day 3** — *Context Engineering: Sessions, Skills & Memory* (design/manage sessions, write & eval
  skills, persistent memory, token economics).
- **Day 5** — *Spec-Driven Production-Grade Development in the Age of Vibe Coding* (spec-driven dev,
  structured code review, guardrails, sandboxing, zero-trust; what changes for human reviewers when
  PR volume scales — bundled summaries, conditional LGTM, agent-driven code-review skills).

## Paper 3 — "Agent Tools & Interoperability" (Day 2 Whitepaper, June 2026 run)
**Authors:** Kanchana Patlolla, Łukasz Olejniczak, and Pier Paolo Ippolito · Google · June 2026
**URL:** https://www.kaggle.com/whitepaper-agent-tools-and-interoperability · DIGESTED → wp-3.html
**Accent:** #f59e0b (amber)

Core arc & key points:
- The **standard-of-one problem**: without open standards each API is bespoke — fragile wrappers,
  compounding tech debt, a ceiling on what one developer can build.
- **MCP (Model Context Protocol)**: open standard for connecting tools to foundation models. An MCP
  server exposes tools; an MCP client (your agent/IDE) discovers and calls them. "Define once, use
  from any agent." USB-C analogy.
- **A2A (Agent-to-Agent)**: open protocol for agent-to-agent delegation and collaboration across
  vendor/org boundaries. Enables specialist agent teams without custom glue.
- **From builder to orchestrator**: adopting open protocols frees the developer from glue code and
  raises the leverage point to goals and quality gates.
- **Promise**: MCP + A2A → "a virtual data and execution team in a single afternoon."
- **Security risks**: MCP servers run with granted permissions; prompt injection via tool responses;
  zero-trust mindset required, especially in enterprise environments.

Note: a separate November 2025 version exists at `/whitepaper-agent-tools-and-interoperability-with-mcp`
(authors: Mike Styer, Kanchana Patlolla, Madhurranjan Mohaan, Santiago Díaz, Anant Nawalgaria) — deeper
dive on MCP security/enterprise readiness. Not the same paper as the June 2026 version digested here.

---

## Paper 4 — "Agent Skills" (Day 3 Whitepaper, June 2026 run)
**Authors:** Debanshu Das, Gabriela Hernandez Larios, Lavi Nigam, Smitha Kolan, Tanvi Singhal · Google · June 2026
**URL:** https://www.kaggle.com/whitepaper-agent-skills · DIGESTED → wp-4.html
**Accent:** #7c3aed (violet)

Core arc & key points:
- **Structure**: SKILL.md + scripts/ + references/ + assets/ directories. SKILL.md is the entry point.
- **Four friction points solved**:
  1. Context rot — too many instructions degrade LLM performance; skills load on demand.
  2. Procedural memory gap — LLMs had episodic and semantic memory but not procedural; Skills are
     "the first credible procedural memory primitive for LLM Agents."
  3. Multi-agent overload — complex multi-agent systems are hard to maintain; one generalist agent
     with skills can flex into many specialist roles.
  4. Portability — a folder + markdown file works with any agent that has filesystem access.
- **Progressive disclosure**: two-phase loading. Phase 1 (startup): compact metadata only, minimal
  token cost. Phase 2 (on demand): full SKILL.md + deep references when task matches trigger.
- **Two personas**: Builders (using skills) and Developers (creating, versioning, managing them).
  Developer topics include: evaluation, production readiness, meta-skills, composition.
- Cross-platform portability: works with Claude Code, Codex, Gemini CLI, any AGENTS.md-compatible agent.

Pull quotes: "The first credible procedural memory primitive for LLM Agents."
"A folder with a markdown file is a remarkably lightweight primitive."

---

## ⚠️ Remaining papers (Days 4–5)
- **Day 4** — *Agent Quality & Security* (evals, guardrails, new threat vectors from agentic AI)
- **Day 5** — *Prototype to Production / Spec-Driven Production-Grade Development*
  (cloud deploy, observability, enterprise-ready agent fleets)
URL pattern: https://www.kaggle.com/whitepaper-[slug] — add when source links confirmed.
