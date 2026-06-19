# Day 1 — The New SDLC With Vibe Coding

**Series:** Google × Kaggle Vibe Coding Intensive, June 2026  
**Authors:** Addy Osmani, Shubham Saboo, Sokratis Kartakis  
**Source:** https://www.kaggle.com/whitepaper-the-new-sdlc-with-vibe-coding  
**Tags:** SDLC, agentic engineering, context engineering, vibe coding, software development

---

## Summary

The developer's job has fundamentally shifted. As of 2026, 85% of professional developers use AI coding agents, 51% daily, and an estimated 41% of all new code is AI-generated. The whitepaper argues this is the biggest shift since high-level languages — and that the primary skill is no longer writing code but designing the system that produces it.

---

## The Spectrum: Vibe Coding → Agentic Engineering

"Vibe coding" — Andrej Karpathy's February 2025 coinage for fully giving in to the AI and forgetting that code exists — is one end of a spectrum, not a fixed practice. The real differentiator is how much structure, verification, and human judgment surround the AI's output.

| End of spectrum | Characteristics |
|---|---|
| Vibe coding | Ad-hoc prompts, no tests, AI output accepted without verification |
| Agentic engineering | Structured specs, test suites, human-designed constraints, AI implements under oversight |

> "The single biggest differentiator between the two ends is how outputs get verified. Without tests and evals, the practice is always vibe coding."

---

## Context Engineering: The Real Skill

Quality depends less on clever prompts and more on the quality of **context**. Six types of context:

1. **Instructions** — What the agent should do (AGENTS.md, CLAUDE.md, GEMINI.md)
2. **Knowledge** — Domain information and documentation
3. **Memory** — Persistent state across sessions
4. **Examples** — Few-shot demonstrations of desired output
5. **Tools** — Functions and APIs the agent can call
6. **Guardrails** — Boundaries on acceptable behaviour

**Static context** is always loaded (reliable but token-expensive). **Dynamic context** is loaded on demand (efficient). The most powerful pattern is **Agent Skills** — portable packages of procedural knowledge that turn a lightweight generalist into a specialist on demand.

---

## The Factory Model

> **Agent = Model + Harness**

The model is roughly 10% of what you experience. The other 90% is the harness: prompts, tools, sandboxes, orchestration, hooks, observability. Evidence: one team moved a coding agent from outside the Top 30 to the Top 5 on Terminal Bench 2.0 by changing only the harness — no model change.

Lesson: when an agent fails, the instinct is to blame the model. Most agent failures, examined honestly, are **configuration failures**.

The developer's role:
- **Conductor mode** — real-time in the IDE, directing AI pair-programmer keystroke by keystroke (Copilot, Gemini Code Assist, Cursor, Windsurf)
- **Orchestrator mode** — higher level: defining goals, delegating to async background agents, reviewing results (Jules, Claude Code, Cursor background agents)

The orchestrator skill set is **specification, decomposition, evaluation, and system design** — not syntax fluency.

---

## The 80% Problem

Agents rapidly produce ~80% of a feature. The last 20% — edge cases, error handling, integration, subtle correctness — requires deep context models often lack. A METR study found experienced developers took **19% longer** on some tasks with AI assistance due to time spent verifying and correcting output.

Effective posture: use AI for what it's good at; reserve human attention for what it struggles with.

---

## Economics: CapEx vs OpEx

| Approach | CapEx | OpEx |
|---|---|---|
| Vibe coding | Low (just prompting) | High (token burn, maintenance tax on inconsistent code, security remediation) |
| Agentic engineering | Higher (specs, test suites, context design) | Low (lower marginal cost per feature) |

**Model routing** — using large models for hard tasks and cheap models for routine ones — drives token cost down without sacrificing quality. Context engineering becomes a **financial lever**.

---

## The Development Progression

```
Autocomplete (~2021)
   → Chat (~2023)
   → Coding agents (~2024–25)
   → Autonomous (~2025–26)
```

Each generation preserved what came before while raising the ceiling on what one engineer could do. The axis moves from **syntax** (more human effort) to **intent** (more machine autonomy).

---

## Key Takeaways for LLM Agents

- Always output verified code. Without tests and evals, any AI coding practice is vibe coding.
- AGENTS.md / CLAUDE.md / GEMINI.md files are **static context** — reliable but expensive. Load once.
- Agent Skills are **dynamic context** — load on demand for specialist tasks.
- When asked to improve an agent, look at the harness before blaming the model.
- The developer's primary output is the system that produces software, not the software itself.
- Structure scales. Velocity without structure creates compounding OpEx.
