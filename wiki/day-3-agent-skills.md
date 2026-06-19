# Day 3 — Agent Skills

**Series:** Google × Kaggle Vibe Coding Intensive, June 2026  
**Authors:** Debanshu Das, Gabriela Hernandez Larios, Lavi Nigam, Smitha Kolan, Tanvi Singhal  
**Source:** https://www.kaggle.com/whitepaper-agent-skills  
**Tags:** agent skills, SKILL.md, procedural memory, context engineering, progressive disclosure

---

## Summary

Every time you dump every instruction into a single system prompt, you pay twice: once in tokens, once in quality. Agent Skills fix that with a folder and a markdown file. In doing so, they solve the one type of memory LLMs have always lacked — **procedural memory**: the ability to know *how to do something step by step*.

> "Agent Skills can be seen as the first credible procedural memory primitive for LLMs."

---

## The Four Problems Agent Skills Solve

### 1. Context Rot
Loading every instruction into every session degrades quality as the context window fills. Irrelevant instructions compete with task-relevant ones. Skills solve this by loading only what the current task requires.

### 2. The Procedural Memory Gap
LLMs have semantic memory (facts, concepts) and episodic memory (conversation history), but no built-in procedural memory (step-by-step know-how). A Skill is procedural memory made explicit and portable.

### 3. Multi-Agent Overload
In multi-agent systems, each agent receiving a full system prompt wastes tokens and reduces focus. Skills allow each agent to load only the procedures relevant to its assigned role.

### 4. Portability
Without skills, team-specific knowledge is buried in system prompts and lost when context changes. Skills are version-controlled, shareable files — the same skill can be loaded by any agent that needs it.

---

## Anatomy of a Skill

A skill lives in a folder with four components:

```
my-skill/
├── SKILL.md         ★ required — the skill definition
├── scripts/         optional — executable scripts the skill references
├── references/      optional — documentation, examples, specs
└── assets/          optional — images, templates, other files
```

### SKILL.md structure

```markdown
---
name: "deploy-to-cloud-run"
description: "Deploy a containerised service to Google Cloud Run"
version: "1.0.0"
tags: ["deployment", "cloud", "production"]
---

# Deploy to Cloud Run

## When to use this skill
When you need to deploy a containerised application to Cloud Run...

## Steps
1. Build the container image
2. Push to Artifact Registry
3. Deploy to Cloud Run
...

## Validation
After deployment, verify by...
```

The **description** field is critical — it's the one-line summary loaded at agent startup for skill discovery. The full SKILL.md body loads only when the agent activates the skill.

---

## Progressive Disclosure: How Skills Load

Skills use a two-phase loading model that mirrors human expertise:

### Phase 1 — Startup (metadata only)
At session start, the agent loads only the `description` field from all available skills. This gives the agent a catalogue of what it can do without loading the full procedures.

### Phase 2 — On demand (full skill)
When a task matches a skill description, the agent loads the full `SKILL.md` body. This is **progressive disclosure**: breadth first, depth on demand.

```
Agent startup:
  skills catalogue loaded (descriptions only, ~50 tokens per skill)
  
Task arrives: "Deploy the service to production"
  → matches "deploy-to-cloud-run" description
  → full SKILL.md loaded (~2000 tokens)
  → scripts/ and references/ available
  → agent executes with full procedural context
```

**Result:** A lightweight generalist agent that flexes into a specialist on demand, without permanently inflating the context window.

---

## Builder vs Developer Skills

The whitepaper distinguishes two classes of skill consumer:

| Role | How they use skills | Example |
|---|---|---|
| **Builder** | Loads skills into their own agent to extend its capability | Adding a "code-review" skill to an existing coding agent |
| **Developer** | Authors skills for others to consume | Writing a "deploy-to-cloud-run" skill for the team's skill registry |

Skills are the interface between builders and developers — they encode the developer's domain expertise into a form the builder's agent can consume without understanding the underlying implementation.

---

## Skills vs Other Context Types

| Context type | When loaded | Persistence | Best for |
|---|---|---|---|
| AGENTS.md / CLAUDE.md | Always (static) | Session | Universal rules, project structure |
| Agent Skills | On demand (dynamic) | Task duration | Procedural know-how, domain expertise |
| Tool calls (MCP) | On demand | Single call | Real-time data, actions |
| Memory | Always or retrieved | Cross-session | User preferences, learned patterns |

---

## Skills in the Broader Architecture

Agent Skills are the third leg of the interoperability stack introduced across the series:
- **MCP** — how agents connect to tools
- **A2A** — how agents delegate to each other
- **Skills** — how agents acquire procedural knowledge

Together they complete the trio: an agent knows *where* to get data (MCP), *who* to ask for help (A2A), and *how to do things step by step* (Skills).

---

## Key Takeaways for LLM Agents

- Store domain-specific procedures in SKILL.md files, not in the system prompt.
- The `description` field drives skill discovery — make it one precise, searchable sentence.
- Load only the skills relevant to the current task; don't pre-load everything.
- Organise skills by task type, not by team or project — skills should be reusable across contexts.
- When writing a skill, include validation steps so the agent can verify its own output.
- Skills are version-controlled artifacts — treat them like code, not configuration.
- If an agent is failing at a repeated task, the fix is usually a better skill definition, not a better prompt.
