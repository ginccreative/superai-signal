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

## ⚠️ Open item
Links #2 and #3 supplied were identical (`agents-cli-adk-lifecycle`). Need correct URLs for the
remaining whitepapers (assignment 3 onward) to digest & add them.
