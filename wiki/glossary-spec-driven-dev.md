# Glossary — Spec-Driven Development & Production Pipelines

**Source:** Google × Kaggle Vibe Coding Intensive, June 2026 — Day 5 (Lee Boonstra, Google Cloud)  
**Category:** Specification artifacts, development methodologies, CI/CD pipelines, and observability for production agent systems  
**Tags:** SDD, Gherkin, BDD, constitution, spec, plan, tasks, policy server, canary, OpenTelemetry, eval-gated

---

## A

**Artifact Promotion**  
The deployment pattern in which the exact binary/container artifact that passed the canary stage is promoted to production — no rebuild, no recompilation. Eliminates "works in staging, breaks in prod" drift caused by environment differences during build.

---

## B

**BDD (Behavior-Driven Development)**  
A software development methodology that expresses requirements as concrete examples of system behaviour written in a shared human-and-machine-readable format (Gherkin). SDD builds on BDD: Gherkin scenarios serve as both the source of truth for agent code generation and the automated test suite that gates deployment.

---

## C

**Canary Stage**  
The second phase of eval-gated deployment (between sandbox and production). The agent is deployed to a production-like environment with real services (not mocks), subjected to integration tests, load tests, and internal dogfooding, and evaluated with a heavy eval suite. A failed canary does not promote to production.

**constitution.md**  
A project-level file containing immutable principles that all agents working on the project must follow on every task, regardless of what the task asks for. Contents: technology stack decisions, coding standards, security constraints, accessibility requirements, performance budgets. Travels with every prompt as static context.

---

## E

**Eval-Gated Deployment**  
A deployment model in which code cannot advance from one pipeline stage to the next unless it passes the evaluation suite for that stage. Replaces subjective human judgment as the gating mechanism. Three stages: sandbox (CI, pre-merge) → canary (CD, staging) → production (human-gated promotion).

---

## G

**Gherkin**  
A structured natural language syntax for expressing software behaviour as concrete scenarios. Uses the Given/When/Then format. Each Gherkin scenario compiles directly to an executable test case. Serves as the machine-executable specification format in SDD.

**Given/When/Then**  
The three-clause structure of a Gherkin scenario:  
- **Given**: the preconditions / initial state of the system  
- **When**: the action or event that occurs  
- **Then**: the expected outcome or observable result  
Scenarios may include additional **And** clauses to extend any of the three. Security requirements, edge cases, and happy paths are all expressed in the same format.

---

## H

**Hybrid Policy Server**  
A variant of the Policy Server in which rule-based checks (OWASP patterns, dependency lists, performance budgets) are combined with LLM-based code review. The LLM component can reason about subtle policy violations that deterministic rules cannot catch; the rule-based component provides guaranteed coverage of known violation patterns.

---

## I

**Illusion of Speed**  
The paradox of AI-assisted development in which a codebase grows rapidly but confidence in it decreases. Manifestations: spending more time reviewing AI output than was saved generating it; bugs appearing in code the developer didn't write; demos working while production fails. Resolved by Spec-Driven Development, which makes "done" mean "green tests" rather than "looks right."

---

## O

**OpenTelemetry**  
An open-source observability framework providing vendor-neutral APIs, SDKs, and agents for collecting distributed traces, metrics, and logs. In production agent systems, OpenTelemetry traces capture the full chain of LLM calls, tool invocations, and latency breakdowns, enabling root-cause analysis of agent failures.

---

## P

**plan.md**  
One of the four SDD artifact files. Contains the architecture blueprint: component design, data models, API contracts, and dependency mapping. Reviewed and approved by engineers before code generation begins. Prevents agents from generating implementations that are architecturally inconsistent with the broader system.

**Policy Server**  
An automated code-review agent running in the CI pipeline. Reviews every AI-generated diff before human review, enforcing that all Gherkin scenarios pass as tests, no OWASP violations are introduced, security constraints from constitution.md are respected, performance budgets are not exceeded, and no undeclared dependencies are added. The zero-trust enforcement layer between the AI coding agent and the main branch.

**Production Stage**  
The third phase of eval-gated deployment. The canary-approved artifact is promoted (not rebuilt) to production. Requires explicit human approval. Typically deployed in staged rollouts (1% → 10% → 100% of traffic). Requires OpenTelemetry traces from day one. Continuous eval monitoring alerts on drift from canary performance.

---

## S

**Sandbox Stage**  
The first phase of eval-gated deployment (CI, pre-merge). Runs linting, unit tests, type checks, a lightweight agent eval suite, and the Policy Server review. Goal: catch obvious issues before they touch the main branch. Fast (minutes). Distinct from sandboxing as a security isolation technique (see *Security & Evaluation* glossary).

**SDD (Spec-Driven Development)**  
A software development methodology in which the specification is the primary source of truth. Code is generated from the spec and is treated as disposable: if the spec is precise, any correct implementation is acceptable and can be regenerated at any time. The four SDD artifacts are constitution.md, spec.md, plan.md, and tasks.md.

**spec.md**  
One of the four SDD artifact files. Defines what the system must do (not how): user stories, functional requirements, edge cases, Gherkin acceptance scenarios, and non-functional requirements (performance, security, accessibility). The highest-leverage artifact a human produces in AI-assisted development.

**Staged Rollout**  
A production deployment pattern in which new code is exposed to an increasing fraction of real traffic (e.g. 1% → 10% → 100%) with monitoring at each step before full exposure. Limits blast radius if a production issue emerges after the canary stage.

---

## T

**tasks.md**  
One of the four SDD artifact files. Contains granular, dependency-ordered implementation tasks, each traceable back to a clause in spec.md and carrying its own acceptance criteria. Provides the AI coding agent with a structured work queue rather than an open-ended prompt.

---

## Z

**Zero-Trust Development Pipeline**  
A CI/CD architecture in which no code is assumed correct because an AI wrote it. Every commit passes through automated policy checks, test suites (including Gherkin scenarios), and eval suites before any human review. The Policy Server is the enforcement mechanism. Velocity and safety stop being in tension because the automation handles the safety checks continuously.
