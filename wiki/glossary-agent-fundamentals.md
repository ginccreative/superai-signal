# Glossary — Agent Fundamentals

**Source:** Google × Kaggle Vibe Coding Intensive, June 2026 — All 5 Days  
**Category:** Core concepts in agentic AI and the new software development lifecycle  
**Tags:** agentic engineering, vibe coding, context, memory, harness, tokens, SDLC

---

## A

**Agent**  
An AI system that perceives inputs, reasons about them, and takes actions in the world using tools. In the context of coding, an agent can read files, run commands, call APIs, and produce code autonomously. Formally: Agent = Model + Harness.

**Agent Harness**  
The complete infrastructure surrounding the language model: prompts, tools, sandboxes, orchestration, hooks, observability, and evaluation suites. The harness determines ~90% of what users experience. A better harness can move an agent from outside the Top 30 to the Top 5 on benchmarks without changing the model.

**Agentic Engineering**  
The disciplined practice of building AI-powered software systems with structured specifications, test suites, evaluation pipelines, and human oversight. The opposite end of the spectrum from vibe coding. Agentic engineers design the system that produces software, not the software itself.

**Ambient Agency**  
The condition in which an agent has persistent, broad access to systems (email, calendar, files, browser, code execution) and can act autonomously without being explicitly called for each action. Creates a threat surface not present in traditional software.

**Autocomplete Era**  
The first wave of AI coding assistance (~2021), where models suggested completions inline as developers typed. Preceded the Chat Era, Coding Agent Era, and Autonomous Era.

**Autonomous Era**  
The current wave (~2025–26) in which agents operate across full repositories with minimal per-step human involvement, handling multi-hour tasks end to end. Preceded by Autocomplete, Chat, and Coding Agent eras.

---

## C

**CapEx (Capital Expenditure) — in agent context**  
The upfront investment required to establish good engineering practices: writing specs, building test suites, designing context and harness infrastructure. Higher in agentic engineering than in vibe coding, but dramatically lowers ongoing OpEx.

**Chat Era**  
The second wave of AI coding assistance (~2023), where developers interacted with AI through conversational interfaces (ChatGPT, Claude, Gemini) to generate or explain code. Followed Autocomplete, preceded Coding Agent Era.

**Coding Agent Era**  
The third wave (~2024–25), where AI moves beyond single-file suggestions to operate across full repositories, run tests, call tools, and make multi-step decisions with partial autonomy.

**Conductor Mode**  
A developer operating mode in which the human directs an AI pair-programmer in real time, keystroke by keystroke, within the IDE (e.g. Copilot, Gemini Code Assist, Cursor, Windsurf). Contrasts with Orchestrator Mode.

**Context**  
Everything the agent knows at the moment of reasoning: instructions, knowledge, memory, examples, tools, and guardrails. The quality of context determines the quality of output more than the choice of model.

**Context Engineering**  
The discipline of designing and managing the information an AI agent receives. The primary skill of effective agentic developers in 2026. Encompasses what to include, when to include it, and how to structure it.

**Context Rot**  
Degradation in agent output quality that occurs when too many irrelevant instructions are loaded into the context window. Competing information causes the model to lose focus on the actual task.

**Context Window**  
The finite amount of text (measured in tokens) a language model can process at once. Everything outside the context window is invisible to the model during inference.

---

## D

**Dynamic Context**  
Information loaded into the agent's context on demand, only when the current task requires it. More token-efficient than static context. Agent Skills are the canonical form of dynamic context.

---

## E

**Episodic Memory**  
A model's ability to retain and reference previous interactions within a session (conversation history). One of the three memory types LLMs support natively; the other two are semantic memory and (via Skills) procedural memory.

---

## F

**Few-Shot Demonstrations**  
Examples of desired input-output pairs included in the agent's context to guide its behaviour. One of the six context types; shows the model what "good" looks like rather than explaining it abstractly.

---

## G

**Guardrails**  
Boundaries placed on what an agent is permitted to say or do. One of the six context types. May be enforced via instructions in the prompt, output filters, policy servers, or human-in-the-loop approval steps.

---

## H

**Human-in-the-Loop (HITL)**  
An oversight pattern in which a human must explicitly approve an agent's action before it proceeds. Essential for irreversible or high-stakes actions. The level of HITL required scales with action risk: read-only tasks require none; bulk destructive operations always require it.

---

## I

**Instructions**  
One of the six context types. Explicit directives to the agent about what it should or should not do. Typically stored in AGENTS.md, CLAUDE.md, or GEMINI.md configuration files.

---

## K

**Knowledge**  
One of the six context types. Domain-specific information and documentation the agent needs to reason correctly about the task at hand (e.g. API reference docs, business rules, project architecture).

---

## M

**Memory — in agent context**  
One of the six context types. Persistent state that survives across sessions, allowing the agent to recall user preferences, past decisions, and learned patterns. Distinct from episodic memory (in-session) and semantic memory (model's training knowledge).

**Model**  
The underlying language model performing inference. In the Agent = Model + Harness formula, the model is roughly 10% of what users experience. The harness determines the rest.

**Model Routing**  
The practice of dynamically directing tasks to different models based on complexity and cost. Hard tasks go to large capable models; routine tasks go to cheaper smaller models. A financial lever for reducing token spend without sacrificing quality.

---

## O

**OpEx (Operating Expenditure) — in agent context**  
The ongoing cost of maintaining AI-generated code: token spend per feature, security remediation of inconsistent code, and maintenance burden of a codebase without clear structure. Vibe coding has low CapEx but high OpEx.

**Orchestrator Mode**  
A developer operating mode in which the human defines goals at a high level and delegates execution to asynchronous background agents (e.g. Jules, Claude Code, Cursor background agents), reviewing results rather than directing each step.

---

## P

**Procedural Memory**  
The ability to know how to do something step by step. LLMs have semantic memory (facts) and episodic memory (conversation history) natively, but lack procedural memory — Agent Skills are the mechanism that supplies it explicitly.

---

## S

**Semantic Memory**  
A model's knowledge of facts, concepts, and general world knowledge encoded during training. One of the three memory types; differs from episodic (session history) and procedural (how-to).

**Static Context**  
Information always loaded into the agent's context at session start (e.g. AGENTS.md, CLAUDE.md). Reliable and always available, but expensive in tokens and may pollute the context with irrelevant information for unrelated tasks.

---

## T

**Token**  
The basic unit of text processed by a language model (roughly 3–4 characters in English). Context windows, costs, and rate limits are all measured in tokens.

**Tools — in agent context**  
One of the six context types. Functions and APIs the agent can call to take actions in the world: reading files, running code, searching the web, querying databases, sending messages. Tools transform agents from passive text generators into active systems.

---

## V

**Vibe Coding**  
Term coined by Andrej Karpathy (February 2025) for the practice of fully delegating code writing to AI and accepting output without systematic verification. Effective for rapid prototyping; insufficient for production systems. The opposite of agentic engineering.
