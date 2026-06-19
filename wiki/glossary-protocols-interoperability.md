# Glossary — Protocols & Interoperability

**Source:** Google × Kaggle Vibe Coding Intensive, June 2026 — Days 2a, 2b, 3  
**Category:** Open standards, communication protocols, and tool connectivity for agent systems  
**Tags:** MCP, A2A, ADK, Agents CLI, skills, interoperability, protocols, graph workflows

---

## A

**A2A (Agent-to-Agent Protocol)**  
An open protocol for agent delegation: one agent handing a subtask to a specialist agent. A2A standardises how agents discover each other's capabilities, the message format for task delegation, authentication between agents, and synchronous/asynchronous delegation. Eliminates the need for custom integration code between every pair of agents.

**ADK (Agent Development Kit)**  
Google's open-source framework for building production-grade agent applications. ADK 2.0 models agents as graph workflows with LlmAgent nodes, Python @node decorators, and conditional routing. The Agents CLI wraps ADK to provide a skill-based interface accessible from any coding agent.

**Agent Runtime**  
Google Cloud's managed hosting environment for ADK-based agents. Agents deployed to Agent Runtime receive production traffic routing, automatic scaling, health checking, and integration with Cloud Trace and BigQuery for observability.

**Agents CLI**  
Google's command-line tool (`uvx google-agents-cli setup`) that installs seven domain-specific agent skills covering the complete ADK lifecycle: scaffold, build, evaluate, deploy, observe, debug, iterate. Works with Claude Code, Codex, Gemini CLI, and other coding agents without reconfiguration.

**@node decorator**  
A Python decorator in ADK 2.0 that wraps an arbitrary function as a graph node, making it a first-class participant in the agent workflow with defined input/output types and routing behaviour.

---

## B

**BigQuery — in agent observability**  
Google Cloud's data warehouse used for long-term retention and analytics of agent logs. Agents deployed via ADK stream structured logs to BigQuery, enabling SQL-based analysis of agent behaviour, error patterns, and performance over time.

---

## C

**Cloud Trace**  
Google Cloud's distributed tracing service. ADK-deployed agents emit OpenTelemetry-compatible traces to Cloud Trace, allowing developers to see the full chain of tool calls, LLM invocations, and latency breakdowns for any agent request.

**Conditional Routing**  
A control-flow mechanism in ADK 2.0 where a node's output value determines which downstream node executes next. Enables agents to branch execution paths based on classification results, user intent, or intermediate state.

---

## G

**Graph Workflow**  
ADK 2.0's model for an agent application: a directed graph where nodes are computation steps (LlmAgent or @node-decorated functions) and edges encode routing logic. This model makes agent architecture explicit, inspectable, and testable rather than implicit in prompt chains.

---

## L

**LlmAgent**  
An ADK 2.0 graph node that delegates to a language model. Accepts a prompt template, optional tools, and output schema; returns a structured response. The primary building block for language-model reasoning steps within an ADK workflow.

---

## M

**MCP (Model Context Protocol)**  
An open protocol for connecting agents to tools. MCP provides a standardised interface for agents to discover, connect to, and call external tools (APIs, databases, code execution environments, file systems, web search, etc.). Often called "the USB-C of AI tool connectivity." Agents are MCP clients; tools expose themselves as MCP servers.

**MCP Client**  
An agent (or agent component) that connects to MCP servers to discover and invoke tools. Any agent framework that implements the MCP client spec can use any MCP server without custom integration code.

**MCP Server**  
A process that exposes tools via the MCP protocol. The server publishes a tool catalogue (name, description, input schema, output schema), handles authentication, and executes tool calls on behalf of connected agents. MCP servers exist for file systems, GitHub, Slack, web search, databases, and hundreds of other services.

**MCP Tool Catalogue**  
The list of tools an MCP server exposes, each described by name, natural-language description, input schema, and output schema. Agents use the catalogue to decide which tool to call and with what arguments.

---

## O

**Orchestrator Agent**  
An agent whose primary function is decomposing complex tasks and delegating subtasks to specialist agents via A2A. The orchestrator does not execute subtasks itself; it coordinates, aggregates results, and delivers the final response to the user.

---

## P

**Playground (ADK Live Local)**  
The ADK local development environment: a chat interface for talking to the agent directly, with real-time tool execution inspection (see every tool call as it happens), automatic code reloading, and automated code-quality checks. The primary development surface before promotion to Agent Runtime.

---

## S

**SKILL.md**  
The required file in every agent skill package. Contains YAML frontmatter (name, description, version, tags) and a markdown body with "when to use," step-by-step procedure, and validation instructions. The `description` field is loaded at agent startup for skill discovery; the body loads on demand when the skill is activated.

**Skill Registry**  
A shared repository of agent skills (SKILL.md packages) that can be loaded by any compatible agent. The Agents CLI installs Google's official skill registry to `~/.agents/skills/`. Teams can maintain private registries for domain-specific procedures.

**Specialist Agent**  
An agent focused on a specific domain or task type (e.g. research, code generation, deployment, review). Receives delegated subtasks from an orchestrator agent via A2A. May load specialist Skills to gain deep procedural knowledge in its domain.

**Standard-of-One**  
The anti-pattern in which every agent tool integration is bespoke: a custom wrapper maintained independently, not reusable by other agents or teams. The pre-MCP state of tool connectivity. Adopting MCP eliminates the standard-of-one problem.

---

## T

**Tool Definition**  
A declarative description of a callable function in the MCP protocol: name, natural-language description, input schema (JSON Schema), and output schema. Tool definitions allow agents to discover and invoke tools without prior knowledge of their implementation.

---

## U

**uv**  
A fast Python package manager used as the recommended installer for ADK-based projects. `uvx` (the uv executor) allows running tools without permanent installation, enabling `uvx google-agents-cli setup` as a zero-friction entry point.
