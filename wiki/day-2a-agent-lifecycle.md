# Day 2a — Managing the Agent Lifecycle (Codelab)

**Series:** Google × Kaggle Vibe Coding Intensive, June 2026  
**Authors:** Google Developers  
**Type:** Hands-on Codelab  
**Source:** https://codelabs.developers.google.com/agents-cli-adk-lifecycle  
**Tags:** ADK, Agents CLI, agent lifecycle, deployment, scaffolding, graph workflows

---

## Summary

This codelab is the hands-on companion to the series: how to scaffold, test, and deploy production agents from the terminal using Google's Agents CLI and ADK 2.0 — without learning a new SDK. One install adds seven skills to whichever coding agent you already use.

---

## Setup: One Install, Seven Skills

```bash
uvx google-agents-cli setup
```

This single command installs the CLI globally and deploys **seven domain-specific skills** to `~/.agents/skills/`. The skills attach to your existing coding agent (Claude Code, Codex, Gemini CLI, etc.) — no new framework to learn.

Authentication: either a Gemini API key from Google AI Studio, or Google Cloud credentials for Vertex AI deployment.

### The Seven Skills

The skills cover the complete ADK lifecycle:
1. **Scaffold** — Create agent project structure
2. **Build** — Implement agent logic
3. **Evaluate** — Run eval suites against agent behaviour
4. **Deploy** — Push to Agent Runtime
5. **Observe** — Monitor via Cloud Trace and BigQuery
6. **Debug** — Investigate failures in the agent trace
7. **Iterate** — Refine based on eval feedback

---

## ADK 2.0: Agents as Graphs

ADK 2.0 models an agent application as a **graph workflow**:

| Component | Role |
|---|---|
| `Workflow` + edges | Orchestrate the flow between nodes |
| `LlmAgent` nodes | Handle language-model tasks |
| Python `@node` decorators | Wrap custom logic as graph nodes |
| Conditional routing | Branch execution based on classification results |

The codelab builds a **customer-support agent** as the concrete example: a router that classifies an incoming request and sends it down the right processing path.

```python
# Pattern: conditional routing in ADK 2.0
@node
def classify_intent(request: str) -> str:
    # LlmAgent classifies: "billing" | "technical" | "general"
    ...

workflow.add_edge(classify_intent, billing_handler, condition="billing")
workflow.add_edge(classify_intent, tech_handler, condition="technical")
```

---

## The Live Local Playground

Development happens in an interactive playground:
- Chat interface to talk to your agent directly
- **Real-time tool execution inspection** — see every tool call as it happens
- **Automatic code reloading** — edit files, playground updates immediately
- Automated code-quality checks run alongside

Tech stack: Python 3.11+, Node 18+, `uv` package manager, Gemini models, Antigravity IDE.

> "Describe what you want; the coding agent uses the skills to scaffold, code, evaluate, and deploy — no new framework to learn."

---

## From Laptop to Production

The same workflow that produces a prototype produces the production agent. After the local playground:

1. **Structured evaluation** — run the eval suite against known test cases
2. **Cloud deployment** — deploy to Agent Runtime on Google Cloud
3. **Production observability** — Cloud Trace for request tracing, BigQuery for analytics and log retention

This is the substrate the Day 1 paper insists you build **before** scale, not after.

---

## Key Takeaways for LLM Agents

- `uvx google-agents-cli setup` is the entry point — seven skills, one command.
- Skills go to `~/.agents/skills/` and work with Claude Code, Codex, and others without reconfiguration.
- ADK 2.0 graph model: Workflow + LlmAgent nodes + @node decorators + conditional routing.
- The local playground gives real-time tool inspection — use it to debug agent reasoning.
- The path from prototype to production is a promotion, not a rewrite: evaluate → deploy to Agent Runtime → observe.
- Build observability (traces, logs) from day one. You cannot debug what you cannot see.
