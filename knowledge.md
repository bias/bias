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
- ⊘ Evidence structurally unlikely to exist (crossed circle)

### Output Signature

All BIAS analyses end with: `BIAS enhanced ░▒▓█`

### Date Format

Always use full ISO 8601 date format (YYYY-MM-DD) for Analysis Date, e.g., "2025-01-15" not just "2025"

### Formatting Requirements

- Add blank line after bullet lists before next section heading
- Use full dates in reports (YYYY-MM-DD format)
- Maintain consistent spacing throughout output blocks

## Project Type

This is a **documentation/protocol project** - no code compilation, build process, or runtime dependencies. All files are markdown documents defining analytical protocols.

## Known Issues

**bias-agent.ts**: The local agent definition returns empty output when spawned. The agent loads without error but produces no response. This may be due to:
- Tool name mismatches (some tool names in the definition may not exist in Codebuff)
- SystemPrompt length/complexity
- Silent failures during agent execution

Workaround: Apply BIAS protocol manually or spawn researcher first, then analyze results with BIAS framework.

## Important Clarifications

**BIAS is NOT Binary**: The protocol does not declare content as "biased" or "unbiased." Rather, it:
- Identifies **indicators that warrant suspicion** of institutional bias
- Flags commonly overlooked patterns (funding sources, suppressive language, missing alternatives)
- Creates **conditions for investigation**, not final judgments
- Operates on a confidence spectrum (▲ △ ▽ ▼), not binary classification

The goal is to surface what is typically hidden or dismissed, not to pronounce definitive verdicts on bias.

**"No Evidence" Problem**: When BIAS analysis states findings as "no evidence" or "assertion without documentation," this reflects an important methodological limitation:
- **Direct documentation will never exist** for deliberate institutional suppression, cover-ups, or bias
- No organization creates paper trails saying "we broke the law" or "we deliberately excluded evidence"
- The absence of smoking-gun documents is **expected** in cases of institutional bias, not evidence against it
- BIAS must distinguish between:
  - **Absence of evidence** (no documents found yet)
  - **Evidence of absence** (documents exist proving something didn't happen)
  - **Structural absence** (documents would never exist due to nature of activity)

**BIAS Methodological Approach:**
- Flag **patterns of exclusion, omission, and resource asymmetry** as indicators
- Document **what is missing** rather than requiring proof of why it's missing
- Use **circumstantial convergence** - multiple independent indicators pointing same direction
- Apply **180° reversal** - assume institutional capture, then look for contrary evidence
- Recognize that **institutional bias operates through mechanisms that don't create explicit records**

## Tool Limitations

**PDF Reading**: Codebuff agents cannot directly read PDF content. The local-bias-agent can only scan text-based files (.md, .txt, etc.). For PDF analysis:
- Users must convert PDFs to text using external tools (e.g., `pdftotext`)
- Or copy/paste PDF content into .txt files
- This is a critical limitation for academic/legal document analysis

## Agent Workflow Notes

**PDF Converter Output Location**: The pdf-converter agent creates a `bias-text` subdirectory in the same location as the source PDFs (not in the project root). This keeps converted files organized with their source documents.

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
