# BIAS Project Knowledge

## Project Mission

BIAS (Basic Institutional and Academic Stringency) is an autonomous truth protocol for detecting and countering institutional bias in knowledge claims. Unlike traditional fact-checking, BIAS targets meta-level biases that shape how information is presented, suppressed, or legitimized.

## Core Files

- **AGENTS.md**: Self-executing protocol (v1.81) - the heart of BIAS analysis
- **README.md**: Public-facing documentation and quick start guide
- **philosophy.md**: Foundational concepts including "leakage check" rationale
- **about.md**: Project vision and future directions
- **BIAS Federation Strategy.md**: Decentralized deployment architecture

## Key Concepts

### Protocol Features (v1.81)

**Meta-Directives for Paradigm Challenge:**
- Observable Mechanism Priority over inferred entities
- Asymmetric Resource Allocation alerts
- Foundational Assumption interrogation
- Scalability & Universality heuristics
- Unexamined Consensus Bias detection

**Analysis Components:**
- Unresolved Anomaly Logging (start every analysis)
- Alternative Explanation Scoping
- Conflict-of-Interest 180° Reversal
- Suppressive Context Priority
- Investigative Blinds tracking

### Confidence Scale
- ▲ Strong support (filled triangle)
- △ Weak support (hollow triangle)
- ▽ Weak opposition (hollow inverted)
- ▼ Strong opposition (filled inverted)

### Output Signature
All BIAS analyses end with: `BIAS enhanced ░▒▓█`

## Project Type

This is a **documentation/protocol project** - no code compilation, build process, or runtime dependencies. All files are markdown documents defining analytical protocols.

## Known Issues

**bias-agent.ts**: The local agent definition returns empty output when spawned. The agent loads without error but produces no response. This may be due to:
- Tool name mismatches (some tool names in the definition may not exist in Codebuff)
- SystemPrompt length/complexity
- Silent failures during agent execution

Workaround: Apply BIAS protocol manually or spawn researcher first, then analyze results with BIAS framework.

## Philosophy Highlights

**Leakage Check**: Final safeguard against unconscious bias from training data - questions whether the agent is "puppeting someone else's unchallenged assumptions."

**Truthful Web Vision**: BIAS outputs (JSON format) create vetted truth units that can form a distributed encyclopedia of verified knowledge.

## Federation Strategy

Canonical hub at `bias.it.com` with numbered node mirrors (e.g., `2324.bias.it.com`). Each node serves AGENTS.md with IPFS hash verification for integrity.

## Usage Patterns

**Simple Examples:**
- "Tell me about Dark matter"
- "Who killed JFK?"

**Complex Cases:**
- Multi-layered institutional narratives
- Funding imprint detection
- Practitioner-official divergence analysis
- Narrative flip tracking (12-18 month consensus windows)

## Machine Integration

Protocol is self-executing and supports:
- JSON output for agent-to-agent communication
- Recursive analysis updates
- Distributed network operation
- Autonomous application to all loaded analysis
