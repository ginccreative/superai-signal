# Day 5 — Spec-Driven Production-Grade Development

**Series:** Google × Kaggle Vibe Coding Intensive, June 2026  
**Author:** Lee Boonstra (Google Cloud · Office of the CTO, Applied Innovation Factory)  
**Source:** https://www.kaggle.com/whitepaper-spec-driven-production-grade-development-in-the-age-of-vibe-coding  
**Tags:** spec-driven development, SDD, Gherkin, production, zero-trust, policy server, deployment, specifications

---

## Summary

The daily routine of a Google Software Engineer has undergone a complete 180-degree flip. AI coding agents write a thousand lines of well-documented code rapidly. But velocity has hit overdrive while the **Illusion of Speed** has arrived: AI writes code fast, and it writes bugs fast. The capstone paper of the series explains how to bridge the gap between vibe-coded prototypes and production-grade enterprise software using **Spec-Driven Development (SDD)**.

> "Vibe Coding is not Vibe In Production."

---

## The Illusion of Speed

When implementation is no longer the bottleneck, **verification** becomes the bottleneck. Signs you are experiencing the Illusion of Speed:
- The codebase grows rapidly but confidence in it decreases
- You spend more time reviewing AI output than you saved generating it
- Bugs appear in code you didn't write and don't fully understand
- The demo works; production fails

The escape: since AI can generate more comprehensive test coverage than any human in the same timeframe, use it to do exactly that. Test coverage becomes the programmatic, objective definition of "correct."

---

## Spec-Driven Development (SDD): Core Premise

> **Code is disposable. Specs are forever.**

In traditional development, code is the source of truth and documentation is an afterthought. SDD inverts this:

| Traditional | Spec-Driven |
|---|---|
| Code is the source of truth | Specification is the source of truth |
| Documentation follows code | Spec precedes code |
| Code is maintained | Spec is maintained; code is regenerated |
| Bugs fixed by editing code | Bugs fixed by correcting the spec |
| AI writes code from prompts | AI writes code from specs |

The specification is the **highest-leverage artifact a human produces** in the AI-coding era. If the spec is precisely written, the AI has narrow room to hallucinate or drift.

---

## The SDD Artifact Stack

A complete spec-driven project has these files as its constitution:

```
project/
├── constitution.md     Immutable project-wide principles (the laws every agent must follow)
├── spec.md             Feature contracts: system behaviour, user stories, edge cases
├── plan.md             Architecture blueprint — reviewed and approved before code generation
└── tasks.md            Granular, dependency-ordered work items traceable back to spec clauses
```

### constitution.md
Project-level invariants that travel with every prompt:
- Technology stack decisions
- Coding standards and patterns
- Security constraints
- Accessibility requirements
- Performance budgets

### spec.md
The "what", not the "how". Defines:
- User stories (as a... I want to... so that...)
- Functional requirements
- Edge cases
- Given/When/Then acceptance scenarios (Gherkin)
- Non-functional requirements (performance, security, accessibility)

### plan.md
Architecture reviewed before any code generation begins:
- Component design
- Data models
- API contracts
- Dependency mapping

### tasks.md
Granular implementation tasks with:
- Dependency ordering
- Traceability back to spec clauses
- Acceptance criteria per task

---

## Gherkin: Writing Specs Machines Can Execute

Gherkin is the **Given/When/Then** syntax from Behavior-Driven Development (BDD). It makes specifications precise enough for machines to execute and binary enough for automated verification.

### Why Gherkin works for AI agents
1. **Declarative precision** — describes the state the system must reach, not the steps to get there. Gives the agent room to choose the implementation.
2. **Explicit boundaries** — typed schemas and role constraints declared in the spec prevent the agent from accidentally skipping security checks.
3. **Upfront threat modelling** — security requirements declared as spec scenarios become test cases, not afterthoughts.
4. **Binary pass/fail** — each scenario compiles directly to a failing test. "Done" means "green tests", not "looks right to me."

### Example Gherkin spec scenario
```gherkin
Feature: Expense submission
  
  Scenario: Employee submits a valid expense
    Given an authenticated employee with role "standard"
    And an expense of £450 in category "travel"
    When the employee submits the expense
    Then the expense is created with status "pending_approval"
    And the employee's manager receives a notification
    And the expense is logged in the audit trail

  Scenario: Contractor attempts to access admin endpoint
    Given an authenticated user with role "contractor"
    When the user requests GET /admin/expenses
    Then the response is 403 Forbidden
    And the access attempt is logged
```

Each scenario compiles to a test. The AI agent's goal is not "understand what the user wants" — it is "make these specific scenarios green."

---

## Zero-Trust Development Pipelines

In the era of agents that never sleep, human code review becomes a bottleneck. The solution is a **hybrid Policy Server** — an automated code-review agent in the CI pipeline that enforces the spec before any human reviews a diff.

### What the Policy Server checks
- All Gherkin scenarios pass as tests
- No OWASP violations introduced
- Security constraints from constitution.md are respected
- Performance budgets not exceeded
- Accessibility requirements met
- Code does not introduce undeclared dependencies

### Zero-trust pipeline principle
No code is assumed correct because an AI wrote it. Every commit goes through:
```
Code generated by AI agent
  → Policy Server reviews against spec
  → Automated test suite runs (including Gherkin scenarios)
  → Eval suite runs against agent behaviour
  → Human reviews diff (policy-approved only)
  → Merge to main
```

The policy server lets the coding agent move fast while maintaining enforceable guardrails. **Velocity and safety stop being in tension.**

---

## Eval-Gated Deployment

### The three stages

**Stage 1: Sandbox (CI — pre-merge)**
- Linting, unit tests, type checks
- Lightweight agent eval suite
- Policy server review
- Goal: catch obvious issues before they touch main
- Fast: minutes

**Stage 2: Canary (CD — staging)**
- Deploy to production-like environment
- Integration tests against real services (not mocks)
- Load tests
- Internal dogfooding
- Heavy agent eval suite
- Goal: validate the system, not just the code
- Slower: hours

**Stage 3: Production (human-gated promotion)**
- Promote the exact same artifacts from staging (no rebuild)
- Human approval step
- Staged rollout (e.g. 1% → 10% → 100% traffic)
- OpenTelemetry traces from day one
- Goal: eliminate "works in staging, breaks in prod" drift

### Observability requirements for production agents
- **Traces** (OpenTelemetry) — resolve ground-truth disputes, debug individual component latencies
- **Logs** — structured, queryable, retained in BigQuery
- **Metrics** — tool success rate, task success rate, latency p50/p95/p99, error rate
- **Eval scores** — continuous re-evaluation against the eval suite; alert on drift

---

## The Complete Series Picture

This paper is the capstone of the five-day series. Each day added a layer:

| Day | Paper | What it adds |
|---|---|---|
| 1 | The New SDLC | Intent is the new interface; Agent = Model + Harness |
| 2a | Agent Lifecycle | Scaffold → deploy → observe with ADK + Agents CLI |
| 2b | Agent Tools | MCP connects agents to tools; A2A lets agents delegate |
| 3 | Agent Skills | SKILL.md: procedural memory, progressive disclosure |
| 4 | Security & Eval | Ambient agency, prompt injection, trust as continuous process |
| 5 | Spec-Driven Prod | Specs as source of truth; zero-trust pipeline; eval-gated deployment |

Together they describe the complete production-grade agent engineering stack:
```
SPEC.md (source of truth)
  → AI generates code + tests
  → Policy Server enforces spec (zero-trust)
  → Eval suite gates promotion (sandbox → canary → prod)
  → OpenTelemetry observability in production
  → Continuous re-evaluation; trust maintained through monitoring
```

---

## Key Takeaways for LLM Agents

- Start every project with a `constitution.md` — immutable principles the AI must follow on every task.
- Write specs (with Gherkin scenarios) before generating code. The spec is the highest-leverage artifact.
- Treat code as disposable — if the spec is good, any correct implementation is acceptable.
- Use Gherkin Given/When/Then scenarios to encode acceptance criteria, security constraints, and edge cases as tests.
- Implement a Policy Server in CI to enforce spec compliance automatically — remove it as a human bottleneck.
- Never skip the staging (canary) phase — it validates the system against real services, which mocks cannot.
- Build OpenTelemetry traces from day one. You cannot debug production agents you cannot trace.
- Promote artifacts, not builds. The same artifact that passes staging goes to production.
- Continuously re-evaluate agent behaviour against the eval suite — drift in production metrics is an early warning.
- The developer's role in 2026 is intent, governance, and quality control — not implementation.
